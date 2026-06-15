import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about adventure bike insurance. Does insurance cover off-road riding? How much does it cost? What about gear, international travel, and trip interruption? Real answers for adventure riders.",
  keywords: [
    "adventure bike insurance faq",
    "does motorcycle insurance cover off-road",
    "does my insurance cover me on gravel roads",
    "motorcycle insurance for overlanding",
    "adventure bike insurance for international travel",
    "what does adventure bike insurance cover",
    "do you need special insurance for adventure riding",
    "can you insure motorcycle gear and accessories",
    "motorcycle insurance that covers baja",
    "motorcycle insurance for pan-american trip",
  ],
  alternates: { canonical: "https://adventurebikeinsurance.com/faq" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/faq",
    siteName: "Adventure Bike Insurance",
    title: "Adventure Bike Insurance FAQ — 22 Answers for Adventure Riders",
    description:
      "22 questions answered about adventure bike insurance — off-road coverage, international riding, gear protection, pricing. Real answers for ADV, dual-sport, and overland riders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Bike Insurance FAQ",
    description:
      "22 questions answered about adventure bike insurance — off-road coverage, international riding, gear protection, pricing.",
  },
};

const faqs = [
  {
    question: "Does motorcycle insurance cover off-road riding on my adventure bike?",
    answer:
      "Standard motorcycle insurance typically only covers you on maintained, paved public roads. Most policies have an exclusion that voids coverage when you ride on unpaved surfaces. However, many carriers offer an off-road coverage extension (sometimes called a 'dirt road endorsement' or 'unimproved road coverage') that covers gravel roads, fire roads, forest service roads, and other unpaved surfaces. The extension typically adds $100-$300/year to your premium. We specifically look for carriers that offer this coverage for adventure riders — it's the single most important add-on for ADV riders because it closes the biggest coverage gap in standard policies.",
  },
  {
    question: "Does my insurance cover me on gravel roads?",
    answer:
      "Gravel roads exist in a gray area for most motorcycle insurance policies. Some carriers consider well-maintained gravel roads as 'public roads' covered under standard liability and collision. Others exclude any unpaved surface. The safest approach is to confirm with your carrier and, if needed, add an off-road coverage extension that explicitly covers gravel roads. When you request a quote through us, we match you with carriers whose policies cover the type of riding you actually do — including gravel road riding.",
  },
  {
    question: "How much does adventure bike insurance cost per year?",
    answer:
      "Adventure bike insurance costs $150-$400/year for liability-only coverage, $400-$900/year for standard full coverage (liability + collision + comprehensive), and $700-$1,800/year for full adventure coverage including off-road extensions, gear protection, trip interruption, and international riding. The exact cost depends on your bike's value, your age and riding experience, your location, and your coverage selections. A mid-tier bike like a Yamaha Ténéré 700 typically costs $450-$1,300/year for full coverage, while a premium bike like a BMW R1250GS ranges from $700-$2,200/year with adventure add-ons.",
  },
  {
    question: "How much is adventure bike insurance per month?",
    answer:
      "Monthly, adventure bike insurance ranges from about $15-$35/month for liability-only, $35-$80/month for standard full coverage, and $60-$150/month for full adventure coverage. Many carriers offer a discount (typically 5-10%) if you pay the annual premium in full instead of monthly. We can set up both payment options when you get your quote.",
  },
  {
    question: "What is the best adventure bike insurance?",
    answer:
      "The 'best' insurance depends on how you ride. For adventure riders, the best policy is one that specifically covers off-road riding, protects your gear and accessories, and provides trip interruption coverage. There's no single carrier that's best for every adventure rider — that's why we shop multiple carriers and compare their coverage terms side by side. We look at off-road exclusions, gear coverage limits, towing distance limits, international coverage options, and total cost to find you the best overall value. The best policy is the one that covers your actual riding — not just your commute.",
  },
  {
    question: "Can you insure motorcycle gear and accessories?",
    answer:
      "Yes. Gear and equipment coverage protects your helmet, riding suit, boots, gloves, and communication equipment — typically $2,000-$8,000 worth of gear for a serious adventure rider. Custom parts and accessories coverage protects hard-mounted items like crash bars, skid plates, panniers, GPS units, and upgraded suspension. These are separate add-ons to your policy, and we help you determine the right coverage limits based on what you actually ride with.",
  },
  {
    question: "Do you need special insurance for adventure riding?",
    answer:
      "Technically, you only need the minimum liability coverage required by your state to ride legally. However, standard motorcycle insurance has significant gaps for adventure riders — specifically around off-road coverage, gear protection, and long-distance trip coverage. If you ride on gravel roads, travel with expensive gear, take multi-day trips, or cross international borders, standard insurance leaves you exposed. Specialized adventure bike insurance closes those gaps with targeted add-ons.",
  },
  {
    question: "What does adventure bike insurance cover?",
    answer:
      "Adventure bike insurance combines standard motorcycle coverages (liability, collision, comprehensive, medical payments, uninsured motorist) with adventure-specific add-ons: off-road coverage extension for gravel and dirt roads, gear and equipment coverage for your riding gear, custom parts coverage for adventure accessories, trip interruption for breakdowns far from home, international coverage for cross-border riding, medical evacuation for remote-area injuries, and long-distance roadside assistance. You select the combination that matches how you ride.",
  },
  {
    question: "Does comprehensive coverage cover off-road damage?",
    answer:
      "Comprehensive coverage typically covers theft, vandalism, weather damage, fire, and animal strikes — but most policies have a territory restriction that limits coverage to public roads. If you crash on a dirt road, the collision coverage (not comprehensive) would apply, but only if your policy doesn't exclude unpaved surfaces. The off-road coverage extension is what closes this gap — it modifies the territory restriction to include unpaved surfaces so your collision and comprehensive coverage follow you off the pavement.",
  },
  {
    question: "Can I get motorcycle insurance that covers Baja?",
    answer:
      "Yes, but it requires specific planning. Mexico does not recognize U.S. insurance policies — you need a separate Mexican liability policy, which is required by Mexican law. Your U.S. comprehensive and collision coverage can often be extended into Mexico through an endorsement, but liability must be purchased from a Mexican-licensed carrier. We can set up both the Mexican liability policy and the U.S. extension so you're fully covered for your Baja trip. Processing typically takes 2-3 days, so don't wait until the border crossing.",
  },
  {
    question: "Is there motorcycle insurance for a Pan-American trip?",
    answer:
      "Yes, but coverage gets more complex the farther south you go. Mexico requires a separate liability policy. Central American countries each have their own insurance requirements — some accept U.S. policies with international extensions, others require local policies. South American insurance availability varies significantly by country. We work with international motorcycle insurance specialists to create coverage stacks that protect you across multiple countries. This typically involves your U.S. policy with international extensions plus country-specific policies where required. Start the process at least 30 days before your departure date.",
  },
  {
    question: "Does motorcycle insurance cover the TransAmerica Trail?",
    answer:
      "The TransAmerica Trail is mostly unpaved — forest service roads, dirt roads, gravel, and some pavement. Standard motorcycle insurance would likely exclude coverage for most of the trail. You need a policy with an off-road coverage extension that covers the specific types of unpaved surfaces on the TAT. We work with carriers who offer these extensions and can build a policy that covers you for the full TransAmerica Trail, including trip interruption if you break down in a remote area. We've helped riders plan insurance specifically for the TAT — it's a different underwriting process than standard street motorcycle insurance.",
  },
  {
    question: "How much does BMW GS insurance cost?",
    answer:
      "BMW GS insurance costs $250-$400/year for liability-only, $700-$1,400/year for standard full coverage, and $1,100-$2,200/year for full adventure coverage. The R1250GS and GSA models are at the higher end of adventure bike insurance costs due to their high value ($18,000-$25,000), theft appeal, and replacement cost. The newer R1300GS costs slightly more. Choosing a $1,000 deductible instead of $250, storing the bike in a garage, and maintaining a clean riding record are the most effective ways to reduce BMW GS insurance costs.",
  },
  {
    question: "How much is Honda Africa Twin insurance?",
    answer:
      "Honda Africa Twin insurance costs $200-$340/year for liability-only, $550-$950/year for standard full coverage, and $850-$1,500/year for full adventure coverage. The Africa Twin is moderately priced for insurance purposes — it's less expensive to insure than the BMW GS or KTM 1290 due to lower theft rates and generally lower repair costs. The CRF1100L model costs slightly more than the older CRF1000L due to higher replacement value.",
  },
  {
    question: "How much is KTM Adventure insurance?",
    answer:
      "KTM Adventure insurance costs $220-$400/year for liability-only, $600-$1,300/year for standard full coverage, and $900-$2,000/year for full adventure coverage. The KTM 1290 Super Adventure is the most expensive to insure in the KTM lineup due to its high value and performance. The KTM 890 Adventure R is a more affordable option — it's one of the best value adventure bikes from an insurance perspective, offering serious capability at a lower premium cost than the 1290.",
  },
  {
    question: "Is gap insurance worth it for adventure motorcycles?",
    answer:
      "If you financed your adventure bike, gap insurance is worth considering. Adventure bikes cost $10,000-$28,000 new and can lose 20-30% of their value in the first two years. If you total a $20,000 bike that you financed at 5% for 60 months, you could owe $17,000 on the loan while the insurance payout (actual cash value) is only $15,000. Gap coverage pays that $2,000 difference. For bikes purchased with cash or low loan balances relative to bike value, gap insurance is unnecessary.",
  },
  {
    question: "Does adventure bike insurance cover mechanical breakdown?",
    answer:
      "Standard motorcycle insurance does not cover mechanical failure — that's considered maintenance, not an insured event. However, trip interruption coverage can help with the consequences of a breakdown: hotel stays, meals, and alternative transportation if your bike breaks down far from home. Some specialized policies or extended warranty programs cover mechanical breakdown, but that's separate from your insurance policy. We can help you understand what's covered and recommend additional protection if you ride in remote areas where breakdowns are costly.",
  },
  {
    question: "What is the difference between adventure bike insurance and dual sport insurance?",
    answer:
      "From an insurance perspective, adventure bikes and dual-sport bikes are both classified as street-legal motorcycles. The difference in insurance comes down to bike value and how you ride. Adventure bikes (BMW GS, KTM 1290) tend to cost more to insure because they're worth more. Dual-sport bikes (KLR 650, CRF450RL) are typically less expensive. However, the coverage needs are similar — both types of riders benefit from off-road extensions, gear coverage, and trip interruption. The key is matching your policy to your specific bike and riding habits, not the category label.",
  },
  {
    question: "Does my car insurance cover towing my adventure bike on a trailer?",
    answer:
      "Some auto insurance policies extend trailer coverage to the trailer itself, but typically do not cover the cargo — which includes your motorcycle. If you trailer your adventure bike to ride destinations, you need either trailer and transport coverage on your motorcycle policy or a separate policy that specifically covers the bike while in transit. This is particularly important for Overland Expo, Baja trips, Alaska rides, and other destinations where riders trailer their bikes hundreds of miles.",
  },
  {
    question: "How do I get adventure bike insurance if I'm a new rider?",
    answer:
      "New riders can get adventure bike insurance, but expect to pay 30-50% more than experienced riders. The best strategies for new adventure riders: (1) Start with a less expensive, lower-displacement adventure bike — a Royal Enfield Himalayan or Honda CB500X is cheaper to insure than a BMW R1250GS, (2) Complete an MSF course before getting your quote — this typically saves 5-15%, (3) Start with liability-only or basic full coverage and add adventure endorsements as your experience grows, (4) Shop multiple carriers — rates vary significantly for new riders. We help new adventure riders find the best coverage at the most competitive rate.",
  },
  {
    question: "Is adventure bike insurance more expensive than regular motorcycle insurance?",
    answer:
      "Adventure bike insurance tends to cost slightly more than standard motorcycle insurance for comparable bike values, primarily because adventure riders tend to ride more miles, ride in more remote areas (higher towing and medical costs), and carry expensive accessories. The off-road coverage extension adds $100-$300/year. Gear coverage adds another $50-$150/year. Trip interruption is typically $50-$100/year. So the total premium increase for adventure-specific coverage is usually $200-$550/year above a basic street motorcycle policy — which is a small price to pay compared to the potential out-of-pocket costs of being underinsured on an adventure ride.",
  },
  {
    question: "What information do I need to get an adventure bike insurance quote?",
    answer:
      "To get an accurate adventure bike insurance quote, you'll need: your personal information (name, address, age), your riding history (years of experience, recent claims or tickets), your motorcycle details (make, model, year, VIN number if available), approximate bike value, how you ride (pavement, gravel, off-road), any planned international trips, a list of accessories and gear you want covered, your current coverage limits and deductible preferences, and how the bike is stored (garage, carport, outdoor). The more detail you provide, the more accurate and competitive your quote will be.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://adventurebikeinsurance.com/faq" },
    ],
  };
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-adventure">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Adventure Bike Insurance{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FAQ
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              22 questions answered about adventure bike insurance — from off-road coverage to
              international riding to gear protection. Every answer is specific to adventure riders.
            </p>
          </FadeIn>
        </div>
      </section>

      <FAQ
        faqs={faqs}
        eyebrow="Everything You Need to Know"
        title="Adventure Bike Insurance Questions & Answers"
        subtitle="Real answers from insurance professionals who understand adventure riding. No generic advice — every answer is written for ADV, dual-sport, and overland riders."
      />

      <CTA
        title="Still Have Questions?"
        description="We're happy to answer any questions about adventure bike insurance. Call us or submit a quote request — no obligation, no pressure."
        primaryCTA="Get Your Free Quote"
        primaryHref="/quote"
      />

      <Footer />
    </main>
  );
}
