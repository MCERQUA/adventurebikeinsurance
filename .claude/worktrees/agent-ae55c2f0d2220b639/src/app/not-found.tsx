import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <p className="text-8xl font-heading font-bold text-primary/20 mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trail Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Looks like this trail doesn&apos;t exist — or it&apos;s been rerouted. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Back to Home
            </Link>
            <Link
              href="/quote"
              className="px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-card transition-colors cursor-pointer"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
