"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * RealBikes — deliberately breaks the page's band rhythm.
 *
 * Why this section is shaped the way it is (2026-08-30):
 * every other section on this page is a centered heading over an evenly-padded
 * card grid. This one is left-aligned, asymmetric (7/5 split), and photo-led,
 * so the eye hits something different between CoverageGrid and HowItWorks.
 *
 * Photography is Josh's own — a customer KTM 890 Adventure photographed at a
 * fuel stop, not stock. The portrait crop is intentional: the source is a real
 * phone photo (768x1024) and is shown in its native shape rather than upscaled
 * into a 16:9 slot, which would be soft.
 */
export function RealBikes() {
  const prefersReduced = useReducedMotion();
  const rise = {
    initial: prefersReduced ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { type: "spring" as const, damping: 26, stiffness: 110 },
  };

  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-terrain opacity-[0.15]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-12 items-center">
          {/* Photo — tall, native portrait, no upscale */}
          <motion.div {...rise} className="lg:col-span-5 order-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-2xl">
              <Image
                src="/images/ktm-890-adventure-fuel-stop.jpg"
                alt="KTM 890 Adventure loaded with panniers and a tail rack, parked at a fuel pump at sunset with riding gloves resting on the seat"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs uppercase tracking-widest text-accent font-medium">
                  Fuel stop, Arizona
                </p>
                <p className="text-sm text-foreground/90 font-heading font-semibold">
                  KTM 890 Adventure — loaded and running
                </p>
              </div>
            </div>
          </motion.div>

          {/* Copy — left aligned, specific numbers, no adjective filler */}
          <motion.div {...rise} className="lg:col-span-7 order-2">
            <p className="text-xs uppercase tracking-widest text-accent font-medium mb-3">
              The bikes we actually write
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight tracking-tight text-foreground">
              A loaded 890 at a gas pump is a different risk than a commuter
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Panniers, a tail rack, crash bars, a skid plate and a set of knobbies change three
              things at once: what the bike is worth, where it gets ridden, and what it costs to put
              right after a low-speed tip-over on a fire road. Most policies price the bike and
              ignore the other two.
            </p>

            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 border-t border-border/60 pt-8">
              <div>
                <dt className="text-2xl md:text-3xl font-heading font-bold text-primary">$2k–$8k</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  typical gear value riders carry, often uninsured
                </dd>
              </div>
              <div>
                <dt className="text-2xl md:text-3xl font-heading font-bold text-primary">$400–$1,800</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  annual premium range for adventure bikes
                </dd>
              </div>
              <div>
                <dt className="text-2xl md:text-3xl font-heading font-bold text-primary">Off-road</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  endorsement most standard policies leave off
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Price your bike the way you actually ride it
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
