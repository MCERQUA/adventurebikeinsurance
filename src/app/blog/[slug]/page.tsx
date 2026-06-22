import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { blogPosts, getPostBySlug, getAllPostSlugs } from "@/lib/blog-posts";

const baseUrl = "https://adventurebikeinsurance.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  const url = `${baseUrl}/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: "Adventure Bike Insurance",
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${baseUrl}/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.image}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: "Adventure Bike Insurance" },
    publisher: { "@id": `${baseUrl}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AnimatedBackground />
      <Navbar />

      <article className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-[#c2410c] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#c2410c]/10 text-[#c2410c] text-xs font-bold rounded-full">
                {post.category}
              </span>
              <span className="text-stone-500 text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1c1917] mb-5 leading-tight">
              {post.title}
            </h1>
            <p className="text-stone-500 text-sm">{post.date}</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden mb-10 border border-[rgba(194,65,12,0.15)]">
            <Image
              src={post.image}
              alt={post.title}
              width={1280}
              height={720}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="rounded-3xl p-8 md:p-12 mb-12 bg-white border border-[rgba(194,65,12,0.12)]">
            <div className="space-y-6">
              {post.content.map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-2xl font-black text-[#1c1917] mt-10 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={i} className="text-[#1c1917] font-bold">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (paragraph.match(/^\*\*[^*]+\*\*/)) {
                  const parts = paragraph.split(/\*\*/g).filter(Boolean);
                  return (
                    <p key={i} className="text-stone-700 leading-relaxed">
                      <strong className="text-[#1c1917]">{parts[0]}</strong>
                      {parts.slice(1).join("")}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-stone-700 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="p-8 rounded-3xl text-center mb-12 bg-gradient-to-br from-[#c2410c] to-[#9a3412]">
            <h3 className="text-2xl font-black text-white mb-3">
              Ready to review your coverage?
            </h3>
            <p className="text-orange-100 mb-6">
              Get a free quote built for the way you ride — on-road, off-road,
              and everywhere between.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#c2410c] font-bold rounded-xl hover:scale-[1.02] transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18449675247"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                844-967-5247
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="text-xl font-black text-[#1c1917] mb-5">More resources</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group p-5 rounded-2xl bg-white border border-[rgba(194,65,12,0.12)] card-lift"
                  >
                    <span className="text-xs font-bold text-[#c2410c] uppercase tracking-wider">
                      {p.category}
                    </span>
                    <p className="font-bold text-[#1c1917] text-sm mt-1 group-hover:text-[#c2410c] transition-colors line-clamp-2">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
