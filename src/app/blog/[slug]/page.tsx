import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://adventurebikeinsurance.com/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Adventure Bike Insurance",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://adventurebikeinsurance.com/blog/${slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: "Adventure Bike Insurance" },
    publisher: {
      "@type": "InsuranceAgency",
      name: "Adventure Bike Insurance",
      url: "https://adventurebikeinsurance.com",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://adventurebikeinsurance.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <article className="pt-32 pb-16 md:pt-40">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                {post.title}
              </h1>
              {post.author && (
                <p className="mt-4 text-muted-foreground">By {post.author}</p>
              )}
            </div>

            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-blockquote:border-primary/50 prose-blockquote:text-muted-foreground
                prose-li:text-muted-foreground
                prose-hr:border-border"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                  .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                  .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/^- (.*$)/gim, '<li>$1</li>')
                  .replace(/(<li>[\s\S]*<\/li>)/, '<ul>$1</ul>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^(?!<[hulo])/gm, '<p>')
                  .replace(/([^>])$/gm, '</p>$1')
              }}
            />
          </FadeIn>
        </div>
      </article>

      <CTA
        title="Need Coverage for Your Adventure Bike?"
        description="Get a personalized insurance quote in 15 minutes. We'll find you the best coverage at the best rate."
        primaryCTA="Get Your Free Quote"
        primaryHref="/quote"
      />

      <Footer />
    </main>
  );
}
