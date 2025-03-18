import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Star } from "lucide-react";

interface TourCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  days: number;
  image: string;
  slug: string;
}

export function TourCard({
  title,
  location,
  price,
  rating,
  days,
  image,
  slug,
}: TourCardProps) {
  return (
    <Link href={`/tours/${slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative aspect-[4/3]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          <Badge className="absolute right-2 top-2 bg-primary/90 hover:bg-primary/90">
            Best Seller
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-yellow-500">
                <Star className="h-4 w-4 fill-yellow-500" />
                <span className="font-medium">{rating}</span>
                <span className="text-muted-foreground">
                  ({Math.floor(rating * 10)} reviews)
                </span>
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                <span className="text-lg font-bold text-primary">${price}</span>{" "}
                / person
              </div>
            </div>
            <h3 className="font-bold leading-tight">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t p-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{days} days</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
