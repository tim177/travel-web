import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  Star,
  DollarSign,
  Award,
} from "lucide-react";
import type { Tour } from "@/types/tour";
import {
  getDifficultyColor,
  formatPrice,
  formatDate,
} from "@/utils/tour-utils";

interface TourOverviewProps {
  tour: Tour;
}

export function TourOverview({ tour }: TourOverviewProps) {
  const difficultyColorClass = getDifficultyColor(tour.difficulty);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Tour Overview</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Duration</div>
            <div className="font-medium">{tour.duration} days</div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Start Location</div>
            <div className="font-medium">{tour.startLocation.description}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Group Size</div>
            <div className="font-medium">Max {tour.maxGroupSize} people</div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Difficulty</div>
            <div>
              <Badge className={`${difficultyColorClass} border capitalize`}>
                {tour.difficulty}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Star className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Ratings</div>
            <div className="font-medium">
              {tour.ratingsAverage} / 5 ({tour.reviews.length} reviews)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <DollarSign className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Price</div>
            <div className="font-medium">
              ${formatPrice(tour.price)} per person
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Next Departure</div>
            <div className="font-medium">
              {tour.startDates.length > 0
                ? formatDate(tour.startDates[0])
                : "Contact us"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Experience</div>
            <div className="font-medium">Premium National Parks Tour</div>
          </div>
        </div>
      </div>
    </section>
  );
}
