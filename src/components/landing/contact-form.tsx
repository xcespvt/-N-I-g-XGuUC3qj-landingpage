
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
  language: z.string({ required_error: "Please select a language." }),
  reason: z.string({ required_error: "Please select a reason." }),
  message: z.string(),
  role: z.enum(["existing_partner", "new_partner", "delivery_partner", "new_delivery_partner", "customer_feedback"], {
    required_error: "You need to select an option.",
  }),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy.",
  }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
    })
    form.reset();
  }

  return (
    <Card className="border-none shadow-none">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="+1 (555) 000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Language</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a language..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason for contact</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                    <SelectItem value="support">Account Support</SelectItem>
                    <SelectItem value="payout">Payout Issue</SelectItem>
                    <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about your query..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <FormItem>
                    <FormControl>
                       <RadioGroupItem value="existing_partner" id="existing_partner" className="peer sr-only" />
                    </FormControl>
                    <Label htmlFor="existing_partner" className={cn(
                        "flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                        field.value === 'existing_partner' && "border-primary"
                    )}>
                        <span className="font-semibold">I'm a Food Partner</span>
                        <span className="text-sm text-muted-foreground mt-1">I have a query about my account.</span>
                    </Label>
                  </FormItem>
                  <FormItem>
                     <FormControl>
                       <RadioGroupItem value="new_partner" id="new_partner" className="peer sr-only" />
                    </FormControl>
                    <Label htmlFor="new_partner" className={cn(
                        "flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                        field.value === 'new_partner' && "border-primary"
                    )}>
                        <span className="font-semibold">I want to be a Food Partner</span>
                        <span className="text-sm text-muted-foreground mt-1">I'm interested in onboarding.</span>
                    </Label>
                  </FormItem>
                   <FormItem>
                     <FormControl>
                       <RadioGroupItem value="delivery_partner" id="delivery_partner" className="peer sr-only" />
                    </FormControl>
                    <Label htmlFor="delivery_partner" className={cn(
                        "flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                        field.value === 'delivery_partner' && "border-primary"
                    )}>
                        <span className="font-semibold">I'm a Delivery Partner</span>
                        <span className="text-sm text-muted-foreground mt-1">I have a query about my account.</span>
                    </Label>
                  </FormItem>
                  <FormItem>
                     <FormControl>
                       <RadioGroupItem value="new_delivery_partner" id="new_delivery_partner" className="peer sr-only" />
                    </FormControl>
                    <Label htmlFor="new_delivery_partner" className={cn(
                        "flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                        field.value === 'new_delivery_partner' && "border-primary"
                    )}>
                        <span className="font-semibold">I want to be a Delivery Partner</span>
                        <span className="text-sm text-muted-foreground mt-1">I'm interested in joining.</span>
                    </Label>
                  </FormItem>
                   <FormItem>
                     <FormControl>
                       <RadioGroupItem value="customer_feedback" id="customer_feedback" className="peer sr-only" />
                    </FormControl>
                    <Label htmlFor="customer_feedback" className={cn(
                        "flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
                        field.value === 'customer_feedback' && "border-primary"
                    )}>
                        <span className="font-semibold">I'm a Customer</span>
                        <span className="text-sm text-muted-foreground mt-1">I have feedback or a question.</span>
                    </Label>
                  </FormItem>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal text-muted-foreground">
                            You agree to our friendly{" "}
                            <Link href="/terms" className="underline text-primary hover:text-primary/80">
                                privacy policy
                            </Link>
                            .
                        </FormLabel>
                        <FormMessage />
                    </div>
                </FormItem>
            )}
          />
          <Button type="submit" className="w-full" size="lg">Get in touch</Button>
        </form>
      </Form>
    </Card>
  );
}
