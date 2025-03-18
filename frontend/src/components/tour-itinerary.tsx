import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface TourItineraryProps {
  itinerary: ItineraryDay[];
}

export function TourItinerary({ itinerary }: TourItineraryProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Itinerary</h2>
      <Accordion type="single" collapsible className="w-full">
        {itinerary.map((day, index) => (
          <AccordionItem key={index} value={`day-${day.day}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  Day {day.day}
                </div>
                <span className="font-medium">{day.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-14 text-muted-foreground">
                {day.description}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
