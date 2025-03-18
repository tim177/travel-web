import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  image: string;
  rating: number;
}

function Testimonial({
  quote,
  author,
  location,
  image,
  rating,
}: TestimonialProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        <div className="mt-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted"
              }`}
            />
          ))}
        </div>
        <blockquote className="mt-4 text-muted-foreground">{quote}</blockquote>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our trip to Japan was flawlessly organized. Every detail was taken care of, allowing us to fully immerse ourselves in the culture and beauty of the country.",
      author: "Sarah Johnson",
      location: "New York, USA",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "The guided tour through Italy exceeded all our expectations. The local insights and hidden gems we discovered made this journey truly special.",
      author: "Michael Chen",
      location: "Toronto, Canada",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "From the moment we booked until our return home, the service was impeccable. Our family adventure in Costa Rica will be remembered forever.",
      author: "Emma Rodriguez",
      location: "London, UK",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
  ];

  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          What Our Travelers Say
        </h2>
        <p className="mt-4 text-muted-foreground">
          Hear from those who have experienced our tours firsthand
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            location={testimonial.location}
            image={testimonial.image}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
}
