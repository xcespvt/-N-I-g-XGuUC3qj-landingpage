"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Twitter, Instagram, Linkedin } from "lucide-react";

const Logo = () => (
  <svg 
    width="240" 
    height="60" 
    viewBox="100 420 1100 250" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path d="M164.6,601.8L160.3,482l16.3-15.3h21.9v0h49.3l-2.2,28l-48.2,1.2l-0.2,4.8l-2.6,74.7v0l7.7,8.3l45.4-5.3V602l-14.1,11.3h-58.5L164.6,601.8z" fill="currentColor"/>
    <path d="M294,613.3h-38.8l5-141.8l4.1-4.8h24.6h51.9l11.2,9.8l-1.9,56.2l-5.5,8l-8.2,3.2l14.1,65.3l-3,3.9h-29.7l-8.7-58.5l-16.9,6.7L294,613.3z M314.7,496.7l-24.7,0L291,528l24.4-9.1L314.7,496.7z" fill="currentColor"/>
    <path d="M366.8,613.3l-5.2-146.6h80.6l7.5,5.4l-4.3,26.2h-46.1l-1.1,31.9h35.1V561h-36.1l-0.9,25.5l53.5-11.7l-3.7,30.5l-7.8,8H366.8z" fill="currentColor"/>
    <path d="M560.3,472.6l-22.1,123.8L527,613.3h-42l-11-8.6l-20.3-131.1l0.9-6.9h34.4l1,5.9l8.8,96.7h15.5l9.8-98l1.2-4.7h34.3L560.3,472.6z" fill="currentColor"/>
    <path d="M606.6,613.3h-38.8l5.2-146.6h28.5L606.6,613.3z" fill="currentColor"/>
    <path d="M653.1,534.4l2.7,78.9h-33.4l-5.2-5.3l4.9-138l1.3-0.9l3.7-2.5h23.6l35.9,78.7l-2.6-72.1l6.3-6.6h22.4l9.5,10.1l-4.5,128.4l-2.7,2.8l-5.1,5.3h-21L653.1,534.4z" fill="currentColor"/>
    <path d="M736.9,601.8L732.6,482l16.3-15.3h21.9v0h49.3l-2.2,28l-48.2,1.2l-0.2,4.8l-2.6,74.7v0l7.7,8.3l18.4-2.2v-16h-13.4l-1.2-25.2l30-3.7l11.6,12.6V602l-14.1,11.3h-58.5L736.9,601.8z" fill="currentColor"/>
    <path d="M860.1,494.8l-0.5,10.2l60.1,46.2v50.6l-9.5,11.4h-73.4l-7.8-7.1v-26.5l5.8-4.3l56.1,4.3l-0.2-11l-61.7-50l1.9-42l10.5-9.9h76.4l1.9,32.8l-3.2,4.2L860.1,494.8z" fill="currentColor"/>
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
