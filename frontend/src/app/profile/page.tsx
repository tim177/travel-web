"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileInfo } from "@/components/profile/profile-info";
import { ProfileBookings } from "@/components/profile/profile-bookings";
import { ProfileWishlist } from "@/components/profile/profile-wishlist";
import { ProfileSettings } from "@/components/profile/profile-settings";
import { ProfileBilling } from "@/components/profile/profile-billing";
import { Footer } from "@/components/footer";
import { ProfileCompletion } from "@/components/profile/profile-completion";
import {
  User,
  CalendarDays,
  Heart,
  Settings,
  CreditCard,
  Leaf,
} from "lucide-react";
import Header from "@/components/tour-header";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 leaf-pattern">
        <div className="container max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <Leaf className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">My Account</h1>
          </div>

          {/* Profile Completion Progress */}
          <ProfileCompletion />

          <Tabs
            defaultValue="profile"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8 mt-8"
          >
            <div className="rounded-xl p-1.5 shadow-sm backdrop-blur-sm">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-14">
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2 rounded-lg py-3"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger
                  value="bookings"
                  className="flex items-center gap-2 rounded-lg py-3"
                >
                  <CalendarDays className="h-4 w-4" />
                  <span className="hidden sm:inline">My Bookings</span>
                </TabsTrigger>
                <TabsTrigger
                  value="wishlist"
                  className="flex items-center gap-2 rounded-lg py-3"
                >
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Wishlist</span>
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="flex items-center gap-2 rounded-lg py-3"
                >
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="flex items-center gap-2 rounded-lg py-3"
                >
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden sm:inline">Billing</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="profile" className="space-y-8">
              <ProfileInfo />
            </TabsContent>

            <TabsContent value="bookings" className="space-y-8">
              <ProfileBookings />
            </TabsContent>

            <TabsContent value="wishlist" className="space-y-8">
              <ProfileWishlist />
            </TabsContent>

            <TabsContent value="settings" className="space-y-8">
              <ProfileSettings />
            </TabsContent>

            <TabsContent value="billing" className="space-y-8">
              <ProfileBilling />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
