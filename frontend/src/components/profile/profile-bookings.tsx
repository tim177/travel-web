import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { EmptyState } from "@/components/profile/empty-state";

// interface BookingCardProps {
//   id: string;
//   title: string;
//   location: string;
//   image: string;
//   startDate: string;
//   endDate: string;
//   status: "upcoming" | "completed" | "cancelled";
//   travelers: number;
//   price: number;
// }

// function BookingCard({
//   id,
//   title,
//   location,
//   image,
//   startDate,
//   endDate,
//   status,
//   travelers,
//   price,
// }: BookingCardProps) {
//   const statusColors = {
//     upcoming: "bg-blue-100 text-blue-800 border-blue-200",
//     completed: "bg-primary/10 text-primary border-primary/20",
//     cancelled: "bg-red-100 text-red-800 border-red-200",
//   };

//   const statusLabels = {
//     upcoming: "Upcoming",
//     completed: "Completed",
//     cancelled: "Cancelled",
//   };

//   return (
//     <Card className="nature-card overflow-hidden border-primary/10 hover-lift">
//       <CardContent className="p-0">
//         <div className="flex flex-col sm:flex-row">
//           <div className="relative h-48 w-full sm:h-auto sm:w-1/3">
//             <Image
//               src={image || "/placeholder.svg"}
//               alt={title}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
//           </div>
//           <div className="flex flex-1 flex-col p-5">
//             <div className="mb-3 flex items-start justify-between">
//               <div>
//                 <h3 className="font-bold text-lg">{title}</h3>
//                 <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                   <MapPin className="h-3.5 w-3.5 text-primary" />
//                   <span>{location}</span>
//                 </div>
//               </div>
//               <Badge className={`${statusColors[status]} border`}>
//                 {statusLabels[status]}
//               </Badge>
//             </div>

//             <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
//               <div className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-2">
//                 <CalendarDays className="h-4 w-4 text-primary" />
//                 <span>
//                   {startDate} - {endDate}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 rounded-md bg-primary/5 px-3 py-2">
//                 <Users className="h-4 w-4 text-primary" />
//                 <span>{travelers} Travelers</span>
//               </div>
//             </div>

//             <div className="mt-4 flex items-baseline justify-between">
//               <div>
//                 <div className="text-sm text-muted-foreground">Total Price</div>
//                 <div className="text-lg font-bold text-primary">
//                   ${price.toLocaleString()}
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 {status === "upcoming" && (
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="border-primary/20 bg-primary/5 hover:bg-primary/10"
//                   >
//                     Manage Booking
//                   </Button>
//                 )}
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="flex items-center gap-1 border-primary/20 bg-primary/5 hover:bg-primary/10"
//                 >
//                   <FileText className="h-3.5 w-3.5" />
//                   <span>Details</span>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

export function ProfileBookings() {
  // In a real app, this would be fetched from an API
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookings: any[] = [];
  const hasBookings = bookings.length > 0;

  return (
    <div className="space-y-6">
      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
          <CardDescription>View and manage your tour bookings</CardDescription>
        </CardHeader>
        <CardContent>
          {!hasBookings ? (
            <EmptyState
              icon={<CalendarDays className="h-8 w-8" />}
              title="No bookings yet"
              description="When you book a tour, your upcoming and past trips will appear here."
              action={<Button>Explore Tours</Button>}
            />
          ) : (
            <div className="space-y-4">{/* Booking cards would go here */}</div>
          )}
        </CardContent>
      </Card>

      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Travel Documents</CardTitle>
          <CardDescription>
            Access your booking confirmations, e-tickets, and invoices
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!hasBookings ? (
            <div className="rounded-lg border border-dashed p-6 text-center">
              <p className="text-muted-foreground mb-2">
                Your travel documents will appear here after you make a booking.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Document cards would go here */}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
