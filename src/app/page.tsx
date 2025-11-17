

import { Button } from "@/components/ui/button";
import { Smartphone, HeartHandshake, CircleDollarSign, Pizza, Sparkles, UserCircle, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ConsumerFaq from "@/components/landing/consumer-faq";
import QualityPromise from "@/components/landing/quality-promise";
import WhyYouWillLove from "@/components/landing/why-you-will-love";
import WhoIsEligible from "@/components/landing/who-is-eligible";
import { PlayStoreIcon } from "@/components/ui/play-store-icon";
import { AppStoreIcon } from "@/components/ui/app-store-icon";
import { Logo } from "@/components/ui/logo";


const steps = [
    { name: "Download the App", description: "Get the Crevings app from the App Store or Google Play.", icon: "1" },
    { name: "Browse & Discover", description: "Explore menus, discover new dishes, and find your next favorite meal.", icon: "2" },
    { name: "Order & Enjoy", description: "Place your order with a few taps and get delicious food delivered to your door.", icon: "3" },
]

const cuisines = [
    { name: "North Indian", image: { src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxJbmRpYW4lMjBmb29kfGVufDB8fHx8MTc2MTU1NTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080", hint: "Indian food" } },
    { name: "South Indian", image: { src: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkb3NhfGVufDB8fHx8MTc2MTUzOTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080", hint: "dosa" } },
    { name: "Chinese", image: { src: "https://images.unsplash.com/photo-1627900440398-5db32dba8db1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bm9vZGxlc3xlbnwwfHx8fDE3NjE1MzkzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "noodles" } },
    { name: "Italian", image: { src: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwaXp6YXxlbnwwfHx8fDE3NjE0NTI1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "pizza" } },
    { name: "Desserts", image: { src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYWtlfGVufDB8fHx8MTc2MTQ4MTM4NXww&ixlib=rb-4.1.0&q=80&w=1080", hint: "cake" } },
    { name: "Street Food", image: { src: "https://images.unsplash.com/photo-1440427810006-0e4109fd4abe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3RyZWV0JTIwZm9vZHxlbnwwfHx8fDE3NjE0NTcwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080", hint: "street food" } },
    { name: "Healthy", image: { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", hint: "salad" } },
    { name: "Biryani", image: { src: "https://images.unsplash.com/photo-1589304213894-8717855353c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", hint: "biryani" } },
]

const reviews = [
    {
      name: "Ananya S.",
      location: "Delhi",
      review: "I love the variety on Crevings! Finding authentic home-cooked food has been a game-changer for my busy schedule. It feels good to support local cooks too.",
      avatar: "AS",
    },
    {
      name: "Rohan M.",
      location: "Gurgaon",
      review: "Finally, a food app where the prices are fair and not inflated. The app is super smooth, and delivery is always on time. My go-to for weekday lunches.",
      avatar: "RM",
    },
    {
      name: "Priya K.",
      location: "Bangalore",
      review: "The quality of food from both restaurants and home chefs is amazing. You can really taste the difference. Plus, the app is so easy to navigate. Highly recommended!",
      avatar: "PK",
    },
     {
      name: "Vikram C.",
      location: "Mumbai",
      review: "Crevings has become my favorite food delivery app. The range of options is incredible, from local street food to gourmet meals. It's the perfect way to explore the city's food scene from home.",
      avatar: "VC",
    },
    {
      name: "Sneha V.",
      location: "Pune",
      review: "The 'Mom's Magic' section is pure genius. I ordered a thali that tasted just like my mom's cooking. It's such a comforting and unique feature that no other app has.",
      avatar: "SV",
    },
    {
      name: "Arjun T.",
      location: "Noida",
      review: "A very reliable app. The delivery is always fast and the customer support is responsive. I appreciate the transparency in pricing and the fact that I'm supporting local businesses with every order.",
      avatar: "AT",
    }
  ];

const PhoneMockup = ({ src, alt, hint }: { src: string, alt: string, hint: string }) => (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background">
            <Image 
                src={src} 
                className="w-full h-full object-cover" 
                alt={alt} 
                width={300} 
                height={600}
                data-ai-hint={hint} 
            />
        </div>
    </div>
);

const savingsText = "with crevings you can save upto 60% on every order";
const marqueeItems = Array(4).fill(savingsText);

const ConsumerHero = () => (
    <section className="bg-secondary/30 overflow-hidden">
      <div className="container text-center flex flex-col items-center pt-20 md:pt-28">
        
        {/* From Uiverse.io by Itskrish01 */}
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

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter !leading-tight max-w-4xl mx-auto font-headline">
          Get Your Food with <span className="text-primary">0% commission</span> and no hidden charges
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
         Enjoy fair prices on your favorite meals. Crevings connects you directly with the best local restaurants and home chefs without the heavy fees.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link href="#" className="bg-foreground text-background hover:bg-foreground/80 border border-border rounded-md px-4 py-2 h-14 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 text-left">
                <PlayStoreIcon />
                <div className="flex flex-col">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-lg font-semibold -mt-1">Google Play</span>
                </div>
            </Link>
            <Link href="#" className="bg-foreground text-background hover:bg-foreground/80 border border-border rounded-md px-4 py-2 h-14 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 text-left">
                <AppStoreIcon />
                <div className="flex flex-col">
                    <span className="text-xs">Download on the</span>
                    <span className="text-lg font-semibold -mt-1">App Store</span>
                </div>
            </Link>
        </div>
      </div>
       <div className="mt-20 md:mt-28 flex justify-center">
            <PhoneMockup src="https://picsum.photos/seed/app-home/300/600" alt="Crevings App" hint="food app homescreen" />
        </div>
      <div className="relative mt-20 md:mt-28 py-4 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10"></div>
        <div className="flex w-max animate-marquee-left items-center gap-12">
            {marqueeItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 whitespace-nowrap">
                    <Star className="h-6 w-6 text-yellow-300" />
                    <span className="text-xl font-semibold tracking-wider uppercase text-shadow-glow">{item}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
);


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <ConsumerHero />

        <WhyYouWillLove />
        
        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Cuisines</Button>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Explore a World of Flavors</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From comforting classics to exciting new tastes, find what you're craving.
                    </p>
                </div>
                 <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent className="-ml-4">
                        {cuisines.map((cuisine, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <Link href="#" className="group relative block overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                    <Image
                                        src={cuisine.image.src}
                                        alt={cuisine.name}
                                        width={400}
                                        height={500}
                                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={cuisine.image.hint}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-lg font-bold text-white font-headline">{cuisine.name}</h3>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-1rem] md:left-[-2.5rem]" />
                    <CarouselNext className="right-[-1rem] md:right-[-2.5rem]" />
                </Carousel>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] w-full max-w-sm mx-auto">
                    <Image
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHwlMjBjb29raW5nfGVufDB8fHx8MTc2MTYyNDU4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Authentic Biryani"
                        fill
                        style={{ objectFit: "cover" }}
                        data-ai-hint="cooking mom"
                        className="rounded-3xl shadow-2xl"
                    />
                </div>
                <div>
                    <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Home Chefs</Button>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Discover 'Mom's Magic'</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Experience the taste of food made with love. Order authentic, home-cooked meals from talented chefs in your neighborhood. Each dish is prepared with fresh ingredients and a personal touch, bringing the comfort of home to your doorstep.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="#">Explore Home Chefs</Link>
                    </Button>
                </div>
            </div>
        </section>

        <section id="reviews" className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Testimonials</Button>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
                        What Our Customers Say
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Real stories from food lovers who enjoy Crevings.
                    </p>
                </div>
                <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="mt-12 w-full max-w-5xl mx-auto"
                >
                <CarouselContent className="-ml-4">
                    {reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <Card className="h-full p-6 bg-background flex flex-col border-none transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                            <CardContent className="p-0 flex-grow">
                            <p className="text-muted-foreground italic mb-4">"{review.review}"</p>
                            </CardContent>
                            <div className="flex items-center gap-4 mt-6">
                            <Avatar>
                                <AvatarFallback>{review.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-primary">{review.name}</p>
                                <p className="text-sm text-muted-foreground">{review.location}</p>
                            </div>
                            </div>
                        </Card>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-[-1rem] md:left-[-2.5rem]" />
                <CarouselNext className="right-[-1rem] md:right-[-2.5rem]" />
                </Carousel>
            </div>
        </section>

        <QualityPromise />

        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>App Preview</Button>
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Discover Our App Features</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A glimpse into the seamless and intuitive experience of using Crevings.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-2xl font-bold font-headline text-primary">Easy Navigation</h3>
                        <p className="text-muted-foreground">Find exactly what you're craving with our intuitive search and filtering options. Discover new restaurants and home chefs with ease.</p>
                    </div>
                    <PhoneMockup src="https://picsum.photos/seed/food-app/300/600" alt="App screen showing navigation" hint="food app interface" />
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center mt-16 md:mt-24">
                     <PhoneMockup src="https://picsum.photos/seed/order-tracking/300/600" alt="App screen showing order tracking" hint="order tracking interface" />
                    <div className="space-y-4 text-center md:text-left order-first md:order-last">
                        <h3 className="text-2xl font-bold font-headline text-primary">Real-Time Order Tracking</h3>
                        <p className="text-muted-foreground">Know exactly when your food will arrive. Track your order from the kitchen to your doorstep in real-time.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <WhoIsEligible />
        <ConsumerFaq />

      </main>
      <Footer />
    </div>
  );
}

    
