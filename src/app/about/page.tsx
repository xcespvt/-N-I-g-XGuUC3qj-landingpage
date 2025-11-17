
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const leadership = [
    { name: "Aarav Sharma", title: "Founder & CEO", image: placeholderImages.leader1, linkedin: "#" },
    { name: "Diya Mehta", title: "Chief Technology Officer", image: placeholderImages.leader2, linkedin: "#" },
    { name: "Rohan Kapoor", title: "Chief Operating Officer", image: placeholderImages.leader3, linkedin: "#" },
    { name: "Priya Singh", title: "Head of Partner Relations", image: placeholderImages.leader4, linkedin: "#" },
];

const investors = [
    { name: "Pioneer Ventures", description: "Leading the change in tech investments." },
    { name: "Growth Capital", description: "Fueling the next generation of startups." },
    { name: "AngelList India", description: "Supporting innovative Indian entrepreneurs." },
    { name: "SeedFund", description: "Early-stage investors with a focus on impact." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-36 text-center text-white">
            <div className="absolute inset-0">
                <Image 
                    src={placeholderImages.aboutHero.src} 
                    alt="About Crevings" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="brightness-50"
                    data-ai-hint={placeholderImages.aboutHero.aiHint}
                    priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="container relative">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline text-white">
                   Revolutionizing the Food Industry
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                    Crevings is on a mission to create a fair, transparent, and sustainable ecosystem where restaurants, home chefs, and customers thrive together.
                </p>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About Crevings</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Crevings was born from a simple idea: to create a food delivery platform that puts partners first. We saw the challenges restaurant owners and home chefs faced with high commissions and lack of control, and we knew there had to be a better way. Today, we are proud to offer a 0% commission model that empowers food businesses to thrive.
                        </p>
                    </div>
                     <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                         <Image src={placeholderImages.aboutUs.src} alt="About Crevings" fill objectFit="cover" data-ai-hint={placeholderImages.aboutUs.aiHint} />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl order-last md:order-first">
                         <Image src={placeholderImages.mission.src} alt="Our Mission" fill objectFit="cover" data-ai-hint={placeholderImages.mission.aiHint} />
                    </div>
                    <div className="order-first md:order-last">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Mission</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                           Our mission is to build a fair, transparent, and sustainable food ecosystem. We are committed to empowering local restaurants and home chefs with the tools, technology, and support they need to succeed. We aim to foster a community where every partner can grow their business and customers can enjoy good food at fair prices.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Vision</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Our vision is to empower local food businesses by providing a 0% commission platform that helps them grow and succeed. We believe in fair pricing, transparent practices, and a collaborative approach that benefits the entire food community. We're not just a delivery service; we're a partner in growth for every restaurant and home chef on our platform.
                        </p>
                    </div>
                     <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                         <Image src={placeholderImages.aboutHero.src} alt="Our Vision" fill objectFit="cover" data-ai-hint={placeholderImages.aboutHero.aiHint} />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl order-last md:order-first">
                         <Image src={placeholderImages.teamCollage.src} alt="Our Approach" fill objectFit="cover" data-ai-hint="business strategy" />
                    </div>
                    <div className="order-first md:order-last">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Approach</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We take a partner-first approach. By eliminating commissions and providing powerful tools for marketing, analytics, and operations, we create a sustainable model where our partners' success is our success. We invest in technology that simplifies management and in a community that fosters collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Meet Our Leadership</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        The driving force behind our mission to build a better food ecosystem.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {leadership.map((leader) => (
                        <div key={leader.name} className="text-center">
                            <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20 shadow-lg">
                                <AvatarImage src={leader.image.src} alt={leader.name} data-ai-hint={leader.image.aiHint} />
                                <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <h3 className="mt-4 text-xl font-bold font-headline">{leader.name}</h3>
                            <p className="text-primary font-medium">{leader.title}</p>
                            <Link href={leader.linkedin} className="mt-2 inline-block text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="py-16 sm:py-24 bg-secondary/30">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                         <Image src={placeholderImages.teamPhoto.src} alt="Our Team" fill objectFit="cover" data-ai-hint={placeholderImages.teamPhoto.aiHint} />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Team</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                           We are a passionate team of innovators, food lovers, and problem-solvers dedicated to making a difference. Our diverse backgrounds and shared vision drive us to create a platform that truly serves our community.
                        </p>
                        <Button asChild size="lg" className="mt-6">
                            <Link href="/career">Join Our Team</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Investors</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We are proud to be backed by leading investors who believe in our vision and support our journey.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {investors.map((investor) => (
                        <Card key={investor.name} className="text-center p-6 bg-background transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                            <CardContent className="p-0">
                                <h3 className="text-xl font-bold text-primary">{investor.name}</h3>
                                <p className="mt-2 text-muted-foreground">{investor.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
