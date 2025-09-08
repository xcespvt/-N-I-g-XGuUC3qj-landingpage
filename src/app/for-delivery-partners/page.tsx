import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

const features = [
  { name: "Flexible Hours", description: "Ride when you want, for as long as you want. You are your own boss." },
  { name: "Competitive Earnings", description: "Get transparent and competitive pay for every delivery you make." },
  { name: "Weekly Payments", description: "Receive your earnings directly in your bank account every week." },
  { name: "Be Part of a Community", description: "Join a network that respects and values its delivery partners." },
];

const steps = [
    { name: "Sign Up", description: "Create your profile and upload the necessary documents.", icon: "1️⃣" },
    { name: "Get Verified", description: "Our team will quickly review and approve your profile.", icon: "2️⃣" },
    { name: "Start Riding", description: "Log in to the app and start accepting delivery requests.", icon: "3️⃣" },
]

export default function ForDeliveryPartnersPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 text-center bg-secondary/30">
            <div className="container">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Ride with Crevings, Earn with Pride
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Join our fleet of delivery partners and earn on your own terms. We provide the opportunity, you provide the drive.
                </p>
                <Button size="lg" className="mt-8">Start Earning Today</Button>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Your Work, Your Rules</h2>
                        <p className="mt-4 text-lg text-muted-foreground">We empower our delivery partners with the freedom and support they deserve.</p>
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
                         <Image src="https://placehold.co/600x400.png" alt="Delivery partner on a bike" layout="fill" objectFit="cover" data-ai-hint="delivery person scooter"/>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Easy Steps</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Your journey to earning with Crevings is just a few clicks away.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Hit the Road?</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Join a delivery platform that truly cares. Sign up now and start your first delivery today.</p>
                <Button size="lg" className="mt-8">Apply to be a Delivery Partner</Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
