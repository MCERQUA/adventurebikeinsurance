"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * GearedUp — full-bleed editorial band, deliberately NOT another card grid.
 *
 * Placed between HowItWorks and PricingOverview to break the run of centered
 * headings over evenly-padded cards. Full-bleed (no max-w container on the
 * image), dark, left-weighted, with the second photo offset over the first
 * rather than sitting beside it in a symmetric pair.
 *
 * Photography is Josh's own. Alt text names a model ONLY where the bike is
 * identifiable in the frame — the showroom shot is described generically
 * because no badge is legible in it.
 */
export function GearedUp() {
  const prefersReduced = useReducedMotion();
  const rise = {
    initial: prefersReduced ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { type: "spring" as const, damping: 26, stiffness: 110 },
  };

  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      {/* Full-bleed backdrop */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/adventure-bikes-dealer-floor.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <motion.div {...rise} className="lg:col-span-6">
            <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">
              Farkles, luggage and armour
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight tracking-tight">
              The bike is half of what you paid for
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Crash bars, a skid plate, handguards, a tail rack, panniers, a GPS mount, heated
              grips. None of it is on the bike when it leaves the factory, and on a standard
              motorcycle policy none of it is on the claim either. Accessory coverage is the line
              item that decides whether a tip-over costs you a mirror or costs you the whole build.
            </p>
            <div className="mt-8">
              <Link
                href="/coverage/accessory-farkle-coverage"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                How accessory coverage works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Offset inset — sits over the backdrop, not beside a twin */}
          <motion.div {...rise} className="lg:col-span-6 lg:pl-10">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-2xl">
              <Image
                src="/images/ktm-890-adventure-r-cockpit.jpg"
                alt="Cockpit of a KTM 890 Adventure R showing the handlebars, handguards and instrument display"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Handguards, bar risers and a mount — roughly $600 that a standard policy will not
              itemise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
