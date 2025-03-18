import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="mt-2 text-xl font-semibold">Tour Not Found</h2>
      <p className="mt-4 text-muted-foreground">
        Sorry, we couldn&apos;t find the tour you&apos;re looking for.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
