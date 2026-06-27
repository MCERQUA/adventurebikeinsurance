import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Adventure Bike Insurance website, operated by Contractors Choice Agency — including quote disclaimers, liability limits, and Arizona governing law.",
  alternates: { canonical: "https://adventurebikeinsurance.com/terms" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/terms",
    siteName: "Adventure Bike Insurance",
    title: "Terms of Service — Adventure Bike Insurance",
    description:
      "The terms governing your use of this website, including quote disclaimers, liability limits, and Arizona governing law.",
  },
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-adventure">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: June 27, 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="space-y-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your use of the Adventure Bike
                Insurance website, operated by Contractors Choice Agency (&quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;). By accessing or using this site, you agree to
                these Terms. If you do not agree, please do not use the site.
              </p>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">1. Use of This Site</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website is provided to help adventure riders learn about motorcycle insurance
                  coverage and request quotes. You agree to use the site only for lawful purposes and
                  not to interfere with its operation, attempt unauthorized access, or use it in any
                  way that could damage or impair the site or other users&apos; use of it. You must be
                  at least 18 years old to submit a quote or contact request.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">2. Quotes Are Not a Bound Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any quote, estimate, premium figure, or coverage description provided through this
                  website is for informational purposes only and does not constitute an offer to
                  insure, a binder, or an insurance policy. No coverage is in effect until a policy is
                  formally issued by an insurance carrier, you have received the policy documents, and
                  any required premium has been paid. The terms, conditions, exclusions, and limits of
                  the actual policy issued to you control in all cases. Coverage availability,
                  eligibility, and pricing are determined by the carrier and may differ from
                  information shown here.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">3. Accuracy of Information You Provide</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for providing accurate, complete, and current information when
                  you request a quote or contact us. Insurance quotes and coverage decisions depend on
                  the accuracy of the details you supply about your bike, accessories, riding habits,
                  and history. Inaccurate or incomplete information may result in inaccurate quotes,
                  changes in pricing, or denial of coverage by a carrier.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The content on this site — including text, graphics, logos, and design — is owned by
                  or licensed to Contractors Choice Agency and is protected by applicable intellectual
                  property laws. You may view and use the site for your personal, non-commercial
                  purposes, but you may not copy, reproduce, distribute, or create derivative works
                  from our content without our prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This site and its content are provided &quot;as is&quot; without warranties of any
                  kind, whether express or implied. To the fullest extent permitted by law,
                  Contractors Choice Agency will not be liable for any indirect, incidental,
                  consequential, or punitive damages arising from your use of, or inability to use,
                  this website or any information on it. Nothing on this site constitutes legal,
                  financial, or professional advice. Insurance decisions should be made based on the
                  actual policy documents and, where appropriate, consultation with a licensed
                  professional.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of the State
                  of Arizona, without regard to its conflict-of-law principles. Any dispute arising
                  out of or relating to these Terms or your use of the site will be subject to the
                  jurisdiction of the state and federal courts located in Arizona.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">7. Changes to These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms from time to time. Changes are effective when posted to
                  this page, and the &quot;Last updated&quot; date above reflects the most recent
                  revision. Your continued use of the site after changes are posted constitutes
                  acceptance of the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about these Terms, contact us:
                </p>
                <div className="mt-4 p-6 rounded-xl bg-card border border-border text-muted-foreground">
                  <p className="font-semibold text-foreground">Contractors Choice Agency</p>
                  <p className="mt-2">12220 E Riggs Road Suite #105, Chandler, AZ 85249</p>
                  <p className="mt-1">
                    Phone:{" "}
                    <a href="tel:8449675247" className="text-primary hover:text-primary/80 transition-colors">
                      844-967-5247
                    </a>
                  </p>
                  <p className="mt-1">
                    Email:{" "}
                    <a
                      href="mailto:josh@contractorschoiceagency.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      josh@contractorschoiceagency.com
                    </a>
                  </p>
                </div>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  See also our{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}
