
"use client";

import { Truck, ShoppingBag, UtensilsCrossed, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceModes = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Delivery",
    description: "Reach a wider audience with our reliable delivery network.",
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Takeaway",
    description: "Allow customers to order ahead and pick up from your outlet.",
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: "Dine-In Ordering",
    description: "Enable customers to order directly from their table using the app.",
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-primary" />,
    title: "Table Booking",
    description: "Accept and manage table reservations directly through the app.",
  }
];

export default function ServiceModes() {
  return (
    <section id="service-modes" className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Service Modes</Button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
            Serve Customers Your Way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            With Crevings, partners can serve customers through multiple channels, ensuring you capture every type of order.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-7xl mx-auto rounded-2xl overflow-hidden border">
            {serviceModes.map((mode) => (
              <div key={mode.title} className="p-8 text-center bg-background flex flex-col items-center">
                  <div className="mb-4">
                      {mode.icon}
                  </div>
                  <h3 className="text-xl font-bold font-headline text-primary">{mode.title}</h3>
                  <p className="text-muted-foreground mt-2 flex-grow">{mode.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
