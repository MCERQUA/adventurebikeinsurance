"use client";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const photos = [
  {
    src: "/images/ktm-890-adventure-r.jpg",
    alt: "KTM 890 Adventure R with knobby tires and rally fairing on a dealership floor",
    caption: "KTM 890 Adventure R",
    note: "Middleweight ADV — the class we write the most policies for.",
  },
  {
    src: "/images/ktm-890-adventure-r-fuel-stop.jpg",
    alt: "KTM 890 Adventure R loaded with luggage at a desert fuel stop at sunrise, riding gloves on the seat",
    caption: "Loaded up and fueling",
    note: "Luggage, crash protection, and gear — the parts a standard policy often leaves out.",
  },
  {
    src: "/images/adventure-bikes-showroom-tenere-ktm.jpg",
    alt: "Yamaha Tenere 700 and KTM 890 Adventure R parked together in an adventure motorcycle showroom",
    caption: "Ténéré 700 & 890 Adventure R",
    note: "New bike on the way home? We can have coverage bound before you ride it off the lot.",
  },
];

export function RealBikes() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Real Bikes, Real Riders
          </p>
          <h2 className="text-2xl md:text-4xl font-heading font-bold">
            The Machines We Actually Insure
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Not stock photos of bikes nobody rides. These are the adventure bikes coming through
            our door — and the accessories, luggage, and gear that ride with them.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {photos.map((p) => (
            <StaggerItem key={p.src}>
              <figure className="h-full rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-heading font-bold">{p.caption}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
