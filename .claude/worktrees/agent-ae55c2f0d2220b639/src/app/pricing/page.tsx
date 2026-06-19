import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "How much is adventure bike insurance? Complete pricing guide covering liability-only, standard full coverage, and full adventure coverage with real cost ranges for BMW GS, KTM, Honda Africa Twin, Yamaha Ténéré, and more.",
  keywords: [
    "adventure bike insurance cost",
    "how much is adventure bike insurance",
    "best adventure bike insurance",
    "cheap adventure bike insurance",
    "bmw gs insurance cost",
    "honda africa twin insurance",
    "ktm adventure insurance",
    "triumph tiger insurance",
    "dual sport insurance cost",
    "yamaha tenere 700 insurance",
  ],
  alternates: { canonical: "https://adventurebikeinsurance.com/pricing" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/pricing",
    siteName: "Adventure Bike Insurance",
    title: "Adventure Bike Insurance Cost Guide — Real Pricing by Bike Model",
    description:
      "Real pricing for BMW GS, KTM, Africa Twin, Ténéré 700, and more. Liability, full coverage, and full adventure coverage cost ranges.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Bike Insurance Cost Guide",
    description:
      "Real pricing data for the most popular adventure bikes. Liability, full coverage, and adventure coverage cost ranges.",
  },
};

const bikePricing = [
  {
    bike: "BMW R1250GS / GSA",
    value: "$18,000 – $25,000",
    liability: "$250 – $400",
    fullCoverage: "$700 – $1,200",
    adventureCoverage: "$1,100 – $2,200",
  },
  {
    bike: "BMW R1300GS",
    value: "$20,000 – $28,000",
    liability: "$280 – $420",
    fullCoverage: "$800 – $1,400",
    adventureCoverage: "$1,200 – $2,200",
  },
  {
    bike: "KTM 1290 Super Adventure R/S",
    value: "$18,000 – $22,000",
    liability: "$260 – $400",
    fullCoverage: "$750 – $1,300",
    adventureCoverage: "$1,100 – $2,000",
  },
  {
    bike: "KTM 890 Adventure R",
    value: "$14,000 – $16,000",
    liability: "$220 – $360",
    fullCoverage: "$600 – $1,000",
    adventureCoverage: "$900 – $1,600",
  },
  {
    bike: "Honda CRF1100L Africa Twin",
    value: "$14,000 – $18,000",
    liability: "$200 – $340",
    fullCoverage: "$550 – $950",
    adventureCoverage: "$850 – $1,500",
  },
  {
    bike: "Yamaha Ténéré 700",
    value: "$10,000 – $12,000",
    liability: "$180 – $300",
    fullCoverage: "$450 – $800",
    adventureCoverage: "$700 – $1,300",
  },
  {
    bike: "Triumph Tiger 1200",
    value: "$16,000 – $22,000",
    liability: "$240 – $380",
    fullCoverage: "$650 – $1,100",
    adventureCoverage: "$950 – $1,700",
  },
  {
    bike: "Suzuki V-Strom 650",
    value: "$8,000 – $10,000",
    liability: "$160 – $280",
    fullCoverage: "$400 – $700",
    adventureCoverage: "$600 – $1,100",
  },
  {
    bike: "Kawasaki Versys 650",
    value: "$8,000 – $10,000",
    liability: "$150 – $260",
    fullCoverage: "$380 – $680",
    adventureCoverage: "$580 – $1,000",
  },
  {
    bike: "Kawasaki KLR 650",
    value: "$6,000 – $8,000",
    liability: "$150 – $240",
    fullCoverage: "$350 – $600",
    adventureCoverage: "$500 – $900",
  },
  {
    bike: "Royal Enfield Himalayan",
    value: "$4,500 – $6,000",
    liability: "$150 – $200",
    fullCoverage: "$300 – $500",
    adventureCoverage: "$400 – $750",
  },
  {
    bike: "Honda CB500X",
    value: "$6,000 – $8,000",
    liability: "$150 – $230",
    fullCoverage: "$320 – $550",
    adventureCoverage: "$480 – $850",
  },
];

const costFactors = [
  {
    factor: "Bike Value",
    detail: "The single biggest factor. A $25,000 BMW GSA costs significantly more to insure than a $5,000 Himalayan. Collision and comprehensive premiums scale directly with the bike's actual cash value.",
    impact: "High",
  },
  {
    factor: "Riding Experience",
    detail: "Riders with 5+ years of clean riding history get the best rates. New riders face higher premiums regardless of bike choice. An MSF completion course can reduce your rate by 5-15%.",
    impact: "High",
  },
  {
    factor: "Your Age",
    detail: "Riders aged 35-65 generally get the best adventure bike insurance rates. Riders under 25 pay significantly more. Riders over 65 may see slight increases due to statistical risk factors.",
    impact: "Medium-High",
  },
  {
    factor: "Location",
    detail: "Urban areas with higher traffic density and theft rates cost more. Rural areas are cheaper for liability but may cost more for comprehensive due to wildlife and road hazards. Some states have significantly higher minimum coverage requirements.",
    impact: "Medium-High",
  },
  {
    factor: "Annual Mileage",
    detail: "Riders who put 3,000 miles per year on their adventure bike pay less than those riding 15,000+. Adventure riders who also use their bike as a daily commuter should note that commuting mileage often costs more than recreational mileage.",
    impact: "Medium",
  },
  {
    factor: "Off-Road Usage",
    detail: "The off-road coverage extension typically adds $100-$300/year to your premium. However, without it, you're essentially uninsured when you leave the pavement. The cost is minimal compared to the risk exposure.",
    impact: "Low-Medium",
  },
  {
    factor: "Coverage Limits & Deductibles",
    detail: "Higher liability limits ($100K/$300K vs. $25K/$50K) cost more but provide better protection. Higher deductibles ($1,000 vs. $250) reduce your premium by 10-25%. Adventure riders should balance affordable premiums with adequate coverage limits.",
    impact: "Medium",
  },
  {
    factor: "Claims History",
    detail: "An at-fault accident in the past 3-5 years will significantly increase your premium — often 20-40%. A clean record with no claims is one of the best ways to keep costs down. Some carriers offer accident forgiveness programs.",
    impact: "High",
  },
];

const savingsTips = [
  "Bundle your adventure bike policy with your car or home insurance — typical savings of 10-25%",
  "Complete an MSF (Motorcycle Safety Foundation) course — most carriers offer a 5-15% discount",
  "Increase your deductible from $250 to $500 or $1,000 — saves 10-25% on collision and comprehensive",
  "Store your bike in a garage or locked facility — reduces theft risk and your premium",
  "Install an anti-theft device (LoJack, GPS tracker, disc lock) — additional 5-10% discount",
  "Maintain a clean riding record — the single biggest factor in long-term cost reduction",
  "Pay your annual premium in full instead of monthly — most carriers offer a 5-10% paid-in-full discount",
  "Shop quotes every renewal — carrier pricing changes frequently, and loyalty doesn't always pay",
];

export default function PricingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://adventurebikeinsurance.com/pricing" },
    ],
  };
  return (
    <main>
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
                Cost Guide
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real pricing data for the most popular adventure bikes. See exactly what riders like you
              are paying for liability-only, standard full coverage, and full adventure coverage with
              all the add-ons.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              How Much Does Adventure Bike Insurance Cost?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Adventure bike insurance typically costs between $400 and $1,800 per year depending on
              your bike, riding history, and coverage selections. Here's the breakdown by coverage level
              and by specific bike model.
            </p>
          </FadeIn>

          {/* Quick Summary Cards */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Liability Only</p>
                <p className="text-3xl font-heading font-bold text-primary">$150 – $400</p>
                <p className="text-sm text-muted-foreground mt-1">per year</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/30 text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Standard Full Coverage</p>
                <p className="text-3xl font-heading font-bold text-primary">$400 – $900</p>
                <p className="text-sm text-muted-foreground mt-1">per year</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-accent/30 text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Full Adventure Coverage</p>
                <p className="text-3xl font-heading font-bold text-accent">$700 – $1,800</p>
                <p className="text-sm text-muted-foreground mt-1">per year</p>
              </div>
            </div>
          </FadeIn>

          {/* Bike-by-Bike Table */}
          <FadeIn>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-heading font-semibold text-foreground">Adventure Bike</th>
                    <th className="text-left py-3 px-4 font-heading font-semibold text-foreground hidden sm:table-cell">Bike Value</th>
                    <th className="text-right py-3 px-4 font-heading font-semibold text-foreground">Liability</th>
                    <th className="text-right py-3 px-4 font-heading font-semibold text-foreground">Full Coverage</th>
                    <th className="text-right py-3 px-4 font-heading font-semibold text-primary">Adventure Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {bikePricing.map((row, i) => (
                    <tr key={row.bike} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card/30" : ""}`}>
                      <td className="py-3 px-4 font-medium text-foreground">{row.bike}</td>
                      <td className="py-3 px-4 text-muted-foreground hidden sm:table-cell">{row.value}</td>
                      <td className="py-3 px-4 text-right text-muted-foreground">{row.liability}</td>
                      <td className="py-3 px-4 text-right text-muted-foreground">{row.fullCoverage}</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">{row.adventureCoverage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              * Pricing estimates based on a 40-year-old rider with clean record, $500 deductible, and typical coverage limits. Actual quotes vary by location, riding history, and carrier. Contact us for a personalized quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What Affects Your Adventure Bike Insurance Rate?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Insurance carriers calculate your premium based on dozens of factors. Here are the most
              significant ones for adventure bike riders, ranked by impact on your rate.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costFactors.map((item, i) => (
              <FadeIn key={item.factor} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-card border border-border h-full">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-heading font-bold">{item.factor}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      item.impact === "High"
                        ? "bg-primary/10 text-primary"
                        : item.impact === "Medium-High"
                        ? "bg-amber-500/10 text-amber-400"
                        : item.impact === "Medium"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {item.impact} Impact
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Money-Saving Tips */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              8 Ways to Lower Your Adventure Bike Insurance
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="space-y-3">
              {savingsTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="mt-12 text-center">
            <Link
              href="/quote"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
            >
              Get Your Personalized Rate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              We compare rates from multiple carriers to find you the best price
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to See Your Actual Rate?"
        description="Get a personalized quote in 15 minutes. We'll show you exactly what your adventure bike insurance costs with coverage tailored to how you ride."
        primaryCTA="Get My Free Quote"
        primaryHref="/quote"
      />

      <Footer />
    </main>
  );
}
