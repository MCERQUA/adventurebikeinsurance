"use client";
import { Check, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

const tiers = [
  {
    name: "Liability Only",
    price: "$150 – $400",
    period: "/year",
    description: "Basic coverage to meet state requirements and protect against claims from others.",
    includes: [
      "Bodily injury liability",
      "Property damage liability",
      "Uninsured motorist protection",
      "Meets all state minimums",
    ],
    bestFor: "Budget-conscious riders, older bikes with lower value",
    highlighted: false,
  },
  {
    name: "Standard Full Coverage",
    price: "$400 – $900",
    period: "/year",
    description: "Comprehensive protection for everyday riding on pavement and well-maintained roads.",
    includes: [
      "Everything in Liability",
      "Collision coverage",
      "Comprehensive coverage (theft, weather, animals)",
      "Medical payments / MedPay",
      "Roadside assistance & towing",
      "Custom parts & accessories",
    ],
    bestFor: "Most adventure riders — strong protection at a fair price",
    highlighted: true,
  },
  {
    name: "Full Adventure Coverage",
    price: "$700 – $1,800",
    period: "/year",
    description: "Maximum protection for riders who venture off-pavement, travel long distances, and carry expensive gear.",
    includes: [
      "Everything in Standard",
      "Off-road coverage extension",
      "Gear & equipment coverage ($2K–$8K)",
      "Trip interruption coverage",
      "International riding endorsement",
      "Medical evacuation coverage",
      "Long-distance towing (200+ miles)",
      "Gap coverage for new bikes",
    ],
    bestFor: "Overlanders, international riders, riders with high-value gear",
    highlighted: false,
  },
];

const factors = [
  "Bike make, model, and year (higher value = higher premium)",
  "Your age and riding experience (riders 35–65 get the best rates)",
  "Your location and where you store the bike",
  "Riding history — claims, tickets, and accidents in the past 5 years",
  "Annual mileage and how far you ride from home",
  "Off-road riding frequency and terrain type",
  "Deductible selection (higher deductible = lower premium)",
  "Coverage limits and add-on selections",
];

export function PricingOverview() {
  return (
    <section className="py-24 md:py-32 bg-card/30" id="pricing">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Adventure Bike Insurance Cost
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            How Much Is{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Adventure Bike Insurance?
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Adventure bike insurance is more affordable than most riders expect. Prices depend on your
            bike, riding habits, and coverage selections — but most adventure riders pay between
            $400 and $1,800 per year for comprehensive coverage.
          </p>
        </FadeIn>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div
                className={`relative p-6 md:p-8 rounded-xl border h-full flex flex-col ${
                  tier.highlighted
                    ? "bg-card border-primary/50 shadow-lg shadow-primary/10"
                    : "bg-card border-border"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-heading font-bold">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

                <div className="mt-6 mb-6">
                  <span className="text-3xl font-heading font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>

                <ul className="space-y-3 flex-grow">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Best for:</span> {tier.bestFor}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Factors */}
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-heading font-bold mb-4 text-center">
              Factors That Affect Your Adventure Bike Insurance Rate
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {factors.map((factor) => (
                <div key={factor} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
              >
                Get Your Personalized Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Takes 15 minutes — we shop multiple carriers for you
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
