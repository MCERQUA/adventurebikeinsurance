import Link from "next/link";
import type { Metadata } from "next";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "This trail doesn't go through. Head back to the main route or get a free adventure bike insurance quote.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#fafaf9] via-[#fff7ed] to-[#fafaf9]">
      <div className="max-w-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c2410c] to-[#f97316] flex items-center justify-center mx-auto mb-8 shadow-lg">
          <Compass className="w-9 h-9 text-white" />
        </div>
        <p className="text-sm font-bold uppercase tracking-widest text-[#c2410c] mb-5">
          404 — Off the map
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#1c1917] mb-6">
          This trail doesn&apos;t go through.
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed mb-10">
          The page you&apos;re looking for has moved or never existed. Let&apos;s
          get you back on route.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#c2410c] to-[#f97316] text-white px-8 py-3.5 rounded-xl font-bold hover:scale-[1.02] transition"
          >
            Home
          </Link>
          <Link
            href="/coverages"
            className="inline-flex items-center justify-center border border-[rgba(194,65,12,0.25)] bg-white px-8 py-3.5 rounded-xl font-bold text-[#1c1917] hover:border-[#c2410c] transition"
          >
            Coverages
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center border border-[rgba(194,65,12,0.25)] bg-white px-8 py-3.5 rounded-xl font-bold text-[#1c1917] hover:border-[#c2410c] transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
