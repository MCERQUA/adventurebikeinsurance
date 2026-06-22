import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Compass,
  Mountain,
  Route,
  Package,
  BadgeCheck,
  HeartPulse,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Users,
  Phone,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Reveal } from "@/components/reveal";
import { coverages, getCoverageBySlug, getAllCoverageSlugs } from "@/lib/coverages";

const baseUrl = "https://adventurebikeinsurance.com";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-8 h-8 text-white" />,
  Mountain: <Mountain className="w-8 h-8 text-white" />,
  Route: <Route className="w-8 h-8 text-white" />,
  Package: <Package className="w-8 h-8 text-white" />,
  BadgeCheck: <BadgeCheck className="w-8 h-8 text-white" />,
  HeartPulse: <HeartPulse className="w-8 h-8 text-white" />,
};

interface Props {
  params: Promise<{ coverage: string }>;
}

export async function generateStaticParams() {
  return getAllCoverageSlugs().map((slug) => ({ coverage: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { coverage: slug } = await params;
  const coverage = getCoverageBySlug(slug);
  if (!coverage) return { title: "Coverage Not Found" };
  const url = `${baseUrl}/coverages/${slug}`;
  return {
    title: coverage.title,
    description: coverage.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: coverage.title,
      description: coverage.description,
      siteName: "Adventure Bike Insurance",
      images: [{ url: coverage.image }],
    },
  };
}

export default async function CoverageDetailPage({ params }: Props) {
  const { coverage: slug } = await params;
  const coverage = getCoverageBySlug(slug);
  if (!coverage) notFound();

  const url = `${baseUrl}/coverages/${slug}`;
  const related = coverages.filter((c) => c.slug !== slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: coverage.title,
    description: coverage.description,
    url,
    serviceType: coverage.shortTitle,
    provider: { "@id": `${baseUrl}/#organization` },
    areaServed: "United States",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: coverage.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Coverages", item: `${baseUrl}/coverages` },
      { "@type": "ListItem", position: 3, name: coverage.shortTitle, item: url },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AnimatedBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/coverages"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#c2410c] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All coverages
          </Link>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c2410c] to-[#f97316] flex items-center justify-center shadow-lg mb-6">
                {iconMap[coverage.icon]}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1917] leading-tight mb-4">
                {coverage.title}
              </h1>
              <p className="text-lg text-[#c2410c] font-semibold mb-4">
                {coverage.tagline}
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                {coverage.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#c2410c] to-[#f97316] text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+18449675247"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1c1917] font-bold rounded-xl border border-[rgba(194,65,12,0.25)] hover:border-[#c2410c] transition-all"
                >
                  <Phone className="w-5 h-5 text-[#c2410c]" />
                  844-967-5247
                </a>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[rgba(194,65,12,0.15)]">
              <Image
                src={coverage.image}
                alt={coverage.shortTitle}
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LONG DESCRIPTION */}
      <section className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8 lg:p-10">
              <p className="text-lg text-stone-700 leading-relaxed">
                {coverage.longDescription}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES + WHO FOR */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8">
              <h2 className="text-2xl font-black text-[#1c1917] mb-6">
                What&apos;s included
              </h2>
              <ul className="space-y-3">
                {coverage.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c2410c] flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-6 h-6 text-[#c2410c]" />
                <h2 className="text-2xl font-black text-[#1c1917]">Who it&apos;s for</h2>
              </div>
              <ul className="space-y-3 mb-8">
                {coverage.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c] flex-shrink-0 mt-2.5" />
                    <span className="text-stone-700">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-[rgba(194,65,12,0.05)] border border-[rgba(194,65,12,0.12)] p-5">
                <p className="text-xs font-bold text-[#c2410c] uppercase tracking-wider mb-1">
                  Typical limits
                </p>
                <p className="text-sm text-stone-700">{coverage.typicalLimits}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMMON CLAIMS */}
      <section className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl bg-white border border-[rgba(194,65,12,0.12)] p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-6 h-6 text-[#c2410c]" />
                <h2 className="text-2xl font-black text-[#1c1917]">
                  Claims this coverage handles
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {coverage.commonClaims.map((c) => (
                  <div
                    key={c}
                    className="flex items-start gap-3 rounded-2xl bg-[#fafaf9] border border-[rgba(194,65,12,0.1)] p-4"
                  >
                    <span className="text-[#c2410c] font-black">→</span>
                    <span className="text-sm text-stone-700">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1c1917]">
              Frequently asked
            </h2>
          </Reveal>
          <div className="space-y-4">
            {coverage.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="rounded-2xl bg-white border border-[rgba(194,65,12,0.12)] p-6">
                  <h3 className="font-bold text-[#1c1917] mb-2">{f.q}</h3>
                  <p className="text-stone-600 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="relative z-10 py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1c1917] mb-6">
            Related coverages
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/coverages/${r.slug}`}
                className="group rounded-2xl bg-white border border-[rgba(194,65,12,0.12)] p-5 card-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c2410c] to-[#f97316] flex items-center justify-center mb-3">
                  {iconMap[r.icon]}
                </div>
                <h3 className="font-bold text-[#1c1917] text-sm group-hover:text-[#c2410c] transition-colors">
                  {r.shortTitle}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
