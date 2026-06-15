import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";
import { Shield, Clock, Award, Phone, MapPin, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Contractors Choice Agency — 20+ years of insurance expertise. Licensed in all 50 states. Adventure bike insurance specialists who understand off-road riding, overlanding, and international motorcycle travel.",
  keywords: [
    "contractors choice agency",
    "adventure bike insurance company",
    "motorcycle insurance agent arizona",
  ],
  alternates: { canonical: "https://adventurebikeinsurance.com/about" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/about",
    siteName: "Adventure Bike Insurance",
    title: "About Contractors Choice Agency — Adventure Bike Insurance Experts",
    description:
      "20+ years of insurance expertise. Licensed in all 50 states. Adventure bike specialists who understand off-road, overlanding, and international riding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Contractors Choice Agency",
    description:
      "20+ years of insurance expertise. Licensed in all 50 states. Adventure bike insurance specialists.",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://adventurebikeinsurance.com/about" },
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
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Contractors Choice Agency
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Arizona's trusted insurance experts since 2005. We specialize in finding the right coverage
              for riders who don't just commute — they explore.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                From Contractor to Insurance Specialist
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Contractors Choice Agency was founded in 2005 by Josh Cotner, a former contractor who
                  understood firsthand the insurance challenges that trade professionals face. That
                  insider perspective became the foundation of an agency built on understanding its
                  clients — not just selling them policies.
                </p>
                <p>
                  Over 20 years, the agency has grown from a one-man operation in Chandler, Arizona to a
                  nationally licensed insurance brokerage serving clients across all 50 states. The
                  philosophy hasn't changed: understand the client's actual needs, shop multiple carriers,
                  and deliver the best coverage at the best price.
                </p>
                <p>
                  Adventure Bike Insurance is a natural extension of that philosophy. Adventure riders
                  have specific, complex insurance needs that most agents and online quote tools don't
                  understand. Off-road coverage gaps, gear protection, international riding requirements
                  — these aren't check-box items on a standard motorcycle insurance form. They require
                  knowledge of carrier underwriting, policy language, and the real-world riding
                  scenarios that adventure riders face.
                </p>
                <p>
                  Josh and the team at Contractors Choice Agency bring that same detail-oriented, client-
                  first approach to adventure bike insurance. We ride, we research, and we find policies
                  that actually protect you on the road beyond pavement.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Counter target={20} suffix="+" className="text-4xl font-heading font-bold text-primary" />
                  <p className="mt-2 text-sm text-muted-foreground">Years in Business</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Counter target={50} className="text-4xl font-heading font-bold text-primary" />
                  <p className="mt-2 text-sm text-muted-foreground">States Licensed</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Counter target={298} className="text-4xl font-heading font-bold text-primary" />
                  <p className="mt-2 text-sm text-muted-foreground">Active Clients</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Counter target={15} className="text-4xl font-heading font-bold text-primary" />
                  <p className="mt-2 text-sm text-muted-foreground">Minute Quotes</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Why Adventure Riders Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What Makes Us Different
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Shield,
                title: "We Understand Adventure Riding",
                description:
                  "We know the difference between a fire road and a single-track trail. We understand why gear coverage matters and why standard towing limits don't work for overlanders. Our quotes are built for how you actually ride.",
              },
              {
                icon: Users,
                title: "We Shop Multiple Carriers",
                description:
                  "We don't work for one insurance company. We're independent brokers who compare rates and coverage terms from dozens of carriers to find the best policy for your specific situation. That independence means we work for you, not a carrier's bottom line.",
              },
              {
                icon: Clock,
                title: "15-Minute Quote Turnaround",
                description:
                  "Fill out our quote form or give us a call. We'll have competitive quotes back to you within 15 minutes during business hours. No days-long waiting periods or endless automated phone systems.",
              },
              {
                icon: Phone,
                title: "2-Hour Claims Response, 24/7",
                description:
                  "If something happens on your adventure — whether it's 2 PM on Tuesday or 2 AM on Sunday — we answer the phone. We guarantee a response within 2 hours for every claims report, any time of day or night.",
              },
              {
                icon: Award,
                title: "20+ Years of Insurance Expertise",
                description:
                  "Josh Cotner founded Contractors Choice Agency in 2005. Two decades of experience means we've seen every scenario, navigated every claims process, and built relationships with carriers that benefit our clients.",
              },
              {
                icon: MapPin,
                title: "Licensed Nationwide with International Options",
                description:
                  "Our NPN 8608479 license covers all 50 states. For riders heading to Mexico, Canada, or beyond, we work with international insurance specialists to build coverage that crosses borders with you.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're insuring your first adventure bike or your tenth, we're here to find you
              the right coverage. Free quotes, no pressure, no obligation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm">844-967-5247</p>
                <p className="text-xs text-muted-foreground mt-1">Call or text anytime</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm">Chandler, AZ</p>
                <p className="text-xs text-muted-foreground mt-1">12220 E Riggs Rd</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-semibold text-sm">NPN 8608479</p>
                <p className="text-xs text-muted-foreground mt-1">Licensed all 50 states</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Get Your Adventure Bike Quote"
        description="15 minutes. Free. No obligation. We'll find the right coverage for how you ride."
        primaryCTA="Get Your Free Quote"
        primaryHref="/quote"
      />

      <Footer />
    </main>
  );
}
