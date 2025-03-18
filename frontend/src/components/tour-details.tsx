import { Check, MapPin, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface TourDetailsProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  days: number;
  description: string;
  highlights: string[];
  included: string[];
}

export function TourDetails({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title,
  location,
  rating,
  reviewCount,
  days,
  description,
  highlights,
  included,
}: TourDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{location}</span>
          <Separator orientation="vertical" className="mx-1 h-4" />
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">
              ({reviewCount} reviews)
            </span>
          </div>
          <Separator orientation="vertical" className="mx-1 h-4" />
          <span className="text-muted-foreground">{days} days</span>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Highlights</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">What&apos;s Included</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {included.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-1 h-4 w-4 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
