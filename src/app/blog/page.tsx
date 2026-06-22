import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Reveal } from "@/components/reveal";
import { blogPosts } from "@/lib/blog-posts";

const baseUrl = "https://adventurebikeinsurance.com";

export const metadata: Metadata = {
  title: "Adventure Rider Resources | Insurance Guides & Tips",
  description:
    "Plain-English guides on adventure and dual-sport motorcycle insurance: costs, off-road coverage, accessory and gear protection, and touring readiness.",
  alternates: { canonical: `${baseUrl}/blog` },
};

export default function BlogIndexPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-36 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(194,65,12,0.08)] border border-[rgba(194,65,12,0.25)] mb-6">
            <BookOpen className="w-4 h-4 text-[#c2410c]" />
            <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
              Resources
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#1c1917] mb-4">
            Adventure rider resources
          </h1>
          <p className="text-lg text-stone-600">
            Straight answers on what adventure and dual-sport insurance actually
            covers — costs, off-road gaps, farkles, gear, and touring.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="relative z-10 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-white border border-[rgba(194,65,12,0.12)] card-lift"
            >
              <div className="relative h-64 lg:h-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#c2410c]/10 text-[#c2410c] text-xs font-bold rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-stone-500 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-[#1c1917] mb-3 group-hover:text-[#c2410c] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-stone-600 mb-5">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c2410c]">
                  Read article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-10 py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block h-full rounded-3xl overflow-hidden bg-white border border-[rgba(194,65,12,0.12)] card-lift"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 bg-[#c2410c]/10 text-[#c2410c] text-xs font-bold rounded-full">
                        {p.category}
                      </span>
                      <span className="text-stone-500 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {p.readTime}
                      </span>
                    </div>
                    <h3 className="font-black text-[#1c1917] mb-2 group-hover:text-[#c2410c] transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-stone-600 line-clamp-3">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
