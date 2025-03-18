"use client";

import { useState } from "react";
import { CalendarIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface TourBookingProps {
  price: number;
  days: number;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TourBooking({ price, days, title }: TourBookingProps) {
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState("2");

  const handleBookNow = () => {
    alert(
      `Booking ${title} for ${travelers} travelers on ${
        date ? format(date, "PPP") : "TBD"
      }`
    );
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h3 className="text-xl font-bold">Book This Tour</h3>
          <p className="text-sm opacity-90">Secure your spot today</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">${price}</div>
          <div className="text-muted-foreground">per person</div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date">Departure Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="date"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Select a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="travelers">Number of Travelers</Label>
          <div className="relative">
            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Select value={travelers} onValueChange={setTravelers}>
              <SelectTrigger id="travelers" className="pl-9">
                <SelectValue placeholder="Select number of travelers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Traveler</SelectItem>
                <SelectItem value="2">2 Travelers</SelectItem>
                <SelectItem value="3">3 Travelers</SelectItem>
                <SelectItem value="4">4 Travelers</SelectItem>
                <SelectItem value="5">5 Travelers</SelectItem>
                <SelectItem value="6+">6+ Travelers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="special-requests">Special Requests (Optional)</Label>
          <Input
            id="special-requests"
            placeholder="Any special requirements?"
          />
        </div>

        <div className="rounded-md bg-muted p-4">
          <div className="flex justify-between text-sm">
            <span>
              Tour Price ({travelers} × ${price})
            </span>
            <span>${Number(travelers) * price}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Booking Fee</span>
            <span>$49</span>
          </div>
          <div className="flex justify-between font-medium mt-3 pt-3 border-t">
            <span>Total</span>
            <span>${Number(travelers) * price + 49}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 px-6 py-4">
        <Button className="w-full" size="lg" onClick={handleBookNow}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
