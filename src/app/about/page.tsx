import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Compass, ArrowRight, Phone, ShieldCheck, Target, Users } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Reveal } from "@/components/reveal";

const baseUrl = "https://adventurebikeinsurance.com";

export const metadata: Metadata = {
  title: "About Adventure Bike Insurance | Specialists for ADV Riders",
  description:
    "Adventure Bike Insurance is a brand of Contractors Choice Agency — an independent agency licensed in all 50 states, built to cover adventure and dual-sport riders the way they actually ride.",
  alternates: { canonical: `${baseUrl}/about` },
};

const values = [
  {
    icon: <Target className="w-6 h-6 text-[#c2410c]" />,
    title: "Specialists, not generalists",
    desc: "We focus on adventure and dual-sport riders. That means we know the off-road exclusion problem, the farkle gap, and the touring exposures most agents never mention.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#c2410c]" />,
    title: "Independent and on your side",
    desc: "As an independent agency, we shop your coverage instead of pushing one carrier's product. The recommendation fits your bike and your riding — not a sales quota.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#c2410c]" />,
    title: "Real people who ride",
    desc: "You reach a specialist who understands what a loaded GS or a built KTM actually is — not a call-center script reading from a generic motorcycle template.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.25)] mb-6">
            <Compass className="w-4 h-4 text-[#c2410c]" />
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
              About us
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#1c1917] mb-5">
            Insurance built by people who get adventure riding
          </h1>
          <p className="text-lg text-stone-600">
            Adventure Bike Insurance is a specialty brand of Contractors Choice
            Agency, an independent insurance agency licensed in all 50 states.
            We exist for one reason: to cover adventure and dual-sport riders the
            way they actually ride.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[rgba(194,65,12,0.15)]">
              <Image
                src="/images/agent-team.jpg"
                alt="Adventure Bike Insurance specialist at work"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-black text-[#1c1917] mb-4">
              Why we started this
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Too many adventure riders buy a motorcycle policy from a
                generalist, assume they&apos;re covered, and find out otherwise
                at the worst possible moment — when a claim for an off-road
                get-off is denied, or a totaled bike pays out at a depreciated
                book value that ignores $10,000 of farkles.
              </p>
              <p>
                We built Adventure Bike Insurance to fix that. Every policy we
                write starts from the exposures that define adventure riding:
                dual-use terrain, high-value accessories and gear, long-distance
                and cross-border touring, and bikes the book undervalues.
              </p>
              <p>
                Backed by Contractors Choice Agency&apos;s nationwide licensing
                and independent carrier relationships, we match you to coverage
                that actually fits — and we tell you the truth about what&apos;s
                covered and what isn&apos;t.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#1c1917] mb-3">
              What we stand for
            </h2>
            <p className="text-stone-600">
              The principles behind every quote and every claim conversation.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.15)] flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-black text-[#1c1917] mb-2">{v.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#c2410c] to-[#9a3412] p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Let&apos;s build the right policy for your ride
            </h2>
            <p className="text-orange-100 mb-7 max-w-xl mx-auto">
              A quick conversation is all it takes to find the gaps in your
              current coverage — and close them.
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
