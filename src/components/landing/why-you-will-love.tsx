
"use client";

import Image from 'next/image';
import { Pizza, CircleDollarSign, Sparkles, HeartHandshake } from "lucide-react";
import placeholderImages from '@/app/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
    { 
        name: "Endless Food Choices", 
        description: "Explore a vast variety of cuisines from top restaurants and beloved home chefs, all in one place.", 
        icon: <Pizza className="h-8 w-8" />,
        image: placeholderImages.benefitFoodChoices
    },
    { 
        name: "Transparent & Fair Prices", 
        description: "Enjoy delicious meals at honest prices. We don't charge subscription fees or inflate menu prices.", 
        icon: <CircleDollarSign className="h-8 w-8" />,
        image: placeholderImages.benefitFairPrices
    },
    { 
        name: "A Seamless Experience", 
        description: "From browsing to delivery, enjoy a smooth, intuitive, and hassle-free app experience.", 
        icon: <Sparkles className="h-8 w-8" />,
        image: placeholderImages.benefitSeamless
    },
    { 
        name: "Authentic Home-Cooked Meals", 
        description: "Discover the 'Mom's Magic' section for delicious, authentic food made with love, right in your neighborhood.", 
        icon: <HeartHandshake className="h-8 w-8" />,
        image: placeholderImages.benefitHomeCooked
    },
];

export default function WhyYouWillLove() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                     <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Why You'll Love Crevings</Button>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">A Better Food Experience</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We're building a platform that's fair, transparent, and delicious. Here's what's in it for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => (
                        <Card key={benefit.name} className="flex flex-col group overflow-hidden">
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image 
                                    src={benefit.image.src} 
                                    alt={benefit.name} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    data-ai-hint={benefit.image.aiHint}
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                                        {benefit.icon}
                                    </div>
                                    <CardTitle className="text-lg font-bold font-headline text-primary flex-1">{benefit.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
