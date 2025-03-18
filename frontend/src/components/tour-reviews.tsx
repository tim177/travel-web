import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

interface TourReviewsProps {
  reviews: Review[];
}

export function TourReviews({ reviews }: TourReviewsProps) {
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(averageRating)
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="font-medium">{averageRating.toFixed(1)}</span>
          <span className="text-muted-foreground">
            ({reviews.length} reviews)
          </span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
            <Separator />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline">View All Reviews</Button>
      </div>
    </div>
  );
}
