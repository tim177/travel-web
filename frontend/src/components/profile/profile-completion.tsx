"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, ChevronRight } from "lucide-react";

export function ProfileCompletion() {
  const [progress, setProgress] = useState(0);

  // In a real app, this would be calculated based on actual profile completion
  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => setProgress(20), 500);
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    { id: "basic", label: "Basic Info", completed: true },
    { id: "photo", label: "Profile Photo", completed: false },
    { id: "preferences", label: "Travel Preferences", completed: false },
    { id: "payment", label: "Payment Method", completed: false },
    { id: "verification", label: "Verify Email", completed: false },
  ];

  return (
    <Card className="border-primary/10 overflow-hidden bg-white/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Complete Your Profile</h2>
            <p className="text-muted-foreground">
              Enhance your travel experience by completing your profile
            </p>
          </div>

          <div className="flex-1 max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Profile Completion</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center p-3 rounded-lg text-center transition-all ${
                step.completed
                  ? "bg-primary/10 text-primary"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              <div className="mb-2">
                {step.completed ? (
                  <CheckCircle2 className="h-6 w-6" />
                ) : (
                  <Circle className="h-6 w-6" />
                )}
              </div>
              <span className="text-sm font-medium">{step.label}</span>
              {index < steps.length - 1 && (
                <ChevronRight className="hidden md:block h-4 w-4 absolute -right-2 top-1/2 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Button className="gap-2">
            Continue Profile Setup
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
