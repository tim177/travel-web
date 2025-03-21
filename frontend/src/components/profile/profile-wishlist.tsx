import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Search } from "lucide-react";
import { EmptyState } from "./empty-state";

export function ProfileWishlist() {
  // In a real app, this would be fetched from an API
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const savedTours: any[] = [];
  const hasSavedTours = savedTours.length > 0;

  return (
    <div className="space-y-6">
      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Saved Tours</CardTitle>
          <CardDescription>
            Tours you&apos;ve saved for future reference
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!hasSavedTours ? (
            <EmptyState
              icon={<Heart className="h-8 w-8" />}
              title="Your wishlist is empty"
              description="Save tours you're interested in to plan your future adventures."
              action={
                <Button>
                  <Search className="mr-2 h-4 w-4" />
                  Discover Tours
                </Button>
              }
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Saved tour cards would go here */}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recently Viewed</CardTitle>
          <CardDescription>Tours you&apos;ve viewed recently</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground p-8">
            <p>You haven&apos;t viewed any tours recently.</p>
            <p className="mt-2">Start exploring to see your history here!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
