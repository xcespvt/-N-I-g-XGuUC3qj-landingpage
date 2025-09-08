
"use client";

import { Truck, ShoppingBag, UtensilsCrossed, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const serviceModes = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Delivery",
    description: "Reach a wider audience with our reliable delivery network.",
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Takeaway",
    description: "Allow customers to order ahead and pick up from your outlet.",
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8" />,
    title: "Dine-In Ordering",
    description: "Enable customers to order directly from their table using the app.",
  },
  {
    icon: <CalendarClock className="h-8 w-8" />,
    title: "Table Booking",
    description: "Accept and manage table reservations directly through the app.",
  }
];

export default function ServiceModes() {
  return (
    <section id="service-modes" className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Serve <span className="text-primary font-headline italic text-shadow-glow">Customers</span> Your Way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            With Crevings, partners can serve customers through multiple channels, ensuring you capture every type of order.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {serviceModes.map((mode, index) => (
                <Card 
                    key={mode.title}
                    className="p-6 cursor-pointer transition-all duration-300 border-2 group bg-card hover:bg-card/80"
                >
                    <div className="flex items-start gap-4">
                        <div className={cn(
                            "p-2 rounded-lg transition-all duration-300 border bg-background text-primary shadow-lg",
                            "group-hover:border-primary group-hover:shadow-primary/30 group-hover:animate-glow"
                        )}>
                            {mode.icon}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-bold font-headline">{mode.title}</h3>
                        </div>
                    </div>
                    <p className="text-muted-foreground mt-4">{mode.description}</p>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
