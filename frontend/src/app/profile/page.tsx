"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileInfo } from "@/components/profile/profile-info";
import { ProfileBookings } from "@/components/profile/profile-bookings";
import { ProfileTours } from "@/components/profile/profile-tours";
import { ProfileSettings } from "@/components/profile/profile-settings";
import { ProfileBilling } from "@/components/profile/profile-billing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { User, CalendarDays, Map, Settings, CreditCard } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold">My Account</h1>

          <Tabs
            defaultValue="profile"
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span className="hidden sm:inline">My Bookings</span>
              </TabsTrigger>
              <TabsTrigger value="tours" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                <span className="hidden sm:inline">Saved Tours</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Billing</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <ProfileInfo />
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <ProfileBookings />
            </TabsContent>

            <TabsContent value="tours" className="space-y-6">
              <ProfileTours />
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <ProfileSettings />
            </TabsContent>

            <TabsContent value="billing" className="space-y-6">
              <ProfileBilling />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
