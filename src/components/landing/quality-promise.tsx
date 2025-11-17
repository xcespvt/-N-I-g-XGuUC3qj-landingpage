
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, ShieldCheck, Truck, BadgeIndianRupee, HeartHandshake, Headset } from "lucide-react";

const promises = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Verified Partners",
        description: "We carefully select and verify every restaurant and home chef to ensure they meet our strict quality and hygiene standards.",
    },
    {
        icon: <ThumbsUp className="h-8 w-8 text-primary" />,
        title: "Fresh Ingredients",
        description: "Our partners are committed to using fresh, high-quality ingredients to prepare delicious and wholesome meals for you.",
    },
    {
        icon: <Truck className="h-8 w-8 text-primary" />,
        title: "Reliable Delivery",
        description: "Our trained delivery partners ensure your food is handled with care and delivered to you hot and fresh, every time.",
    },
    {
        icon: <BadgeIndianRupee className="h-8 w-8 text-primary" />,
        title: "No Hidden Fees",
        description: "Enjoy honest pricing with no surprise charges or surge pricing. What you see is what you pay.",
    },
    {
        icon: <HeartHandshake className="h-8 w-8 text-primary" />,
        title: "Fair for Partners",
        description: "We believe in a fair ecosystem. By supporting our delivery partners, we ensure a better and more reliable service for you.",
    },
    {
        icon: <Headset className="h-8 w-8 text-primary" />,
        title: "Reliable Customer Support",
        description: "Our support team is ready to assist with any questions, ensuring a smooth and pleasant experience from start to finish.",
    }
]

export default function QualityPromise() {
  return (
    <section className="py-16 sm:py-24">
        <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Commitment to Quality</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Your trust is our top priority. Here's how we ensure a safe and delightful food experience.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {promises.map((promise) => (
                    <Card key={promise.title} className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-primary/10 rounded-full">
                                {promise.icon}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold">{promise.title}</h3>
                        <p className="mt-2 text-muted-foreground text-sm">{promise.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
