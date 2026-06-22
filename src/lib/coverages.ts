export interface Coverage {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  whoFor: string[];
  commonClaims: string[];
  faqs: { q: string; a: string }[];
  typicalLimits: string;
}

export const coverages: Coverage[] = [
  {
    slug: "dual-sport-enduro",
    title: "Dual-Sport & Enduro Motorcycle Insurance",
    shortTitle: "Dual-Sport & Enduro",
    tagline: "Street-legal one minute, on the trail the next — covered both ways.",
    description:
      "Insurance built for street-legal dual-sport and enduro bikes that split their life between pavement and dirt — without the off-road exclusion that voids most standard policies.",
    longDescription:
      "A dual-sport bike is the most under-insured machine in the garage. It wears a license plate, so riders assume their standard motorcycle policy follows them everywhere. It usually doesn't. Most carriers quietly exclude losses that occur off public roads — so the moment you leave the pavement for a forest road or single-track, your collision and comprehensive coverage can evaporate. We write dual-sport and enduro policies that keep physical-damage coverage in force on maintained trails and dual-use terrain, so a KLR 650, DR-Z, 690 Enduro, or 500 EXC is protected the way you actually ride it.",
    icon: "Compass",
    image: "/images/offroad-coverage.jpg",
    features: [
      "Physical-damage coverage that stays in force on maintained trails and dual-use roads",
      "No blanket 'off-road use' exclusion buried in the policy form",
      "Liability, comprehensive, and collision for plated dual-sport machines",
      "Coverage for hard parts riders add: skid plates, handguards, crash bars",
      "Optional roadside and trip-interruption for remote rides",
      "Single-bike or multi-bike policies for a mixed garage",
      "Agreed-value option for built-up and rare models",
      "Licensed and written in all 50 states",
    ],
    whoFor: [
      "Riders of KLR 650, DR650, DR-Z400, KTM 690/500 EXC, Husqvarna 701, Tenere 700",
      "Commuters who ride to the trailhead and keep going",
      "Adventure riders who mix gravel, fire roads, and pavement on one bike",
      "Anyone told 'you're covered' by a generalist agent who never asked about dirt",
    ],
    commonClaims: [
      "Tip-over on a loose fire road cracks a fairing and bends a lever",
      "Low-side on a gravel switchback damages the tank and radiator",
      "Bike washed out crossing a maintained forest road after rain",
      "Theft of a plated enduro from a trailer at the trailhead",
    ],
    faqs: [
      {
        q: "Does standard motorcycle insurance cover off-road riding?",
        a: "Usually no. Most policies exclude physical damage that happens off public roads. A dual-sport policy written for trail and dual-use terrain keeps collision and comprehensive in force where standard policies stop.",
      },
      {
        q: "Is my dual-sport covered on single-track or just gravel roads?",
        a: "It depends on the policy. We match you to coverage that fits how you ride — maintained trails and dual-use roads are routinely covered; competition and closed-course racing is a separate conversation we'll walk you through.",
      },
      {
        q: "Can I insure a plated bike I also race?",
        a: "Yes, but racing and timed competition are typically excluded from standard physical-damage coverage. We'll be straight with you about what's covered and where you'd need a separate event policy.",
      },
    ],
    typicalLimits:
      "Liability commonly $50K/$100K to $100K/$300K; comp/collision to agreed or stated value; accessory limits to $30K",
  },
  {
    slug: "off-road-dirt",
    title: "Off-Road & Dirt Bike Insurance",
    shortTitle: "Off-Road & Dirt",
    tagline: "Coverage for the bikes that never see a license plate.",
    description:
      "Protection for non-street dirt bikes, trail bikes, and OHV motorcycles — theft, damage, transport, and liability for machines a standard auto-style policy ignores.",
    longDescription:
      "A dirt bike with no plate falls through the cracks of most insurance programs. It isn't a 'street vehicle,' so auto-based motorcycle policies often won't write it — and homeowners policies cap or exclude motorized vehicles. That leaves a $12,000 four-stroke sitting uninsured on a trailer or in a garage. Our off-road program covers dirt and trail bikes for theft, fire, vandalism, transport damage, and trail liability, whether the bike lives at home, in a toy hauler, or at a riding area. It's the coverage that pays when the bike is stolen out of the truck at 4 a.m. or damaged in a trailer accident on the way to the trailhead.",
    icon: "Mountain",
    image: "/images/touring-coverage.jpg",
    features: [
      "Comprehensive coverage for theft, fire, and vandalism — even with no plate",
      "Physical-damage coverage while riding maintained trails and OHV areas",
      "Coverage in transit on a trailer, in a truck bed, or in a toy hauler",
      "Optional trail and recreational liability",
      "Stated-value coverage for built and modified motocross/enduro bikes",
      "Covers riders of all ages on family bikes",
      "Multi-bike policies for the whole stable",
      "Fast certificates for riding areas that require proof of coverage",
    ],
    whoFor: [
      "Owners of CRF, YZ/WR, KX, SX/XC, TC/FC and other non-plated bikes",
      "Families with several dirt bikes in the garage",
      "Riders hauling to OHV parks, MX tracks, and trail systems",
      "Anyone whose homeowners policy excludes the bike",
    ],
    commonClaims: [
      "Dirt bike stolen from a locked trailer overnight",
      "Bikes damaged when a toy hauler is rear-ended en route",
      "Vandalism while parked at a remote staging area",
      "Fire damage in a garage or storage unit",
    ],
    faqs: [
      {
        q: "Can I insure a dirt bike that has no license plate?",
        a: "Yes. Our off-road program is built for non-plated bikes that auto-style motorcycle policies won't touch. You can cover theft, fire, vandalism, transport, and trail use.",
      },
      {
        q: "Does my homeowners policy already cover my dirt bike?",
        a: "Rarely in a meaningful way. Most homeowners policies exclude or sharply cap motorized vehicles, and they won't follow the bike to a riding area or onto a trailer. A dedicated policy closes that gap.",
      },
      {
        q: "Is the bike covered while it's being hauled?",
        a: "Yes — transport damage and theft in transit are core to the off-road program, which is exactly when many dirt bikes are lost.",
      },
    ],
    typicalLimits:
      "Comprehensive/theft to stated value; trail liability commonly $25K–$100K; transport included",
  },
  {
    slug: "adv-touring-roadside",
    title: "ADV Touring, Roadside & International Coverage",
    shortTitle: "ADV Touring & Roadside",
    tagline: "From the local overlook to Baja, Alaska, and the TAT.",
    description:
      "Long-haul coverage for adventure-touring riders: roadside and recovery for big bikes, trip interruption, and cross-border riding into Canada and Mexico.",
    longDescription:
      "Adventure touring is a different risk than a Sunday ride. A fully-loaded GS, Super Ténéré, or Multistrada weighs 600+ pounds wet, travels far from home, and breaks down in places a flatbed can't easily reach. Standard roadside plans built for cars won't send the right truck for a 650-pound bike on a forest road — and they stop at the border. Our touring program adds motorcycle-specific roadside and recovery, trip-interruption coverage for lodging and transport when a breakdown strands you, and the cross-border and short-term international options serious riders need for Baja, the Trans-America Trail, the Pan-American run, and Canadian backcountry. Ride far. Be covered the whole way.",
    icon: "Route",
    image: "/images/roadside-assistance.jpg",
    features: [
      "Motorcycle-specific roadside assistance and heavy-bike recovery",
      "Trip-interruption coverage for lodging, meals, and transport after a breakdown",
      "Towing to the nearest qualified motorcycle shop, not just any garage",
      "Cross-border coverage options for Canada and Mexico touring",
      "Short-term international and Baja-run endorsements",
      "Coverage for loaded weight, panniers, and touring setups",
      "Rental-reimbursement options so a claim doesn't end the trip",
      "24/7 claims reporting from anywhere on the route",
    ],
    whoFor: [
      "GS, Super Ténéré, Multistrada, Africa Twin, and Tiger touring riders",
      "Long-distance and rally riders covering serious mileage",
      "Riders heading to Baja, the TAT, Alaska, or the Pan-American route",
      "Anyone who has waited hours for a car tow that couldn't take the bike",
    ],
    commonClaims: [
      "Final-drive failure 200 miles from the nearest dealer",
      "Flat with no repair option, requiring recovery and a night's lodging",
      "Breakdown in Baja requiring cross-border transport home",
      "Crash on a remote pass requiring specialized motorcycle recovery",
    ],
    faqs: [
      {
        q: "Does my US motorcycle policy cover me riding in Mexico or Canada?",
        a: "Not automatically. US liability often isn't recognized in Mexico, and coverage terms differ in Canada. We add the cross-border and short-term international options that keep you legal and protected on the route.",
      },
      {
        q: "Why isn't regular roadside good enough for an adventure bike?",
        a: "Car-based roadside dispatches the wrong equipment for a 600-pound loaded bike and often can't reach unpaved roads. Motorcycle-specific roadside sends the right recovery and tows to a shop that can actually service your bike.",
      },
      {
        q: "What does trip interruption actually pay for?",
        a: "When a covered breakdown or loss strands you away from home, it can reimburse lodging, meals, and transportation so a mechanical problem doesn't turn into a financial one.",
      },
    ],
    typicalLimits:
      "Roadside/recovery per-event limits; trip interruption commonly $1K–$2.5K; international by endorsement",
  },
  {
    slug: "accessories-gear",
    title: "Accessory, Luggage & Riding Gear Coverage",
    shortTitle: "Accessories & Gear",
    tagline: "Your farkles cost as much as the bike. Insure them like it.",
    description:
      "High-limit, plain-English coverage for the parts and gear that make an adventure bike — panniers, skid plates, aux lighting, suspension, and your riding kit.",
    longDescription:
      "By the time an adventure bike is trail-ready, riders routinely add $5,000–$15,000 in farkles: aluminum panniers and racks, crash bars, skid plates, auxiliary LED lighting, upgraded suspension, larger tanks, GPS and tech mounts, heated grips, and more. Most policies bundle 'custom parts and equipment' into a small base limit — often $1,000 to $3,000 — and then depreciate it at claim time. That isn't enough to make you whole. We write accessory coverage with limits up to $30,000, name the parts adventure riders actually run, and offer non-depreciating settlement options so a replacement is a replacement. We also extend coverage to riding gear — helmet, jacket, boots, and armor — which alone can top $2,000 and is ignored by most carriers.",
    icon: "Package",
    image: "/images/accessories-coverage.jpg",
    features: [
      "Accessory limits up to $30,000 — far above the typical $1K–$3K base",
      "Non-depreciating replacement options so you're made whole",
      "Covers panniers, racks, crash bars, skid plates, and bash plates",
      "Auxiliary lighting, GPS, tech mounts, heated grips, and wiring",
      "Suspension upgrades, larger tanks, and performance hard parts",
      "Riding-gear coverage: helmet, jacket, pants, boots, and armor",
      "Itemized scheduling for high-value builds",
      "Coverage that follows the parts, not a generic 'chrome' clause",
    ],
    whoFor: [
      "Riders with built-up GS, KTM, Ténéré, and Africa Twin adventure rigs",
      "Anyone running aluminum luggage and a full protection package",
      "Riders with expensive gear they'd have to replace out of pocket",
      "Owners frustrated by tiny 'custom parts' limits on their current policy",
    ],
    commonClaims: [
      "A drop on a rocky climb destroys a $1,800 pannier set and rack",
      "Aux lights, GPS, and bar mounts sheared off in a low-side",
      "Helmet and jacket written off in a crash and not covered elsewhere",
      "Theft of a bike stripped for its high-value accessories",
    ],
    faqs: [
      {
        q: "How much accessory coverage do I really need?",
        a: "Add up your farkles honestly — luggage, protection, lighting, suspension, tech. Most adventure builds land between $5,000 and $15,000. We write limits up to $30,000 so you're not capped at a token amount.",
      },
      {
        q: "Will my accessories be depreciated at claim time?",
        a: "On many policies, yes — which leaves you short. We offer non-depreciating settlement options so a $1,500 pannier set is replaced, not paid out at salvage value.",
      },
      {
        q: "Is my riding gear covered if I crash?",
        a: "Usually not under a standard policy. We can extend coverage to your helmet, jacket, pants, boots, and armor, which together often exceed $2,000.",
      },
    ],
    typicalLimits: "Accessory limits to $30,000; gear coverage by schedule; non-depreciating options available",
  },
  {
    slug: "agreed-value-replacement",
    title: "Agreed Value & Total-Loss Replacement",
    shortTitle: "Agreed Value & Replacement",
    tagline: "No surprise at total loss. You know the number up front.",
    description:
      "Agreed-value coverage for modified, vintage, and hard-to-value adventure bikes — plus new-bike replacement so a totaled machine is truly replaced.",
    longDescription:
      "When an adventure bike is totaled, actual-cash-value policies pay a depreciated book number that often ignores your modifications, low mileage, or the simple fact that the bike is irreplaceable at that price today. Agreed value fixes that: you and the carrier set the payout in writing when the policy is issued, so there's no haggling over a depreciated figure after a loss. For newer bikes, we also offer total-loss replacement that puts you on a comparable new machine rather than a check that won't buy one. This is the coverage that matters most for built-up GS and KTM rigs, rare or discontinued models, and riders who've put real money into a machine the book doesn't recognize.",
    icon: "BadgeCheck",
    image: "/images/collision-coverage.jpg",
    features: [
      "Agreed value set in writing at policy issue — no post-loss depreciation fight",
      "New-bike total-loss replacement options for eligible newer machines",
      "Recognizes modifications and farkles in the insured value",
      "Built for rare, discontinued, and hard-to-value adventure models",
      "Stated-value options for vintage and project bikes",
      "Pairs with high-limit accessory coverage for full make-whole",
      "Clear documentation so claims settle fast",
      "Available alongside liability, comp, and collision",
    ],
    whoFor: [
      "Owners of heavily modified GS, KTM, and Ténéré builds",
      "Riders of rare, imported, or discontinued adventure models",
      "Anyone who has put thousands into a bike the book undervalues",
      "Newer-bike owners who want true replacement, not depreciation",
    ],
    commonClaims: [
      "A late-model GS is totaled and ACV won't buy a comparable bike",
      "A built KTM is stolen and the payout ignores $10K in upgrades",
      "A discontinued model is written off at a depreciated book value",
      "Flood or fire destroys a low-mileage bike valued below its worth",
    ],
    faqs: [
      {
        q: "What's the difference between agreed value and actual cash value?",
        a: "Actual cash value pays a depreciated market figure decided after the loss. Agreed value locks the payout in writing when you buy the policy, so you know the number in advance and avoid a depreciation fight.",
      },
      {
        q: "Do modifications count toward my insured value?",
        a: "With agreed or stated value, yes — we document your build so your upgrades are reflected in the payout instead of being ignored by a book value.",
      },
      {
        q: "Can I get new-bike replacement on an adventure bike?",
        a: "For eligible newer machines, yes. Instead of a depreciated check, total-loss replacement aims to put you on a comparable new bike.",
      },
    ],
    typicalLimits: "Agreed/stated value to documented amount; new-bike replacement on eligible newer models",
  },
  {
    slug: "liability-medical",
    title: "Liability, Medical & Uninsured Motorist Coverage",
    shortTitle: "Liability & Medical",
    tagline: "The foundation every adventure policy is built on.",
    description:
      "Core protection for adventure riders: bodily-injury and property-damage liability, medical payments, and uninsured/underinsured motorist coverage.",
    longDescription:
      "Every adventure policy starts with the fundamentals — and getting them right matters more on a motorcycle than almost anywhere else. Liability covers the injuries and property damage you're responsible for in an at-fault crash. Medical payments help with your own injury bills regardless of fault, which is critical when a minor get-off can mean an ER visit. And uninsured/underinsured motorist coverage protects you when the driver who pulls out in front of you has little or no insurance — the single most common way a rider ends up paying for someone else's mistake. We help adventure riders set these limits intelligently, because the state minimum is rarely enough to protect a working rider's income and assets.",
    icon: "HeartPulse",
    image: "/images/group-ride-cta.jpg",
    features: [
      "Bodily-injury and property-damage liability for at-fault crashes",
      "Medical payments coverage regardless of fault",
      "Uninsured/underinsured motorist bodily injury protection",
      "Guest-passenger liability for two-up riding",
      "Limits well above state minimums to protect income and assets",
      "Coverage that travels with you across state lines",
      "Pairs with comp, collision, and accessory coverage",
      "Honest guidance on the right limits for your situation",
    ],
    whoFor: [
      "Every adventure and dual-sport rider — this is the base layer",
      "Two-up riders who carry passengers",
      "Riders who commute and ride in heavy traffic",
      "Anyone currently carrying only state-minimum limits",
    ],
    commonClaims: [
      "A car turns left across your path and you're injured",
      "An at-fault crash damages another vehicle and injures its driver",
      "A hit-and-run leaves you with bills and no responsible party",
      "An underinsured driver's limits don't cover your injuries",
    ],
    faqs: [
      {
        q: "Why is uninsured motorist coverage so important for riders?",
        a: "Motorcyclists are far more likely to be seriously hurt when another driver is at fault — and many drivers carry little or no insurance. UM/UIM coverage pays for your injuries when theirs won't.",
      },
      {
        q: "Is the state minimum enough?",
        a: "Almost never. Minimum limits can be exhausted by a single injury claim, leaving your income and assets exposed. We help you set limits that actually protect you.",
      },
      {
        q: "Does medical payments coverage depend on who's at fault?",
        a: "No — medical payments coverage helps with your injury bills regardless of fault, which makes it valuable even in a single-bike get-off.",
      },
    ],
    typicalLimits:
      "Liability from $25K/$50K to $250K/$500K; med-pay $1K–$10K; UM/UIM matched to liability",
  },
];

export function getCoverageBySlug(slug: string): Coverage | undefined {
  return coverages.find((c) => c.slug === slug);
}

export function getAllCoverageSlugs(): string[] {
  return coverages.map((c) => c.slug);
}
