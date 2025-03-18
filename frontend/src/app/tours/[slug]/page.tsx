import { TourGallery } from "@/components/tour-gallery";
import { TourDetails } from "@/components/tour-details";
import { TourMap } from "@/components/tour-map";
import { TourReviews } from "@/components/tour-reviews";
import { TourBooking } from "@/components/tour-booking";
import { TourItinerary } from "@/components/tour-itinerary";
import { Breadcrumb } from "@/components/breadcrumb";
import { notFound } from "next/navigation";

// This would typically come from a database or API
const getTourData = (slug: string) => {
  const tours = {
    "enchanting-bali-retreat": {
      id: "1",
      title: "Enchanting Bali Retreat",
      slug: "enchanting-bali-retreat",
      location: "Bali, Indonesia",
      price: 1299,
      rating: 4.8,
      reviewCount: 48,
      days: 7,
      description:
        "Experience the magic of Bali on this 7-day retreat that combines relaxation, culture, and adventure. From pristine beaches to lush rice terraces and ancient temples, this journey showcases the best of the Island of the Gods.",
      highlights: [
        "Visit the sacred Uluwatu Temple perched on a cliff",
        "Explore the artistic center of Ubud and its monkey forest",
        "Relax on the pristine beaches of Nusa Dua",
        "Experience traditional Balinese dance performances",
        "Enjoy a sunrise hike up Mount Batur volcano",
        "Participate in a traditional cooking class",
      ],
      included: [
        "6 nights accommodation in 4-star hotels",
        "Daily breakfast and selected meals",
        "Airport transfers and transportation",
        "English-speaking guide",
        "Entrance fees to attractions",
        "Cooking class and cultural activities",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Denpasar",
          description:
            "Arrive at Ngurah Rai International Airport where you'll be greeted by your guide and transferred to your beachfront hotel in Seminyak. Enjoy a welcome dinner and brief orientation.",
        },
        {
          day: 2,
          title: "Seminyak & Tanah Lot",
          description:
            "After breakfast, enjoy a relaxing morning at the beach. In the afternoon, visit the iconic sea temple of Tanah Lot for a spectacular sunset view. Evening at leisure.",
        },
        {
          day: 3,
          title: "Ubud Cultural Immersion",
          description:
            "Transfer to Ubud, stopping at a traditional Balinese compound and the sacred Monkey Forest. Afternoon visit to the Ubud Palace and local art galleries. Evening traditional dance performance.",
        },
        {
          day: 4,
          title: "Tegalalang & Cooking Class",
          description:
            "Morning visit to the stunning Tegalalang Rice Terraces. Afternoon Balinese cooking class where you'll learn to prepare local specialties, followed by dinner enjoying your creations.",
        },
        {
          day: 5,
          title: "Mount Batur Sunrise Trek",
          description:
            "Early morning departure for a sunrise trek up Mount Batur volcano. Enjoy breakfast with views of Lake Batur. Afternoon visit to natural hot springs and coffee plantation.",
        },
        {
          day: 6,
          title: "Beaches & Uluwatu Temple",
          description:
            "Morning at leisure. Afternoon visit to Uluwatu Temple perched on a cliff with stunning ocean views. Evening farewell dinner with traditional Kecak fire dance performance.",
        },
        {
          day: 7,
          title: "Departure",
          description:
            "Free time until your airport transfer for your departure flight. Optional extension available.",
        },
      ],
      reviews: [
        {
          id: "1",
          name: "Emily Johnson",
          avatar: "/placeholder.svg?height=100&width=100",
          rating: 5,
          date: "October 15, 2023",
          comment:
            "This Bali retreat exceeded all my expectations! Our guide was incredibly knowledgeable and the itinerary perfectly balanced relaxation and adventure. The sunrise hike up Mount Batur was definitely a highlight!",
        },
        {
          id: "2",
          name: "David Chen",
          avatar: "/placeholder.svg?height=100&width=100",
          rating: 5,
          date: "September 3, 2023",
          comment:
            "An amazing experience from start to finish. The accommodations were excellent and the cultural experiences felt authentic rather than touristy. I particularly enjoyed the cooking class and learning about Balinese cuisine.",
        },
        {
          id: "3",
          name: "Sarah Williams",
          avatar: "/placeholder.svg?height=100&width=100",
          rating: 4,
          date: "August 22, 2023",
          comment:
            "Beautiful tour with great attention to detail. The only reason I'm giving 4 stars instead of 5 is because one of the hotels wasn't as nice as the others. Otherwise, it was a fantastic experience and I'd recommend it to anyone!",
        },
      ],
      coordinates: {
        lat: -8.4095,
        lng: 115.1889,
      },
    },
    "majestic-swiss-alps": {
      id: "2",
      title: "Majestic Swiss Alps",
      slug: "majestic-swiss-alps",
      location: "Switzerland",
      price: 1899,
      rating: 4.9,
      reviewCount: 52,
      days: 8,
      description:
        "Discover the breathtaking beauty of the Swiss Alps on this 8-day adventure. From charming mountain villages to spectacular alpine vistas, this journey showcases the natural splendor and cultural richness of Switzerland.",
      highlights: [
        "Ride the famous Glacier Express panoramic train",
        "Visit the picturesque village of Zermatt with views of the Matterhorn",
        "Explore the charming city of Lucerne and its medieval architecture",
        "Experience Swiss chocolate making in a traditional workshop",
        "Hike through stunning alpine meadows",
        "Enjoy a boat cruise on Lake Geneva",
      ],
      included: [
        "7 nights accommodation in boutique hotels",
        "Daily breakfast and selected meals",
        "First-class train passes for all rail journeys",
        "English-speaking mountain guide",
        "Chocolate making workshop",
        "Cable car and mountain lift tickets",
      ],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Zurich",
          description:
            "Arrive at Zurich Airport and transfer to your hotel in the city center. Enjoy a welcome dinner and orientation meeting with your guide.",
        },
        {
          day: 2,
          title: "Zurich & Lucerne",
          description:
            "Morning city tour of Zurich. Afternoon train to Lucerne where you'll explore the medieval old town, Chapel Bridge, and Lion Monument.",
        },
        {
          day: 3,
          title: "Mount Pilatus Excursion",
          description:
            "Full-day excursion to Mount Pilatus, ascending by the world's steepest cogwheel railway and descending by panoramic gondola. Afternoon boat cruise on Lake Lucerne.",
        },
        {
          day: 4,
          title: "Interlaken & Jungfrau Region",
          description:
            "Train to Interlaken. Ascend to Jungfraujoch – the 'Top of Europe' for breathtaking alpine views. Visit the Ice Palace and Sphinx Observatory.",
        },
        {
          day: 5,
          title: "Glacier Express to Zermatt",
          description:
            "Board the famous Glacier Express panoramic train for a spectacular journey to Zermatt. Enjoy stunning views of mountains, glaciers, and valleys.",
        },
        {
          day: 6,
          title: "Zermatt & Matterhorn",
          description:
            "Day in Zermatt with optional hike or cable car ride for views of the iconic Matterhorn. Afternoon chocolate making workshop and Swiss fondue dinner.",
        },
        {
          day: 7,
          title: "Montreux & Lake Geneva",
          description:
            "Train to Montreux on Lake Geneva. Visit the medieval Chillon Castle and enjoy a wine tasting in the Lavaux vineyards. Farewell dinner in Montreux.",
        },
        {
          day: 8,
          title: "Departure",
          description:
            "Transfer to Geneva Airport for your departure flight. Optional extension available.",
        },
      ],
      reviews: [
        {
          id: "1",
          name: "Michael Brown",
          avatar: "/placeholder.svg?height=100&width=100",
          rating: 5,
          date: "July 28, 2023",
          comment:
            "The Swiss Alps tour was absolutely magnificent! Every detail was perfectly arranged, from the scenic train journeys to the carefully selected hotels. The views were even more spectacular than I imagined.",
        },
        {
          id: "2",
          name: "Jennifer Lee",
          avatar: "/placeholder.svg?height=100&width=100",
          rating: 5,
          date: "June 15, 2023",
          comment:
            "This was truly the trip of a lifetime. Our guide was exceptional and the itinerary offered a perfect balance of organized activities and free time. The Glacier Express and Jungfraujoch were unforgettable experiences!",
        },
        {
          id: "3",
          name: "Robert Miller",
          avatar: "/placeholder.svg?height=100&width=100",
          rating: 5,
          date: "August 5, 2023",
          comment:
            "Everything about this tour was first-class. The accommodations were charming and comfortable, the train journeys were spectacular, and the chocolate making workshop was a delicious highlight!",
        },
      ],
      coordinates: {
        lat: 46.8182,
        lng: 8.2275,
      },
    },
  };

  return tours[slug as keyof typeof tours] || null;
};

export default function TourPage({ params }: { params: { slug: string } }) {
  const tour = getTourData(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <TourGallery images={tour.images} title={tour.title} />

        <div className="container py-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Tours", href: "/tours" },
              { label: tour.title, href: `/tours/${tour.slug}`, active: true },
            ]}
          />

          <div className="grid gap-8 py-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <TourDetails
                title={tour.title}
                location={tour.location}
                rating={tour.rating}
                reviewCount={tour.reviewCount}
                days={tour.days}
                description={tour.description}
                highlights={tour.highlights}
                included={tour.included}
              />

              <TourItinerary itinerary={tour.itinerary} />

              <TourMap
                location={tour.location}
                coordinates={tour.coordinates}
              />

              <TourReviews reviews={tour.reviews} />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <TourBooking
                  price={tour.price}
                  days={tour.days}
                  title={tour.title}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
