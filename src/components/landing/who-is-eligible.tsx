
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const partners = [
    "Restaurants & Cafes",
    "Cloud Kitchens",
    "Home Chefs",
    "Bakeries & Patisseries",
    "Caterers",
    "Food Trucks",
    "Juice & Salad Bars",
]

const Marquee = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("flex w-max animate-marquee-left items-center gap-12", className)}>
            {children}
        </div>
    )
}

const MarqueeItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-current" />
            <span className="text-lg md:text-xl font-bold tracking-wider">{children}</span>
        </div>
    )
}


export default function WhoIsEligible() {
  return (
    <section className="py-12 sm:py-20 lg:py-24">
        <div className="container text-center">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Who is Eligible?</Button>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
                    Who Can Partner with Crevings?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We welcome all types of food businesses to join our platform and grow with us. If you have a passion for food, we have a place for you.
                </p>
            </div>
        </div>
        <div className="overflow-x-hidden">
            <div className="bg-secondary text-primary py-6">
                <Marquee>
                    {partners.map((partner, index) => <MarqueeItem key={index}>{partner}</MarqueeItem>)}
                    {partners.map((partner, index) => <MarqueeItem key={index}>{partner}</MarqueeItem>)}
                </Marquee>
            </div>
        </div>
    </section>
  );
}
