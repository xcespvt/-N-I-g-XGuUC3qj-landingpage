
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
    question: "Do I need a commercial kitchen to become a home chef?",
    answer:
      "No, you can cook from your own home kitchen. However, you must comply with all local food safety and hygiene regulations, including obtaining the necessary FSSAI registration.",
  },
  {
    question: "What are the costs involved in becoming a Crevings Home Chef?",
    answer:
      "Joining as a home chef is very affordable. You'll pay the same low monthly subscription fee as our restaurant partners, which gives you 0% commission on your orders. This gives you access to the platform and our delivery network.",
  },
  {
    question: "How do I set my menu and prices?",
    answer:
      "You have complete control over your menu and pricing. Through the Crevings partner app, you can list your dishes, set your own prices, define your availability, and update your menu whenever you like.",
  },
  {
    question: "What kind of food can I sell?",
    answer: "You can sell a wide variety of homemade food, from daily meals, regional specialties, and baked goods to healthy snacks and festive treats. As long as it's prepared hygienically and meets FSSAI standards, you can list it on your menu."
  },
  {
    question: "Who handles packaging and delivery?",
    answer:
      "You are responsible for packaging your food safely and hygienically. Once an order is ready, a Crevings delivery partner will pick it up from your location and deliver it to the customer. We handle the entire delivery logistic for you.",
  },
  {
    question: "How do I manage incoming orders?",
    answer:
      "You will receive order notifications directly through the Crevings Partner App. You can accept or decline orders, view order details, and mark the food as 'ready for pickup' all from your smartphone."
  },
  {
    question: "Is there any support or community for home chefs?",
    answer: "Yes! When you join Crevings, you become part of a supportive community. We provide resources, tips on food presentation, and guidance to help you grow your business. You can also connect with other home chefs on our platform."
  },
  {
    question: "How and when will I get paid for my orders?",
    answer:
      "Your earnings are calculated and transferred directly to your registered bank account on a regular weekly basis. You can track all your earnings and view detailed statements in the partner app.",
  },
];

export default function HomeChefFaq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
            Home Chef FAQs
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
                    "bg-background p-4 rounded-lg border transition-all duration-300",
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
