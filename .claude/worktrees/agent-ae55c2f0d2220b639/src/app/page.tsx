import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { TrustBar } from "@/components/sections/TrustBar";
import { CoverageGrid } from "@/components/sections/CoverageGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BikeTypes } from "@/components/sections/BikeTypes";
import { PricingOverview } from "@/components/sections/PricingOverview";
import { FadeIn } from "@/components/animations/FadeIn";

const homeFAQs = [
  {
    question: "Does motorcycle insurance cover off-road riding on my adventure bike?",
    answer:
      "Standard motorcycle insurance typically only covers you on paved roads. However, most carriers offer an off-road coverage extension that covers gravel roads, fire roads, and unmaintained surfaces. We specifically shop for policies that include this extension for adventure riders, because we know your rides don't end where the pavement does. Coverage varies by carrier — some cover any unpaved surface, while others have exclusions for designated off-highway vehicle (OHV) areas.",
  },
  {
    question: "How much does adventure bike insurance cost?",
    answer:
      "Adventure bike insurance typically ranges from $400 to $1,800 per year depending on coverage level, bike value, riding history, and location. Liability-only coverage starts around $150–$400/year. Standard full coverage (liability, collision, comprehensive) runs $400–$900/year. Full adventure coverage with off-road extensions, gear protection, and trip interruption is typically $700–$1,800/year. High-value bikes like the BMW R1250GS or KTM 1290 Super Adventure tend to be at the higher end of that range.",
  },
  {
    question: "Can I get coverage for my riding gear and accessories?",
    answer:
      "Yes. Adventure riders typically have $2,000–$8,000 invested in gear alone — helmets, riding suits, boots, gloves, and communication systems. Custom parts and accessories coverage protects hard-mounted items like crash bars, skid plates, hard cases, GPS units, and upgraded suspension. Gear and equipment coverage protects your wearable riding gear whether it's damaged in an accident, stolen from your bike, or lost during transport. We help you itemize everything to ensure adequate coverage limits.",
  },
  {
    question: "Does my insurance cover me when riding in Mexico or Canada?",
    answer:
      "Most U.S. motorcycle insurance policies do not automatically extend coverage into Mexico, and coverage in Canada varies by carrier. For international riding, we can add international coverage endorsements or standalone travel policies. Mexico typically requires a separate Mexican liability policy (required by Mexican law) plus your U.S. comprehensive and collision can often be extended. Canadian coverage is easier — many carriers extend standard coverage into Canada, but it's important to verify the exact terms before crossing the border.",
  },
  {
    question: "What happens if my adventure bike breaks down on a remote trip?",
    answer:
      "Standard roadside assistance often has distance limits that won't help if you're 200 miles from the nearest paved road. For adventure riders, we recommend enhanced roadside assistance with long-distance towing coverage, and trip interruption coverage. Trip interruption insurance covers hotel stays, meals, and alternative transportation if your bike breaks down far from home. Some policies also include breakdown coverage for mechanical failures. When you request a quote, tell us about your planned trips so we can match you with the right level of protection.",
  },
  {
    question: "How quickly can I get an adventure bike insurance quote?",
    answer:
      "We can provide a competitive quote within 15 minutes of your request. Simply fill out our online quote form or call 844-967-5247. We'll need your bike details (make, model, year, value), your riding history, and information about how you ride — including off-road use, international travel plans, and the gear you want covered. We shop multiple carriers simultaneously to find you the best combination of coverage and price for your specific adventure riding needs.",
  },
  {
    question: "Is adventure bike insurance different from regular motorcycle insurance?",
    answer:
      "The base coverage is the same — liability, collision, and comprehensive are standard motorcycle insurance. What makes it different for adventure riders is the add-on coverages: off-road riding extensions, gear and equipment protection, custom parts coverage for adventure accessories like crash bars and panniers, trip interruption for long-distance travel, international coverage, and medical evacuation. Standard motorcycle policies often have gaps for adventure riders — specifically around off-road use and long-distance travel. We specialize in identifying and closing those gaps.",
  },
  {
    question: "What bikes qualify as adventure bikes for insurance purposes?",
    answer:
      "Insurance carriers classify adventure bikes as street-legal motorcycles designed for both on-road and off-road use. This includes large ADV touring bikes like the BMW R1250GS, KTM 1290 Super Adventure, and Triumph Tiger 1200; middleweight ADVs like the Yamaha Ténéré 700 and Suzuki V-Strom 650; dual-sport models like the Kawasaki KLR 650 and Honda CRF450L; and lightweight adventure bikes like the Royal Enfield Himalayan and Honda CB500X. The key factor is that the bike must be street-legal and registered for road use.",
  },
];

const testimonials = [
  {
    name: "Marcus Reinhardt",
    role: "Overlander, BMW R1250GSA — Denver, Colorado",
    text: "I ride from Colorado to Baja every year and could never find insurance that covered the full trip. These guys got me a policy that covers me on dirt roads, in Mexico, and all my gear — panniers, tent, the works. When I had a flat 80 miles from the nearest town in Sonora, the trip interruption coverage kicked in and paid for my hotel and tow. That policy paid for itself ten times over.",
    rating: 5,
  },
  {
    name: "Jennifer Park",
    role: "Daily dual-sport commuter, KTM 890 Adventure R — Portland, Oregon",
    text: "I commute on forest service roads and gravel paths that standard insurance wouldn't cover. They found me a carrier with an off-road extension that covers exactly how I ride — fire roads, unmaintained county roads, the whole thing. Quote took 10 minutes and saved me about $200 a year compared to what I was paying for less coverage through a major carrier.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "International adventure rider, Honda Africa Twin — Austin, Texas",
    text: "Planning a Pan-American trip from Texas to Argentina and the insurance situation was a nightmare — every carrier had different rules for every country. Josh walked me through the options, set up coverage that works in Mexico, Central America, and most of South America, and even helped me understand which countries require local liability policies. Knowledgeable, responsive, and they actually ride.",
    rating: 5,
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFAQs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <Hero />
      <TrustBar />
      <CoverageGrid />
      <HowItWorks />
      <BikeTypes />
      <PricingOverview />
      <Testimonials testimonials={testimonials} />
      <FAQ
        faqs={homeFAQs}
        eyebrow="Adventure Insurance FAQ"
        title="Common Questions from Adventure Riders"
        subtitle="Real answers to the questions adventure riders ask most about insurance coverage, off-road riding, and international travel."
      />
      <CTA
        title="Ready for Your Next Adventure?"
        description="Get a customized insurance quote for your adventure bike in 15 minutes. We shop multiple carriers to find the best coverage at the best rate."
        primaryCTA="Get Your Free Quote"
        primaryHref="/quote"
      />
      <Footer />
    </main>
  );
}
