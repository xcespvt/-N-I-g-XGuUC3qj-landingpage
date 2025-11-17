
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
    question: "What are the eligibility criteria to become a delivery partner?",
    answer:
      "To become a Crevings delivery partner, you need to be at least 18 years old, have a valid two-wheeler license, a smartphone, and the necessary vehicle documents (RC, insurance, and PUC).",
  },
  {
    question: "What type of vehicle is required?",
    answer:
      "You can use a motorcycle or a scooter for deliveries. The vehicle must be in good working condition and meet all legal requirements. We are also exploring bicycle-based deliveries in select dense areas."
  },
  {
    question: "How and when do I get paid?",
    answer:
      "Your earnings are transferred directly to your bank account every week. You can track your daily and weekly earnings in real-time through the Crevings Delivery Partner app.",
  },
  {
    question: "Are the working hours flexible?",
    answer:
      "Yes, absolutely! You have the freedom to choose your own working hours. You can work full-time, part-time, or just during peak hours like lunch and dinner, depending on your convenience.",
  },
  {
    question: "Do I get any insurance coverage?",
    answer:
      "Yes, Crevings provides all active delivery partners with accidental death and disability insurance coverage while you are on a delivery. Your safety is our priority."
  },
  {
    question: "Are there any performance incentives?",
    answer:
      "Yes, we offer attractive incentives based on the number of deliveries completed, performance during peak hours, and delivering in high-demand zones. This is in addition to your regular earnings per order."
  },
  {
    question: "What kind of support does Crevings provide to delivery partners?",
    answer:
      "We provide comprehensive support, including a dedicated 24/7 helpline, onboarding assistance, and in-app support to help you with any issues you may face on the job, such as finding a location or order-related queries.",
  },
  {
    question: "Do I need to pay any registration fees?",
    answer:
      "No, there are no registration fees to join Crevings as a delivery partner. The onboarding process is completely free. You may need to purchase branded delivery bags and t-shirts at a nominal cost.",
  },
];

export default function DeliveryPartnerFaq() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8 text-center">
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
