
"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    value: "10,000+",
    label: "Food Partners",
  },
  {
    value: "1M+",
    label: "Orders Processed",
  },
  {
    value: "₹5Cr+",
    label: "Gross Order Value",
  },
  {
    value: "25+",
    label: "Cities we are available",
  }
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const numericValue = React.useMemo(() => {
    const match = value.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
  }, [value]);

  const suffix = React.useMemo(() => {
    const match = value.match(/([^\d\s.,].*)/);
    // If it's a currency symbol, don't append it as a suffix.
    if (match && /^[₹$€£]/.test(match[0])) return (value.includes('+') ? '+' : '');
    return match ? match[0].replace(/\+/g, '') + '+' : (value.includes('+') ? '+' : '');
  }, [value]);

  const prefix = React.useMemo(() => {
    const match = value.match(/^([^\d\s.,]+)/);
     return match ? match[0] : '';
  }, [value])


  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (numericValue === 0) return;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        setCount(Math.floor(progress * numericValue));
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animate();
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    
    const target = document.getElementById(`metric-${value}`);
    if(target) {
        observer.observe(target);
    }

    return () => observer.disconnect();

  }, [numericValue, value]);

  const formatNumber = (num: number) => {
    if (num >= 10000000) return (num / 10000000).toFixed(1) + "Cr";
    if (num >= 100000) return (num / 100000).toFixed(1) + "L";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toLocaleString('en-IN');
  };

  const getDisplayValue = () => {
    if(value.includes('Cr') || value.includes('M')) {
         const num = parseFloat(value.replace(/[^\d.]/g, ''));
         if(count >= 1) return (count/1).toFixed(0) + (value.includes('Cr') ? 'Cr' : 'M');
         return count.toFixed(1) + (value.includes('Cr') ? 'Cr' : 'M');
    }
    return formatNumber(count);
  }

  const displayCount = React.useMemo(() => {
    if(numericValue.toString().length > 3 && !value.includes('Cr') && !value.includes('M')) {
      if (count >= 1000) {
        return (count / 1000).toLocaleString('en-IN', {minimumFractionDigits: 0, maximumFractionDigits: 1}) + 'K';
      }
    }
    return count.toLocaleString('en-IN');

  }, [count, numericValue, value]);


  return <span id={`metric-${value}`}>{prefix}{displayCount}{suffix}</span>;
};

export default function KeyMetrics() {
  return (
    <section className="py-12 sm:py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Key Metrics</Button>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
                Join a Rapidly Growing Network
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Our platform is trusted by thousands, processing millions in orders.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-6xl mx-auto rounded-2xl overflow-hidden border">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={cn("p-8 text-center bg-background")}
            >
              <p className="text-5xl font-bold font-headline text-primary">
                <AnimatedCounter value={metric.value} />
              </p>
              <p className="mt-2 text-lg text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
