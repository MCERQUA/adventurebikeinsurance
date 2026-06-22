import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";

const baseUrl = "https://adventurebikeinsurance.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Adventure Bike Insurance website, a brand of Contractors Choice Agency.",
  alternates: { canonical: `${baseUrl}/terms` },
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "About this website",
    p: [
      "This website is operated by Adventure Bike Insurance, a brand of Contractors Choice Agency, an independent insurance agency licensed in all 50 states. The content here is provided for general informational purposes about motorcycle insurance coverage options.",
    ],
  },
  {
    h: "Not an offer or a policy",
    p: [
      "Nothing on this website is an offer to insure, a binder, or a policy of insurance. Coverage descriptions are general summaries and are subject to the actual terms, conditions, limits, and exclusions of the policy ultimately issued by the insurer. Only the issued policy determines what is and isn't covered.",
      "Quotes are estimates based on the information you provide and may change after underwriting review.",
    ],
  },
  {
    h: "Accuracy of information",
    p: [
      "You agree to provide accurate and complete information when requesting a quote or contacting us. Insurance decisions and pricing depend on the accuracy of that information, and material misstatements can affect coverage.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "The text, graphics, logos, and images on this site are the property of Contractors Choice Agency or its licensors and may not be reproduced without permission, except for ordinary personal, non-commercial viewing.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      'We work to keep this site accurate and available, but we provide it "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any damages arising from your use of, or inability to use, this website.',
    ],
  },
  {
    h: "Contact",
    p: [
      "Questions about these terms? Call 844-967-5247, email josh@contractorschoiceagency.com, or write to Contractors Choice Agency, 12220 E Riggs Rd, Chandler, AZ 85249.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <section className="relative pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black text-[#1c1917] mb-4">
            Terms of Service
          </h1>
          <p className="text-stone-500 mb-10">Last updated: June 1, 2026</p>
          <div className="rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8 lg:p-10 space-y-8">
            <p className="text-stone-700 leading-relaxed">
              By using this website, you agree to these Terms of Service. Please
              read them carefully.
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
