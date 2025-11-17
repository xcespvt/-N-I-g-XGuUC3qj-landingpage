
"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What does 0% commission really mean?",
    answer:
      "It means you keep 100% of your revenue from every order placed through Crevings. We don't take any percentage cut from your sales. You only pay a fixed, flat monthly subscription fee, allowing you to predict your costs and maximize your profits.",
  },
  {
    question: "How does the flat monthly subscription work?",
    answer:
      "Our subscription is a predictable monthly fee of ₹399 + GST. This single charge gives you full access to our platform, including our dashboard, analytics, and all service modes (delivery, takeaway, dine-in). There are no other hidden platform charges from our side.",
  },
  {
    question: "Who handles the delivery logistics?",
    answer:
      "Crevings provides a reliable, hyperlocal logistics network. Our trained delivery partners handle the pickup and delivery, so you can focus on preparing great food. You just need to pack the order and hand it over.",
  },
  {
    question: "Can I offer services other than delivery?",
    answer:
      "Yes! Our platform is an all-in-one solution. You can enable and manage delivery, takeaway (customer pickup), and even accept table reservations for dine-in customers, all through a single Crevings partner dashboard.",
  },
  {
    question: "How quickly can I get my restaurant or home kitchen online?",
    answer:
      "The process is fast and simple. Once you sign up and submit the required documents (like FSSAI and GST), our team will verify your profile. You can typically get your menu listed and start receiving orders within 24-48 hours.",
  },
  {
    question: "What kind of data and analytics do I get?",
    answer:
      "Our AI-powered dashboard provides valuable insights into your sales, popular items, peak order times, and customer demographics. This data helps you make informed decisions to optimize your menu, pricing, and marketing strategies for better growth."
  },
  {
    question: "How do the marketing and advertising tools work?",
    answer:
      "Our Growth Plan offers advanced tools, including featured listings in the app and options for hyperlocal social media pushes. You can run targeted promotions and ads directly from your dashboard to increase visibility and attract more customers."
  },
  {
    question: "Can I manage multiple outlets with one account?",
    answer:
      "Absolutely. Our platform is designed to support businesses with multiple branches. You can manage menus, track sales, and oversee operations for all your outlets from a single, unified account, with specific add-on plans for additional branches."
  }
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
                    openItem === `item-${index}` ? "border-primary" : "border-border"
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
