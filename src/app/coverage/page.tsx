import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  Shield, Car, Umbrella, Heart, Truck, Users,
  Wrench, Briefcase, Globe, MapPin, AlertTriangle,
  Plane, DollarSign, Anchor, ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "Complete adventure bike insurance coverage: off-road extensions, gear protection, trip interruption, international riding, medical evacuation, and more. Understand every coverage option for your adventure motorcycle.",
  keywords: [
    "adventure bike insurance coverage",
    "off-road motorcycle coverage",
    "motorcycle gear insurance",
    "trip interruption insurance motorcycle",
    "international motorcycle insurance",
    "motorcycle medical evacuation",
    "custom parts motorcycle insurance",
    "does motorcycle insurance cover off-road",
  ],
  alternates: { canonical: "https://adventurebikeinsurance.com/coverage" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/coverage",
    siteName: "Adventure Bike Insurance",
    title: "Adventure Bike Insurance Coverage Guide — Off-Road, Gear, International",
    description:
      "Every coverage option explained — what's standard, what's adventure-specific, and what you actually need based on how you ride.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Bike Insurance Coverage Guide",
    description:
      "Off-road extensions, gear protection, trip interruption, international riding — every coverage option explained.",
  },
};

const standardCoverages = [
  {
    icon: Shield,
    title: "Bodily Injury & Property Damage Liability",
    id: "liability",
    description:
      "Covers injuries and property damage you cause to others in an accident. Required by law in virtually every state. We help you select liability limits that protect your assets — most adventure riders benefit from limits well above state minimums, especially when riding in remote areas where emergency response costs are higher.",
  },
  {
    icon: Car,
    title: "Collision Coverage",
    id: "collision",
    description:
      "Pays for damage to your adventure bike regardless of fault — whether you hit another vehicle, a guardrail, or lay it down on a gravel road. Covers repairs or replacement up to your bike's actual cash value. Essential for bikes worth $10,000 or more, which is most adventure bikes.",
  },
  {
    icon: Umbrella,
    title: "Comprehensive Coverage",
    id: "comprehensive",
    description:
      "Protects against non-collision damage: theft (a real concern for expensive adventure bikes left at trailheads), weather damage, animal strikes (common on rural and forest roads), vandalism, and falling objects. Adventure riders who park their bikes outdoors at campgrounds or trailheads especially need this coverage.",
  },
  {
    icon: Heart,
    title: "Medical Payments / MedPay",
    id: "medpay",
    description:
      "Covers your medical bills regardless of who caused the accident. Pays for hospital visits, surgery, rehabilitation, and follow-up care. Particularly important for adventure riders because injuries sustained on remote roads often require expensive helicopter transport and emergency room visits.",
  },
  {
    icon: ShieldCheck,
    title: "Uninsured/Underinsured Motorist",
    id: "um",
    description:
      "Protects you if you're hit by a driver with no insurance or insufficient coverage. A surprising number of drivers on rural roads — where adventure riders spend most of their time — carry minimum or no insurance. This coverage ensures you're not left paying for someone else's negligence.",
  },
  {
    icon: Truck,
    title: "Roadside Assistance & Towing",
    id: "roadside",
    description:
      "Covers towing, jump-starts, flat tire assistance, and fuel delivery. For adventure riders, standard roadside assistance often falls short — distance limits may not cover you if you're 100+ miles from the nearest tow service. We recommend enhanced plans with long-distance towing coverage for riders who venture into remote areas.",
  },
  {
    icon: Users,
    title: "Guest Passenger Liability",
    id: "passenger",
    description:
      "Covers injuries to a passenger riding on your adventure bike. Important if you ever ride two-up — many adventure riders do on long tours. Some carriers include this automatically with your liability limits; others require it as an add-on. We verify this is included in every quote we provide.",
  },
];

const adventureCoverages = [
  {
    icon: MapPin,
    title: "Off-Road Coverage Extension",
    id: "off-road",
    description:
      "This is the coverage that separates adventure bike insurance from standard motorcycle insurance. Most policies exclude coverage the moment you leave a paved road. The off-road extension covers you on gravel roads, dirt roads, fire roads, forest service roads, and unmaintained surfaces. Without it, a crash on a gravel road could leave you paying for everything out of pocket.",
    whyItMatters:
      "Adventure riders routinely ride on unpaved surfaces. If your policy doesn't have this extension, you're effectively uninsured every time you leave the pavement. This is the single most important add-on for ADV riders.",
  },
  {
    icon: Briefcase,
    title: "Gear & Equipment Coverage",
    id: "gear",
    description:
      "Protects your riding gear — helmet ($400-$1,500), riding suit or jacket and pants ($800-$3,000), boots ($200-$500), gloves ($50-$300), communication systems ($200-$800), and body armor. Adventure riders typically carry $2,000–$8,000 in gear. Standard policies have minimal coverage for these items, often capped at $500-$1,000. Gear coverage ensures your investment is protected whether gear is damaged in a crash, stolen from your bike, or lost during transport.",
    whyItMatters:
      "Your gear costs as much as some riders' bikes. A single crash can destroy a $2,000 riding suit and a $1,500 helmet. Without gear coverage, that's entirely out of pocket.",
  },
  {
    icon: AlertTriangle,
    title: "Trip Interruption Coverage",
    id: "trip-interruption",
    description:
      "If your adventure bike breaks down while you're on a trip — whether it's across the state or across the continent — trip interruption coverage pays for hotel stays, meals, and alternative transportation. Some policies also cover the cost of getting your bike to a repair shop and even trip cancellation if your bike breaks down before you leave. Coverage limits typically range from $500 to $2,500 per incident.",
    whyItMatters:
      "Adventure riders regularly take multi-day, multi-state, and international trips. A breakdown 500 miles from home can easily cost $1,000+ in hotels and transport. This coverage turns a trip-ending breakdown into a minor detour.",
  },
  {
    icon: Globe,
    title: "International Coverage",
    id: "international",
    description:
      "Extends your insurance coverage when riding in other countries. Mexico requires a separate Mexican liability policy (it's the law — your U.S. policy doesn't automatically apply). Canadian coverage varies by carrier — some extend standard coverage automatically, others require an endorsement. For Central and South America, coverage options become more limited and may require specialized international policies or travel insurance riders.",
    whyItMatters:
      "The adventure riding community is global. Riders cross into Mexico, Canada, and beyond regularly. Without proper international coverage, you may be riding uninsured in a foreign country where medical costs and legal liability can be catastrophic.",
  },
  {
    icon: Plane,
    title: "Medical Evacuation Coverage",
    id: "medevac",
    description:
      "Covers emergency medical transport — typically helicopter or air ambulance — if you're injured in a remote area where ground transport isn't practical or timely enough. Adventure riders often ride in areas far from hospitals: mountain passes, desert trails, forest roads. A single helicopter evacuation can cost $15,000–$50,000 or more. This coverage can be a standalone add-on or included in comprehensive travel insurance policies.",
    whyItMatters:
      "If you crash on a remote trail and need air transport to a trauma center, the bill can be devastating. Medical evacuation coverage ensures you get to the right hospital without financial ruin.",
  },
  {
    icon: Wrench,
    title: "Custom Parts & Accessories",
    id: "custom-parts",
    description:
      "Adventure bikes are heavily modified. This coverage protects your aftermarket additions: crash bars ($300-$800), skid plates ($200-$600), hard cases and panniers ($800-$2,000), GPS units ($200-$700), heated grips ($100-$200), upgraded suspension ($1,000-$3,000), auxiliary lighting ($200-$600), and communication mounts. Without this endorsement, your carrier will only pay for the stock value of your bike — all those accessories disappear from the claim.",
    whyItMatters:
      "A well-equipped adventure bike can have $3,000–$8,000 in accessories. If your bike is totaled and you don't have custom parts coverage, you lose all of it. The carrier pays for the stock bike, not your build.",
  },
  {
    icon: DollarSign,
    title: "Gap Coverage / Total Loss Protection",
    id: "gap",
    description:
      "If your adventure bike is totaled, your insurance pays the actual cash value (ACV) of the bike — which may be less than what you owe on your loan. Gap coverage bridges that difference. For new adventure bikes costing $15,000–$28,000, a bike can lose 20-30% of its value in the first year. If you financed the purchase, gap coverage is essential to avoid owing money on a bike you no longer have.",
    whyItMatters:
      "New adventure bikes are expensive and depreciate quickly. If you total a $20,000 bike that you financed, the insurance payout might be $16,000 — leaving you $4,000 in the hole. Gap coverage pays that difference.",
  },
  {
    icon: Anchor,
    title: "Trailer & Transport Coverage",
    id: "transport",
    description:
      "Covers your adventure bike while it's being transported on a trailer, in a truck bed, or shipped to a destination. Important for riders who trailer their bikes to ride destinations — Overland Expo, Moab, Baja, Alaska — or who ship their bikes internationally for riding tours. This coverage protects against damage during transport, theft from a trailer, and trailer-related accidents.",
    whyItMatters:
      "Many adventure riders trailer their bikes to riding destinations. If the trailer is in an accident or the bike is damaged during loading/unloading, standard auto insurance may not cover the motorcycle. This endorsement closes that gap.",
  },
];

export default function CoveragePage() {
  const allCoverages = [...standardCoverages, ...adventureCoverages];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Adventure Bike Insurance Coverage Options",
    itemListElement: allCoverages.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: c.title,
        description: c.description,
        provider: {
          "@type": "InsuranceAgency",
          name: "Adventure Bike Insurance",
          url: "https://adventurebikeinsurance.com",
        },
        areaServed: "United States",
        serviceType: "Motorcycle Insurance Coverage",
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "Coverage", item: "https://adventurebikeinsurance.com/coverage" },
    ],
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-adventure">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Adventure Bike Insurance{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Coverage Guide
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Standard motorcycle insurance leaves adventure riders with dangerous coverage gaps. Here's
              every coverage option explained — what's standard, what's adventure-specific, and what you
              actually need based on how you ride.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Standard Coverages */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Standard Motorcycle Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              The Foundation Every Policy Includes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These coverages form the base of every adventure bike insurance policy. They're the same
              protections available on any motorcycle policy — but the limits and details matter more for
              adventure riders.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {standardCoverages.map((coverage, i) => (
              <FadeIn key={coverage.id} delay={i * 0.05}>
                <div id={coverage.id} className="p-6 md:p-8 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <coverage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">{coverage.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{coverage.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure-Specific Coverages */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-16">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Adventure-Specific Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              The Coverages Most Riders Don't Know They Need
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These are the add-on coverages that separate adventure bike insurance from standard
              motorcycle insurance. Most adventure riders need at least two or three of these — some
              need all of them.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {adventureCoverages.map((coverage, i) => (
              <FadeIn key={coverage.id} delay={i * 0.05}>
                <div id={coverage.id} className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <coverage.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold">{coverage.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{coverage.description}</p>
                      <div className="mt-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <p className="text-sm font-semibold text-accent mb-1">Why this matters for adventure riders</p>
                        <p className="text-sm text-muted-foreground">{coverage.whyItMatters}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Not Sure Which Coverages You Need?"
        description="Tell us how you ride and we'll build a policy that covers every scenario. Free consultation — 15 minutes."
        primaryCTA="Get a Coverage Recommendation"
        primaryHref="/quote"
      />

      <Footer />
    </main>
  );
}
