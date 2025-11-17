
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";

export default function DeliveryPartnerPrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold">Delivery Partner Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Details about the delivery partner privacy policy will go here.</p>
      </main>
      <Footer />
    </div>
  );
}
