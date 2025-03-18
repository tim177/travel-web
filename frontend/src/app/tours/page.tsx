import { TourCard } from "@/components/tour-card";

export default function ToursPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="container py-12">
          <h1 className="mb-8 text-3xl font-bold">All Tours</h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <TourCard
              title="Enchanting Bali Retreat"
              location="Bali, Indonesia"
              price={1299}
              rating={4.8}
              days={7}
              image="/placeholder.svg?height=400&width=600"
              slug="enchanting-bali-retreat"
            />
            <TourCard
              title="Majestic Swiss Alps"
              location="Switzerland"
              price={1899}
              rating={4.9}
              days={8}
              image="/placeholder.svg?height=400&width=600"
              slug="majestic-swiss-alps"
            />
            {/* Add more tour cards here */}
          </div>
        </section>
      </main>
    </div>
  );
}
