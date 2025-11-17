
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
    name: "Amit Kumar",
    position: "Delivery Partner, Delhi",
    review: "Riding with Crevings has been great. The flexible hours allow me to work around my schedule, and the weekly payments are always on time. The support team is also very helpful.",
    avatar: "AK",
  },
  {
    name: "Priya Sharma",
    position: "Delivery Partner, Mumbai",
    review: "I've been a delivery partner for a few months now, and I'm really happy with the experience. The earnings are competitive, and I appreciate being part of a respectful community.",
    avatar: "PS",
  },
  {
    name: "Rajesh Singh",
    position: "Delivery Partner, Bangalore",
    review: "The onboarding process was quick and easy. I was able to start earning within a few days. The app is user-friendly, and I get a steady stream of orders during my shifts.",
    avatar: "RS",
  },
  {
    name: "Sneha Patel",
    position: "Delivery Partner, Gurgaon",
    review: "Crevings truly cares about its delivery partners. They provide great support and ensure we have everything we need to do our job well. I'm proud to ride with them.",
    avatar: "SP",
  },
  {
    name: "Vikram Rathod",
    position: "Delivery Partner, Pune",
    review: "I love the flexibility. I can choose to work part-time or full-time, depending on my needs. It's a great way to earn extra income on my own terms.",
    avatar: "VR",
  },
];

export default function DeliveryPartnerReviews() {
  return (
    <section id="reviews" className="py-12 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Button variant="outline" className="rounded-full mb-4 border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold" disabled>Partner Stories</Button>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">
            What Our Riders Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from the delivery partners who are happily earning with Crevings.
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
                 <Card className="h-full p-6 bg-background flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
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
