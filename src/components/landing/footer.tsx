
"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Twitter, Instagram, Linkedin } from "lucide-react";

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="hsl(var(--primary))"/>
        <path d="M12 12.28c-1.43-1.43-3.66-1.2-4.69.15-1.13 1.48-.63 3.63.98 4.79 1.95 1.4 4.7.9 6.1-.98.98-1.28.69-3.07-.49-4.25" fill="hsl(var(--primary))"/>
    </svg>
)

export default function Footer() {

  return (
    <footer className="bg-secondary/30 mt-12 sm:mt-20 lg:mt-24">
      <div className="container py-12 sm:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
            Your Food. Your Profits. Your Growth.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join Crevings today and become part of India’s first 0% commission food delivery platform.
          </p>
          <div className="mt-10 flex justify-center">
             <Button size="lg" className="h-14 px-8 text-lg font-semibold">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-12 grid md:grid-cols-3 gap-12">
            <div className="space-y-4 md:col-span-2">
                 <Link href="/" className="flex items-center gap-3">
                    <Logo />
                    <span className="text-2xl font-bold font-headline">Crevings</span>
                </Link>
                <p className="text-muted-foreground text-base">
                    Good Food, Fair Prices, Delivered to You.
                </p>
                <div className="text-sm text-muted-foreground space-y-2 pt-4">
                    <p>
                       Lower Ground Floor, Saket Salcon, Rasvilas, next to Select Citywalk Mall, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, Delhi 110017.
                    </p>
                    <p><strong>CIN:</strong> 26272728BDGSH27</p>
                    <p><strong>GST:</strong> 2626272AHEHE</p>
                </div>
            </div>
            <div className="md:col-span-1">
                <h3 className="font-semibold mb-4">Follow us</h3>
                <div className="flex gap-4">
                    <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                        <Twitter className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                        <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary hover:opacity-80 transition-opacity">
                        <Linkedin className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
