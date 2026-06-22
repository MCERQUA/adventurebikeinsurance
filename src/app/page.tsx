"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Mountain,
  Route,
  Package,
  BadgeCheck,
  HeartPulse,
  Phone,
  ArrowRight,
  ShieldCheck,
  MapPinned,
  Wrench,
  Globe2,
  CheckCircle2,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Reveal } from "@/components/reveal";
import { coverages } from "@/lib/coverages";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-7 h-7 text-white" />,
  Mountain: <Mountain className="w-7 h-7 text-white" />,
  Route: <Route className="w-7 h-7 text-white" />,
  Package: <Package className="w-7 h-7 text-white" />,
  BadgeCheck: <BadgeCheck className="w-7 h-7 text-white" />,
  HeartPulse: <HeartPulse className="w-7 h-7 text-white" />,
};

const trustItems = [
  { icon: <MapPinned className="w-5 h-5" />, label: "Licensed in all 50 states" },
  { icon: <ShieldCheck className="w-5 h-5" />, label: "On-road & off-road coverage" },
  { icon: <Globe2 className="w-5 h-5" />, label: "Cross-border touring options" },
  { icon: <Wrench className="w-5 h-5" />, label: "Accessory limits to $30K" },
];

const why = [
  {
    icon: <Mountain className="w-6 h-6 text-[#c2410c]" />,
    title: "We solve the off-road exclusion",
    desc: "Most policies quietly drop physical-damage coverage the moment you leave the pavement. We keep comp and collision in force on maintained trails and dual-use terrain — the way you actually ride.",
  },
  {
    icon: <Package className="w-6 h-6 text-[#c2410c]" />,
    title: "Your farkles, properly insured",
    desc: "Panniers, skid plates, aux lighting, suspension — we write accessory limits up to $30,000 with non-depreciating options, not the token $1,000 base most carriers offer.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-[#c2410c]" />,
    title: "Built for the long ride",
    desc: "Motorcycle-specific roadside, trip interruption, and cross-border options for Baja, the TAT, Alaska, and the Pan-American run. Coverage that doesn't stop at the city limits.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-[#c2410c]" />,
    title: "No surprise at total loss",
    desc: "Agreed value locks your payout in writing up front and recognizes your build — so a totaled bike is truly replaced, not paid out at a depreciated book value.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us about your ride",
    desc: "Your bike, your build, where you ride, and how far. Two minutes online or one call.",
  },
  {
    n: "02",
    title: "We match the coverage",
    desc: "We assemble on/off-road physical damage, accessory and gear limits, touring support, and the right liability — no gaps, no fluff.",
  },
  {
    n: "03",
    title: "Ride covered",
    desc: "Bind your policy, get instant proof of coverage, and hit the road knowing the bike, the farkles, and the gear are protected.",
  },
];

const bikes = [
  "BMW R 1300 / 1250 GS & GS Adventure",
  "KTM 890 / 1290 / 1390 Adventure",
  "Yamaha Ténéré 700 & Super Ténéré",
  "Honda Africa Twin & CRF300L",
  "Triumph Tiger 900 / 1200",
  "Kawasaki KLR 650 & Versys",
  "Suzuki DR650 & DR-Z400",
  "Husqvarna 701 Enduro & Norden 901",
  "Aprilia Tuareg 660",
  "Ducati DesertX & Multistrada",
  "Royal Enfield Himalayan",
  "Non-plated dirt & enduro bikes",
];

const stats = [
  { value: "50", suffix: "states", label: "Licensed nationwide" },
  { value: "$30K", suffix: "", label: "Max accessory limit" },
  { value: "On + Off", suffix: "road", label: "Coverage that follows you" },
  { value: "1", suffix: "call", label: "To a real specialist" },
];

const faqs = [
  {
    q: "Does my regular motorcycle policy cover off-road and dual-sport riding?",
    a: "Usually not. Most standard policies exclude physical damage that happens off public roads, so the comp and collision you pay for can stop applying the moment you hit a trail. We write coverage that stays in force on maintained trails and dual-use terrain.",
  },
  {
    q: "How much accessory coverage can I get for my farkles?",
    a: "Up to $30,000, with non-depreciating settlement options. That covers serious adventure builds — panniers, racks, skid plates, crash bars, aux lighting, suspension, and tech — far beyond the typical $1,000–$3,000 base limit.",
  },
  {
    q: "Can you cover a bike I ride in Mexico or Canada?",
    a: "Yes. US liability generally isn't recognized in Mexico and terms differ in Canada, so we add cross-border and short-term international options for Baja, the TAT, Alaska, and Pan-American touring.",
  },
  {
    q: "What is agreed value and why does it matter on an adventure bike?",
    a: "Agreed value sets your total-loss payout in writing when the policy is issued, recognizing your modifications. It avoids a depreciated book figure that ignores the thousands you've invested in a built-up GS, KTM, or Ténéré.",
  },
  {
    q: "Can I insure a dirt bike that has no license plate?",
    a: "Yes. Non-plated dirt and enduro bikes need a dedicated off-road policy for theft, fire, transport, and trail use — coverage that auto-style motorcycle policies and homeowners policies won't reliably provide.",
  },
  {
    q: "Are you a national company or a local agent?",
    a: "Adventure Bike Insurance is a brand of Contractors Choice Agency, an independent agency licensed in all 50 states. You get a specialist who understands adventure riding, not a call-center script.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen">
      <SmoothScroll />
      <AnimatedBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.25)] mb-6">
                <Compass className="w-4 h-4 text-[#c2410c]" />
                <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
                  On-road. Off-road. Fully covered.
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1c1917] leading-[1.05] mb-6">
                Insurance built for{" "}
                <span className="gradient-text">adventure & dual-sport</span>{" "}
                riders
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
                Standard policies drop your coverage the second you leave the
                pavement and cap your farkles at a token amount. We cover the
                bike, the accessories, and the gear — on the highway, on the
                trail, and across the border.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-[#c2410c] to-[#f97316] text-white font-bold rounded-xl shadow-lg shadow-[#c2410c]/30 hover:shadow-[#c2410c]/50 hover:scale-[1.02] transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+18449675247"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#1c1917] font-bold rounded-xl border border-[rgba(194,65,12,0.25)] hover:border-[#c2410c] transition-all"
                >
                  <Phone className="w-5 h-5 text-[#c2410c]" />
                  844-967-5247
                </a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {trustItems.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-2 text-sm font-medium text-stone-600"
                  >
                    <span className="text-[#c2410c]">{t.icon}</span>
                    {t.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#c2410c]/20 border border-[rgba(194,65,12,0.15)]">
                <Image
                  src="/images/hero-adventure-rider.jpg"
                  alt="Adventure motorcycle rider on a mountain gravel road"
                  width={1600}
                  height={900}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-[rgba(194,65,12,0.15)] px-5 py-4 hidden sm:block">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-stone-600">
                  Specialist coverage for the way<br />adventure riders actually ride
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="relative z-10 border-y border-[rgba(194,65,12,0.12)] bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { k: "All 50 states", v: "Licensed independent agency" },
              { k: "On & off-road", v: "No off-pavement exclusion gap" },
              { k: "$30,000", v: "Max accessory & farkle limit" },
              { k: "Agreed value", v: "On modified & rare bikes" },
            ].map((item) => (
              <div key={item.k} className="text-center md:text-left">
                <p className="text-xl font-black text-[#c2410c]">{item.k}</p>
                <p className="text-xs text-stone-500 font-medium">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGES GRID */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-[0.2em]">
              Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1c1917] mt-3 mb-4">
              Coverage engineered for adventure bikes
            </h2>
            <p className="text-stone-600 text-lg">
              Six coverage areas that address the real gaps in standard
              motorcycle policies — built around how adventure and dual-sport
              riders use their machines.
            </p>
          </Reveal>

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
                    <h3 className="text-lg font-black text-[#1c1917] mb-2 group-hover:text-[#c2410c] transition-colors">
                      {c.shortTitle}
                    </h3>
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
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative z-10 py-24 bg-white/60 backdrop-blur border-y border-[rgba(194,65,12,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <span className="text-xs font-bold text-[#c2410c] uppercase tracking-[0.2em]">
                Why riders choose us
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1c1917] mt-3 mb-6">
                The coverage a generalist agent never mentions
              </h2>
              <p className="text-stone-600 text-lg mb-8">
                Adventure riding has exposures most insurers don&apos;t
                understand — and won&apos;t bring up until a claim is denied. We
                build the policy around them from the start.
              </p>
              <div className="space-y-6">
                {why.map((w) => (
                  <div key={w.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.15)] flex items-center justify-center">
                      {w.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-[#1c1917] mb-1">{w.title}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[rgba(194,65,12,0.15)]">
                <Image
                  src="/images/accessories-coverage.jpg"
                  alt="Adventure motorcycle accessories — panniers, crash bars, auxiliary lighting"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-[0.2em]">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1c1917] mt-3 mb-4">
              Covered in three steps
            </h2>
            <p className="text-stone-600 text-lg">
              No call-center runaround. Talk to a specialist, get coverage that
              fits, and ride.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8">
                  <span className="text-5xl font-black text-[rgba(194,65,12,0.15)]">
                    {s.n}
                  </span>
                  <h3 className="text-xl font-black text-[#1c1917] mt-2 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BIKES WE COVER */}
      <section className="relative z-10 py-24 bg-white/60 backdrop-blur border-y border-[rgba(194,65,12,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[rgba(194,65,12,0.15)]">
                <Image
                  src="/images/group-ride-cta.jpg"
                  alt="Group of adventure riders on loaded bikes"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-xs font-bold text-[#c2410c] uppercase tracking-[0.2em]">
                Who we cover
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1c1917] mt-3 mb-6">
                If it goes where the pavement ends, we cover it
              </h2>
              <p className="text-stone-600 text-lg mb-6">
                From middleweight dual-sports to flagship adventure tourers and
                non-plated dirt bikes, we write coverage for the machines built
                to explore.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {bikes.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#c2410c] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-700">{b}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-[#c2410c] hover:gap-3 transition-all"
              >
                See everything we cover
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#c2410c] to-[#9a3412] p-10 lg:p-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((s) => (
                <Reveal key={s.label}>
                  <div className="text-center">
                    <p className="text-3xl lg:text-4xl font-black text-white">
                      {s.value}
                      {s.suffix && (
                        <span className="text-lg font-bold text-orange-200 ml-1">
                          {s.suffix}
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-orange-100 mt-2">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-[0.2em]">
              Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1c1917] mt-3">
              Adventure rider FAQ
            </h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="rounded-2xl bg-white border border-[rgba(194,65,12,0.12)] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-bold text-[#1c1917]">{f.q}</span>
                    {openFaq === i ? (
                      <Minus className="w-5 h-5 text-[#c2410c] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#c2410c] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-stone-600 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/og-image.jpg"
              alt="Adventure motorcycle on a winding mountain road"
              width={1200}
              height={630}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917]/90 via-[#1c1917]/70 to-[#9a3412]/60" />
            <div className="relative p-10 lg:p-16 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Ready to ride covered?
              </h2>
              <p className="text-lg text-stone-200 mb-8">
                Get a free, no-obligation quote built around your bike, your
                build, and the way you ride. Most quotes come back within one
                business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#c2410c] to-[#f97316] text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                >
                  Get My Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+18449675247"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  844-967-5247
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
