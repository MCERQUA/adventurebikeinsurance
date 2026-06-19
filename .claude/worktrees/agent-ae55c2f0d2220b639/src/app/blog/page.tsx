import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getAllPosts } from "@/lib/blog";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Adventure bike insurance guides, tips, and insights. Learn about coverage options, off-road insurance extensions, gear protection, international riding insurance, and how to save on your adventure motorcycle policy.",
  keywords: [
    "adventure bike insurance blog",
    "motorcycle insurance tips",
    "adventure riding insurance guide",
    "overlanding insurance tips",
  ],
  alternates: { canonical: "https://adventurebikeinsurance.com/blog" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/blog",
    siteName: "Adventure Bike Insurance",
    title: "Adventure Rider Insurance Guide — Blog",
    description:
      "Expert guides, coverage breakdowns, and real-world insurance insights for adventure riders, dual-sport enthusiasts, and overland explorers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Rider Insurance Guide",
    description:
      "Expert guides and coverage breakdowns for adventure riders, dual-sport enthusiasts, and overland explorers.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://adventurebikeinsurance.com/blog" },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <section className="pt-32 pb-12 md:pt-40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">
              Adventure Rider{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Insurance Guide
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Expert guides, coverage breakdowns, and real-world insurance insights for adventure riders,
              dual-sport enthusiasts, and overland explorers.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/30 transition-colors h-full flex flex-col">
                      {/* Colored header bar instead of image */}
                      <div className="h-3 bg-gradient-to-r from-primary to-accent" />

                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h2 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-grow">
                          {post.description}
                        </p>
                      </div>
                    </article>
                  </Link>
                </FadeIn>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Blog posts coming soon. We&apos;re working on in-depth guides covering adventure bike
                insurance, off-road coverage, gear protection, and international riding.
              </p>
              <p className="text-muted-foreground mt-2">
                In the meantime, check out our{" "}
                <Link href="/faq" className="text-primary hover:text-primary/80 transition-colors">
                  FAQ page
                </Link>{" "}
                or{" "}
                <Link href="/quote" className="text-primary hover:text-primary/80 transition-colors">
                  get a free quote
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
