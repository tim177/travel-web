import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";
import type { Review } from "@/types/tour";
import { formatDate } from "@/utils/tour-utils";

interface TourReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export function TourReviews({
  reviews,
  averageRating,
  totalReviews,
}: TourReviewsProps) {
  console.log("==", reviews);
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= Math.round(averageRating)
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="font-medium">{averageRating.toFixed(1)}</span>
          <span className="text-muted-foreground">
            ({totalReviews} reviews)
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <Card key={review._id} className="border-primary/10 hover-lift">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={
                      review.user.photo
                        ? `http://localhost:5000/img/users/${review.user.photo}`
                        : "/placeholder.svg"
                    }
                    alt={review.user.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />

                  <div>
                    <h4 className="font-medium">{review.user.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(review.createdAt)}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-primary/10 bg-primary/5 p-6 text-center">
        <MessageSquare className="h-8 w-8 text-primary mb-2" />
        <h3 className="text-lg font-medium mb-2">Share Your Experience</h3>
        <p className="text-muted-foreground mb-4">
          Have you taken this tour? We&apos;d love to hear about your
          experience!
        </p>
        <Button>Write a Review</Button>
      </div>
    </section>
  );
}
