import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const benefitsPrimary = [
    "0% COMMISSION",
    "HIGHER MARGINS",
    "END TO END ECOSYSTEM",
    "BETTER REACH"
]

const benefitsSecondary = [
    "NO HIDDEN CHARGES",
    "NO DATA MISSUSE",
    "NO PRIVATE LABELING",
    "DEDICATED SUPPORT"
]

const Marquee = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn("flex w-max animate-marquee-left items-center gap-8", className)}>
            {children}
        </div>
    )
}

const MarqueeItem = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center gap-8">
            <Star className="h-6 w-6 text-current" />
            <span className="text-2xl font-bold uppercase tracking-wider">{children}</span>
        </div>
    )
}


export default function BenefitsMarquee() {
  return (
    <section className="py-12 sm:py-20 -my-12 sm:-my-20 md:-my-24 relative z-10">
        <div className="relative -rotate-2 overflow-x-hidden">
            <div className="bg-primary text-primary-foreground py-4">
                <Marquee>
                    {benefitsPrimary.map((benefit, index) => <MarqueeItem key={index}>{benefit}</MarqueeItem>)}
                    {benefitsPrimary.map((benefit, index) => <MarqueeItem key={index}>{benefit}</MarqueeItem>)}
                </Marquee>
            </div>
            <div className="bg-foreground text-background py-4">
                 <Marquee className="animate-marquee-right">
                    {benefitsSecondary.map((benefit, index) => <MarqueeItem key={index}>{benefit}</MarqueeItem>)}
                    {benefitsSecondary.map((benefit, index) => <MarqueeItem key={index}>{benefit}</MarqueeItem>)}
                </Marquee>
            </div>
        </div>
    </section>
  );
}
