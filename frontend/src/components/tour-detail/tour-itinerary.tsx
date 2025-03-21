import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import type { Location } from "@/types/tour";

interface TourItineraryProps {
  locations: Location[];
}

export function TourItinerary({ locations }: TourItineraryProps) {
  // Sort locations by day
  const sortedLocations = [...locations].sort((a, b) => a.day - b.day);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>

      <Card className="border-primary/10 overflow-hidden">
        <CardHeader className="bg-primary/5 border-b border-primary/10 pb-3 pt-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Day-by-Day Schedule</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Accordion type="single" collapsible className="w-full">
            {sortedLocations.map((location) => (
              <AccordionItem
                key={location._id}
                value={`day-${location.day}`}
                className="border-primary/10"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      Day {location.day}
                    </div>
                    <div>
                      <span className="font-medium">
                        {location.description}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>
                          Coordinates: {location.coordinates[1].toFixed(4)},{" "}
                          {location.coordinates[0].toFixed(4)}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14 pr-4 pb-4 text-muted-foreground">
                  <div className="space-y-3">
                    <p>
                      Explore the magnificent {location.description} and its
                      surroundings. Experience the local culture, natural
                      wonders, and breathtaking landscapes that make this
                      location famous.
                    </p>

                    <div className="rounded-lg bg-primary/5 p-3 text-sm">
                      <h4 className="font-medium mb-1">Daily Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Guided tour of key attractions</li>
                        <li>Free time for personal exploration</li>
                        <li>Photography opportunities at scenic viewpoints</li>
                        <li>
                          Optional hiking trails for different fitness levels
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
