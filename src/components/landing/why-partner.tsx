
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgePercent, ShieldCheck, TrendingUp, Headset, ChefHat, BarChart } from "lucide-react";

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
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Data-Driven Growth",
    description: "Leverage local customer data and buying patterns to run targeted offers, boost visibility, and maximize profits.",
  }
];

export default function WhyPartner() {
  return (
    <section id="why-crevings" className="py-12 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Why Partner With{" "}
            <span className="text-primary font-headline italic text-shadow-glow">
              Crevings
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {usps.map((usp) => (
                <Card key={usp.title} className="text-left p-6 bg-card border flex flex-col">
                    <CardHeader className="p-0 mb-4">
                        <div className="w-fit p-3 bg-background rounded-lg shadow-lg shadow-primary/30 mb-4 border border-primary animate-glow">
                           {usp.icon}
                        </div>
                        <CardTitle className="text-xl font-bold font-headline text-primary">{usp.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                        <p className="text-muted-foreground">{usp.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
