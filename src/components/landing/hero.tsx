
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container text-center flex flex-col items-center">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter !leading-tight max-w-4xl mx-auto font-headline">
          Grow Your Business With <span className="text-primary">0% Commission</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
         Join Crevings and reach more customers without paying heavy commissions. Keep your margins, grow your brand, and get full support from day one.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
           <Button size="lg" className="h-14 px-8 text-lg font-semibold animate-glow">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold animate-glow border-primary text-primary hover:text-primary">
              Partner Login
            </Button>
        </div>

      </div>
    </section>
  );
}
