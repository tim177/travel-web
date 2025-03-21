import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mountain, Compass, Users, Calendar } from "lucide-react";
import type { Location } from "@/types/tour";

interface TourHighlightsProps {
  locations: Location[];
  duration: number;
  difficulty: string;
}

export function TourHighlights({
  locations,
  duration,
  difficulty,
}: TourHighlightsProps) {
  // Generate highlights based on the tour data
  const highlights = [
    `Visit ${locations.length} stunning locations across ${duration} days`,
    `Experience the breathtaking views of ${locations
      .map((loc) => loc.description)
      .join(", ")}`,
    `Perfect for ${
      difficulty === "easy"
        ? "beginners"
        : difficulty === "medium"
        ? "intermediate travelers"
        : "experienced adventurers"
    }`,
    "Professional guides with extensive knowledge of the National Parks",
    "Small group experience with maximum 15 travelers",
    "All accommodations and transportation included",
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>

      <Card className="border-primary/10 overflow-hidden">
        <CardContent className="p-0">
          <div className="grid gap-0 sm:grid-cols-2">
            <div className="bg-primary/5 p-6 space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Compass className="h-5 w-5 text-primary" />
                <span>What You&apos;ll Experience</span>
              </h3>

              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Mountain className="h-5 w-5 text-primary" />
                <span>Key Features</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Expert-Led Exploration</div>
                    <p className="text-sm text-muted-foreground">
                      Guided tours of each National Park with knowledgeable
                      local experts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Small Group Experience</div>
                    <p className="text-sm text-muted-foreground">
                      Maximum 15 travelers for a personalized and intimate
                      experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">Flexible Itinerary</div>
                    <p className="text-sm text-muted-foreground">
                      Perfect balance of guided activities and free time to
                      explore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
