
"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="hsl(var(--primary))"/>
        <path d="M12 12.28c-1.43-1.43-3.66-1.2-4.69.15-1.13 1.48-.63 3.63.98 4.79 1.95 1.4 4.7.9 6.1-.98.98-1.28.69-3.07-.49-4.25" fill="hsl(var(--primary))"/>
    </svg>
)

const navLinks: { name: string, href: string }[] = [
    { name: "Home", href: "/" },
]

const policyLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Payout Policy", href: "/payout-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
            <Logo />
            <span className="text-2xl font-bold font-headline">Crevings</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
             <div className="flex h-full flex-col">
              <div className="flex items-center p-4 border-b">
                 <Link href="/" className="flex items-center gap-3">
                    <Logo />
                    <span className="text-2xl font-bold font-headline">Crevings</span>
                </Link>
              </div>
              <div className="flex-1 p-4 space-y-4">
                <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="font-medium text-lg">
                        {link.name}
                      </Link>
                    ))}
                </nav>
                <div className="h-px bg-border" />
                <nav className="flex flex-col gap-4">
                  {policyLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="font-medium text-muted-foreground">
                        {link.name}
                      </Link>
                    ))}
                </nav>
              </div>
              <div className="p-4 border-t space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact-us">Contact us</Link>
                </Button>
                <Button className="w-full">Partner with us</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
