import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Star, Heart } from "lucide-react";
import { formatDate } from "@/utils/tour-utils";
import { Tour } from "@/types/tours";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  // Format the nearest start date
  const nextStartDate =
    tour.startDates.length > 0
      ? formatDate(tour.startDates[0])
      : "Flexible dates";

  // Determine if tour is featured (high rating)
  const isFeatured = tour.ratingsAverage >= 4.8;

  return (
    <Card className="group overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-[4/3]">
        <Image
          src={
            tour.imageCover
              ? `http://localhost:5000/img/tours/${tour.imageCover}`
              : "/placeholder.svg"
          }
          alt={tour.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
        {isFeatured && (
          <Badge className="absolute left-3 top-3 bg-primary/90 hover:bg-primary/90">
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/90 text-muted-foreground hover:bg-white hover:text-rose-500"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Save to favorites</span>
        </Button>

        <div className="absolute bottom-0 w-full p-4 text-white">
          <h3 className="mb-1 text-xl font-bold leading-tight">{tour.name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="h-3.5 w-3.5" />
            <span>{tour.startLocation.description}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <Star className="h-4 w-4 fill-yellow-500" />
              <span className="font-medium">{tour.ratingsAverage}</span>
              <span className="text-muted-foreground">
                {/* ({tour.ratingQuality} reviews) */}
              </span>
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              <span className="text-xl font-bold text-primary">
                ${tour.price}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5 text-primary" />
              <span>{tour.duration} days</span>
            </div>
            <div className="flex items-center gap-1">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5"
              >
                {tour.difficulty}
              </Badge>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {tour.summary}
          </p>

          <div className="text-xs text-muted-foreground">
            Next departure: {nextStartDate}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-primary/10 p-4 bg-primary/5">
        <Button asChild size="sm" className="w-full">
          <Link href={`/tours/${tour._id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
