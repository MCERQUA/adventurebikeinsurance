import Link from "next/link";
import { Compass, Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = {
  coverage: [
    { href: "/coverages/dual-sport-enduro", label: "Dual-Sport & Enduro" },
    { href: "/coverages/off-road-dirt", label: "Off-Road & Dirt" },
    { href: "/coverages/adv-touring-roadside", label: "ADV Touring & Roadside" },
    { href: "/coverages/accessories-gear", label: "Accessories & Gear" },
    { href: "/coverages/agreed-value-replacement", label: "Agreed Value & Replacement" },
    { href: "/coverages/liability-medical", label: "Liability & Medical" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Who We Cover" },
    { href: "/blog", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/quote", label: "Get a Quote" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-[rgba(194,65,12,0.15)] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c2410c] to-[#f97316] flex items-center justify-center shadow-lg shadow-[#c2410c]/30">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-[#1c1917] leading-tight tracking-tight">
                  ADVENTURE BIKE
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#c2410c] leading-tight">
                  INSURANCE
                </span>
              </div>
            </Link>
            <p className="text-stone-600 text-sm leading-relaxed mb-6 max-w-sm">
              Specialized insurance for adventure and dual-sport riders. From the
              daily commute to a trans-continental ride, we cover the bike, the
              farkles, and the gear — on-road and off.
            </p>
            <div className="space-y-3 text-sm text-stone-600">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c2410c]" />
                <a href="tel:+18449675247" className="hover:text-[#c2410c] transition-colors">
                  844-967-5247
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c2410c]" />
                <a
                  href="mailto:josh@contractorschoiceagency.com"
                  className="hover:text-[#c2410c] transition-colors"
                >
                  josh@contractorschoiceagency.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#c2410c]" />
                <span>12220 E Riggs Rd, Chandler, AZ 85249</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#c2410c]" />
                <span>Mon–Fri 8am–5pm Arizona (MST)</span>
              </div>
            </div>
          </div>

          {/* Coverage */}
          <div>
            <h3 className="text-[#1c1917] font-bold text-sm uppercase tracking-wider mb-4">
              Coverage
            </h3>
            <ul className="space-y-3">
              {footerLinks.coverage.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-[#c2410c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#1c1917] font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-[#c2410c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#1c1917] font-bold text-sm uppercase tracking-wider mb-4">
              More
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 hover:text-[#c2410c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[rgba(194,65,12,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Adventure Bike Insurance, a brand of
            Contractors Choice Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-stone-500">Licensed in all 50 states</span>
            <span className="text-xs text-stone-500">|</span>
            <span className="text-xs text-stone-500">Independent agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
