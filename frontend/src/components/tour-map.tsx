"use client";

import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

interface TourMapProps {
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function TourMap({ location, coordinates }: TourMapProps) {
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
        // Initialize the map
        mapInstanceRef.current = L.map(mapRef.current).setView(
          [coordinates.lat, coordinates.lng],
          10
        );

        // Add tile layer (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstanceRef.current);

        // Add marker
        L.marker([coordinates.lat, coordinates.lng])
          .addTo(mapInstanceRef.current)
          .bindPopup(`<b>${location}</b>`)
          .openPopup();
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
  }, [coordinates, location]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Location</h2>
      <div className="relative">
        <div ref={mapRef} className="h-[400px] w-full rounded-lg border"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-md bg-white px-3 py-2 shadow-md">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="font-medium">{location}</span>
        </div>
      </div>
    </div>
  );
}
