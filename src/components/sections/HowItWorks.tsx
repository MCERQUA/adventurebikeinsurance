"use client";
import { ClipboardList, Search, Compass } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell Us About Your Ride",
    description:
      "Share your bike details, how you ride, and what coverages matter to you. Off-road frequency, international plans, gear value — we want the full picture so we can match you with the right policy.",
  },
  {
    icon: Search,
    step: "02",
    title: "We Shop Multiple Carriers",
    description:
      "We compare quotes from dozens of insurance carriers simultaneously, looking specifically for policies that cover adventure riding scenarios — not just standard street motorcycle insurance.",
  },
  {
    icon: Compass,
    step: "03",
    title: "Ride Anywhere With Confidence",
    description:
      "Get your policy documents within 15 minutes. You're covered on pavement, gravel roads, and designated trails. Ride into Mexico, Canada, or across the country knowing your insurance has you protected.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Adventure-Ready Coverage in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              15 Minutes
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting the right insurance for your adventure bike shouldn't take longer than planning
            your next trip. Our process is fast, thorough, and tailored to adventure riders.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border" />
                )}

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 tracking-widest">
                    STEP {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-heading font-bold">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
