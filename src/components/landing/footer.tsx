
"use client"

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { PlayStoreIcon } from "@/components/ui/play-store-icon";
import { AppStoreIcon } from "@/components/ui/app-store-icon";

const apps = [
    { name: "Crevings", icon: placeholderImages.appIconUser },
    { name: "Crevings Food Partner", icon: placeholderImages.appIconPartner },
    { name: "Crevings Delivery Partner", icon: placeholderImages.appIconDelivery },
]

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Investor Relations", href: "/investor-relations" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Partner Signup", href: "/partner-signup" },
    { name: "Cities", href: "/cities" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Food Partner Privacy Policy", href: "/food-partner-privacy-policy" },
    { name: "Delivery Partner Privacy Policy", href: "/delivery-partner-privacy-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Payout Policy", href: "/payout-policy" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-12 sm:mt-20 lg:mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
                 <Link href="/" className="flex items-center gap-3">
                    <Logo className="text-white w-40 h-auto" />
                </Link>
                <p className="text-primary-foreground/80 text-base">
                    Good Food, Fair Prices, Delivered to You.
                </p>
                <div className="text-sm text-primary-foreground/80 space-y-1 pt-2">
                    <p><strong>Legal Name:</strong> Crevings Marketplace Private Limited</p>
                    <p><strong>CIN:</strong> U63122DL2025PTC456623</p>
                    <p><strong>GST:</strong> 07AANCC1790R1ZV</p>
                    <p><strong>FSSAI License:</strong> 13325999000746</p>
                </div>
                <div className="flex gap-4 pt-4">
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-125">
                        <Twitter className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-125">
                        <Instagram className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-125">
                        <Linkedin className="h-6 w-6" />
                    </Link>
                </div>
            </div>
            
            <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                    {companyLinks.map(link => (
                        <li key={link.name}>
                            <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                        <span className="text-sm">Innov8, Lower Ground Floor, Saket Salcon, Rasvilas, next to Select Citywalk Mall, Saket District Centre, District Centre, Sector 6, Pushp Vihar, New Delhi, Delhi 110017</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="h-5 w-5" />
                        <a href="mailto:support@crevings.com" className="hover:text-primary-foreground transition-colors text-sm">support@crevings.com</a>
                    </li>
                     <li className="flex items-center gap-3">
                        <Phone className="h-5 w-5" />
                        <a href="tel:+911234567890" className="hover:text-primary-foreground transition-colors text-sm">+91 123 456 7890</a>
                    </li>
                </ul>
            </div>
             <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                    {legalLinks.map(link => (
                        <li key={link.name}>
                            <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
            <div className="container text-center text-sm text-primary-foreground/70 font-headline">
                &copy; {new Date().getFullYear()} Crevings Marketplace Private Limited. All Rights Reserved.
            </div>
        </div>
    </footer>
  );
}
