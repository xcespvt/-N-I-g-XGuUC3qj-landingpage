
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, TrendingUp, Target, ShieldCheck, Users, FileClock } from "lucide-react";
import announcements from "@/app/lib/announcements.json";
import Link from "next/link";

const investmentHighlights = [
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Rapid Market Growth",
        description: "Expanding footprint across major Indian cities with a proven 0% commission model that is disrupting the market.",
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Large Addressable Market",
        description: "Targeting the multi-billion dollar food delivery industry in India with a unique, partner-friendly proposition.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Scalable Technology Platform",
        description: "Robust, AI-powered platform designed for scalability, supporting millions of transactions and providing deep analytics.",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Strong Partner Network",
        description: "Rapidly growing network of over 10,000 food partners, demonstrating strong market validation and loyalty.",
    },
]

export default function InvestorRelationsPage() {
  const latestAnnouncements = [...announcements]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 text-center bg-secondary/30">
            <div className="container">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline">
                   Investor Relations
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    We are on a mission to build a fair, transparent, and sustainable food ecosystem. Discover how we're creating value for our partners, customers, and investors.
                </p>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Investment Highlights</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Crevings is positioned for exceptional growth, driven by a disruptive business model and a massive market opportunity.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {investmentHighlights.map((highlight) => (
                        <Card key={highlight.title} className="p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    {highlight.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{highlight.title}</h3>
                            <p className="mt-2 text-muted-foreground">{highlight.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Financial Reports</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Access our latest financial reports and company filings.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <Card>
                        <CardContent className="p-8 text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    <FileClock className="h-10 w-10" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-primary">Coming Soon</h3>
                            <p className="mt-2 text-muted-foreground">
                                Our first financial report will be published soon. Stay tuned for updates.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

         <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Recent News</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Stay informed with our latest announcements and press releases.
                    </p>
                </div>
                 <div className="grid gap-8 max-w-3xl mx-auto">
                    {latestAnnouncements.map((announcement) => (
                        <Card key={announcement.slug} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 p-6">
                             <p className="text-sm text-muted-foreground mb-2">{new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <h3 className="text-xl font-headline font-bold">
                                <Link href={`/announcement/${announcement.slug}`} className="hover:text-primary transition-colors">
                                    {announcement.title}
                                </Link>
                            </h3>
                            <p className="mt-2 text-muted-foreground">{announcement.summary}</p>
                        </Card>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button asChild>
                        <Link href="/announcement">View All Announcements</Link>
                    </Button>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container text-center">
                 <div className="max-w-2xl mx-auto">
                     <h2 className="text-3xl md:text-4xl font-bold">Investor Inquiries</h2>
                     <p className="mt-4 text-lg text-muted-foreground">
                        For questions or information regarding investment opportunities, please contact our investor relations team.
                    </p>
                    <Card className="mt-8 p-6 inline-flex items-center gap-4 bg-background transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:investors@crevings.com" className="text-lg font-semibold hover:text-primary transition-colors">
                            investors@crevings.com
                        </a>
                    </Card>
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
