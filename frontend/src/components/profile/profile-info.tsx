"use client";

import type React from "react";

import { useEffect, useState } from "react";
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
  Plus,
  User,
  Sparkles,
} from "lucide-react";
import { EmptyState } from "@/components/profile/empty-state";
import axios from "axios";

export function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    photo: "",
    phone: "",
    location: "",
    bio: "",
    joinDate: "Member since March 2025",
    website: "",
    facebook: "",
    twitter: "",
    instagram: "",
    travelPreferences: [] as string[],
    countriesVisited: [] as string[],
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateProfileData = (data: any) => {
    setProfileData((prevData) => ({
      ...prevData,
      name: data?.name || "",
      email: data?.email || "",
      photo: data?.photo ? `http://localhost:5000/img/users/${data.photo}` : "",
    }));
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/users/me",
          {
            withCredentials: true,
          }
        );

        if (
          response?.data?.status === "success" &&
          response?.data?.data?.data
        ) {
          updateProfileData(response.data.data.data);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

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

  // const hasBasicInfo = !!profileData.name && !!profileData.email;
  const hasExtendedInfo =
    !!profileData.phone || !!profileData.location || !!profileData.bio;
  const hasSocialInfo =
    !!profileData.website ||
    !!profileData.facebook ||
    !!profileData.twitter ||
    !!profileData.instagram;
  const hasTravelPreferences = profileData.travelPreferences.length > 0;
  const hasCountriesVisited = profileData.countriesVisited.length > 0;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-1 nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-6 relative">
            <div className="h-24 w-24 rounded-full border-4 border-primary/20 p-1 bg-primary/5">
              {profileData.name ? (
                <Avatar className="h-full w-full">
                  <AvatarImage src="" alt="Profile picture" />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {profileData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <div className="h-full w-full rounded-full flex items-center justify-center bg-primary/10 text-primary">
                  <User className="h-10 w-10" />
                </div>
              )}
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
          <CardTitle>{profileData.name || "Add Your Name"}</CardTitle>
          <CardDescription className="flex items-center justify-center gap-1">
            {profileData.location ? (
              <>
                <MapPin className="h-3 w-3" />
                {profileData.location}
              </>
            ) : (
              <span className="text-muted-foreground/70">
                Add your location
              </span>
            )}
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

          {profileData.phone && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>{profileData.phone}</span>
            </div>
          )}

          {profileData.website && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>{profileData.website}</span>
            </div>
          )}

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Social Media
            </h4>

            {hasSocialInfo ? (
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
            ) : (
              <div className="text-sm text-muted-foreground/70 italic">
                No social profiles added yet
              </div>
            )}
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
              {!hasExtendedInfo ? (
                <EmptyState
                  icon={<User className="h-8 w-8" />}
                  title="Your profile is waiting to be filled"
                  description="Tell us about yourself, your travel preferences, and experiences."
                  action={
                    <Button onClick={() => setIsEditing(true)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Add Profile Info
                    </Button>
                  }
                />
              ) : (
                <>
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Bio</h3>
                    <p className="text-muted-foreground">
                      {profileData.bio || (
                        <span className="italic text-muted-foreground/70">
                          No bio added yet
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Travel Preferences</h3>
                    {hasTravelPreferences ? (
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Adventure",
                          "Cultural",
                          "Beach",
                          "Food & Wine",
                          "Hiking",
                          "Photography",
                        ].map((pref) => (
                          <Badge
                            key={pref}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {pref}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="italic text-muted-foreground/70">
                          No travel preferences added yet
                        </span>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-3.5 w-3.5" />
                          Add Preferences
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium">Countries Visited</h3>
                    {hasCountriesVisited ? (
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {[
                          "France",
                          "Italy",
                          "Japan",
                          "Thailand",
                          "Australia",
                          "Peru",
                        ].map((country) => (
                          <div
                            key={country}
                            className="flex items-center gap-2"
                          >
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>{country}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="italic text-muted-foreground/70">
                          No countries added yet
                        </span>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-3.5 w-3.5" />
                          Add Countries
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              )}
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
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">
                Tours Completed
              </div>
            </div>
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">
                Countries Visited
              </div>
            </div>
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">
                Cities Explored
              </div>
            </div>
            <div className="rounded-lg border border-primary/10 bg-primary/5 p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">Travel Days</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
