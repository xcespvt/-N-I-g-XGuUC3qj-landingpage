
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Briefcase, BrainCircuit, HeartHandshake, Rocket, Scale, Clock, IndianRupee, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholderImages from "@/app/lib/placeholder-images.json";

const values = [
    {
        icon: <HeartHandshake className="h-8 w-8 text-primary" />,
        title: "Partner-First",
        description: "We are deeply committed to the success of our partners. Their growth is our growth.",
    },
    {
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: "Innovation",
        description: "We encourage creative solutions and out-of-the-box thinking to revolutionize the industry.",
    },
    {
        icon: <Scale className="h-8 w-8 text-primary" />,
        title: "Integrity",
        description: "We believe in transparency, honesty, and fairness in all our dealings.",
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        title: "Impact",
        description: "We are driven by a mission to make a tangible, positive impact on the food ecosystem.",
    }
];

export const jobs = [
    {
        title: "Senior Frontend Engineer",
        slug: "senior-frontend-engineer",
        department: "Engineering",
        location: "Delhi / Remote",
        type: "Full-time",
        experience: "5+ years",
        salary: "₹25-35 LPA",
        description: "We are seeking a Senior Frontend Engineer to build and shape the future of the Crevings platform. You will work with a modern tech stack to create a beautiful, performant, and reliable user experience for our partners and customers.",
        responsibilities: [
            "Develop and maintain user-facing features using React, Next.js, and TypeScript.",
            "Collaborate with product managers and designers to translate mockups into high-quality code.",
            "Optimize applications for maximum speed and scalability.",
            "Write clean, maintainable, and well-documented code.",
            "Mentor junior engineers and contribute to a culture of technical excellence."
        ],
        qualifications: [
            "Expertise in React, Next.js, and TypeScript.",
            "Strong understanding of HTML, CSS, and modern JavaScript (ES6+).",
            "Experience with Tailwind CSS and component libraries like ShadCN.",
            "Familiarity with state management libraries (e.g., Zustand, Redux).",
            "A passion for building exceptional user interfaces."
        ],
        education: "Bachelor's degree in Computer Science or a related field, or equivalent practical experience."
    },
    {
        title: "Head of Marketing",
        slug: "head-of-marketing",
        department: "Marketing",
        location: "Gurgaon",
        type: "Full-time",
        experience: "10+ years",
        salary: "₹40-50 LPA",
        description: "As the Head of Marketing, you will be responsible for developing and executing a comprehensive marketing strategy to drive brand awareness, partner acquisition, and customer growth. You will lead a team of talented marketers to position Crevings as the leading partner-first food delivery platform.",
        responsibilities: [
            "Develop and implement a cohesive marketing plan across all channels (digital, social, PR, events).",
            "Lead and mentor the marketing team to achieve ambitious growth targets.",
            "Manage the marketing budget and measure the ROI of all marketing initiatives.",
            "Oversee brand management, content strategy, and public relations.",
            "Collaborate with sales and product teams to align marketing efforts with business goals."
        ],
        qualifications: [
            "Proven track record of success in a high-growth startup environment (food-tech or e-commerce is a plus).",
            "Expertise in digital marketing, including SEO, SEM, social media, and content marketing.",
            "Strong analytical skills and experience with marketing automation and analytics tools.",
            "Exceptional leadership, communication, and interpersonal skills."
        ],
        education: "Master's degree in Marketing, Business Administration, or a related field."
    },
    {
        title: "Business Development Manager",
        slug: "business-development-manager",
        department: "Sales",
        location: "Mumbai",
        type: "Full-time",
        experience: "3-5 years",
        salary: "₹12-18 LPA",
        description: "We are looking for a results-driven Business Development Manager to identify and onboard new restaurant and home chef partners in Mumbai. You will be a key driver of our expansion efforts in one of our most strategic markets.",
         responsibilities: [
            "Identify, pitch, and onboard new food partners (restaurants and home chefs).",
            "Build and maintain strong relationships with partners to ensure their success on the platform.",
            "Achieve and exceed monthly and quarterly acquisition targets.",
            "Represent Crevings at industry events and build a strong network in the local food community.",
            "Provide feedback from partners to the product and marketing teams."
        ],
        qualifications: [
            "Strong sales, negotiation, and communication skills.",
            "Deep understanding of the Mumbai food and restaurant market.",
            "Self-motivated, target-oriented, and able to work independently.",
            "A passion for food and a belief in our mission to empower local businesses."
        ],
        education: "Bachelor's degree in Business, Marketing, or a related field."
},
    {
        title: "UI/UX Designer",
        slug: "ui-ux-designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        experience: "3+ years",
        salary: "₹15-22 LPA",
        description: "We are looking for a talented UI/UX Designer to create intuitive and visually appealing experiences across our consumer, partner, and delivery apps. You will play a critical role in shaping the user journey and ensuring our products are both beautiful and easy to use.",
        responsibilities: [
            "Design user flows, wireframes, prototypes, and high-fidelity mockups.",
            "Collaborate with product managers and engineers to define and implement innovative solutions.",
            "Conduct user research and usability testing to gather feedback and iterate on designs.",
            "Maintain and evolve our design system to ensure consistency across all platforms.",
            "Stay up-to-date with the latest UI/UX trends, techniques, and technologies."
        ],
        qualifications: [
            "A strong portfolio showcasing your design process and a range of UI/UX projects.",
            "Proficiency in design tools such as Figma, Sketch, or Adobe XD.",
            "Experience with user research and usability testing methodologies.",
            "Excellent visual design skills with a keen eye for detail and aesthetics."
        ],
        education: "Degree or certification in Graphic Design, UI/UX Design, Human-Computer Interaction, or a related field."
    }
]

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-36 text-center">
            <div className="absolute inset-0">
                <Image 
                    src={placeholderImages.teamCollage.src} 
                    alt="Crevings Team" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="brightness-50"
                    data-ai-hint={placeholderImages.teamCollage.aiHint}
                    priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="container relative text-white">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-headline text-white">
                   Join Our Mission
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                    Be a part of a team that's revolutionizing the food industry. We're looking for passionate, innovative people to help us build a fairer future for food.
                </p>
                 <Button size="lg" className="mt-8" asChild>
                    <a href="#open-positions">View Open Positions</a>
                </Button>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why Join Us?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        At Crevings, you'll work with a talented team on a mission that matters. We foster a culture of growth, collaboration, and impact.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {values.map((value) => (
                        <Card key={value.title} className="text-center p-6 bg-secondary/30 border-none transition-all duration-300 hover:scale-105">
                            <CardContent className="p-0">
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-background rounded-full">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold font-headline">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

         <section id="open-positions" className="py-16 sm:py-24 bg-secondary/30">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Open Positions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Find your next career opportunity. We're looking for talented individuals to join our growing team across various departments.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {jobs.map((job) => (
                        <Card key={job.title} className="transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:bg-background">
                            <CardContent className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                                    <div className="md:col-span-2">
                                        <h3 className="text-xl font-bold font-headline text-primary">{job.title}</h3>
                                        <p className="text-muted-foreground mt-2">{job.description}</p>
                                        <div className="flex items-center gap-x-6 gap-y-2 text-muted-foreground mt-4 flex-wrap text-sm">
                                            <div className="flex items-center gap-2" title="Department">
                                                <Briefcase className="h-4 w-4" />
                                                <span>{job.department}</span>
                                            </div>
                                            <div className="flex items-center gap-2" title="Location">
                                                <MapPin className="h-4 w-4" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2" title="Employment Type">
                                                <Clock className="h-4 w-4" />
                                                <span>{job.type}</span>
                                            </div>
                                             <div className="flex items-center gap-2" title="Experience">
                                                <BarChart className="h-4 w-4" />
                                                <span>{job.experience}</span>
                                            </div>
                                            <div className="flex items-center gap-2" title="Salary">
                                                <IndianRupee className="h-4 w-4" />
                                                <span>{job.salary}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:text-right">
                                        <Button asChild size="lg">
                                            <Link href={`/career/${job.slug}`}>
                                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                 <p className="text-center mt-12 text-muted-foreground">
                    Don't see a role that fits? <Link href="/contact-us" className="text-primary font-semibold hover:underline">Get in touch</Link> and tell us how you can make an impact.
                </p>
            </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container">
                 <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Perks & Benefits</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We invest in our team's well-being and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <Card className="p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                        <h3 className="text-xl font-bold">Health & Wellness</h3>
                        <p className="text-muted-foreground">Comprehensive health insurance for you and your family.</p>
                    </Card>
                     <Card className="p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                        <h3 className="text-xl font-bold">Flexible Work</h3>
                        <p className="text-muted-foreground">Remote-friendly options and flexible hours to support work-life balance.</p>

                    </Card>
                    <Card className="p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                        <h3 className="text-xl font-bold">Professional Growth</h3>
                        <p className="text-muted-foreground">Opportunities for learning, development, and career advancement.</p>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
