"use client";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const categories = [
  {
    title: "Adventure Touring",
    subtitle: "Long-distance capability, highway comfort, off-road ready",
    bikes: ["BMW R1250GS / GSA", "KTM 1290 Super Adventure", "Triumph Tiger 1200", "Honda Africa Twin", "Ducati Multistrada", "Yamaha Ténéré 700"],
    valueRange: "$15,000 – $28,000",
    typicalPremium: "$800 – $2,200/yr",
  },
  {
    title: "Dual Sport",
    subtitle: "Street-legal with serious off-road capability",
    bikes: ["Kawasaki KLR 650", "Honda CRF450RL", "Suzuki DR-Z400S", "KTM 500 EXC-F", "Yamaha WR250R", "Husqvarna FE 501s"],
    valueRange: "$5,000 – $12,000",
    typicalPremium: "$400 – $900/yr",
  },
  {
    title: "Middleweight ADV",
    subtitle: "The sweet spot — capable, comfortable, affordable",
    bikes: ["Yamaha Ténéré 700", "Suzuki V-Strom 650", "KTM 890 Adventure R", "Aprilia Tuareg 660", "Honda CB500X", "Kawasaki Versys 650"],
    valueRange: "$8,000 – $16,000",
    typicalPremium: "$500 – $1,200/yr",
  },
  {
    title: "Lightweight ADV",
    subtitle: "Approachable, fuel-efficient, entry-level adventure",
    bikes: ["Royal Enfield Himalayan", "Honda CB500X", "KTM 390 Adventure", "BMW G310GS", "Yamaha Ténéré 250"],
    valueRange: "$4,000 – $8,000",
    typicalPremium: "$300 – $700/yr",
  },
];

export function BikeTypes() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Bikes We Cover
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Insurance for Every{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Adventure Bike
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From lightweight dual-sports to full-size adventure touring machines. We insure
            BMW GS, KTM Adventure, Honda Africa Twin, Yamaha Ténéré, Triumph Tiger, and
            every adventure bike in between.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-heading font-bold">{cat.title}</h3>
                  <span className="shrink-0 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {cat.typicalPremium}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{cat.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.bikes.map((bike) => (
                    <span
                      key={bike}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {bike}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Typical bike value</span>
                  <span className="font-semibold text-foreground">{cat.valueRange}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
