"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import {
  CalendarIcon,
  Users,
  CreditCard,
  CheckCircle,
  Shield,
} from "lucide-react";
import type { Tour } from "@/types/tour";
import { formatDate, calculateEndDate, formatPrice } from "@/utils/tour-utils";

interface TourBookingProps {
  tour: Tour;
}

export function TourBooking({ tour }: TourBookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [travelers, setTravelers] = useState("2");

  // Calculate end date based on selected date and tour duration
  const endDate = selectedDate
    ? calculateEndDate(selectedDate.toISOString(), tour.duration)
    : null;

  // Calculate total price
  const totalPrice = Number(travelers) * tour.price;
  const bookingFee = 49;
  const grandTotal = totalPrice + bookingFee;

  // Available dates for booking (only future dates)
  const availableDates = tour.startDates
    .map((date) => new Date(date))
    .filter((date) => date > new Date());

  const handleBookNow = () => {
    alert(
      `Booking ${tour.name} for ${travelers} travelers on ${
        selectedDate ? formatDate(selectedDate.toISOString()) : "TBD"
      }`
    );
  };

  return (
    <Card className="overflow-hidden border-primary/10 sticky top-24">
      <CardHeader className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h3 className="text-xl font-bold">Book This Tour</h3>
          <p className="text-sm opacity-90">Secure your spot today</p>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">${formatPrice(tour.price)}</div>
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
                {selectedDate ? (
                  formatDate(selectedDate.toISOString())
                ) : (
                  <span>Select a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
                disabled={(date) => {
                  // Only allow booking on available start dates
                  return !availableDates.some(
                    (availableDate) =>
                      availableDate.getDate() === date.getDate() &&
                      availableDate.getMonth() === date.getMonth() &&
                      availableDate.getFullYear() === date.getFullYear()
                  );
                }}
              />
            </PopoverContent>
          </Popover>

          {selectedDate && endDate && (
            <div className="text-xs text-muted-foreground">
              Tour ends on {endDate}
            </div>
          )}
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
                <SelectItem value="6">6 Travelers</SelectItem>
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
              Tour Price ({travelers} × ${formatPrice(tour.price)})
            </span>
            <span>${formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>Booking Fee</span>
            <span>${formatPrice(bookingFee)}</span>
          </div>
          <div className="flex justify-between font-medium mt-3 pt-3 border-t">
            <span>Total</span>
            <span>${formatPrice(grandTotal)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="rounded-lg bg-primary/5 p-3 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">Free cancellation</span>
                <p className="text-muted-foreground">
                  Cancel up to 30 days before departure for a full refund
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-primary/5 p-3 text-sm">
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">Secure booking</span>
                <p className="text-muted-foreground">
                  We use industry-standard encryption to protect your data
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-muted/50 px-6 py-4">
        <Button className="w-full gap-2" size="lg" onClick={handleBookNow}>
          <CreditCard className="h-4 w-4" />
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
