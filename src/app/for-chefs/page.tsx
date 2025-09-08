import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

const features = [
  { name: "Monetize Your Passion", description: "Turn your love for cooking into a rewarding business from your home." },
  { name: "Flexible Schedule", description: "Cook and sell on your own terms. You decide your menu and your hours." },
  { name: "We Handle Delivery", description: "Focus on what you do best—cooking. We'll handle the logistics." },
  { name: "Community Support", description: "Join a community of fellow home chefs and food lovers." },
];

const steps = [
    { name: "Create Your Profile", description: "Tell us your story and what makes your food special.", icon: "1️⃣" },
    { name: "Set Up Your Menu", description: "List your signature dishes and set your own prices.", icon: "2️⃣" },
    { name: "Start Selling", description: "Begin sharing your culinary magic with your community.", icon: "3️⃣" },
]

export default function ForChefsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 text-center bg-secondary/30">
            <div className="container">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                   Share Your Magic, From Your Kitchen
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Become a Crevings Home Chef and turn your passion for cooking into a source of income. Delight your neighbours with your authentic, homemade food.
                </p>
                <Button size="lg" className="mt-8">Become a Home Chef</Button>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Why Cook with Crevings?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We provide the platform, you provide the love. Here’s why you’ll love being a Crevings Chef:</p>
                        <ul className="mt-8 space-y-4">
                            {features.map((feature) => (
                                <li key={feature.name} className="flex gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg">{feature.name}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                         <Image src="https://placehold.co/600x400.png" alt="Home chef cooking" layout="fill" objectFit="cover" data-ai-hint="home kitchen cooking" />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Start Your Culinary Journey</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">It's easy to get started and share your creations.</p>
                <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.name} className="p-8 bg-background rounded-lg shadow-lg text-center">
                            <div className="text-4xl">{step.icon}</div>
                            <h3 className="mt-4 text-xl font-bold">{step.name}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28 text-center">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Share Your Passion?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Sign up today and start building your food business from the comfort of your home.</p>
                <Button size="lg" className="mt-8">Sign Up as a Home Chef</Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
