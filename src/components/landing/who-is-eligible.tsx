
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const partners = [
    "Restaurant",
    "Cafe",
    "Cloud Kitchen",
    "Street Juice Vendors",
    "Sweet Shops",
    "Icecream Parlour",
    "Home Chefs",
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
        <div className="flex items-center gap-4">
            <Star className="h-6 w-6 text-current" />
            <span className="text-xl md:text-2xl font-bold tracking-wider">{children}</span>
        </div>
    )
}


export default function WhoIsEligible() {
  return (
    <section className="py-12 sm:py-20 lg:py-24">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-12">
                Who Is{" "}
                <span className="text-primary font-headline italic text-shadow-glow">
                    Eligible?
                </span>
            </h2>
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
