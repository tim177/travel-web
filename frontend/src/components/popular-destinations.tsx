import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  name: string;
  image: string;
  tours: number;
  slug: string;
}

function DestinationCard({ name, image, tours, slug }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${slug}`}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-[4/3] w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-white/80">{tours} tours</p>
      </div>
    </Link>
  );
}

export function PopularDestinations() {
  const destinations = [
    {
      name: "Paris, France",
      image: "/placeholder.svg?height=400&width=600",
      tours: 24,
      slug: "paris-france",
    },
    {
      name: "Rome, Italy",
      image: "/placeholder.svg?height=400&width=600",
      tours: 18,
      slug: "rome-italy",
    },
    {
      name: "Santorini, Greece",
      image: "/placeholder.svg?height=400&width=600",
      tours: 12,
      slug: "santorini-greece",
    },
    {
      name: "Tokyo, Japan",
      image: "/placeholder.svg?height=400&width=600",
      tours: 15,
      slug: "tokyo-japan",
    },
    {
      name: "New York, USA",
      image: "/placeholder.svg?height=400&width=600",
      tours: 20,
      slug: "new-york-usa",
    },
    {
      name: "Barcelona, Spain",
      image: "/placeholder.svg?height=400&width=600",
      tours: 16,
      slug: "barcelona-spain",
    },
  ];

  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Popular Destinations
        </h2>
        <p className="mt-4 text-muted-foreground">
          Explore our most sought-after travel destinations
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.slug}
            name={destination.name}
            image={destination.image}
            tours={destination.tours}
            slug={destination.slug}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link
          href="/destinations"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          View All Destinations
        </Link>
      </div>
    </section>
  );
}
