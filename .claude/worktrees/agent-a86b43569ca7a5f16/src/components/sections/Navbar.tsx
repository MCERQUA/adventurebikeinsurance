"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { label: "Coverage", href: "/coverage" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-background border-b border-border"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 cursor-pointer">
          <Compass className="w-7 h-7 md:w-8 md:h-8 text-primary" />
          <span className="text-lg md:text-xl font-heading font-bold text-foreground tracking-tight">
            Adventure Bike Insurance
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:8449675247"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            aria-label="Call us at 844-967-5247"
          >
            <Phone className="w-4 h-4" />
            844-967-5247
          </a>

          <Link
            href="/quote"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors cursor-pointer shrink-0"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:8449675247"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
            aria-label="Call us at 844-967-5247"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 cursor-pointer"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="tel:8449675247"
                className="flex items-center gap-2 text-lg font-bold text-primary py-1"
                onClick={() => setIsMobileOpen(false)}
              >
                <Phone className="w-5 h-5" />
                844-967-5247
              </a>

              <Link
                href="/quote"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center px-5 py-3 bg-primary text-primary-foreground font-semibold rounded-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
