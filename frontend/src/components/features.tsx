import type React from "react";
import {
  Compass,
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Headphones,
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <section className="bg-muted/50 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;re dedicated to making your travel experience exceptional
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Compass className="h-10 w-10" />}
            title="Expert Local Guides"
            description="Our knowledgeable guides provide authentic insights and ensure you experience the best of each destination."
          />
          <Feature
            icon={<Shield className="h-10 w-10" />}
            title="Safe and Secure"
            description="Your safety is our priority. We maintain the highest standards of security throughout your journey."
          />
          <Feature
            icon={<Clock className="h-10 w-10" />}
            title="Flexible Scheduling"
            description="We offer customizable itineraries to accommodate your preferences and ensure a personalized experience."
          />
          <Feature
            icon={<Award className="h-10 w-10" />}
            title="Quality Accommodations"
            description="Stay in carefully selected hotels and resorts that offer comfort, convenience, and authentic local charm."
          />
          <Feature
            icon={<HeartHandshake className="h-10 w-10" />}
            title="Responsible Tourism"
            description="We're committed to sustainable travel practices that respect local communities and protect the environment."
          />
          <Feature
            icon={<Headphones className="h-10 w-10" />}
            title="24/7 Support"
            description="Our dedicated customer service team is available around the clock to assist with any questions or concerns."
          />
        </div>
      </div>
    </section>
  );
}
