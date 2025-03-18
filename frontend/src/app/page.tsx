import { TourCard } from "@/components/tour-card";
import { SearchForm } from "@/components/search-form";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features";
import { Newsletter } from "@/components/newsletter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PopularDestinations } from "@/components/popular-destinations";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SearchForm />
        <PopularDestinations />
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured Tours
            </h2>
            <p className="mt-4 text-muted-foreground">
              Discover our most popular and highly-rated travel experiences
            </p>
          </div>
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
            <TourCard
              title="Ancient Greek Odyssey"
              location="Greece"
              price={1599}
              rating={4.7}
              days={10}
              image="/placeholder.svg?height=400&width=600"
              slug="ancient-greek-odyssey"
            />
            <TourCard
              title="Serene Japanese Journey"
              location="Japan"
              price={2199}
              rating={4.9}
              days={12}
              image="/placeholder.svg?height=400&width=600"
              slug="serene-japanese-journey"
            />
            <TourCard
              title="Vibrant Morocco Adventure"
              location="Morocco"
              price={1399}
              rating={4.6}
              days={9}
              image="/placeholder.svg?height=400&width=600"
              slug="vibrant-morocco-adventure"
            />
            <TourCard
              title="Costa Rican Paradise"
              location="Costa Rica"
              price={1699}
              rating={4.8}
              days={8}
              image="/placeholder.svg?height=400&width=600"
              slug="costa-rican-paradise"
            />
            <TourCard
              title="Egyptian Wonders"
              location="Egypt"
              price={1899}
              rating={4.7}
              days={11}
              image="/placeholder.svg?height=400&width=600"
              slug="egyptian-wonders"
            />
            <TourCard
              title="New Zealand Explorer"
              location="New Zealand"
              price={2499}
              rating={4.9}
              days={14}
              image="/placeholder.svg?height=400&width=600"
              slug="new-zealand-explorer"
            />
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="/tours"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View All Tours
            </a>
          </div>
        </section>
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
