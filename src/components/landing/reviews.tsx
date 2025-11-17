
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Rohan Kapoor",
    position: "Owner, The Curry House",
    review: "Joining Crevings was the best decision for my business. The 0% commission model has significantly boosted our profits, and the platform is incredibly easy to use. Our orders have doubled!",
    avatar: "RK",
  },
  {
    name: "Priya Singh",
    position: "Home Chef, Priya's Kitchen",
    review: "As a home chef, Crevings gave me the platform I needed to reach my community. The 'Mom’s Magic' section is a fantastic idea. I'm finally turning my passion into a real business.",
    avatar: "PS",
  },
  {
    name: "Ankit Sharma",
    position: "Manager, Bella Italia",
    review: "The savings are real. We were losing so much to commissions before. Now, we can invest back into our restaurant. The dashboard analytics are also a game-changer for understanding our customers.",
    avatar: "AS",
  },
  {
    name: "Sunita Gupta",
    position: "Owner, Gupta Sweets",
    review: "A fantastic platform for local businesses. The support team is always helpful, and the quick payouts have improved our cash flow immensely. Highly recommended!",
    avatar: "SG",
  },
  {
    name: "David Chen",
    position: "Cloud Kitchen Operator",
    review: "The analytics are incredibly insightful. We've been able to optimize our menu and pricing based on real customer data, which has been invaluable for our growth.",
    avatar: "DC",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Reviews</Button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
            What Our Partners Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from restaurant owners and home chefs who are growing with Crevings.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                 <Card className="h-full p-6 bg-background flex flex-col">
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground italic mb-4">"{review.review}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-6">
                      <Avatar>
                        <AvatarFallback>{review.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-primary">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.position}</p>
                      </div>
                    </div>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
