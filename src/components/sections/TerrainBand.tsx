"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

/**
 * Full-bleed inverted band. One strong image carries the section instead of a
 * row of cards. Every figure below is already stated on this site's own
 * coverage and FAQ pages — nothing new is claimed here.
 */
const gaps = [
  {
    lead: "$2,000–$8,000",
    body: "Typical gear investment for an adventure rider. Helmet, suit, boots, comms — itemised on a policy that covers them, or not covered at all.",
  },
  {
    lead: "Gravel & fire roads",
    body: "Excluded by default on most carriers. Standard motorcycle coverage is written for asphalt until you add the off-road extension.",
  },
  {
    lead: "Mexico",
    body: "Requires a separate Mexican liability policy by law. Your US policy does not cross the border on its own, and Canada varies by carrier.",
  },
];

export function TerrainBand() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <Image
        src="/images/international-riding.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-stone-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Where Policies Get Thin
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.08]">
            Most policies quietly stop where the pavement does.
          </h2>
          <p className="mt-6 text-lg text-stone-300 leading-relaxed">
            The gaps never show up in the quote. They show up in the claim — after you drop the bike
            at a trailhead ninety miles from cell service, or a pannier full of gear walks off in a
            motel lot, or you find out at the border what your policy actually covers.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-14 max-w-4xl">
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {gaps.map((g) => (
              <div key={g.lead} className="py-5 sm:grid sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8">
                <dt className="text-xl md:text-2xl font-heading font-bold text-primary">
                  {g.lead}
                </dt>
                <dd className="mt-1 sm:mt-0 text-stone-300 leading-relaxed">{g.body}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10">
          <Link
            href="/coverage"
            className="group inline-flex items-center gap-2 min-h-[44px] text-white font-semibold hover:text-primary transition-colors cursor-pointer"
          >
            See exactly what each coverage does
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
