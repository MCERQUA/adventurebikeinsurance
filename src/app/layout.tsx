import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const baseUrl = "https://adventurebikeinsurance.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Adventure Bike Insurance | Dual-Sport & ADV Motorcycle Coverage",
    template: "%s | Adventure Bike Insurance",
  },
  description:
    "Specialized insurance for adventure and dual-sport motorcycles. Coverage for on/off-road riding, aftermarket accessories, touring gear, agreed-value, and roadside. Free quote in minutes.",
  keywords: [
    "adventure motorcycle insurance",
    "adventure bike insurance",
    "dual sport motorcycle insurance",
    "ADV motorcycle insurance",
    "off road motorcycle insurance",
    "motorcycle touring insurance",
    "BMW GS insurance",
    "KTM adventure insurance",
    "motorcycle accessory coverage",
    "agreed value motorcycle insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Adventure Bike Insurance",
    title: "Adventure Bike Insurance | Dual-Sport & ADV Motorcycle Coverage",
    description:
      "Specialized insurance for adventure and dual-sport motorcycles — on/off-road, accessories, touring gear, agreed-value, and roadside. Free quote in minutes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adventure Bike Insurance — coverage built for ADV and dual-sport riders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adventure Bike Insurance | Dual-Sport & ADV Motorcycle Coverage",
    description:
      "Specialized coverage for adventure and dual-sport motorcycles. Get a free quote in minutes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "@id": "https://adventurebikeinsurance.com/#organization",
              name: "Contractors Choice Agency",
              alternateName: "Adventure Bike Insurance",
              description:
                "Specialized insurance for adventure and dual-sport motorcycle riders — on/off-road coverage, aftermarket accessory protection, agreed value, and touring support.",
              url: baseUrl,
              telephone: "+18449675247",
              email: "josh@contractorschoiceagency.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12220 E Riggs Road",
                addressLocality: "Chandler",
                addressRegion: "AZ",
                postalCode: "85249",
                addressCountry: "US",
              },
              areaServed: "United States",
              knowsAbout: [
                "Adventure Motorcycle Insurance",
                "Dual-Sport Motorcycle Insurance",
                "Off-Road Motorcycle Coverage",
                "Motorcycle Accessory Coverage",
                "Agreed Value Motorcycle Insurance",
                "Motorcycle Touring Coverage",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
