export interface CoverageFaq {
  q: string;
  a: string;
}

export interface Coverage {
  slug: string;
  title: string;
  /** lucide-react icon name as a string */
  icon: string;
  summary: string;
  /** 2-4 paragraphs of ADV-accurate copy */
  body: string[];
  /** what's covered */
  bullets: string[];
  faqs: CoverageFaq[];
}

export const COVERAGES: Coverage[] = [
  {
    slug: "motorcycle-liability",
    title: "Motorcycle Liability Coverage",
    icon: "Shield",
    summary:
      "The legally required foundation of every adventure bike policy — it pays for the injuries and property damage you cause to other people when you're at fault in an accident.",
    body: [
      "Liability coverage is the part of your policy the law actually requires. Nearly every state mandates that you carry minimum bodily injury and property damage liability limits before you can legally register and ride your adventure bike on public roads. If you cause a crash, this coverage pays for the other party's medical bills, lost wages, and vehicle or property repairs — up to the limits you choose.",
      "It's important to understand what liability does and does not do. It protects other people and their property when an accident is your fault. It does not pay to repair your own adventure bike, replace your gear, or cover your own injuries — those are handled by comprehensive, collision, gear, and medical coverages. Liability is purely the financial shield that stands between you and a lawsuit.",
      "For adventure riders, the state minimum is rarely enough. Many ADV riders carry six-figure bikes' worth of assets, ride in remote areas where emergency response and air transport costs are high, and tour across state lines where a single serious at-fault accident can generate claims far above a $25,000 minimum. We routinely help riders set limits well above the legal floor — and often pair them with an umbrella policy — so a bad day on the road doesn't put your savings, home, or future earnings at risk.",
    ],
    bullets: [
      "Bodily injury you cause to other riders, drivers, passengers, and pedestrians",
      "Property damage you cause to other vehicles, guardrails, fences, and structures",
      "Legal defense costs if you're sued after an at-fault accident",
      "Coverage that follows you across state lines as you tour",
      "Higher-than-minimum limits to protect your personal assets",
    ],
    faqs: [
      {
        q: "Is motorcycle liability insurance required by law?",
        a: "In nearly every state, yes. You must carry at least your state's minimum bodily injury and property damage liability limits to legally register and ride. A handful of states allow alternatives like a surety bond, but for almost all adventure riders a standard liability policy is the practical requirement.",
      },
      {
        q: "Does liability coverage pay to fix my own adventure bike?",
        a: "No. Liability only pays for damage and injuries you cause to others. To cover damage to your own bike you need collision and comprehensive coverage, and to cover your own gear you need gear coverage.",
      },
      {
        q: "How much liability coverage should an adventure rider carry?",
        a: "Most riders should carry well above state minimums. If you own a home, have savings, or ride in remote areas where emergency costs run high, higher limits — often paired with an umbrella policy — protect your assets if you're ever found at fault in a serious crash.",
      },
    ],
  },
  {
    slug: "comprehensive-collision",
    title: "Comprehensive & Collision",
    icon: "Car",
    summary:
      "The two coverages that actually pay to repair or replace your adventure bike — collision for crashes and drops, comprehensive for theft, weather, fire, and animal strikes.",
    body: [
      "Collision coverage pays to repair or replace your adventure bike when it's damaged in a crash, regardless of who's at fault. That includes the obvious — hitting another vehicle or a guardrail — but for ADV riders it also covers the low-speed tip-overs and drops that come with the territory. Loading a heavy GS onto a trailer, losing the front end in deep gravel, or dropping the bike at a remote trailhead are all collision events.",
      "Comprehensive coverage handles almost everything that isn't a collision. Theft is a real concern for expensive adventure bikes left at trailheads, motels, and campgrounds. Comprehensive also covers fire, vandalism, falling objects, hail and storm damage, flooding, and animal strikes — which are far more common on the rural and forest roads adventure riders favor than on the interstate.",
      "Together, these two coverages are what make a policy worth carrying on a bike that's worth real money. Most modern adventure bikes run $10,000 to $28,000 before accessories, and replacing one out of pocket after a crash or theft is a serious financial hit. Carriers pay out based on your bike's value up to your deductible, which is why pairing comprehensive and collision with agreed-value coverage matters so much for premium ADV machines.",
    ],
    bullets: [
      "Crash damage to your bike, whether or not you're at fault",
      "Low-speed drops, tip-overs, and loading mishaps",
      "Theft of your adventure bike",
      "Fire, vandalism, and falling-object damage",
      "Weather damage — hail, wind, flooding, and storms",
      "Animal strikes on rural and forest roads",
    ],
    faqs: [
      {
        q: "What's the difference between comprehensive and collision?",
        a: "Collision pays for damage from a crash, drop, or impact with an object. Comprehensive pays for almost everything else — theft, fire, vandalism, weather, and animal strikes. Most adventure riders carry both so the bike is protected in nearly every scenario.",
      },
      {
        q: "Does collision cover dropping my bike off-road?",
        a: "On paved and unpaved roads, a drop or tip-over is generally a collision event. Be aware that pure off-road and trail riding may need an off-road coverage extension — we make sure your policy matches how and where you actually ride.",
      },
      {
        q: "How does my deductible work?",
        a: "Your deductible is the amount you pay out of pocket before the carrier pays the rest. A higher deductible lowers your premium but means more cost at claim time. We help you choose a deductible that balances your monthly cost against what you could comfortably cover after a crash.",
      },
    ],
  },
  {
    slug: "accessory-farkle-coverage",
    title: "Accessory & Farkle Coverage",
    icon: "Wrench",
    summary:
      "Protects the custom parts and farkles that turn a stock bike into a real adventure machine — crash bars, panniers, skid plates, navigation, lighting, and upgraded suspension.",
    body: [
      "Adventure bikes are almost never left stock. By the time a bike is trail-ready it's wearing crash bars, a skid plate, hard panniers or soft luggage, a larger tank, auxiliary lighting, a GPS or navigation mount, heated grips, and often upgraded suspension. Those additions — affectionately known as farkles — routinely add $3,000 to $8,000 of value on top of the bike itself.",
      "Here's the problem most riders don't discover until claim time: a standard policy pays out based on the stock value of your bike. If your fully built bike is totaled or stolen, the carrier reimburses you for a base-model machine and all of your accessories simply vanish from the settlement. Accessory and farkle coverage is the endorsement that closes that gap, insuring your aftermarket parts up to a stated limit.",
      "When we build your policy we help you total up what you've actually spent on parts and choose an accessory limit that reflects your real investment. As you keep building — a new exhaust here, an Öhlins shock there — it's worth revisiting that limit so your coverage keeps pace with your bike. The goal is simple: if your build is damaged or stolen, you're made whole for the bike you actually ride, not the one that left the showroom floor.",
    ],
    bullets: [
      "Crash bars, engine guards, and skid plates",
      "Hard panniers, top cases, racks, and soft luggage systems",
      "GPS, navigation units, and electronic mounts",
      "Auxiliary lighting and wiring",
      "Upgraded suspension, larger tanks, and exhaust systems",
      "Heated grips, seats, and other comfort upgrades",
    ],
    faqs: [
      {
        q: "Doesn't my regular policy already cover my accessories?",
        a: "Usually only up to a small built-in cap — often a few hundred to a thousand dollars — which rarely covers a fully farkled adventure bike. Accessory coverage raises that limit to match what you've actually invested in parts.",
      },
      {
        q: "What counts as an accessory or farkle?",
        a: "Anything you've added beyond the factory build: crash bars, skid plates, panniers and racks, navigation, auxiliary lights, upgraded suspension, larger tanks, exhausts, heated grips, and similar upgrades. Keep receipts and photos to make claims faster and smoother.",
      },
      {
        q: "How do I know what accessory limit to choose?",
        a: "Add up what you've spent on parts and installation, then pick a limit that covers the total. We walk through your build with you and recommend revisiting the limit whenever you add significant new equipment.",
      },
    ],
  },
  {
    slug: "gear-coverage",
    title: "Riding Gear Coverage",
    icon: "Shirt",
    summary:
      "Insures the protective gear you wear — helmet, adventure suit, boots, gloves, and comms — which for serious ADV riders often represents $2,000 to $8,000 of equipment.",
    body: [
      "Quality adventure gear isn't cheap, and that's by design — it's engineered to protect you in a crash and keep you comfortable through heat, cold, rain, and long days in the saddle. A modern ADV kit can include a $400 to $1,500 helmet, an $800 to $3,000 adventure suit or jacket-and-pant combo, $200 to $500 boots, gloves, body armor, and a $200 to $800 communication system. It adds up fast — most committed riders are wearing $2,000 to $8,000 of gear every time they throw a leg over the bike.",
      "Standard motorcycle policies treat gear as an afterthought, often capping coverage at $500 to $1,000 — far below what a serious adventure kit is worth. Gear coverage raises that limit so your protective equipment is properly insured whether it's destroyed in a crash, stolen out of your panniers or a motel room, or damaged in transit.",
      "The cruel math of a crash is that the same impact that bends your bike also shreds your gear. A single off can total a $1,500 helmet and a $2,000 suit in seconds — and that gear did its job by absorbing the hit. Gear coverage means you can replace your protective equipment without it coming straight out of pocket, so you're ready for the next ride instead of compromising on safety to save money.",
    ],
    bullets: [
      "Helmets, including modular and ADV-specific designs",
      "Adventure suits, jackets, and riding pants",
      "Boots, gloves, and base layers",
      "Body armor and impact protection",
      "Communication systems and intercoms",
      "Gear damaged in a crash, stolen, or lost in transit",
    ],
    faqs: [
      {
        q: "Why do I need separate gear coverage?",
        a: "Because standard policies typically cap gear reimbursement at $500 to $1,000, which doesn't come close to replacing a full adventure kit. Gear coverage raises that limit to match the $2,000 to $8,000 of equipment most serious ADV riders actually own.",
      },
      {
        q: "Is my gear covered if it's stolen but I wasn't in a crash?",
        a: "Yes. Gear coverage protects your equipment against theft — including gear taken from your panniers, a motel room, or a trailer — as well as crash damage and loss in transit, depending on your policy terms.",
      },
      {
        q: "Should I replace gear after a crash even if it looks fine?",
        a: "Often yes. Helmets and armor are designed to absorb a single impact and may be compromised even without visible damage. Gear coverage helps you replace protective equipment after a crash so you're never tempted to keep riding in gear that's already done its job.",
      },
    ],
  },
  {
    slug: "agreed-value-total-loss",
    title: "Agreed Value & Total Loss",
    icon: "DollarSign",
    summary:
      "Locks in a settlement amount up front so an expensive adventure bike pays out at its real value — not a depreciated actual-cash-value figure — if it's totaled or stolen.",
    body: [
      "Most insurance pays claims on an actual cash value (ACV) basis, meaning the carrier reimburses you for what your bike is worth today after depreciation — not what you paid or what it would cost to replace. For a fast-depreciating new adventure bike, that gap can be brutal: a $20,000 machine can shed 20 to 30 percent of its value in the first year alone, so a total loss might pay out thousands less than you expect.",
      "Agreed value coverage solves this by setting the payout amount when you write the policy. You and the carrier agree on your bike's value up front, and if it's totaled or stolen you receive that agreed figure — no haggling over depreciation, no surprise lowball settlement at the worst possible moment. For premium and heavily built adventure bikes, it's the difference between being made whole and being shortchanged.",
      "Agreed value pairs naturally with accessory coverage. Together they ensure that both your machine and the thousands of dollars in farkles bolted to it are reflected in your settlement. We help you document the bike's value, set an agreed amount that holds up, and revisit it periodically so your coverage tracks the real-world value of your adventure bike over time.",
    ],
    bullets: [
      "A settlement amount agreed and locked in when the policy is written",
      "Protection against steep first-year depreciation on new bikes",
      "Full value for premium and limited-availability adventure bikes",
      "No depreciation haggling at claim time after a total loss or theft",
      "Pairs with accessory coverage for a complete made-whole settlement",
    ],
    faqs: [
      {
        q: "What's the difference between agreed value and actual cash value?",
        a: "Actual cash value pays what your bike is worth today after depreciation, which can be far less than you paid. Agreed value sets the payout amount when the policy is written, so a total loss pays the figure you and the carrier agreed on — no depreciation surprises.",
      },
      {
        q: "Is agreed value worth it for an adventure bike?",
        a: "For expensive, new, or heavily built bikes, almost always. Adventure bikes can lose 20 to 30 percent of their value in the first year, so agreed value protects you from a settlement that's thousands below replacement cost.",
      },
      {
        q: "Does agreed value include my accessories?",
        a: "Agreed value covers the bike at the agreed figure; your aftermarket parts are best protected by pairing it with accessory coverage. Together they ensure both the machine and your farkles are reflected in a total-loss settlement.",
      },
    ],
  },
  {
    slug: "roadside-trip-interruption",
    title: "Roadside & Trip Interruption",
    icon: "Truck",
    summary:
      "Long-distance towing plus reimbursement for hotels, meals, and transport when your adventure bike breaks down far from home in the middle of a trip.",
    body: [
      "Roadside assistance for an adventure bike has to work where adventure riders actually break down — which is rarely a block from a dealership. Standard roadside plans often cap towing at a short mileage limit that's useless when you're 100 miles down a forest service road or stranded on a remote desert highway. Adventure-oriented roadside coverage provides long-distance towing to the nearest qualified repair shop, plus flat-tire help, jump-starts, fuel delivery, and lockout service.",
      "Trip interruption coverage picks up where the tow truck leaves off. If your bike breaks down a long way from home while you're on a trip, this coverage reimburses you for the unplanned costs that follow — hotel nights while you wait on parts, meals, and alternative transportation to continue your journey or get home. Limits typically run from a few hundred to a couple thousand dollars per incident.",
      "For riders who tour across states and continents, these two coverages turn a trip-ending mechanical failure into a manageable detour. A blown final drive 500 miles from home can easily generate $1,000 or more in hotels, rental cars, and shipping. With roadside and trip interruption in place, the bike gets recovered to a real shop and the unexpected expenses are largely covered — so a breakdown costs you time, not your savings.",
    ],
    bullets: [
      "Long-distance towing to the nearest qualified repair facility",
      "Flat-tire assistance, jump-starts, and fuel delivery",
      "Lockout and minor roadside mechanical help",
      "Hotel and lodging reimbursement during a covered breakdown",
      "Meals and alternative transportation while you're stranded",
      "Coverage built for multi-day, multi-state, and remote-area trips",
    ],
    faqs: [
      {
        q: "Why isn't standard roadside assistance enough for adventure riders?",
        a: "Most standard plans cap towing at a short mileage limit, which doesn't help when you break down far from the nearest shop. Adventure-oriented roadside coverage provides long-distance towing so your bike can reach a qualified repair facility no matter how remote you are.",
      },
      {
        q: "What does trip interruption coverage actually pay for?",
        a: "When your bike breaks down far from home on a trip, it reimburses the unplanned costs that follow — hotel nights, meals, and alternative transportation — typically up to a per-incident limit of a few hundred to a couple thousand dollars.",
      },
      {
        q: "How far from home do I need to be for trip interruption to apply?",
        a: "Most policies require you to be a minimum distance from home — often around 100 miles — for trip interruption benefits to kick in. We confirm the exact threshold on your policy so you know exactly when the coverage applies.",
      },
    ],
  },
  {
    slug: "international-coverage",
    title: "International & Off-Road Coverage",
    icon: "Globe",
    summary:
      "Extends protection beyond the U.S. and beyond the pavement — Mexican liability policies, Canada coverage, and off-road extensions for trail, dirt, and unmaintained roads.",
    body: [
      "The adventure riding community doesn't stop at the border or the end of the pavement, and your coverage shouldn't either. Riding into Mexico legally requires a separate Mexican liability policy — your U.S. policy does not satisfy Mexican law, and riding without proper Mexican liability can mean serious legal trouble in the event of an accident. We arrange the Mexican liability coverage you're required to carry so border crossings into Baja or the mainland are done right.",
      "Canada works differently. Many U.S. carriers extend your existing coverage automatically for trips into Canada, while others require an endorsement or a proof-of-insurance card. For destinations farther afield — Central and South America, expedition shipping, or organized tours — coverage gets more specialized and often involves dedicated international or travel policies. We help you sort out exactly what's needed for where you're headed before you leave.",
      "Off-road is the other frontier standard policies tend to exclude. Many motorcycle policies quietly stop covering you the moment you leave a maintained public road — which is a problem when gravel roads, fire roads, forest service routes, and unmaintained surfaces are the whole point of an adventure bike. An off-road coverage extension keeps you protected on the unpaved terrain you actually ride, so a crash on a dirt road doesn't leave you paying for everything yourself.",
    ],
    bullets: [
      "Mexican liability policies required by law to ride in Mexico",
      "Canada coverage, including endorsements and proof-of-insurance cards",
      "Guidance for Central/South America and international expeditions",
      "Off-road extensions for gravel, dirt, and fire roads",
      "Coverage on forest service routes and unmaintained surfaces",
      "Policy structuring matched to your specific destinations and terrain",
    ],
    faqs: [
      {
        q: "Do I need separate insurance to ride my adventure bike in Mexico?",
        a: "Yes. Mexican law requires a separate Mexican liability policy — your U.S. coverage does not satisfy it. Riding in Mexico without valid Mexican liability can lead to serious legal consequences after an accident, so we arrange the required policy before you cross.",
      },
      {
        q: "Is my U.S. policy valid in Canada?",
        a: "Often, but not always. Many carriers extend coverage into Canada automatically while others require an endorsement or a proof-of-insurance card. We confirm your specific carrier's rules so you're properly covered north of the border.",
      },
      {
        q: "Does standard motorcycle insurance cover off-road riding?",
        a: "Frequently not. Many policies stop covering you once you leave a maintained public road, which leaves gravel, dirt, and trail riding uninsured. An off-road coverage extension keeps you protected on the unpaved terrain adventure bikes are built for.",
      },
    ],
  },
];

export function getCoverageBySlug(slug: string): Coverage | undefined {
  return COVERAGES.find((c) => c.slug === slug);
}
