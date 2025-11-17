
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
    question: "Are there any hidden fees or subscription costs for customers?",
    answer:
      "No, Crevings is completely free for customers. We do not charge any subscription fees. The price you see on the menu is the price you pay for the food, plus a standard delivery fee.",
  },
  {
    question: "How is Crevings different from other food delivery apps?",
    answer:
      "Our biggest difference is our 0% commission model for restaurants. This means fairer prices for you and more support for local businesses. We also offer unique features like the 'Mom's Magic' section for authentic home-cooked meals.",
  },
  {
    question: "What exactly is the 'Mom's Magic' section?",
    answer:
      "'Mom's Magic' is our special section dedicated to authentic, homemade food prepared by talented home chefs in your neighborhood. It's the perfect choice for when you're craving a comforting, non-commercial meal made with love."
  },
  {
    question: "How do you ensure the quality and hygiene of the food?",
    answer:
      "We partner with trusted local restaurants and home chefs who are required to meet our strict quality and hygiene standards, including valid FSSAI registration. Our delivery partners are also trained to handle food with care to ensure it reaches you fresh and safe.",
  },
  {
    question: "Which areas do you deliver to?",
    answer:
      "We are currently launching in Gurgaon and will be rapidly expanding to other cities like Delhi, Mumbai, and Bangalore. You can enter your address in the app to see if we deliver to your location."
  },
  {
    question: "What payment methods are accepted on the app?",
    answer:
      "We accept a wide range of payment methods for your convenience, including all major credit cards, debit cards, UPI, and popular digital wallets. All transactions are securely processed.",
  },
  {
    question: "Can I track my order in real-time?",
    answer:
      "Yes. Once you place an order, you can track its status live in the Crevings app. You'll receive updates from the moment the kitchen starts preparing your meal until it arrives at your doorstep.",
  },
  {
    question: "How do I apply a promo code or discount?",
    answer:
      "You can apply any valid promo code at the checkout page before confirming your order. The discount will be reflected in your final bill. Keep an eye on our app and social media for the latest offers!"
  },
  {
    question: "What should I do if there's an issue with my order?",
    answer:
      "Our customer support team is always ready to help. If you encounter any issues—such as a wrong item or a delay—you can easily report it through the in-app support chat, and we will resolve it promptly.",
  },
];

export default function ConsumerFaq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-headline mb-8 text-center">
            Frequently Asked Questions
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
