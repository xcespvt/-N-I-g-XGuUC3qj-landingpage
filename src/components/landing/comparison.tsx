import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, IndianRupee } from "lucide-react";

const crevingsBenefits = [
    "0% commission model — keep your profits",
    <span key="price" className="inline-flex items-center">Flat subscription (<IndianRupee className="h-4 w-4 inline mr-1" />399 + GST) with predictable costs</span>,
    "Transparent pricing, no inflated menu rates",
    "Access to delivery, takeaway, and dine-in bookings",
    "End-to-end ecosystem support (marketing, logistics, service hubs)",
    "Special “Mom’s Magic” section for home-chefs",
    "Faster payouts, no hidden deductions",
    "Local customer data shared to help you grow directly",
];

const othersDrawbacks = [
    "30–40% commission cuts into your earnings",
    "High & unpredictable costs as sales grow",
    "Inflated menu pricing, leading to fewer orders",
    "Limited to delivery, no integrated takeaway or dine-in support",
    "No ecosystem or extra growth support",
    "No dedicated space for home-chefs or homemakers",
    "Delayed payouts with hidden charges",
    "Customer data locked, no direct access",
];


export default function Comparison() {
  return (
    <section id="comparison" className="py-12 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Why Choose Crevings Over Others
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                See how Crevings compares against other food delivery platforms in cost, growth, and transparency.
            </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-primary/10 border-primary/30">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-primary">Crevings</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {crevingsBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <Card className="bg-muted/50 border-border">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline text-muted-foreground">Others</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-4">
                        {othersDrawbacks.map((drawback, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                                <span>{drawback}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
