import { Phone, Mail, MapPin, Compass } from "lucide-react";
import Link from "next/link";

const links = [
  {
    title: "Coverage",
    items: [
      { label: "Coverage Overview", href: "/coverage" },
      { label: "Off-Road Extension", href: "/coverage#off-road" },
      { label: "Gear & Equipment", href: "/coverage#gear" },
      { label: "International Riding", href: "/coverage#international" },
      { label: "Trip Interruption", href: "/coverage#trip-interruption" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Get a Quote", href: "/quote" },
      { label: "Pricing Guide", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/quote" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <Compass className="w-6 h-6 text-primary" />
              <span className="text-lg font-heading font-bold">Adventure Bike Insurance</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Specialized insurance for adventure riders, dual-sport enthusiasts, and overland
              explorers. Licensed in all 50 states with international coverage options.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="tel:8449675247"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                844-967-5247
              </a>
              <a
                href="mailto:josh@contractorschoiceagency.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                josh@contractorschoiceagency.com
              </a>
              <p className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                12220 E Riggs Rd, Chandler, AZ 85249
              </p>
            </div>
          </div>

          {/* Link Groups */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Contractors Choice Agency. All rights reserved. NPN 8608479.
          </p>
          <p className="text-xs text-muted-foreground">
            Adventure Bike Insurance is a service of Contractors Choice Agency, licensed in all 50 states.
          </p>
        </div>
      </div>
    </footer>
  );
}
