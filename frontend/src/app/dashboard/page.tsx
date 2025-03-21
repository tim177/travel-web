"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TourGrid } from "@/components/dashboard/tour-grid";
import { Tour } from "@/types/tours";

export default function DashboardPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tours from API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/tours");
        if (!response.ok) {
          throw new Error("Failed to fetch tours");
        }
        const data = await response.json();

        // Extract tours correctly
        if (data.status === "success" && Array.isArray(data.data?.data)) {
          setTours(data.data.data);
        } else {
          throw new Error("Unexpected API response format.");
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) return <p>Loading tours...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (tours.length === 0) return <p>No tours available.</p>;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 pt-8 leaf-pattern">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Discover Your Next Adventure
          </h2>
          <TourGrid tours={tours} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
