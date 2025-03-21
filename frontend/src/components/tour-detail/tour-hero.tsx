import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, TrendingUp } from "lucide-react";
import { getDifficultyColor } from "@/utils/tour-utils";

interface TourHeroProps {
  name: string;
  imageCover: string;
  duration: number;
  location: string;
  difficulty: string;
}

export function TourHero({
  name,
  imageCover,
  duration,
  location,
  difficulty,
}: TourHeroProps) {
  const difficultyColorClass = getDifficultyColor(difficulty);

  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full">
      {/* Background Image */}
      <Image
        src={imageCover}
        alt={name}
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
        <div className="container">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/90 hover:bg-primary/90">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                {duration} days
              </Badge>

              <Badge className="bg-primary/90 hover:bg-primary/90">
                <MapPin className="mr-1 h-3.5 w-3.5" />
                {location}
              </Badge>

              <Badge className={`${difficultyColorClass} border capitalize`}>
                <TrendingUp className="mr-1 h-3.5 w-3.5" />
                {difficulty}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
              {name}
            </h1>

            <div className="mt-2 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              Discover America&apos;s most spectacular National Parks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
