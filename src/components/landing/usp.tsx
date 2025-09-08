
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { BadgePercent, ShieldCheck, TrendingUp, Headset, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

const usps = [
  {
    icon: <BadgePercent className="h-8 w-8 text-primary" />,
    title: "0% Commission Model",
    description: "We don’t take away your hard-earned profits. Pay only a simple monthly subscription and keep your margins intact.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Transparent & Fair Pricing",
    description: "No hidden charges or inflated costs. What you earn is yours.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "More Orders, More Reach",
    description: "Connect with new customers who are actively looking for affordable food options.",
  },
  {
    icon: <Headset className="h-8 w-8 text-primary" />,
    title: "Dedicated Support",
    description: "From onboarding to growth, our team supports you with marketing, logistics, and technology tools to scale faster.",
  },
  {
    icon: <ChefHat className="h-8 w-8 text-primary" />,
    title: "Special Section for Home-Chefs",
    description: "Sell your meals directly through our “Mom’s Magic” section, designed to empower home-based kitchens.",
  }
];

export default function WhyPartner() {
  const [activeUsp, setActiveUsp] = useState(0);

  return (
    <section id="why-crevings" className="py-12 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Why Partner With Crevings?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-4">
                {usps.map((usp, index) => (
                    <Card 
                        key={index}
                        onClick={() => setActiveUsp(index)}
                        className={cn("p-6 cursor-pointer transition-all duration-300 border-2", 
                        activeUsp === index ? "bg-primary/10 border-primary" : "bg-card hover:bg-secondary/60")}
                    >
                        <div className="flex items-center gap-6">
                            <div className={cn("p-3 bg-primary/10 rounded-full transition-all duration-300", activeUsp === index ? "scale-110 bg-primary/20" : "")}>
                                {usp.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline">{usp.title}</h3>
                                <p className="text-muted-foreground mt-1">{usp.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
