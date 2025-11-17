
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import blogs from "@/app/lib/blogs.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserCircle } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">From the Crevings Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Insights, stories, and tips for our food partners and community.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sortedBlogs.map((blog) => (
                <Card key={blog.slug} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                    <Link href={`/blog/${blog.slug}`} className="block">
                        <div className="relative aspect-video rounded-t-lg overflow-hidden">
                             <Image 
                                src={blog.image.src}
                                alt={blog.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                data-ai-hint={blog.image.aiHint}
                            />
                        </div>
                    </Link>
                    <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-semibold text-primary">{blog.category}</span>
                             <span>&bull;</span>
                            <time dateTime={blog.date}>
                                {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </time>
                        </div>
                        <CardTitle className="text-xl font-headline">
                            <Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
                                {blog.title}
                            </Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <CardDescription className="flex-grow">{blog.summary}</CardDescription>
                         <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 pt-4 border-t">
                            <UserCircle className="h-5 w-5" />
                            <span>{blog.author}</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
