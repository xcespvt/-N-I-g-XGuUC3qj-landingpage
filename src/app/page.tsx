
import Header from "@/components/landing/header";
import KeyMetrics from "@/components/landing/key-metrics";
import WhyPartner from "@/components/landing/why-partner";
import SubscriptionPlans from "@/components/landing/subscription-plans";
import ServiceModes from "@/components/landing/service-modes";
import Footer from "@/components/landing/footer";
import SavingsCalculator from "@/components/landing/savings-calculator";
import Faq from "@/components/landing/faq";
import WhoIsEligible from "@/components/landing/who-is-eligible";
import Comparison from "@/components/landing/comparison";
import Reviews from "@/components/landing/reviews";
import Hero from "@/components/landing/hero";
import HowItWorksRestaurants from "@/components/landing/how-it-works-restaurants";

export default function ForRestaurantsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyPartner />
        {/* <KeyMetrics /> */}
        <WhoIsEligible />
        <Comparison />
        <ServiceModes />
        <HowItWorksRestaurants />
        <SubscriptionPlans />
        <SavingsCalculator />
        {/* <Reviews /> */}
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
