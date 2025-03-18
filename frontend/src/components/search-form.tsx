"use client";

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
import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";

export function SearchForm() {
  const [date, setDate] = useState<Date>();

  return (
    <section className="container -mt-16 relative z-10">
      <div className="rounded-xl border bg-card p-6 shadow-lg">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="destination"
                placeholder="Where to?"
                className="pl-9"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  id="date"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="travelers">Travelers</Label>
            <div className="relative">
              <UsersIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Select>
                <SelectTrigger id="travelers" className="pl-9">
                  <SelectValue placeholder="Number of travelers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Traveler</SelectItem>
                  <SelectItem value="2">2 Travelers</SelectItem>
                  <SelectItem value="3">3 Travelers</SelectItem>
                  <SelectItem value="4">4 Travelers</SelectItem>
                  <SelectItem value="5+">5+ Travelers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-end">
            <Button className="w-full">Search Tours</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
