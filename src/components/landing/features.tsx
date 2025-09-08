
import { Card } from "@/components/ui/card";
import { Handshake, Store, Truck, Megaphone, ChefHat, Package, Building, Users, BrainCircuit, BarChart, FileText, Database, CalendarClock, BookOpen, BarChartBig, UserCheck, MonitorSmartphone, Receipt, IndianRupee } from "lucide-react";

const features = [
    {
        icon: <Handshake />,
        title: "Direct Partner Platform",
        description: "Connect directly with customers with 0% commission and access our service hub for support.",
    },
    {
        icon: <Truck />,
        title: "Growth & Logistics",
        description: "Utilize our hyperlocal delivery network and in-app advertising solutions to grow your reach.",
    },
    {
        icon: <ChefHat />,
        title: "Specialized Solutions",
        description: "A dedicated channel for home-chefs and access to high-quality, sustainable packaging.",
    },
    {
        icon: <Building />,
        title: "Multiple Branch & Staff Management",
        description: "Easily manage multiple outlets and assign staff roles with one simple dashboard.",
    },
    {
        icon: <BrainCircuit />,
        title: "AI-Powered Marketing Dashboard",
        description: "Run smarter campaigns with AI-driven insights to boost visibility and sales.",
    },
    {
        icon: <Receipt />,
        title: "GST & Local Customer Data",
        description: "Get detailed GST reports and access valuable local customer data to grow directly.",
    },
    {
        icon: <BookOpen />,
        title: "Table & Booking Management",
        description: "Seamlessly handle dine-in reservations and table allocations with zero hassle.",
    },
    {
        icon: <UserCheck />,
        title: "AI Analysis & Feedback",
        description: "Leverage AI to analyze customer behavior and collect real-time feedback for improvements.",
    },
    {
        icon: <MonitorSmartphone />,
        title: "POS-Free Unified System",
        description: "Skip traditional POS — manage dine-in, takeaway, delivery, online & offline sales all in one place.",
    },
    {
        icon: <IndianRupee />,
        title: "Quick Payouts",
        description: "Receive faster, transparent payouts without hidden deductions.",
    }
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
                All <span className="text-primary font-headline italic animate-text-glow">features</span> in one place
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to automate operations, boost productivity
            </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <div className="h-48 flex items-center justify-center bg-background/50 rounded-lg border border-border">
                    <div className="flex items-center gap-4 bg-background p-4 rounded-lg shadow-lg border border-primary shadow-primary/30 animate-glow">
                        <div className="text-primary [&>svg]:h-8 [&>svg]:w-8">{feature.icon}</div>
                    </div>
                </div>
                <h3 className="mt-8 text-2xl font-bold font-headline text-center text-primary">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground text-center">
                    {feature.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
