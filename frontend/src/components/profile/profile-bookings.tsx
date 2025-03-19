import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Users, FileText, Download } from "lucide-react";

interface BookingCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  startDate: string;
  endDate: string;
  status: "upcoming" | "completed" | "cancelled";
  travelers: number;
  price: number;
}

function BookingCard({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  title,
  location,
  image,
  startDate,
  endDate,
  status,
  travelers,
  price,
}: BookingCardProps) {
  const statusColors = {
    upcoming: "bg-blue-100 text-blue-800 border-blue-200",
    completed: "bg-primary/10 text-primary border-primary/20",
    cancelled: "bg-red-100 text-red-800 border-red-200",
  };

  const statusLabels = {
    upcoming: "Upcoming",
    completed: "Completed",
    cancelled: "Cancelled",
  };

  return (
    <Card className="nature-card overflow-hidden border-primary/10 hover-lift">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 w-full sm:h-auto sm:w-1/3">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{location}</span>
                </div>
              </div>
              <Badge className={`${statusColors[status]} border`}>
                {statusLabels[status]}
              </Badge>
            </div>

            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>
                  {startDate} - {endDate}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-2">
                <Users className="h-4 w-4 text-primary" />
                <span>{travelers} Travelers</span>
              </div>
            </div>

            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Total Price</div>
                <div className="text-lg font-bold text-primary">
                  ${price.toLocaleString()}
                </div>
              </div>

              <div className="flex gap-2">
                {status === "upcoming" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 bg-primary/5 hover:bg-primary/10"
                  >
                    Manage Booking
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 border-primary/20 bg-primary/5 hover:bg-primary/10"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Details</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProfileBookings() {
  const upcomingBookings = [
    {
      id: "B12345",
      title: "Enchanting Bali Retreat",
      location: "Bali, Indonesia",
      image: "/placeholder.svg?height=400&width=600",
      startDate: "Jun 15, 2023",
      endDate: "Jun 22, 2023",
      status: "upcoming" as const,
      travelers: 2,
      price: 2598,
    },
    {
      id: "B12346",
      title: "Majestic Swiss Alps",
      location: "Switzerland",
      image: "/placeholder.svg?height=400&width=600",
      startDate: "Aug 10, 2023",
      endDate: "Aug 18, 2023",
      status: "upcoming" as const,
      travelers: 2,
      price: 3798,
    },
  ];

  const completedBookings = [
    {
      id: "B10987",
      title: "Ancient Greek Odyssey",
      location: "Greece",
      image: "/placeholder.svg?height=400&width=600",
      startDate: "Apr 5, 2023",
      endDate: "Apr 15, 2023",
      status: "completed" as const,
      travelers: 2,
      price: 3198,
    },
    {
      id: "B10654",
      title: "Serene Japanese Journey",
      location: "Japan",
      image: "/placeholder.svg?height=400&width=600",
      startDate: "Nov 12, 2022",
      endDate: "Nov 24, 2022",
      status: "completed" as const,
      travelers: 1,
      price: 2199,
    },
    {
      id: "B10321",
      title: "Vibrant Morocco Adventure",
      location: "Morocco",
      image: "/placeholder.svg?height=400&width=600",
      startDate: "Sep 8, 2022",
      endDate: "Sep 17, 2022",
      status: "completed" as const,
      travelers: 2,
      price: 2798,
    },
  ];

  const cancelledBookings = [
    {
      id: "B11234",
      title: "Costa Rican Paradise",
      location: "Costa Rica",
      image: "/placeholder.svg?height=400&width=600",
      startDate: "Jul 20, 2022",
      endDate: "Jul 28, 2022",
      status: "cancelled" as const,
      travelers: 2,
      price: 3398,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
          <CardDescription>View and manage your tour bookings</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4 grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingBookings.length})
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed ({completedBookings.length})
              </TabsTrigger>
              <TabsTrigger value="cancelled">
                Cancelled ({cancelledBookings.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingBookings.length > 0 ? (
                upcomingBookings.map((booking) => (
                  <BookingCard key={booking.id} {...booking} />
                ))
              ) : (
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <h3 className="mb-2 text-lg font-medium">
                    No Upcoming Bookings
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    You don&apos;t have any upcoming tours booked yet.
                  </p>
                  <Button asChild>
                    <Link href="/tours">Browse Tours</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedBookings.length > 0 ? (
                completedBookings.map((booking) => (
                  <BookingCard key={booking.id} {...booking} />
                ))
              ) : (
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <h3 className="mb-2 text-lg font-medium">
                    No Completed Bookings
                  </h3>
                  <p className="text-muted-foreground">
                    You haven&apos;t completed any tours yet.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-4">
              {cancelledBookings.length > 0 ? (
                cancelledBookings.map((booking) => (
                  <BookingCard key={booking.id} {...booking} />
                ))
              ) : (
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <h3 className="mb-2 text-lg font-medium">
                    No Cancelled Bookings
                  </h3>
                  <p className="text-muted-foreground">
                    You don&apos;t have any cancelled bookings.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Travel Documents</CardTitle>
          <CardDescription>
            Access your booking confirmations, e-tickets, and invoices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">
                    Enchanting Bali Retreat - Booking Confirmation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Booking #B12345 • Jun 15, 2023
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 border-primary/20 hover:bg-primary/10"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">
                    Majestic Swiss Alps - Booking Confirmation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Booking #B12346 • Aug 10, 2023
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 border-primary/20 hover:bg-primary/10"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">
                    Ancient Greek Odyssey - Travel Voucher
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Booking #B10987 • Apr 5, 2023
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 border-primary/20 hover:bg-primary/10"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
