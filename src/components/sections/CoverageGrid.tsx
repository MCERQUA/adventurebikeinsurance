"use client";
import {
  MapPin,
  Shield,
  Briefcase,
  Globe,
  Truck,
  Wrench,
  Heart,
  AlertTriangle,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const coverages = [
  {
    icon: MapPin,
    title: "Off-Road Coverage Extension",
    description:
      "Coverage on gravel roads, fire roads, unmaintained surfaces, and unpaved trails. Standard policies stop at the pavement — yours doesn't have to.",
  },
  {
    icon: Briefcase,
    title: "Gear & Equipment Coverage",
    description:
      "Protect your helmet, riding suit, boots, gloves, and communication gear. Adventure riders typically carry $2,000–$8,000 in specialized equipment.",
  },
  {
    icon: AlertTriangle,
    title: "Trip Interruption Coverage",
    description:
      "Hotel stays, meals, and alternative transportation if your bike breaks down mid-trip. Essential for riders who venture far from home.",
  },
  {
    icon: Globe,
    title: "International Coverage",
    description:
      "Ride into Mexico, Canada, and beyond with proper coverage. We handle the endorsements and international policies so you can cross borders with confidence.",
  },
  {
    icon: Truck,
    title: "Long-Distance Roadside Assistance",
    description:
      "Towing from remote areas where standard roadside assistance won't reach. 200+ mile towing coverage for backcountry breakdowns.",
  },
  {
    icon: Wrench,
    title: "Custom Parts & Accessories",
    description:
      "Coverage for crash bars, skid plates, hard cases, GPS units, heated grips, upgraded suspension, and all your adventure-specific modifications.",
  },
  {
    icon: Heart,
    title: "Medical Evacuation Coverage",
    description:
      "Emergency medical transport if you're injured in a remote area. Covers helicopter evacuations and transport to the nearest qualified medical facility.",
  },
  {
    icon: Shield,
    title: "Comprehensive & Collision",
    description:
      "Full coverage for theft, weather damage, animal strikes, vandalism, and collision — on road and off. Gap coverage available for new bikes over $20,000.",
  },
];

export function CoverageGrid() {
  return (
    <section className="py-24 md:py-32" id="coverage-grid">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Adventure-Specific Coverage
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Coverage Built for the Way{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              You Actually Ride
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Standard motorcycle insurance leaves adventure riders exposed. We close the gaps with
            specialized coverages that protect you on gravel roads, in foreign countries, and a
            thousand miles from the nearest dealer.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverages.map((coverage) => (
            <StaggerItem key={coverage.title}>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <coverage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{coverage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {coverage.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
