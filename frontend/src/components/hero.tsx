import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      <div className="container relative flex min-h-[600px] flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Discover the World&apos;s Most Amazing Places
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-xl">
            Unforgettable travel experiences tailored just for you. Explore
            breathtaking destinations with our expert guides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="h-12 px-8">
              Explore Tours
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 bg-white/10 text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
