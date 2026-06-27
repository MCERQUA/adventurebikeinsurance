import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Shield, Car, Wrench, Shirt, DollarSign, Truck, Globe,
  Check, Phone, ArrowLeft, ChevronRight, type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { COVERAGES, getCoverageBySlug } from "@/lib/coverages";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Car,
  Wrench,
  Shirt,
  DollarSign,
  Truck,
  Globe,
};

export function generateStaticParams() {
  return COVERAGES.map((coverage) => ({ slug: coverage.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const coverage = getCoverageBySlug(slug);
  if (!coverage) return {};
  const url = `https://adventurebikeinsurance.com/coverage/${slug}`;
  return {
    title: coverage.title,
    description: coverage.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Adventure Bike Insurance",
      title: `${coverage.title} — Adventure Bike Insurance`,
      description: coverage.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: coverage.title,
      description: coverage.summary,
    },
  };
}

export default async function CoverageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const coverage = getCoverageBySlug(slug);
  if (!coverage) notFound();

  const Icon = iconMap[coverage.icon] ?? Shield;
  const url = `https://adventurebikeinsurance.com/coverage/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: coverage.title,
    description: coverage.summary,
    serviceType: "Motorcycle Insurance Coverage",
    areaServed: "United States",
    url,
    provider: {
      "@type": "InsuranceAgency",
      name: "Adventure Bike Insurance",
      url: "https://adventurebikeinsurance.com",
      telephone: "+1-844-967-5247",
      email: "josh@contractorschoiceagency.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12220 E Riggs Road Suite #105",
        addressLocality: "Chandler",
        addressRegion: "AZ",
        postalCode: "85249",
        addressCountry: "US",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "Coverage", item: "https://adventurebikeinsurance.com/coverage" },
      { "@type": "ListItem", position: 3, name: coverage.title, item: url },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-adventure">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/coverage" className="hover:text-foreground transition-colors">Coverage</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{coverage.title}</span>
            </nav>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                  {coverage.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {coverage.summary}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/quote"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:8449675247"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                844-967-5247
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's covered */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                What&apos;s Covered
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Included in this coverage
              </h2>
              <ul className="space-y-4">
                {coverage.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5">
                {coverage.body.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn className="mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              {coverage.title} FAQ
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {coverage.faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-lg font-heading font-bold">{faq.q}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12">
            <Link
              href="/coverage"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all coverage options
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTA
        title={`Ready to Add ${coverage.title}?`}
        description="Tell us how you ride and we'll build a policy that covers every scenario. Free consultation — 15 minutes, no obligation."
        primaryCTA="Get Your Free Quote"
        primaryHref="/quote"
      />

      <Footer />
    </main>
  );
}
