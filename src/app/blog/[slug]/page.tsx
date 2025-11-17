
import { notFound } from 'next/navigation';
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import blogs from "@/app/lib/blogs.json";
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft, UserCircle, Calendar } from 'lucide-react';
import Image from 'next/image';

interface Blog {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  summary: string;
  content: string[];
  image: {
    src: string;
    aiHint: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const getBlog = (slug: string): Blog | undefined => {
  return blogs.find((b) => b.slug === slug);
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            <div className="mb-12">
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-8 no-underline">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Blog</span>
                </Link>
                <Badge variant="outline" className="font-semibold text-primary border-primary mb-4">{blog.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline !mb-6">{blog.title}</h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-base">
                    <div className="flex items-center gap-2">
                        <UserCircle className="h-5 w-5" />
                        <span>{blog.author}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        <time dateTime={blog.date}>
                            {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </time>
                    </div>
                </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden mb-12 not-prose">
                <Image 
                    src={blog.image.src}
                    alt={blog.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={blog.image.aiHint}
                    priority
                />
            </div>
          
            {blog.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">{paragraph}</p>
            ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}
