
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const deliveryDocuments = [
  { number: 1, text: "Aadhar Card" },
  { number: 2, text: "PAN Card" },
  { number: 3, text: "Bank Account Details" },
  { number: 4, text: "Vehicle RC" },
  { number: 5, text: "Driving License" },
];

const restaurantDocuments = [
    { number: 1, text: "FSSAI License" },
    { number: 2, text: "GST Certificate" },
    { number: 3, text: "Bank Account Details" },
    { number: 4, text: "PAN Card" },
    { number: 5, text: "Restaurant Menu" },
];

export default function DocumentsRequired({ partnerType }: { partnerType: 'delivery' | 'restaurant' }) {
  const documents = partnerType === 'delivery' ? deliveryDocuments : restaurantDocuments;
  
  return (
    <section className="py-16 sm:py-24">
      <div className="container flex justify-center">
        <Card className="max-w-md w-full bg-background border border-border/50 p-8">
            <div className="relative mb-8 w-full overflow-hidden rounded-lg aspect-video">
              <iframe 
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <CardHeader className="p-0 text-left">
                <CardTitle className="text-3xl font-bold font-headline text-center">
                    Documents Required For <span className="text-primary">Onboarding</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-8">
                <div className="relative">
                    <ul className="space-y-4">
                        {documents.map((doc, index) => (
                        <li key={doc.number} className="flex items-center gap-6 relative">
                            <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-primary text-xl font-bold text-primary">
                                {doc.number}
                            </div>
                            <p className="text-lg font-medium">{doc.text}</p>
                            {index < documents.length - 1 && (
                                <div className="absolute left-5 top-10 h-10 border-l-2 border-dashed border-primary/50"></div>
                            )}
                        </li>
                        ))}
                    </ul>
                </div>
                <Button size="lg" className="w-full mt-12 h-14 text-lg font-headline font-bold">Get Started</Button>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}
