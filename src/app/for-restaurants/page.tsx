import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

const features = [
  { name: "0% Commission", description: "Keep 100% of your earnings. We don't charge any commission on your orders." },
  { name: "Wider Customer Reach", description: "Connect with thousands of new customers in your area." },
  { name: "Easy Onboarding", description: "Get your restaurant listed in minutes with our simple setup process." },
  { name: "Full Menu Control", description: "Update your menu, prices, and offers anytime you want." },
];

const steps = [
    { name: "Sign Up", description: "Create your account and tell us about your restaurant.", icon: "1️⃣" },
    { name: "Upload Your Menu", description: "Easily add your dishes and set your prices.", icon: "2️⃣" },
    { name: "Go Live", description: "Start accepting orders and growing your business.", icon: "3️⃣" },
]

export default function ForRestaurantsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 text-center bg-secondary/30">
            <div className="container">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Grow Your Restaurant with 0% Commission
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Join Crevings and reach more customers without sacrificing your profits. We're here to help your business thrive.
                </p>
                <Button size="lg" className="mt-8">Get Started Now</Button>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Why Partner with Crevings?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We believe in a fair partnership. Here’s how we support your growth:</p>
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
                         <Image src="https://placehold.co/600x400.png" alt="Happy restaurant owner" layout="fill" objectFit="cover" data-ai-hint="restaurant kitchen" />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready in Three Simple Steps</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Getting started with Crevings is quick and easy.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Join the Revolution</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Stop paying high commissions. Start earning more with every order.</p>
                <Button size="lg" className="mt-8">Sign Up Your Restaurant</Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
