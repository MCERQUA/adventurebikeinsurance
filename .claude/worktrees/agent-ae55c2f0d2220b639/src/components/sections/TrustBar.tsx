"use client";
import { Shield, Clock, Award, Globe, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const items = [
  { icon: Shield, label: "Licensed All 50 States" },
  { icon: Award, label: "20+ Years Experience" },
  { icon: Clock, label: "15-Minute Quotes" },
  { icon: Phone, label: "24/7 Claims Response" },
  { icon: Globe, label: "International Coverage" },
];

export function TrustBar() {
  return (
    <section className="py-8 md:py-12 border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.05}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
