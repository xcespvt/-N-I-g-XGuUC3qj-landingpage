
import { notFound } from 'next/navigation';
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { jobs } from "@/app/career/page";
import CareerApplicationForm from '@/components/landing/career-application-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

const getJob = (slug: string) => {
  return jobs.find((j) => j.slug === slug);
};

export default function CareerApplicationPage({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
            <Link href={`/career/${job.slug}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-8 no-underline">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Job Details</span>
            </Link>
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">Apply for</h1>
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">{job.title}</h2>
            </div>
            <CareerApplicationForm jobTitle={job.title} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
