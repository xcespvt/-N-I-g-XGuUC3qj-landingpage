
import { Button } from "@/components/ui/button";
import { SignUpIcon, VerifiedIcon, StartRidingIcon } from "@/components/landing/how-it-works-icons";
import { Utensils, CheckCircle, Store } from "lucide-react";

const steps = [
    { 
        name: "Sign Up & Submit Documents", 
        description: "Create your restaurant profile and upload the necessary documents like FSSAI, GST, and bank details.", 
        icon: <SignUpIcon />
    },
    { 
        name: "Set Up Your Restaurant", 
        description: "Our team will verify your documents and help you set up your menu, pricing, and restaurant hours.", 
        icon: <Store className="h-12 w-12 text-primary" />
    },
    { 
        name: "Start Receiving Orders", 
        description: "Go live on the platform and start accepting orders for delivery, takeaway, and dine-in.", 
        icon: <Utensils className="h-12 w-12 text-primary" />
    },
]

export default function HowItWorksRestaurants() {
    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container text-center">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>How it Works</Button>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Easy Steps</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Your journey to boosting profits with Crevings is just a few clicks away.</p>
                <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.name} className="p-8 bg-secondary/30 rounded-lg text-center flex flex-col items-center border border-border">
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="mt-4 text-xl font-bold">{step.name}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
