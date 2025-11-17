
import Header from "@/components/landing/header";
import ContactForm from "@/components/landing/contact-form";
import { Mail, Phone, Building } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/landing/footer";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="text-center">
                 <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Get in touch
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground">
                  Our team would love to hear from you.
                </p>
            </div>
            <div className="mt-16">
                <ContactForm />
            </div>

            <div className="mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Other Ways to Connect</h2>
                    <p className="text-muted-foreground mt-2">Find us at our office or get in touch through our other channels.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Partner Helpline</h3>
                            <p className="text-muted-foreground mt-1 text-sm">Our team is here to help you from 9am to 9pm.</p>
                            <a href="tel:+911234567890" className="font-medium text-primary mt-2 inline-block text-sm">+91 123 456 7890</a>
                        </div>
                    </Card>
                     <Card className="p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Building className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Office Address</h3>
                            <p className="text-muted-foreground mt-1 text-sm">
                                Lower Ground Floor, Saket Salcon, Rasvilas, New Delhi, Delhi 110017.
                            </p>
                        </div>
                    </Card>
                    <Card className="p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Email Support</h3>
                            <p className="text-muted-foreground mt-1 text-sm">For any queries, email us and we’ll get back to you.</p>
                            <a href="mailto:support@crevings.com" className="font-medium text-primary mt-2 inline-block text-sm">support@crevings.com</a>
                        </div>
                    </Card>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
