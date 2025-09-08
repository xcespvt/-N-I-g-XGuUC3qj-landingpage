
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import BenefitsMarquee from "@/components/landing/benefits-marquee";
import WhyPartner from "@/components/landing/why-partner";
import SubscriptionPlans from "@/components/landing/subscription-plans";
import Features from "@/components/landing/features";
import ServiceModes from "@/components/landing/service-modes";
import Footer from "@/components/landing/footer";
import SavingsCalculator from "@/components/landing/savings-calculator";
import Faq from "@/components/landing/faq";
import DownloadApp from "@/components/landing/download-app";
import WhoIsEligible from "@/components/landing/who-is-eligible";
import Comparison from "@/components/landing/comparison";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <BenefitsMarquee />
        <WhyPartner />
        <Comparison />
        <ServiceModes />
        <WhoIsEligible />
        <SubscriptionPlans />
        <Features />
        <SavingsCalculator />
        <Faq />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}
