
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MonitorSmartphone, WifiOff, GitBranch, BarChartBig, Package, Handshake, Database, UserCheck, Truck, IndianRupee, Megaphone, Gem, Bot, MapPin, Mail, Users2, LineChart, ShieldCheck, BrainCircuit, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const coreFeatures = [
    { icon: <MonitorSmartphone />, title: "True All-in-One POS", description: "Run your entire restaurant — online + offline orders, billing, menu, inventory, accounting, marketing, and staff — from one clean dashboard." },
    { icon: <WifiOff />, title: "Works Even Without Internet", description: "Offline mode keeps your billing and sales running smoothly even with unstable connectivity." },
    { icon: <GitBranch />, title: "Multi-Outlet Management", description: "Monitor and control multiple outlets, sync menus, track stock, and view analytics from a single owner dashboard." },
    { icon: <BarChartBig />, title: "Deep Reporting & Analytics", description: "Get real-time insights into sales, staff, profit margins, and top-performing dishes to make smarter decisions daily." },
    { icon: <Package />, title: "Complete Restaurant Ecosystem", description: "Plug and play add-ons: KOT, KDS, table management, CRM, loyalty, digital payments, and marketing tools — all built-in." },
    { icon: <Handshake />, title: "Seamless Integrations", description: "Connect easily with other delivery apps for smooth order syncing." },
    { icon: <Database />, title: "Smart Inventory & Vendor Tracking", description: "Track raw material use, wastage, and supplier purchases in real time — cut losses, prevent theft, and stay audit-ready." },
    { icon: <UserCheck />, title: "Integrated Consumer App", description: "Customers can order, reserve, or pre-book directly from the Crevings consumer app — connecting dine-in and delivery seamlessly." },
    { icon: <Truck />, title: "In-House Delivery Network", description: "We run our own delivery app and logistics. Faster, more reliable, and cheaper than third-party options." },
    { icon: <IndianRupee />, title: "0% Commission — Ever", description: "Keep 100% of what you earn. One fixed monthly plan, no hidden fees." }
];

const growthFeatures = [
    { icon: <Megaphone />, title: "Built-In Ad Platform", description: "Run banners, push campaigns, and sponsored spots right inside the customer app." },
    { icon: <Bot />, title: "AI-Driven Targeting", description: "Reach customers based on location, cuisine, order frequency, and spending habits." },
    { icon: <MapPin />, title: "Hyperlocal Promotions", description: "Run area-specific campaigns to boost orders in your delivery zones." },
    { icon: <Mail />, title: "WhatsApp & Email Blasts", description: "Launch personalized campaigns promoting new dishes, combos, or festive menus directly to verified users." },
    { icon: <Users2 />, title: "Online + Offline Data Power", description: "Leverage dine-in and delivery data to bring old customers back with targeted offers." },
    { icon: <Handshake />, title: "Influencer Collaboration Hub", description: "Partner with local food influencers right inside Crevings to amplify your brand organically." },
    { icon: <BrainCircuit />, title: "Smart Segmentation & Automation", description: "Auto-target students, families, corporates, or frequent buyers with tailored campaigns." },
    { icon: <BarChartBig />, title: "Real-Time Campaign Analytics", description: "See impressions, clicks, conversions, ROI — live." },
    { icon: <UserCheck />, title: "Built-In Loyalty Integration", description: "Run rewards and loyalty programs connected directly to your ads — convert customers into regulars." },
    { icon: <LineChart />, title: "Unified Growth Dashboard", description: "Manage all your campaigns, influencers, and loyalty programs from one powerful control panel." }
];


export default function WhyPartner() {
  const [activeTab, setActiveTab] = useState<'core' | 'growth'>('core');

  const features = activeTab === 'core' ? coreFeatures : growthFeatures;
  const title = activeTab === 'core' ? "The Last Restaurant POS You’ll Ever Need" : "The Ultimate Restaurant Growth Engine";
  const description = activeTab === 'core' ? "Everything you need to automate operations, boost productivity, and drive profits." : "Stop guessing. Start growing with an integrated ad platform that delivers real, measurable results.";
  const emoji = activeTab === 'core' ? "⚙️" : "📈";
  const buttonText = activeTab === 'core' ? "Core System Features" : "Advertising & Growth";

  return (
    <section id="why-crevings" className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="flex justify-center mb-8">
            <div className="relative flex w-80 items-center rounded-full border p-1">
                <span
                    className={cn(
                        "absolute inset-y-1 w-1/2 rounded-full bg-primary shadow-lg transition-all duration-300 ease-in-out",
                        activeTab === 'core' ? 'left-1' : 'left-[calc(50%-0.25rem)]'
                    )}
                ></span>
                <button
                    onClick={() => setActiveTab('core')}
                    className={cn(
                        "relative z-10 flex-1 rounded-full py-1.5 text-center text-sm font-bold transition-colors duration-300",
                        activeTab === 'core' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                    )}
                >
                    Core Features
                </button>
                <button
                    onClick={() => setActiveTab('growth')}
                    className={cn(
                        "relative z-10 flex-1 rounded-full py-1.5 text-center text-sm font-bold transition-colors duration-300",
                        activeTab === 'growth' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-primary'
                    )}
                >
                    Growth Engine
                </button>
            </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
            <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>{emoji} {buttonText}</Button>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
                {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                {description}
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((usp) => (
                <Card key={usp.title} className="bg-card p-6 rounded-2xl flex flex-col items-center text-center">
                    <div className="text-primary [&>svg]:h-8 [&>svg]:w-8 mb-4">{usp.icon}</div>
                    <h3 className="text-xl font-bold font-headline mt-2 text-primary">{usp.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm flex-grow">{usp.description}</p>
                </Card>
            ))}
        </div>

      </div>
    </section>
  );
}
