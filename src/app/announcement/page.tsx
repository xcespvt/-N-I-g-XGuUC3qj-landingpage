
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import announcements from "@/app/lib/announcements.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AnnouncementPage() {
  const sortedAnnouncements = [...announcements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Announcements</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay up-to-date with the latest news and updates from Crevings.
            </p>
        </div>
        <div className="grid gap-8 max-w-3xl mx-auto">
            {sortedAnnouncements.map((announcement) => (
                <Card key={announcement.slug} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                    <CardHeader>
                        <p className="text-sm text-muted-foreground">{new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <CardTitle className="text-2xl font-headline">
                            <Link href={`/announcement/${announcement.slug}`} className="hover:text-primary transition-colors">
                                {announcement.title}
                            </Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{announcement.summary}</CardDescription>
                        <Button variant="link" asChild className="p-0 mt-4 font-semibold">
                            <Link href={`/announcement/${announcement.slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
