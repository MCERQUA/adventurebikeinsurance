import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adventurebikeinsurance.com"),
  title: {
    default: "Adventure Bike Insurance — Coverage for the Road Beyond Pavement",
    template: "%s | Adventure Bike Insurance",
  },
  description:
    "Specialized motorcycle insurance for adventure bikes, dual-sport riders, and overland explorers. Off-road coverage, gear protection, international riding, trip interruption. Licensed in all 50 states.",
  keywords: [
    "adventure bike insurance",
    "adventure motorcycle insurance",
    "dual sport motorcycle insurance",
    "touring motorcycle insurance",
    "overland motorcycle insurance",
    "adv bike insurance",
    "off-road motorcycle insurance",
    "adventure bike insurance quote",
    "motorcycle trip interruption insurance",
    "adventure bike gear insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adventurebikeinsurance.com",
    siteName: "Adventure Bike Insurance",
    title: "Adventure Bike Insurance — Coverage for the Road Beyond Pavement",
    description:
      "Specialized motorcycle insurance for adventure bikes, dual-sport riders, and overland explorers. Off-road coverage, gear protection, international riding. 15-minute quotes.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Adventure Bike Insurance — coverage for the road beyond pavement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Bike Insurance — Coverage for the Road Beyond Pavement",
    description:
      "Specialized motorcycle insurance for adventure bikes, dual-sport riders, and overland explorers. Off-road coverage, gear protection, international riding. 15-minute quotes.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Adventure Bike Insurance",
              description:
                "Specialized motorcycle insurance for adventure bikes, dual-sport riders, and overland explorers. Licensed in all 50 states.",
              url: "https://adventurebikeinsurance.com",
              telephone: "+18449675247",
              email: "josh@contractorschoiceagency.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12220 E Riggs Road Suite #105",
                addressLocality: "Chandler",
                addressRegion: "AZ",
                postalCode: "85249",
                addressCountry: "US",
              },
              employee: {
                "@type": "Person",
                name: "Josh Cotner",
                jobTitle: "Insurance Agent",
              },
              areaServed: "United States",
              serviceType: [
                "Adventure Motorcycle Insurance",
                "Dual Sport Motorcycle Insurance",
                "Touring Motorcycle Insurance",
                "Overland Motorcycle Insurance",
                "Off-Road Motorcycle Coverage",
                "Motorcycle Gear Insurance",
                "International Motorcycle Insurance",
                "Trip Interruption Insurance",
              ],
              parentOrganization: {
                "@type": "InsuranceAgency",
                name: "Contractors Choice Agency",
                foundingDate: "2005",
                foundingLocation: {
                  "@type": "Place",
                  name: "Chandler, Arizona",
                },
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
