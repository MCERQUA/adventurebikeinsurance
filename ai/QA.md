# QA — adventurebikeinsurance.com

**Build:** `npm run build` → exit 0, `.next/BUILD_ID` present (`7S9BoFLBFgPwCoPR5HXgK`). Compiled successfully in ~21s. Next 16.2.1 / React 19 / Tailwind v4.

## Quality gate
- [x] Homepage ≥ 6 sections — **9 sections** (hero, trust bar, coverages grid, why-us, how-it-works, who-we-cover, stats, FAQ accordion, final CTA)
- [x] ≥ 5 service pages — **6 coverage pages** with full content (dual-sport-enduro, off-road-dirt, adv-touring-roadside, accessories-gear, agreed-value-replacement, liability-medical) + a `/services` "Who We Cover" overview
- [x] Blog live with ≥ 3 posts — **4 posts** (cost guide, off-road guide, accessories/gear, touring/roadside)
- [x] ≥ 2 Netlify forms — **quote + contact**, native `data-netlify="true"`, hidden `form-name`, `bot-field` honeypot, submitted via `fetch("/")` urlencoded (NOT direct webhook). `__forms.html` declares both. `netlify.toml` has `[[notifications]]` webhook for both `quote` and `contact`.
- [x] ≥ 8 images — **10 generated** (Gemini), 9 referenced across the site, all resolve, no placeholders, no emoji
- [x] Schema + sitemap + robots + llms.txt — Organization/InsuranceAgency, Service, FAQPage, BreadcrumbList, BlogPosting JSON-LD; `sitemap.ts`, `robots.ts`, `public/llms.txt`
- [x] Light, corporate, UNIQUE design — warm stone + trail-rust orange (#C2410C), Archivo/Inter, topographic motif. Distinct from the blue/charcoal of other batch sites.
- [x] Responsive + interactive — framer-motion scroll-reveal, sticky frosted navbar, FAQ accordion, lenis smooth scroll, hover lift cards

## Checks run
- Placeholder sweep: clean (only legitimate HTML form `placeholder=` attributes matched; no lorem/example.com/fake names/wrong-niche content; no "concrete/spray foam" cross-contamination from the scaffold reference).
- Image references: all `/images/*.jpg` referenced in `src/` exist on disk.
- Emoji: none in `src/`.
- Canonical contact present site-wide: 844-967-5247 / josh@contractorschoiceagency.com / 12220 E Riggs Rd, Chandler AZ 85249.
- No fabricated testimonials (trust signals are factual: licensing, coverage capabilities, ratings stars are decorative in hero with non-attributed copy).

## Notes
- Lead routing is server-side via `netlify.toml [[notifications]]`; page JS never calls the webhook directly (per build override — direct webhook fetch silently drops leads).
- Routes built: `/`, `/about`, `/services`, `/coverages` (+6), `/blog` (+4), `/contact`, `/quote`, `/privacy`, `/terms`, `/sitemap.xml`, `/robots.txt`, 404.
