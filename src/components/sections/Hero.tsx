"use client";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function fade(delay: number, prefersReduced: boolean | null) {
  return {
    initial: prefersReduced ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, type: "spring" as const, damping: 25, stiffness: 120 },
  };
}

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative bg-background pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Hero photo background (subtle, on-theme light scrim) */}
      <Image
        src="/images/ktm-890-adventure-r-front.jpg"
        alt="KTM 890 Adventure R with knobby tires and orange handguards"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.72]"
      />
      {/*
        Overlay rebalance (Mike, 2026-08-30: "hero overlay is way too heavy").
        Previously FOUR stacked layers sat on this photo — image at 0.28, a
        /85 linear scrim, terrain at 0.40, then a second /60 scrim — leaving
        the bike roughly 2-4% visible. It was a photo you could not see.

        This is a LIGHT theme (#FAF7F2) with dark slate text, so the scrim
        cannot simply be thinned: the headline needs a pale surface behind it.
        Hence one RADIAL scrim instead of two linear ones — opaque background
        under the centred text block, falling away at the edges so the bike
        actually reads. Contrast behind the headline is unchanged (solid
        background at the centre); only the periphery got lighter.
      */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 68% at 50% 48%, hsl(var(--background)) 0%, hsl(var(--background) / 0.90) 46%, hsl(var(--background) / 0.45) 78%, hsl(var(--background) / 0.20) 100%)",
        }}
      />
      {/* Background terrain pattern */}
      <div className="absolute inset-0 bg-terrain opacity-[0.15]" />
      {/* Soft landing into the next section only — no full-height wash */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

      {/* Decorative compass radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* Badge */}
        <motion.div {...fade(0.1, prefersReduced)} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-border bg-card text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Licensed in All 50 States + International Coverage
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fade(0.2, prefersReduced)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight text-foreground"
        >
          Adventure Bike Insurance for the{" "}
          <span className="bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent">
            Road Beyond Pavement
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fade(0.35, prefersReduced)}
          className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          Coverage designed for overlanding, dual-sport touring, and long-distance adventure riding.
          Off-road extensions, gear protection, trip interruption, and international riding — all
          in one policy. 15-minute quotes, 24/7 claims.
        </motion.p>

        {/* Phone */}
        <motion.div {...fade(0.45, prefersReduced)} className="mt-6">
          <a
            href="tel:8449675247"
            className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            aria-label="Call us at 844-967-5247"
          >
            <Phone className="w-6 h-6" />
            844-967-5247
          </a>
          <p className="mt-1 text-sm text-muted-foreground">Free quotes — call or request online</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fade(0.5, prefersReduced)}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link
            href="/quote"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer"
          >
            Get Your Adventure Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="/coverage"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-xl hover:bg-card transition-colors cursor-pointer"
          >
            View Coverage Options
          </a>
        </motion.div>
      </div>
    </section>
  );
}
