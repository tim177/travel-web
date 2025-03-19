import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Star, CalendarDays, Heart } from "lucide-react";

interface SavedTourCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  days: number;
  slug: string;
  dateAdded: string;
}

function SavedTourCard({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  title,
  location,
  image,
  price,
  rating,
  days,
  slug,
  dateAdded,
}: SavedTourCardProps) {
  return (
    <Card className="nature-card overflow-hidden border-primary/10 hover-lift">
      <div className="relative aspect-[4/3]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/90 text-rose-500 hover:bg-white shadow-md"
        >
          <Heart className="h-4 w-4 fill-current" />
          <span className="sr-only">Remove from favorites</span>
        </Button>
      </div>
      <CardContent className="p-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <Star className="h-4 w-4 fill-yellow-500" />
              <span className="font-medium">{rating}</span>
              <span className="text-muted-foreground">
                ({Math.floor(rating * 10)} reviews)
              </span>
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              <span className="text-lg font-bold text-primary">${price}</span> /
              person
            </div>
          </div>
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5 text-primary" />
            <span>{days} days</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Saved on {dateAdded}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-primary/10 p-4 bg-primary/5">
        <Button
          variant="outline"
          size="sm"
          className="w-full border-primary/20 hover:bg-primary/10"
        >
          <Heart className="mr-1 h-4 w-4" />
          Remove
        </Button>
        <Button asChild size="sm" className="w-full">
          <Link href={`/tours/${slug}`}>View Tour</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProfileTours() {
  const savedTours = [
    {
      id: "1",
      title: "Enchanting Bali Retreat",
      location: "Bali, Indonesia",
      image: "/placeholder.svg?height=400&width=600",
      price: 1299,
      rating: 4.8,
      days: 7,
      slug: "enchanting-bali-retreat",
      dateAdded: "May 15, 2023",
    },
    {
      id: "2",
      title: "Majestic Swiss Alps",
      location: "Switzerland",
      image: "/placeholder.svg?height=400&width=600",
      price: 1899,
      rating: 4.9,
      days: 8,
      slug: "majestic-swiss-alps",
      dateAdded: "May 10, 2023",
    },
    {
      id: "3",
      title: "Ancient Greek Odyssey",
      location: "Greece",
      image: "/placeholder.svg?height=400&width=600",
      price: 1599,
      rating: 4.7,
      days: 10,
      slug: "ancient-greek-odyssey",
      dateAdded: "April 28, 2023",
    },
    {
      id: "4",
      title: "Serene Japanese Journey",
      location: "Japan",
      image: "/placeholder.svg?height=400&width=600",
      price: 2199,
      rating: 4.9,
      days: 12,
      slug: "serene-japanese-journey",
      dateAdded: "April 22, 2023",
    },
    {
      id: "5",
      title: "Vibrant Morocco Adventure",
      location: "Morocco",
      image: "/placeholder.svg?height=400&width=600",
      price: 1399,
      rating: 4.6,
      days: 9,
      slug: "vibrant-morocco-adventure",
      dateAdded: "April 15, 2023",
    },
    {
      id: "6",
      title: "Costa Rican Paradise",
      location: "Costa Rica",
      image: "/placeholder.svg?height=400&width=600",
      price: 1699,
      rating: 4.8,
      days: 8,
      slug: "costa-rican-paradise",
      dateAdded: "April 5, 2023",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Saved Tours</CardTitle>
          <CardDescription>
            Tours you&apos;ve saved for future reference
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedTours.map((tour) => (
              <SavedTourCard key={tour.id} {...tour} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t">
          <Button
            variant="outline"
            className="border-primary/20 bg-primary/5 hover:bg-primary/10"
          >
            Browse More Tours
          </Button>
        </CardFooter>
      </Card>

      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recently Viewed</CardTitle>
          <CardDescription>Tours you&apos;ve viewed recently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SavedTourCard
              id="7"
              title="Egyptian Wonders"
              location="Egypt"
              image="/placeholder.svg?height=400&width=600"
              price={1899}
              rating={4.7}
              days={11}
              slug="egyptian-wonders"
              dateAdded="Viewed 2 days ago"
            />
            <SavedTourCard
              id="8"
              title="New Zealand Explorer"
              location="New Zealand"
              image="/placeholder.svg?height=400&width=600"
              price={2499}
              rating={4.9}
              days={14}
              slug="new-zealand-explorer"
              dateAdded="Viewed 3 days ago"
            />
            <SavedTourCard
              id="9"
              title="Peruvian Highlights"
              location="Peru"
              image="/placeholder.svg?height=400&width=600"
              price={1799}
              rating={4.8}
              days={10}
              slug="peruvian-highlights"
              dateAdded="Viewed 5 days ago"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
