
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What does 0% commission really mean?",
    answer:
      "It means you keep 100% of your revenue from every order. We don't take a cut from your sales. You only pay a fixed, flat monthly subscription fee.",
  },
  {
    question: "How does the flat monthly subscription work?",
    answer:
      `Our subscription is a predictable monthly fee of {<IndianRupee className="h-4 w-4 inline" />} 399 + GST. This single charge gives you full access to our platform and its benefits, regardless of how many orders you receive. There are no other hidden charges.`,
  },
  {
    question: "Who handles the delivery logistics?",
    answer:
      "Crevings provides a reliable, hyperlocal logistics network. You focus on the food, and we'll ensure it gets delivered to your customers quickly and efficiently.",
  },
  {
    question: "Can I offer services other than delivery?",
    answer:
      "Yes! Our platform is flexible. You can offer delivery, takeaway (customer pickup), and even accept table reservations for dine-in customers, all through the Crevings app.",
  },
  {
    question: "How quickly can I get my restaurant or home kitchen online?",
    answer:
      "The process is fast and simple. You can sign up, list your menu, and start receiving orders in just a few minutes. Our team is also available to help you get started.",
  },
];

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
            FAQ
          </h2>
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
            onValueChange={setOpenItem}
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className={cn(
                    "bg-secondary/30 p-4 rounded-lg border transition-all duration-300",
                    openItem === `item-${index}` ? "border-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)]" : "border-border"
                )}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  <span className="flex-1">{faq.question}</span>
                  <div className="p-2 bg-background/10 rounded-full">
                     <Plus className={cn("h-5 w-5 transition-transform duration-300", openItem === `item-${index}` ? "rotate-45" : "")} />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
