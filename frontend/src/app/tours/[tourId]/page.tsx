"use client";

import { useEffect, useState } from "react";
import { TourHero } from "@/components/tour-detail/tour-hero";
import { TourOverview } from "@/components/tour-detail/tour-overview";
import { TourDescription } from "@/components/tour-detail/tour-description";
import { TourItinerary } from "@/components/tour-detail/tour-itinerary";
import { TourMap } from "@/components/tour-detail/tour-map";
import { TourGuides } from "@/components/tour-detail/tour-guides";
import { TourBooking } from "@/components/tour-detail/tour-booking";
import { TourGallery } from "@/components/tour-detail/tour-gallery";
import { TourHighlights } from "@/components/tour-detail/tour-highlights";
import { Separator } from "@/components/ui/separator";
// import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Tour } from "@/types/tour";
import { useParams } from "next/navigation";
import axios from "axios";
import { TourReviews } from "@/components/tour-detail/tour-reviews";

export default function TourDetailPage() {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);

  const { tourId } = useParams();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/tours/${tourId}`
        );
        const tourData = response?.data?.data?.data;
        if (!tourData) throw new Error("no Tour found");
        setTour(tourData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [tourId]);

  if (loading || !tour) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <p className="mt-4 text-lg">Loading tour details...</p>
      </div>
    );
  }

  return (
    <main className="flex-1 leaf-pattern">
      {/* Tour Hero */}
      <TourHero
        name={tour.name}
        imageCover={
          tour.imageCover
            ? `http://localhost:5000/img/tours/${tour.imageCover}`
            : "/placeholder.svg"
        }
        duration={tour.duration}
        location={tour.startLocation.description}
        difficulty={tour.difficulty}
      />

      <div className="container py-8">
        {/* Breadcrumb */}
        {/* <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Tours", href: "/tours" },
              { label: tour.name, href: `/tours/${tour._id}`, active: true },
            ]}
          /> */}

        <div className="grid gap-8 py-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            {/* Tour Overview */}
            <TourOverview tour={tour} />

            <Separator className="bg-primary/10" />

            {/* Tour Gallery */}
            <TourGallery
              name={tour.name}
              imageCover={
                tour.imageCover
                  ? `http://localhost:5000/img/tours/${tour.imageCover}`
                  : "/placeholder.svg"
              }
              images={tour.images.map(
                (img) => `http://localhost:5000/img/tours/${img}`
              )}
            />

            <Separator className="bg-primary/10" />

            {/* Tour Highlights */}
            <TourHighlights
              locations={tour.locations}
              duration={tour.duration}
              difficulty={tour.difficulty}
            />

            <Separator className="bg-primary/10" />

            {/* Tour Description */}
            <TourDescription
              description={tour.description}
              summary={tour.summary}
            />

            <Separator className="bg-primary/10" />

            {/* Tour Itinerary */}
            <TourItinerary locations={tour.locations} />

            <Separator className="bg-primary/10" />

            {/* Tour Map */}
            <TourMap
              startLocation={tour.startLocation}
              locations={tour.locations}
            />

            <Separator className="bg-primary/10" />

            {/* Tour Guides */}
            <TourGuides guides={tour.guides} />

            <Separator className="bg-primary/10" />

            {/* Tour Reviews */}
            <TourReviews
              reviews={tour.reviews}
              averageRating={tour.ratingsAverage}
              totalReviews={tour.reviews.length}
            />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Tour Booking */}
              <TourBooking tour={tour} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
