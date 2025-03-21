"use client";

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
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, Bell, Lock, Shield } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ProfileSettings() {
  const [passwordResetSent, setPasswordResetSent] = useState(false);

  const handlePasswordReset = () => {
    // In a real app, this would send a password reset email
    setPasswordResetSent(true);
    setTimeout(() => setPasswordResetSent(false), 5000);
  };

  return (
    <div className="space-y-6">
      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle>Account Security</CardTitle>
          </div>
          <CardDescription>
            Manage your account security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Password</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Change Password</Button>
            </div>

            <div className="mt-4 rounded-lg border p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-medium">Forgot your password?</h4>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll send you a link to reset your password.
                  </p>
                </div>
                <Button variant="outline" onClick={handlePasswordReset}>
                  Reset Password
                </Button>
              </div>

              {passwordResetSent && (
                <Alert className="mt-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Password reset link has been sent to your email address.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <span>Notification Preferences</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing" className="font-medium">
                    Marketing Emails
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new tours, promotions, and travel tips.
                  </p>
                </div>
                <Switch id="marketing" defaultChecked />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
                <div className="space-y-0.5">
                  <Label htmlFor="booking-updates" className="font-medium">
                    Booking Updates
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about your booking status and updates.
                  </p>
                </div>
                <Switch id="booking-updates" defaultChecked />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
                <div className="space-y-0.5">
                  <Label htmlFor="travel-alerts" className="font-medium">
                    Travel Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive important alerts about your destinations.
                  </p>
                </div>
                <Switch id="travel-alerts" defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Communication Preferences</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="it">Italian</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Preferred Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="jpy">JPY (¥)</SelectItem>
                    <SelectItem value="aud">AUD ($)</SelectItem>
                    <SelectItem value="cad">CAD ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>Privacy & Security</CardTitle>
          </div>
          <CardDescription>
            Manage your privacy and security settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor" className="font-medium">
                  Two-Factor Authentication
                </Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account.
                </p>
              </div>
              <Switch id="two-factor" />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
              <div className="space-y-0.5">
                <Label htmlFor="activity-log" className="font-medium">
                  Activity Log
                </Label>
                <p className="text-sm text-muted-foreground">
                  Track and review your account activity.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 hover:bg-primary/10"
              >
                View Log
              </Button>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
              <div className="space-y-0.5">
                <Label htmlFor="data-sharing" className="font-medium">
                  Data Sharing
                </Label>
                <p className="text-sm text-muted-foreground">
                  Control how your data is used and shared.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/20 hover:bg-primary/10"
              >
                Manage
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="nature-card border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>
            Irreversible and destructive actions
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="font-medium">Delete Account</h4>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data.
              </p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
