"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Camera,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Pencil,
} from "lucide-react";

export function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    bio: "Passionate traveler with a love for adventure and cultural experiences. I've visited over 20 countries and counting! Always planning my next journey to explore new destinations and create unforgettable memories.",
    joinDate: "Member since January 2022",
    website: "www.sarahtravels.com",
    facebook: "sarahjohnson",
    twitter: "sarahtravels",
    instagram: "sarah_adventures",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real app, you would save to backend here
    setIsEditing(false);
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-6 relative">
            <div className="h-24 w-24 rounded-full border-4 border-primary/20 p-1">
              <Avatar className="h-full w-full">
                <AvatarImage
                  src="/placeholder.svg?height=200&width=200"
                  alt="Profile picture"
                />
                <AvatarFallback className="bg-primary/10 text-primary">
                  SJ
                </AvatarFallback>
              </Avatar>
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-md"
            >
              <Camera className="h-4 w-4" />
              <span className="sr-only">Change profile picture</span>
            </Button>
          </div>
          <CardTitle>{profileData.name}</CardTitle>
          <CardDescription className="flex items-center justify-center gap-1">
            <MapPin className="h-3 w-3" />
            {profileData.location}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{profileData.joinDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{profileData.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>{profileData.phone}</span>
          </div>
          {profileData.website && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>{profileData.website}</span>
            </div>
          )}

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Social Media</h4>
            <div className="flex gap-2">
              {profileData.facebook && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full border-primary/20 bg-primary/5 hover:bg-primary/10"
                >
                  <Facebook className="h-4 w-4 text-primary" />
                  <span className="sr-only">Facebook</span>
                </Button>
              )}
              {profileData.twitter && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full border-primary/20 bg-primary/5 hover:bg-primary/10"
                >
                  <Twitter className="h-4 w-4 text-primary" />
                  <span className="sr-only">Twitter</span>
                </Button>
              )}
              {profileData.instagram && (
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full border-primary/20 bg-primary/5 hover:bg-primary/10"
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  <span className="sr-only">Instagram</span>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              Tell us about yourself and your travel preferences
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Pencil className="h-4 w-4" />
            <span className="sr-only">{isEditing ? "Cancel" : "Edit"}</span>
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {isEditing ? (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    name="website"
                    value={profileData.website}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={profileData.bio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    name="facebook"
                    value={profileData.facebook}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    name="twitter"
                    value={profileData.twitter}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    name="instagram"
                    value={profileData.instagram}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Bio</h3>
                <p className="text-muted-foreground">{profileData.bio}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Travel Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    Adventure
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    Cultural
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    Beach
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    Food & Wine
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    Hiking
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    Photography
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Countries Visited</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>France</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Italy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Japan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Thailand</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Australia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Peru</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Greece</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Morocco</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>+12 more</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        {isEditing && (
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </CardFooter>
        )}
      </Card>

      <Card className="md:col-span-3 nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Travel Stats</CardTitle>
          <CardDescription>Your travel journey in numbers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">
                Tours Completed
              </div>
            </div>
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary">20</div>
              <div className="text-sm text-muted-foreground">
                Countries Visited
              </div>
            </div>
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary">42</div>
              <div className="text-sm text-muted-foreground">
                Cities Explored
              </div>
            </div>
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Travel Days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
