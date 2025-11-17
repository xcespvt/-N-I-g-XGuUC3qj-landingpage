
'use client';

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  city: z.string({ required_error: "Please select a city." }),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number." }).max(10),
  email: z.string().email({ message: "Please enter a valid email." }),
  otp: z.string().optional(),
});

const cities = ["Delhi", "Gurgaon", "Noida", "Mumbai", "Bangalore", "Pune"];

export default function DeliveryPartnerSignupForm() {
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      otp: "",
    },
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'otp' && isResendDisabled) {
      timer = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, isResendDisabled]);


  function onDetailsSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate sending OTP
    setStep('otp');
    setResendTimer(30);
    setIsResendDisabled(true);
  }

  function onOtpSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setShowSuccessDialog(true);
  }

  const handleDialogClose = () => {
    setShowSuccessDialog(false);
    form.reset();
    setStep('details');
  }

  const handleResendOtp = () => {
    // Simulate resending OTP
    console.log("Resending OTP to", form.getValues("email"));
    setResendTimer(30);
    setIsResendDisabled(true);
  };
  
  const handleBack = () => {
    setStep('details');
  }

  return (
    <>
      <section className="py-12 -mt-24 relative z-10">
          <div className="container max-w-md">
              <Card>
                  <CardHeader className="text-center pb-4">
                      {step === 'details' ? (
                          <CardTitle className="text-2xl font-bold">Register as Crevings Partner</CardTitle>
                      ) : (
                          <>
                             <div className="flex items-center justify-center relative">
                                <Button variant="ghost" size="icon" className="absolute left-0" onClick={handleBack}>
                                    <ArrowLeft />
                                </Button>
                                <CardTitle className="text-2xl font-bold">OTP Verification</CardTitle>
                            </div>
                            <CardDescription>
                                Enter the OTP sent to {form.getValues("email")}
                            </CardDescription>
                          </>
                      )}
                  </CardHeader>
                  <CardContent>
                       <Form {...form}>
                          <form 
                            onSubmit={step === 'details' ? form.handleSubmit(onDetailsSubmit) : form.handleSubmit(onOtpSubmit)} 
                            className="space-y-6"
                          >
                              {step === 'details' && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormControl>
                                                <Input placeholder="Enter your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormControl>
                                                <Input type="email" placeholder="Enter your email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                <SelectValue placeholder="Select a city" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {cities.map(city => (
                                                    <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
                                                ))}
                                            </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormControl>
                                                <Input type="tel" placeholder="Enter Your Mobile Number" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full font-bold" size="lg">Send OTP</Button>
                                </>
                              )}

                              {step === 'otp' && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="otp"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormControl>
                                                <Input type="text" placeholder="Enter 6-digit OTP" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="text-center text-sm">
                                        {isResendDisabled ? (
                                            <p className="text-muted-foreground">Resend OTP in {resendTimer}s</p>
                                        ) : (
                                            <Button variant="link" type="button" onClick={handleResendOtp} className="p-0 h-auto">
                                                Resend OTP
                                            </Button>
                                        )}
                                    </div>
                                    <Button type="submit" className="w-full font-bold" size="lg">Verify & Submit</Button>
                                </>
                              )}
                          </form>
                      </Form>
                  </CardContent>
              </Card>
          </div>
      </section>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md text-center">
            <DialogHeader className="items-center">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/50 mb-4">
                    <CheckCircle2 className="h-12 w-12 text-green-500 dark:text-green-400" />
                </div>
                <DialogTitle className="text-2xl">Registration Complete!</DialogTitle>
                <DialogDescription>
                    Thank you for registering. Our team will get in touch with you within 24 hours.
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-center">
                <Button type="button" onClick={handleDialogClose}>
                    Done
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
    </>
  );
}
