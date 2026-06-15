import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Adventure Bike Insurance Quote",
  description:
    "Get a personalized adventure bike insurance quote in 15 minutes. Tell us about your bike, riding style, and coverage needs — we shop multiple carriers to find your best rate.",
  keywords: [
    "adventure bike insurance quote",
    "motorcycle insurance quote",
    "free adventure bike insurance quote",
    "adventure motorcycle quote",
    "dual sport insurance quote",
  ],
  alternates: { canonical: "https://adventurebikeinsurance.com/quote" },
  openGraph: {
    type: "website",
    url: "https://adventurebikeinsurance.com/quote",
    siteName: "Adventure Bike Insurance",
    title: "Get Your Free Adventure Bike Insurance Quote — 15 Minutes",
    description:
      "Get a personalized adventure bike insurance quote in 15 minutes. We shop multiple carriers to find your best rate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Free Adventure Bike Insurance Quote",
    description:
      "Get a personalized quote in 15 minutes. We shop multiple carriers to find your best rate.",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://adventurebikeinsurance.com" },
      { "@type": "ListItem", position: 2, name: "Quote", item: "https://adventurebikeinsurance.com/quote" },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
