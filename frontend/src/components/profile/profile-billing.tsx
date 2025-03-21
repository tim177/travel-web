"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { CreditCard, Plus, Receipt, Wallet } from "lucide-react";
import { EmptyState } from "@/components/profile/empty-state";

export function ProfileBilling() {
  const [showAddCard, setShowAddCard] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paymentMethods: any[] = [];
  const hasPaymentMethods = paymentMethods.length > 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const billingHistory: any[] = [];
  const hasBillingHistory = billingHistory.length > 0;

  return (
    <div className="space-y-6">
      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <CardTitle>Payment Methods</CardTitle>
          </div>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!hasPaymentMethods ? (
            showAddCard ? (
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
              <EmptyState
                icon={<Wallet className="h-8 w-8" />}
                title="No payment methods"
                description="Add a payment method to make booking faster and easier."
                action={
                  <Button onClick={() => setShowAddCard(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                }
              />
            )
          ) : (
            <RadioGroup defaultValue="card1">
              <div className="space-y-4">
                {/* Payment method cards would go here */}
              </div>
            </RadioGroup>
          )}
        </CardContent>
      </Card>

      <Card className="nature-card border-primary/10 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-primary" />
            <CardTitle>Billing History</CardTitle>
          </div>
          <CardDescription>
            View and download your billing history
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!hasBillingHistory ? (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <p className="text-muted-foreground mb-2">
                Your billing history will appear here after you make a purchase.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Billing history items would go here */}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
