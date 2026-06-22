import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Mountain,
  Route,
  Package,
  BadgeCheck,
  HeartPulse,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Reveal } from "@/components/reveal";
import { coverages } from "@/lib/coverages";

const baseUrl = "https://adventurebikeinsurance.com";

export const metadata: Metadata = {
  title: "Adventure Motorcycle Coverages | On-Road, Off-Road & Touring",
  description:
    "Explore every coverage adventure and dual-sport riders need: dual-sport, off-road, ADV touring & roadside, accessory & gear, agreed value, and core liability. Licensed in all 50 states.",
  alternates: { canonical: `${baseUrl}/coverages` },
};

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-7 h-7 text-white" />,
  Mountain: <Mountain className="w-7 h-7 text-white" />,
  Route: <Route className="w-7 h-7 text-white" />,
  Package: <Package className="w-7 h-7 text-white" />,
  BadgeCheck: <BadgeCheck className="w-7 h-7 text-white" />,
  HeartPulse: <HeartPulse className="w-7 h-7 text-white" />,
};

export default function CoveragesPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Coverages", item: `${baseUrl}/coverages` },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.25)] mb-6">
            <Compass className="w-4 h-4 text-[#c2410c]" />
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
              Coverage
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#1c1917] mb-5">
            Coverage built for the way you ride
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Adventure and dual-sport riding exposes gaps standard policies were
            never designed to fill. These six coverage areas close them — on the
            road, off the road, and on the trip of a lifetime.
          </p>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <Link
                  href={`/coverages/${c.slug}`}
                  className="group block h-full rounded-3xl overflow-hidden bg-white border border-[rgba(194,65,12,0.12)] card-lift"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.shortTitle}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#c2410c] to-[#f97316] flex items-center justify-center shadow-lg">
                      {iconMap[c.icon]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-black text-[#1c1917] mb-2 group-hover:text-[#c2410c] transition-colors">
                      {c.shortTitle}
                    </h2>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c2410c]">
                      Explore coverage
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#c2410c] to-[#9a3412] p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Not sure which coverages you need?
            </h2>
            <p className="text-orange-100 mb-7 max-w-xl mx-auto">
              Tell us about your bike and how you ride. We&apos;ll assemble the
              right combination — no gaps, no upsell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#c2410c] font-bold rounded-xl hover:scale-[1.02] transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18449675247"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                844-967-5247
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
