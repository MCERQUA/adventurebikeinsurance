import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

const baseUrl = "https://adventurebikeinsurance.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Adventure Bike Insurance, a brand of Contractors Choice Agency, collects, uses, and protects the information you share when requesting a quote.",
  alternates: { canonical: `${baseUrl}/privacy` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "Information we collect",
    p: [
      "When you request a quote or contact us, we collect the information you provide — typically your name, phone number, email address, state, details about your motorcycle(s) and accessories, and any message you send. We also collect standard technical data such as your IP address and browser type through ordinary web analytics.",
      "We do not knowingly collect information from anyone under 18, and we never ask for sensitive information you don't need to provide for an insurance quote.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use the information you provide to prepare and discuss insurance quotes, respond to your inquiries, service any policy you bind through us, and comply with legal and regulatory requirements. As an independent agency, we may share necessary details with insurance carriers to obtain quotes on your behalf.",
      "We do not sell your personal information. We may use aggregated, de-identified data to understand how our site is used and to improve it.",
    ],
  },
  {
    h: "How we share information",
    p: [
      "We share your information only with insurance carriers and service providers who help us quote and service your coverage, and where required by law. Any third party that processes information on our behalf is expected to protect it and use it only for the purposes we specify.",
    ],
  },
  {
    h: "Data security & retention",
    p: [
      "We use reasonable administrative, technical, and physical safeguards to protect the information you share with us. No method of transmission or storage is perfectly secure, but we work to protect your data and retain it only as long as needed for the purposes described here or as required by law.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us using the details below. You can also opt out of non-essential communications at any time.",
    ],
  },
  {
    h: "Contact us",
    p: [
      "Questions about this policy? Call 844-967-5247, email josh@contractorschoiceagency.com, or write to Contractors Choice Agency, 12220 E Riggs Rd, Chandler, AZ 85249.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <section className="relative pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[#1c1917] mb-4">
            Privacy Policy
          </h1>
          <p className="text-stone-500 mb-10">Last updated: June 1, 2026</p>
          <div className="rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8 lg:p-10 space-y-8">
            <p className="text-stone-700 leading-relaxed">
              This Privacy Policy explains how Adventure Bike Insurance, a brand
              of Contractors Choice Agency (&quot;we,&quot; &quot;us&quot;),
              handles the information you share with us through this website.
            </p>
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl font-black text-[#1c1917] mb-3">{s.h}</h2>
                <div className="space-y-3">
                  {s.p.map((para, i) => (
                    <p key={i} className="text-stone-700 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
