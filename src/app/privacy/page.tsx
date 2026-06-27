import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Adventure Bike Insurance, a service of Contractors Choice Agency, collects, uses, shares, and protects the information you provide through our quote and contact forms.",
  alternates: { canonical: "https://adventurebikeinsurance.com/privacy" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/privacy",
    siteName: "Adventure Bike Insurance",
    title: "Privacy Policy — Adventure Bike Insurance",
    description:
      "How we collect, use, share, and protect the information you provide through our quote and contact forms.",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-adventure">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Privacy Policy
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
                Adventure Bike Insurance is a service of Contractors Choice Agency
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains
                what information we collect when you use this website, how we use and share it, and
                the choices you have. By using this site or submitting a form, you agree to the
                practices described here.
              </p>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect the information you choose to provide through our quote and contact
                  forms. Depending on the form, this may include your name, email address, phone
                  number, details about your adventure motorcycle (make, model, year, value, and
                  accessories), your riding habits and coverage preferences, and any message or
                  notes you send us.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We also automatically collect limited technical information when you visit the
                  site — such as your browser type, device, and general usage data — through standard
                  web technologies. We do not ask for sensitive information like Social Security
                  numbers or payment details through this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information you provide to prepare and deliver insurance quotes, respond
                  to your questions, shop your coverage needs with insurance carriers, follow up on
                  your request, and improve our services. We may contact you by phone, email, or text
                  using the contact details you provide in order to assist with your inquiry.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">3. Sharing With Insurance Carriers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To find you competitive coverage, we share the relevant details you provide with
                  the insurance carriers and underwriting partners we work with. These partners use
                  your information to evaluate your request and prepare quotes. We do not sell your
                  personal information to unrelated third parties for their own marketing. We may also
                  share information with service providers who help us operate this website, or when
                  required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">4. Cookies & Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This site may use cookies and similar technologies to remember your preferences,
                  understand how visitors use the site, and improve performance. You can control or
                  disable cookies through your browser settings, though some parts of the site may not
                  function as intended if cookies are turned off.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable administrative, technical, and physical measures to protect the
                  information you submit against loss, misuse, and unauthorized access. No method of
                  transmission or storage is completely secure, however, and we cannot guarantee
                  absolute security. You share information with us at your own discretion.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">6. Your Rights & Choices</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may request to access, correct, or delete the personal information we hold about
                  you, and you may ask us to stop contacting you at any time. Depending on where you
                  live, you may have additional rights under applicable privacy laws. To exercise any
                  of these rights, contact us using the details below and we&apos;ll respond as
                  required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or how your information is handled,
                  reach out to us:
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
                  <Link href="/terms" className="text-primary hover:text-primary/80 transition-colors">
                    Terms of Service
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
