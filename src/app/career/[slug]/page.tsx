
import { notFound } from 'next/navigation';
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { jobs } from "@/app/career/page";
import Link from 'next/link';
import { ArrowLeft, Briefcase, MapPin, Clock, BarChart, IndianRupee, GraduationCap, CheckCircle, Gift, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

const getJob = (slug: string) => {
  return jobs.find((j) => j.slug === slug);
};

const benefits = [
    { icon: <Gift className="h-6 w-6" />, text: "Comprehensive health insurance" },
    { icon: <Clock className="h-6 w-6" />, text: "Flexible work hours & remote options" },
    { icon: <Heart className="h-6 w-6" />, text: "Generous parental leave" },
    { icon: <GraduationCap className="h-6 w-6" />, text: "Professional development stipend" },
]

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  const job = getJob(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
            <Link href="/career#open-positions" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-8 no-underline">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Open Positions</span>
            </Link>
            
            <div className='mb-8 p-6 bg-secondary/30 rounded-lg'>
                <Badge>{job.department}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline mt-4">{job.title}</h1>
                <div className="flex items-center gap-x-6 gap-y-2 text-muted-foreground mt-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span>{job.location}</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span>{job.type}</span>
                    </div>
                </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                
                <h2 className='text-2xl font-bold font-headline text-primary'>About this role</h2>
                <p className="text-muted-foreground">{job.description}</p>
                
                <h2 className='text-2xl font-bold font-headline text-primary'>Responsibilities</h2>
                <ul className='text-muted-foreground'>
                    {job.responsibilities.map((item, index) => <li key={index} className='flex items-start gap-2'><CheckCircle className='h-5 w-5 mt-1 text-primary/50 flex-shrink-0' /><span>{item}</span></li>)}
                </ul>

                <h2 className='text-2xl font-bold font-headline text-primary'>Skills & Qualifications</h2>
                <ul className='text-muted-foreground'>
                    {job.qualifications.map((item, index) => <li key={index} className='flex items-start gap-2'><CheckCircle className='h-5 w-5 mt-1 text-primary/50 flex-shrink-0' /><span>{item}</span></li>)}
                </ul>

                 <h2 className='text-2xl font-bold font-headline text-primary'>Education & Experience</h2>
                <ul className='text-muted-foreground'>
                    <li className='flex items-start gap-2'><CheckCircle className='h-5 w-5 mt-1 text-primary/50 flex-shrink-0' /><span>{job.experience} of relevant experience.</span></li>
                    <li className='flex items-start gap-2'><CheckCircle className='h-5 w-5 mt-1 text-primary/50 flex-shrink-0' /><span>{job.education}</span></li>
                </ul>
            </div>

            <div className='mt-16'>
                <h2 className='text-2xl font-bold font-headline text-primary text-center mb-8'>Our Benefits</h2>
                 <div className="grid md:grid-cols-2 gap-4 not-prose">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="bg-secondary/30 border-none">
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="p-3 bg-background rounded-full text-primary">
                                    {benefit.icon}
                                </div>
                                <p className="font-semibold">{benefit.text}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <Button size="lg" className="h-14 text-lg font-bold" asChild>
                    <Link href={`/career/${job.slug}/apply`}>Apply for this position</Link>
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
