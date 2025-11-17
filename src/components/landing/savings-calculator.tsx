
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function SavingsCalculator() {
  const [amount, setAmount] = useState(100000);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const competitorCommission = amount * 0.35;
  const crevingsAmount = amount;

  return (
    <section id="savings" className="py-12 sm:py-20 lg:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Savings Calculator</Button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
            See How Much You Keep
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Use the calculator to see what you'd earn with Crevings versus commission-based apps.
          </p>
        </div>
        <Card className="mt-12 max-w-4xl mx-auto border-2 border-primary/20 shadow-primary/10 shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent to-70% opacity-50"></div>
          <CardHeader className="text-center relative">
            <CardTitle className="text-2xl font-headline">Monthly Sales Savings Calculator</CardTitle>
            <CardDescription>Drag the slider to adjust your estimated monthly sales.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <Label htmlFor="amount" className="text-lg font-bold min-w-fit">Monthly Sales:</Label>
                <div className="flex items-center gap-4 w-full">
                    <Slider
                        id="amount"
                        min={10000}
                        max={500000}
                        step={5000}
                        value={[amount]}
                        onValueChange={(value) => setAmount(value[0])}
                    />
                </div>
                <Input
                  type="text"
                  value={formatCurrency(amount)}
                  readOnly
                  className="text-2xl h-14 w-48 text-center font-bold font-headline bg-transparent border-primary/30"
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <Card className="p-6 bg-primary/10 border-primary/30">
                    <p className="font-bold text-primary">Crevings</p>
                    <p className="text-3xl font-bold font-headline mt-2">{formatCurrency(crevingsAmount)}</p>
                    <p className="text-sm mt-1">
                        <span className="text-primary font-bold italic">You Keep</span>
                    </p>
                </Card>
                 <Card className="p-6 bg-muted/50 border-border">
                    <p className="font-bold text-muted-foreground">Others</p>
                    <p className="text-3xl font-bold font-headline mt-2">{formatCurrency(amount - competitorCommission)}</p>
                    <p className="text-sm text-muted-foreground/80 mt-1">You would keep</p>
                </Card>
            </div>
             <p className="text-xs text-muted-foreground mt-4 text-center max-w-2xl mx-auto">
                *Calculation based on data we collect from food partners. We take an average 35% commission for other platforms which includes base commission, GST on commission, and other charges.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
