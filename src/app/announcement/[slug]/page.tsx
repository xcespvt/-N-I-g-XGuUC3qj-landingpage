

import { notFound } from 'next/navigation';
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import announcements from "@/app/lib/announcements.json";
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

interface Announcement {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  image: {
    src: string;
    aiHint: string;
  };
}

export async function generateStaticParams() {
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }));
}

const getAnnouncement = (slug: string): Announcement | undefined => {
  return announcements.find((a) => a.slug === slug);
};

export default function AnnouncementDetailPage({ params }: { params: { slug: string } }) {
  const announcement = getAnnouncement(params.slug);

  if (!announcement) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <div className="mb-12">
                <Link href="/announcement" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-8 no-underline">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Announcements</span>
                </Link>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <Badge variant="outline" className="font-semibold text-primary border-primary">{announcement.category}</Badge>
                    <span>&bull;</span>
                    <time dateTime={announcement.date} className="text-sm">
                        {new Date(announcement.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                </div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline !mb-4">{announcement.title}</h1>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden mb-12 not-prose">
                <Image 
                    src={announcement.image.src}
                    alt={announcement.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={announcement.image.aiHint}
                    priority
                />
            </div>
          
            {announcement.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}
