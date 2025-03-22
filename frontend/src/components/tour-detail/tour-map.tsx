"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import type { StartLocation, Location } from "@/types/tour";
import type { LatLngTuple } from "leaflet";
interface TourMapProps {
  startLocation: StartLocation;
  locations: Location[];
}

export function TourMap({ startLocation, locations }: TourMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const loadMap = async () => {
      const L = (await import("leaflet")).default;

      // Import CSS
      await import("leaflet/dist/leaflet.css");

      if (!mapInstanceRef.current && mapRef.current) {
        // Initialize the map centered on the start location
        mapInstanceRef.current = L.map(mapRef.current).setView(
          [startLocation.coordinates[1], startLocation.coordinates[0]],
          5
        );

        // Add tile layer (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstanceRef.current);

        // Add start location marker
        const startIcon = L.divIcon({
          html: `<div class="bg-primary text-white rounded-full p-1 flex items-center justify-center" style="width: 32px; height: 32px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>`,
          className: "",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });

        L.marker([startLocation.coordinates[1], startLocation.coordinates[0]], {
          icon: startIcon,
        })
          .addTo(mapInstanceRef.current)
          .bindPopup(
            `<b>Start: ${startLocation.description}</b><br>${startLocation.address}`
          )
          .openPopup();

        // Add location markers
        const sortedLocations = [...locations].sort((a, b) => a.day - b.day);

        sortedLocations.forEach((location) => {
          const dayIcon = L.divIcon({
            html: `<div class="bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold" style="width: 28px; height: 28px;">
                    ${location.day}
                  </div>`,
            className: "",
            iconSize: [28, 28],
            iconAnchor: [14, 28],
          });

          L.marker([location.coordinates[1], location.coordinates[0]], {
            icon: dayIcon,
          })
            .addTo(mapInstanceRef.current)
            .bindPopup(`<b>Day ${location.day}: ${location.description}</b>`);
        });

        // Create a line connecting all points in order
        // const points = [
        //   [startLocation.coordinates[1], startLocation.coordinates[0]],
        //   ...sortedLocations.map((loc) => [
        //     loc.coordinates[1],
        //     loc.coordinates[0],
        //   ]),
        // ];
        const points: LatLngTuple[] = [
          [
            startLocation.coordinates[1],
            startLocation.coordinates[0],
          ] as LatLngTuple,
          ...sortedLocations.map(
            (loc) => [loc.coordinates[1], loc.coordinates[0]] as LatLngTuple
          ),
        ];
        L.polyline(points, {
          color: "var(--primary)",
          weight: 3,
          opacity: 0.7,
          dashArray: "5, 10",
        }).addTo(mapInstanceRef.current);

        // Fit bounds to show all markers
        const bounds = L.latLngBounds(points);
        mapInstanceRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    };

    loadMap();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [startLocation, locations]);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Tour Map</h2>

      <Card className="overflow-hidden border-primary/10">
        <CardHeader className="bg-primary/5 border-b border-primary/10 pb-3 pt-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Tour Route</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div ref={mapRef} className="h-[500px] w-full"></div>
        </CardContent>
      </Card>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
          <h3 className="font-medium mb-2">Starting Point</h3>
          <p className="text-muted-foreground">{startLocation.description}</p>
          <p className="text-muted-foreground text-sm mt-1">
            {startLocation.address}
          </p>
        </div>

        <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
          <h3 className="font-medium mb-2">Tour Stops</h3>
          <p className="text-muted-foreground">
            This tour includes {locations.length} stops across{" "}
            {locations[locations.length - 1].day} days, showcasing
            America&apos;s most spectacular National Parks.
          </p>
        </div>
      </div>
    </section>
  );
}
