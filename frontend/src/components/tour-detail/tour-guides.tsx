import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Phone } from "lucide-react";
import type { Guide } from "@/types/tour";

interface TourGuidesProps {
  guides: Guide[];
}

export function TourGuides({ guides }: TourGuidesProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Meet Your Guides</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {guides.map((guide) => (
          <Card
            key={guide._id}
            className="overflow-hidden border-primary/10 hover-lift"
          >
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={
                    guide.photo
                      ? `http://localhost:5000/img/users/${guide.photo}`
                      : "/placeholder.svg"
                  }
                  alt={guide.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-0 w-full p-4">
                  <h3 className="text-lg font-bold text-white">{guide.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-primary/90 hover:bg-primary/90 capitalize">
                      {guide.role.replace("-", " ")}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-3">
                  {guide.role === "lead-guide"
                    ? "Experienced lead guide with extensive knowledge of National Parks, wildlife, and local history."
                    : "Knowledgeable guide specializing in outdoor adventures and nature interpretation."}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{guide.email}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      +1 (555) 123-4567
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      {guide.role === "lead-guide"
                        ? "Leading tours since 2018"
                        : "Supporting tours since 2020"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-primary/10 bg-primary/5 p-4">
        <h3 className="font-medium mb-2">About Our Guides</h3>
        <p className="text-muted-foreground">
          Our guides are carefully selected for their expertise, passion, and
          local knowledge. They are committed to providing you with an authentic
          and enriching travel experience, sharing insights that go beyond the
          typical tourist attractions.
        </p>
      </div>
    </section>
  );
}
