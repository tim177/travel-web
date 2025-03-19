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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Plus, Download, Receipt } from "lucide-react";

export function ProfileBilling() {
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <div className="space-y-6">
      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup defaultValue="card1">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
                <RadioGroupItem value="card1" id="card1" />
                <Label
                  htmlFor="card1"
                  className="flex flex-1 items-center gap-4"
                >
                  <div className="h-10 w-16 rounded bg-gradient-to-r from-blue-600 to-blue-400"></div>
                  <div>
                    <div className="font-medium">Visa ending in 4242</div>
                    <div className="text-sm text-muted-foreground">
                      Expires 04/2025
                    </div>
                  </div>
                </Label>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove card</span>
                </Button>
              </div>

              <div className="flex items-center space-x-2 rounded-lg border border-primary/10 bg-primary/5 p-4 hover-lift">
                <RadioGroupItem value="card2" id="card2" />
                <Label
                  htmlFor="card2"
                  className="flex flex-1 items-center gap-4"
                >
                  <div className="h-10 w-16 rounded bg-gradient-to-r from-orange-600 to-orange-400"></div>
                  <div>
                    <div className="font-medium">Mastercard ending in 5678</div>
                    <div className="text-sm text-muted-foreground">
                      Expires 08/2024
                    </div>
                  </div>
                </Label>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove card</span>
                </Button>
              </div>
            </div>
          </RadioGroup>

          {showAddCard ? (
            <div className="rounded-lg border p-4">
              <h3 className="mb-4 text-lg font-medium">Add New Card</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input id="name" placeholder="Name as it appears on card" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="number">Card Number</Label>
                  <Input id="number" placeholder="XXXX XXXX XXXX XXXX" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowAddCard(false)}
                  >
                    Cancel
                  </Button>
                  <Button>Add Card</Button>
                </div>
              </div>
            </div>
          ) : (
            <Button
              variant="outline"
              className="flex items-center gap-2 border-primary/20 bg-primary/5 hover:bg-primary/10"
              onClick={() => setShowAddCard(true)}
            >
              <Plus className="h-4 w-4" />
              <span>Add Payment Method</span>
            </Button>
          )}
        </CardContent>
      </Card>

      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>
            View and download your billing history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border border-primary/10 bg-primary/5 hover-lift">
              <div className="flex flex-col sm:flex-row">
                <div className="flex flex-1 flex-col space-y-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div>
                    <div className="font-medium">Enchanting Bali Retreat</div>
                    <div className="text-sm text-muted-foreground">
                      May 15, 2023
                    </div>
                  </div>
                  <div className="font-medium text-primary">$2,598.00</div>
                </div>
                <div className="flex items-center border-t border-primary/10 sm:border-l sm:border-t-0">
                  <Button
                    variant="ghost"
                    className="flex h-full items-center gap-2 rounded-none px-4 text-primary hover:bg-primary/10"
                  >
                    <Receipt className="h-4 w-4" />
                    <span>View</span>
                  </Button>
                  <Separator orientation="vertical" className="h-full" />
                  <Button
                    variant="ghost"
                    className="flex h-full items-center gap-2 rounded-none px-4 text-primary hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-primary/10 bg-primary/5 hover-lift">
              <div className="flex flex-col sm:flex-row">
                <div className="flex flex-1 flex-col space-y-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div>
                    <div className="font-medium">Ancient Greek Odyssey</div>
                    <div className="text-sm text-muted-foreground">
                      April 5, 2023
                    </div>
                  </div>
                  <div className="font-medium text-primary">$3,198.00</div>
                </div>
                <div className="flex items-center border-t border-primary/10 sm:border-l sm:border-t-0">
                  <Button
                    variant="ghost"
                    className="flex h-full items-center gap-2 rounded-none px-4 text-primary hover:bg-primary/10"
                  >
                    <Receipt className="h-4 w-4" />
                    <span>View</span>
                  </Button>
                  <Separator orientation="vertical" className="h-full" />
                  <Button
                    variant="ghost"
                    className="flex h-full items-center gap-2 rounded-none px-4 text-primary hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-primary/10 bg-primary/5 hover-lift">
              <div className="flex flex-col sm:flex-row">
                <div className="flex flex-1 flex-col space-y-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <div>
                    <div className="font-medium">Serene Japanese Journey</div>
                    <div className="text-sm text-muted-foreground">
                      November 12, 2022
                    </div>
                  </div>
                  <div className="font-medium text-primary">$2,199.00</div>
                </div>
                <div className="flex items-center border-t border-primary/10 sm:border-l sm:border-t-0">
                  <Button
                    variant="ghost"
                    className="flex h-full items-center gap-2 rounded-none px-4 text-primary hover:bg-primary/10"
                  >
                    <Receipt className="h-4 w-4" />
                    <span>View</span>
                  </Button>
                  <Separator orientation="vertical" className="h-full" />
                  <Button
                    variant="ghost"
                    className="flex h-full items-center gap-2 rounded-none px-4 text-primary hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>Manage your billing information</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal">
            <TabsList className="mb-4 grid w-full grid-cols-2">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="personal-name">Full Name</Label>
                  <Input id="personal-name" defaultValue="Sarah Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personal-email">Email</Label>
                  <Input
                    id="personal-email"
                    defaultValue="sarah.johnson@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personal-address">Address</Label>
                  <Input id="personal-address" defaultValue="123 Main Street" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personal-city">City</Label>
                  <Input id="personal-city" defaultValue="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personal-state">State/Province</Label>
                  <Input id="personal-state" defaultValue="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personal-zip">ZIP/Postal Code</Label>
                  <Input id="personal-zip" defaultValue="10001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personal-country">Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger id="personal-country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="personal-phone">Phone</Label>
                  <Input id="personal-phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" placeholder="Enter business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
                  <Input id="tax-id" placeholder="Enter tax ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-address">Address</Label>
                  <Input
                    id="business-address"
                    placeholder="Enter business address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-city">City</Label>
                  <Input id="business-city" placeholder="Enter city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-state">State/Province</Label>
                  <Input
                    id="business-state"
                    placeholder="Enter state/province"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-zip">ZIP/Postal Code</Label>
                  <Input
                    id="business-zip"
                    placeholder="Enter ZIP/postal code"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-country">Country</Label>
                  <Select>
                    <SelectTrigger id="business-country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-phone">Phone</Label>
                  <Input
                    id="business-phone"
                    placeholder="Enter business phone"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
