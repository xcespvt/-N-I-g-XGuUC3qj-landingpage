
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import placeholderImages from "@/app/lib/placeholder-images.json";
import DocumentsRequired from "@/components/landing/documents-required";
import DeliveryPartnerReviews from "@/components/landing/delivery-partner-reviews";
import { cn } from '@/lib/utils';
import DeliveryPartnerSignupForm from '@/components/landing/delivery-partner-signup-form';
import DeliveryPartnerFaq from '@/components/landing/delivery-partner-faq';
import KeyMetricsDelivery from '@/components/landing/key-metrics-delivery';
import { SignUpIcon, VerifiedIcon, StartRidingIcon } from '@/components/landing/how-it-works-icons';

const features = [
  {
    name: "Flexible Hours",
    description: "Ride when you want, for as long as you want. You are your own boss.",
    icon: <Clock className="h-8 w-8" />,
  },
  {
    name: "Competitive Earnings",
    description: "Get transparent and competitive pay for every delivery you make.",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    name: "Daily/Weekly Payments",
    description: "We release payouts both daily or weekly, directly to your bank account.",
    icon: <Calendar className="h-8 w-8" />,
  },
  {
    name: "Community Support",
    description: "Join a network that respects and values its delivery partners.",
    icon: <Users className="h-8 w-8" />,
  },
];

const steps = [
    { 
        name: "Sign Up", 
        description: "Create your profile and upload the necessary documents.", 
        icon: <SignUpIcon />
    },
    { 
        name: "Get Verified", 
        description: "Our team will quickly review and approve your profile.", 
        icon: <VerifiedIcon />
    },
    { 
        name: "Start Riding", 
        description: "Log in to the app and start accepting delivery requests.", 
        icon: <StartRidingIcon />
    },
]

export default function ForDeliveryPartnersPage() {

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 text-center relative bg-secondary/30">
            <div className="absolute inset-0">
                <Image 
                    src={placeholderImages.deliveryPartner1.src}
                    alt="Delivery partner on a scooter"
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={placeholderImages.deliveryPartner1.aiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
            </div>
            <div className="container relative">
                <button className="group relative dark:bg-neutral-800 bg-neutral-200 rounded-full p-px overflow-hidden mb-6">
                    <span className="absolute inset-0 rounded-full overflow-hidden">
                        <span className="inset-0 absolute pointer-events-none select-none">
                        <span
                            className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
                            style={{
                            background:
                                "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.5))",
                            }}
                        ></span>
                        </span>
                    </span>
                    <span
                        className="inset-0 absolute pointer-events-none select-none animate-border-glow-translate"
                    >
                        <span
                        className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full animate-border-glow-scale"
                        style={{
                            background:
                            "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.5))",
                        }}
                        ></span>
                    </span>
                    <span className="flex items-center justify-center gap-1 relative z-[1] dark:bg-neutral-950/90 bg-neutral-50/90 rounded-full py-1 px-3 w-full">
                        <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-80 dark:opacity-100 animate-star-rotate"
                        >
                            <path
                            d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 2.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
                            fill="url(#paint0_linear_171_8212)"
                            stroke="url(#paint1_linear_171_8212)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            ></path>
                            <defs>
                            <linearGradient
                                id="paint0_linear_171_8212"
                                x1="-0.5"
                                y1="9"
                                x2="15.5"
                                y2="-1.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="hsl(var(--primary))"></stop>
                                <stop offset="1" stopColor="hsl(var(--primary) / 0.5)"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_171_8212"
                                x1="-0.5"
                                y1="9"
                                x2="15.5"
                                y2="-1.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="hsl(var(--primary))"></stop>
                                <stop offset="1" stopColor="hsl(var(--primary) / 0.5)"></stop>
                            </linearGradient>
                            </defs>
                        </svg>
                        <span
                            className="rounded-full size-11 absolute opacity-0 dark:opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg animate-star-shine"
                            style={{
                            background:
                                "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.5))",
                            }}
                        ></span>
                        </span>
                        <span className="bg-gradient-to-b ml-1.5 dark:from-white dark:to-white/50 from-neutral-950 to-neutral-950/50 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu">
                        Launching soon in Gurgaon
                        </span>
                    </span>
                    </button>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Ride with Crevings, Earn with Pride
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Join our fleet of delivery partners and earn on your own terms. We provide the opportunity, you provide the drive.
                </p>
            </div>
        </section>

        <DeliveryPartnerSignupForm />

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Benefits</Button>
                    <h2 className="text-3xl md:text-4xl font-bold">Your Work, Your Rules</h2>
                    <p className="mt-4 text-lg text-muted-foreground">We empower our delivery partners with the freedom and support they deserve.</p>
                </div>
                
                <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-secondary/30 p-8 rounded-2xl border border-border">
                            <div className="h-48 flex items-center justify-center bg-background/50 rounded-lg border border-border">
                                <div className="flex items-center gap-4 bg-background p-4 rounded-lg border border-primary">
                                    <div className="text-primary">{feature.icon}</div>
                                </div>
                            </div>
                            <h3 className="mt-8 text-2xl font-bold font-headline text-center text-primary">{feature.name}</h3>
                            <p className="mt-2 text-muted-foreground text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <KeyMetricsDelivery />

        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container text-center">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>How it Works</Button>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Easy Steps</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Your journey to earning with Crevings is just a few clicks away.</p>
                <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                    {steps.map((step) => (
                        <div key={step.name} className="p-8 bg-background rounded-lg text-center flex flex-col items-center border border-primary">
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="mt-4 text-xl font-bold">{step.name}</h3>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <DocumentsRequired partnerType="delivery" />
        <DeliveryPartnerReviews />
        <DeliveryPartnerFaq />

      </main>
      <Footer />
    </div>
  );
}
