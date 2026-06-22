import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Mountain,
  Route,
  Bike,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Reveal } from "@/components/reveal";
import { coverages } from "@/lib/coverages";

const baseUrl = "https://adventurebikeinsurance.com";

export const metadata: Metadata = {
  title: "Who We Cover | Adventure, Dual-Sport & Off-Road Motorcycles",
  description:
    "From flagship adventure tourers to plated dual-sports and non-plated dirt bikes — see the machines and riders we insure, and the riding we cover on and off the pavement.",
  alternates: { canonical: `${baseUrl}/services` },
};

const categories = [
  {
    icon: <Route className="w-7 h-7 text-white" />,
    title: "Adventure Tourers",
    desc: "Big-bore, long-distance machines built to carry luggage and cover continents.",
    bikes: [
      "BMW R 1300 / 1250 GS & GS Adventure",
      "KTM 1290 / 1390 Super Adventure",
      "Yamaha Super Ténéré",
      "Honda Africa Twin Adventure Sports",
      "Triumph Tiger 1200",
      "Ducati Multistrada",
    ],
  },
  {
    icon: <Compass className="w-7 h-7 text-white" />,
    title: "Middleweight & Dual-Sport",
    desc: "The do-everything bikes that commute, tour, and hit the trail on one plate.",
    bikes: [
      "Yamaha Ténéré 700",
      "KTM 690 / 890 Adventure",
      "Husqvarna 701 Enduro & Norden 901",
      "Aprilia Tuareg 660",
      "Kawasaki KLR 650 & Versys",
      "Suzuki DR650 & V-Strom",
    ],
  },
  {
    icon: <Mountain className="w-7 h-7 text-white" />,
    title: "Lightweight & Off-Road",
    desc: "Plated dual-sports and non-plated dirt bikes built for the trail and beyond.",
    bikes: [
      "Honda CRF300L / CRF450RL",
      "Suzuki DR-Z400",
      "KTM 500 / 350 EXC",
      "Royal Enfield Himalayan",
      "Kawasaki KLX series",
      "Non-plated MX & enduro bikes",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.25)] mb-6">
            <Bike className="w-4 h-4 text-[#c2410c]" />
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
              Who we cover
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#1c1917] mb-5">
            If it&apos;s built to explore, we insure it
          </h1>
          <p className="text-lg text-stone-600">
            Adventure bikes, dual-sports, and dirt bikes share one thing: they
            don&apos;t fit a standard motorcycle policy. Here&apos;s the range of
            machines and riding we cover — on the road and off.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c2410c] to-[#f97316] flex items-center justify-center shadow-lg mb-5">
                    {cat.icon}
                  </div>
                  <h2 className="text-xl font-black text-[#1c1917] mb-2">{cat.title}</h2>
                  <p className="text-sm text-stone-600 mb-5">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.bikes.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#c2410c] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-stone-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RIDING WE COVER */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[rgba(194,65,12,0.15)]">
              <Image
                src="/images/offroad-coverage.jpg"
                alt="Dual-sport motorcycle on a dirt trail"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-black text-[#1c1917] mb-4">
              The riding we actually cover
            </h2>
            <p className="text-stone-600 mb-6">
              Coverage that follows you off the pavement is the whole point.
              We write policies that stay in force across the riding adventure
              owners really do:
            </p>
            <ul className="space-y-3">
              {[
                "Daily street commuting and highway miles",
                "Gravel, fire roads, and maintained forest roads",
                "Dual-use single-track and trail riding",
                "OHV parks and designated riding areas",
                "Long-distance and multi-state adventure touring",
                "Cross-border touring into Canada and Mexico",
              ].map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c2410c] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">{r}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-stone-500 mt-6">
              Note: timed competition and closed-course racing are typically
              excluded from standard physical-damage coverage and need a
              separate event policy — we&apos;ll tell you exactly where the line
              is.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COVERAGE LINKS */}
      <section className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-black text-[#1c1917] mb-3">
              Coverage for every part of the bike
            </h2>
            <p className="text-stone-600">
              Explore the six coverage areas we build every adventure policy
              around.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coverages.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/coverages/${c.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl bg-white border border-[rgba(194,65,12,0.12)] p-5 card-lift"
                >
                  <div>
                    <h3 className="font-bold text-[#1c1917] text-sm group-hover:text-[#c2410c] transition-colors">
                      {c.shortTitle}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {c.tagline}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#c2410c] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#c2410c] to-[#9a3412] p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Don&apos;t see your bike? We probably still cover it.
            </h2>
            <p className="text-orange-100 mb-7 max-w-xl mx-auto">
              If it goes where the pavement ends, reach out. We write coverage
              for adventure, dual-sport, and off-road machines of every size.
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
