"use client";

import { TourCard } from "@/components/dashboard/tour-card";
import { Button } from "@/components/ui/button";
import { Tour } from "@/types/tours";

interface TourGridProps {
  tours: Tour[];
  onResetFilters?: () => void;
}

export function TourGrid({ tours, onResetFilters }: TourGridProps) {
  if (tours.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-primary/20 bg-primary/5 p-8 text-center">
        <h3 className="mb-2 text-lg font-medium">No Tours Found</h3>
        <p className="mb-4 text-muted-foreground">
          Try adjusting your filters or search criteria.
        </p>
        <Button onClick={onResetFilters}>Reset Filters</Button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {tours?.map((tour) => (
        <TourCard key={tour._id} tour={tour} />
      ))}
    </div>
  );
}
