import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Travel Inspiration & Special Offers
          </h2>
          <p className="mt-4">
            Subscribe to our newsletter and be the first to know about new
            destinations, exclusive deals, and travel tips.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground"
            />
            <Button variant="secondary" className="sm:w-auto">
              Subscribe
            </Button>
          </div>
          <p className="mt-3 text-xs opacity-80">
            By subscribing, you agree to our Privacy Policy and consent to
            receive travel-related emails.
          </p>
        </div>
      </div>
    </section>
  );
}
