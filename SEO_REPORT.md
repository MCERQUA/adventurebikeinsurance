# SEO Report — adventurebikeinsurance
Date: 2026-05-21

## 1. Site Identity
- **Framework**: Next.js 15.3.0 (detected from package.json and next.config.ts)
- **Apparent domain / target audience / niche**: adventurebikeinsurance.com; target audience is adventure motorcycle riders, dual-sport enthusiasts, and overland explorers seeking specialized insurance coverage for off-road and international riding
- **Deployment status**: No vercel.json or netlify.toml detected in repository; likely self-hosted or deployed via Next.js native hosting

## 2. Inventory
- **Total pages**: 8 static pages + dynamic blog routes
  - / (home)
  - /about
  - /coverage
  - /pricing
  - /faq
  - /blog
  - /blog/[slug] (dynamic routes)
  - /quote
- **URL structure**: Nested but relatively flat; main navigation uses top-level routes (/coverage, /pricing, /faq) and dynamic blog routes (/blog/[slug])
- **sitemap.xml present**: YES — generated dynamically at src/app/sitemap.ts with 8+ static routes plus blog posts
- **robots.txt present**: YES — generated dynamically at src/app/robots.ts with standard allow/disallow rules

## 3. On-Page SEO (8-page sample)

| Page | Title Length | Meta Description Length | H1 | Canonical | OG Tags |
|------|--------------|-------------------------|-----|-----------|---------|
| Home | 63 chars | 149 chars | "Adventure Bike Insurance — Coverage for the Road Beyond Pavement" | Not set (uses metadataBase) | Yes (title, description, siteName) |
| About | 5 chars ("About") | 162 chars | "About Contractors Choice Agency" | Not set | Not set |
| Coverage | 8 chars ("Coverage") | 166 chars | "Adventure Bike Insurance Coverage Guide" | Not set | Not set |
| Pricing | 7 chars ("Pricing") | 152 chars | "Adventure Bike Insurance Cost Guide" | Not set | Not set |
| FAQ | 3 chars ("FAQ") | 154 chars | "Adventure Bike Insurance FAQ" | Not set | Not set |
| Blog | 4 chars ("Blog") | 154 chars | "Adventure Rider Insurance Guide" | Not set | Not set |
| Quote | No metadata exported (client component) | No metadata | No H1 in static HTML | Not set | Not set |
| Blog Posts | Dynamic (post.title) | Dynamic (post.description) | post.title | Not set | Not set |

**Issues Found**:
- About, Coverage, Pricing, FAQ pages use short generic titles instead of descriptive SEO-optimized titles
- No explicit canonical tags (relies on metadataBase but not ideal for dynamic routes)
- OG tags present only on home/layout; individual pages don't override for rich sharing
- Quote page (client component) has no metadata export — will fall back to default template title

## 4. Structured Data
- **InsuranceAgency schema.org present**: YES — in layout.tsx with comprehensive Organization/LocalBusiness data
  - Includes: name, description, telephone, email, address, areaServed, serviceType array, parentOrganization
  - Missing: Logo, openingHours, priceRange, aggregateRating, potentialAction (for quotes)
- **FAQ schema**: NOT FOUND — FAQ content on /faq and /blog pages is not wrapped in schema.org FAQPage
- **LocalBusiness**: Implied via InsuranceAgency but no explicit LocalBusiness type
- **BreadcrumbList**: NOT FOUND — no breadcrumb navigation or schema
- **BlogPosting**: NOT FOUND — individual blog post pages lack BlogPosting schema

## 5. Content Quality
- **Home page**: 1,144 words (adequate)
  - 8 inline FAQ items
  - 3 testimonials
  - Multiple CTAs
- **About page**: 1,056 words (good depth)
  - Company history, team expertise, service differentiators
  - Strong internal linking to /quote
- **Coverage page**: 1,831 words (excellent)
  - 7 standard coverages + 8 adventure-specific coverages
  - Detailed "Why This Matters" sections
  - Clear information hierarchy
- **Internal linking**: Dense and contextual; ~30+ internal links across pages (well-distributed)
- **Image count**: 1 img/Image tag found in src/ (minimal; mostly CSS/components)
- **Image alt-text coverage**: ~1% — only 1 alt attribute found in codebase; images are largely handled via CSS backgrounds or decorative icons

## 6. Technical
- **robots.txt rules**: Allow "/" for all user agents; Disallow "/api/"; Sitemap pointing to https://adventurebikeinsurance.com/sitemap.xml
- **Sitemap URL count**: 8 static routes + dynamic blog routes (actual count depends on blog post files; structure supports unlimited blog posts)
- **404 handling**: Custom 404 page present at src/app/not-found.tsx with "Trail Not Found" branding and internal links to / and /quote
- **next.config.js redirects/headers**: No redirects or headers configured; allowedDevOrigins set for JamBot iframe embedding only

## 7. Top Issues (ranked by SEO impact)

1. **Quote page lacks metadata export** (src/app/quote/page.tsx line 21)
   - Client component uses "use client" and doesn't export metadata
   - Will fall back to root template title; no page-specific OG tags
   - **Fix**: Convert to async server component or add generateMetadata function

2. **Page titles are too generic** (About, Coverage, Pricing, FAQ pages)
   - "About" = 5 chars; "FAQ" = 3 chars
   - Should be unique, keyword-rich descriptors
   - **Example**: "About | Adventure Bike Insurance" → "Contractors Choice Agency — Adventure Bike Insurance Experts"

3. **No FAQ schema on /faq page** (src/app/faq/page.tsx)
   - 22 FAQ items present but no FAQPage/Question schema markup
   - Missed structured data for featured snippets

4. **Blog posts missing BlogPosting schema** (src/app/blog/[slug]/page.tsx)
   - generateMetadata is minimal (only title + description)
   - No author, datePublished, dateModified, articleBody, keywords in schema

5. **Missing BreadcrumbList schema**
   - Nested routes (/blog/[slug]) have no breadcrumb navigation or schema
   - Opportunity for rich SERP display

6. **No OG image tags**
   - Layout and pages don't specify og:image
   - Social shares will lack preview images

7. **Minimal alt-text on images** (coverage, components)
   - Only 1 alt attribute found across entire src/
   - Icon components in Hero, CoverageGrid, FAQ have no accessible descriptions

8. **Quote form has no form schema**
   - Structured quote request could be marked with schema.org
   - Missing microdata for lead generation tracking

9. **No JSON-LD for breadcrumbs on blog**
   - /blog/[slug] routes could use BreadcrumbList: Home > Blog > [Post Title]

10. **Missing Service schema on coverage page**
    - Service items (Off-Road Coverage, Gear Protection, etc.) could use Service schema
    - Would improve rich snippet potential for coverage searches

## 8. Top Recommendations (concrete next actions)

1. **Fix Quote page metadata** (High Priority — affects SERPs)
   - Convert src/app/quote/page.tsx to async server component or create async generateMetadata
   - Export: title: "Get Your Free Adventure Bike Insurance Quote — 15 Minutes", description: "Get a personalized insurance quote for your adventure bike. Tell us about your bike, riding style, and coverage needs."

2. **Expand all page titles to keyword-rich descriptions** (High Priority)
   - About: "About Contractors Choice Agency — 20 Years of Adventure Bike Insurance Expertise"
   - Coverage: "Complete Guide to Adventure Bike Insurance Coverage | Off-Road, Gear, International"
   - Pricing: "Adventure Bike Insurance Cost Guide | Real Pricing by Bike Model & Coverage Type"
   - FAQ: "Adventure Bike Insurance FAQ — 22 Answers for Adventure Riders"

3. **Add FAQ schema to /faq page** (Medium Priority)
   - Wrap FAQ array in script tag with FAQPage/@type: "FAQPage", mainEntity array of Question/@type objects
   - Eligible for Google FAQ rich snippets

4. **Add BlogPosting schema to /blog/[slug]/page.tsx** (Medium Priority)
   - Include: @type: BlogPosting, headline, description, datePublished (post.date), author, articleBody
   - Improves blog discoverability in Google News and search results

5. **Add BreadcrumbList schema to blog routes** (Medium Priority)
   - /blog/[slug] should render BreadcrumbList: Home (/) > Blog (/blog) > [Post Title] (current)
   - Improves SERP display and click-through for nested content

6. **Add og:image to root layout and individual pages** (Medium Priority)
   - Create or use existing hero image; reference in layout and per-page metadata
   - Improves social media preview appearance (Twitter, LinkedIn, Facebook)

7. **Add Service schema to coverage items** (Low Priority)
   - Each coverage type (Off-Road, Gear, Trip Interruption) could use Service/@type with areaServed, provider, description
   - Expands structured data footprint for local/service searches

8. **Add alt-text to all images and decorative icons** (Low Priority)
   - Audit Hero, CoverageGrid, BikeTypes components
   - Add aria-label or alt attributes to improve accessibility and image SEO
   - Example: `<Shield className="w-6 h-6" aria-label="Shield icon for bodily injury liability coverage" />`

---

**Overall Assessment**: The site has strong foundational SEO with good content depth, solid URL structure, proper robots/sitemap setup, and excellent on-page copy. Main gaps are in structured data richness (missing FAQ/BlogPosting/Service schemas) and metadata completeness (generic titles, quote page metadata, missing OG images). Implementing recommendations 1-3 would quickly improve search visibility for competitive keywords like "adventure bike insurance," "off-road motorcycle coverage," and long-tail FAQ terms.

## Round 2 — repaired 2026-05-21

### JSON-LD schema
- **InsuranceAgency baseline**: ⏭️ already present (src/app/layout.tsx — comprehensive Organization/LocalBusiness data)
- **FAQ schema**: ✅ applied — added FAQPage JSON-LD to:
  - src/app/faq/page.tsx (22 questions wrapped as Question/Answer mainEntity)
  - src/app/page.tsx (8 home-page FAQ items wrapped as FAQPage)
- **Service schema**: ✅ applied — src/app/coverage/page.tsx renders an ItemList of 15 Service objects (7 standard + 8 adventure-specific coverages), each with provider/areaServed/serviceType
- **BreadcrumbList**: ✅ applied — added BreadcrumbList JSON-LD to:
  - src/app/about/page.tsx
  - src/app/coverage/page.tsx
  - src/app/pricing/page.tsx
  - src/app/faq/page.tsx
  - src/app/blog/page.tsx
  - src/app/blog/[slug]/page.tsx (3-level: Home > Blog > Post)
  - src/app/quote/layout.tsx (new file — see below)
- **BlogPosting schema**: ✅ applied — src/app/blog/[slug]/page.tsx now emits BlogPosting JSON-LD with headline, description, datePublished, dateModified, author, publisher, mainEntityOfPage, articleSection

### sitemap.xml + robots.txt
- ⏭️ already present (src/app/sitemap.ts dynamically lists 7 static routes + blog posts; src/app/robots.ts allows "/" disallows "/api/" and points at sitemap.xml). No changes needed.

### Open Graph + Twitter Card meta tags
- ⏭️ root layout already had openGraph + twitter (src/app/layout.tsx)
- ✅ applied — added page-specific openGraph + twitter + canonical alternates to:
  - src/app/about/page.tsx
  - src/app/coverage/page.tsx
  - src/app/pricing/page.tsx
  - src/app/faq/page.tsx
  - src/app/blog/page.tsx
  - src/app/blog/[slug]/page.tsx (dynamic per-post including publishedTime + authors)
  - src/app/quote/layout.tsx (new — quote page is a client component, so a route-segment layout.tsx provides metadata)

### Image alt-text
- ⏭️ already at ~100% coverage on actual images. Only one rendered <Image> exists in the codebase (src/components/sections/Logo.tsx) and it already has `alt={alt ?? wordmarkFallback}` plus an `aria-label` on the wrapping Link. All other "imagery" in the codebase consists of inline Lucide SVG icon components (Shield, Car, Heart, etc.), which are decorative and rendered alongside accessible text labels — they don't need alt attributes. No changes needed.

### Custom 404 page
- ⏭️ already present (src/app/not-found.tsx — "Trail Not Found" branded page with Navbar/Footer/CTA, links to / and /quote). Next.js App Router automatically returns HTTP 404 for not-found.tsx routes. No changes needed.

### Notes
- Quote page metadata could not be added via a direct `metadata` export because the page is a client component ("use client"). Resolved by adding **src/app/quote/layout.tsx** as a server-component route-segment layout that exports metadata and renders BreadcrumbList JSON-LD around the client component. This addresses Top Issue #1 from Round 1 without converting the form to a server component.
- `npx tsc --noEmit` passes with no errors after all changes.
- No OG image asset was added — the codebase has no logo.png/og-image in public/ at the time of repair. Recommend adding /public/og-image.png (1200x630) and referencing it from layout.tsx openGraph.images in a future round.

## Round 3 — repaired 2026-05-22

Verification + the one remaining schema-adjacent polish item from Round 1: OG image reference.

### Tier 2 polish results

| Item | Status | Details |
|---|---|---|
| FAQPage JSON-LD on /faq | ⏭️ already shipped | Prior round added `faqSchema` (22 questions, mainEntity) + `breadcrumbSchema` to src/app/faq/page.tsx. Verified via grep. |
| BreadcrumbList JSON-LD on /blog and /blog/[slug] | ⏭️ already shipped | Both routes have BreadcrumbList JSON-LD blocks (Home > Blog, and Home > Blog > Post Title). |
| BlogPosting JSON-LD on /blog/[slug] | ⏭️ already shipped | Full BlogPosting schema with `headline`, `author` (Person or Organization fallback), `datePublished`, `dateModified`, `image`, `publisher` (InsuranceAgency), and `mainEntityOfPage`. |
| OG image reference | ✅ applied | Added `images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: ... }]` to both `openGraph` and `twitter` in src/app/layout.tsx root metadata. **Asset itself (1200×630 JPEG) still needs to be produced and dropped in /public/ — out of scope per Round 2 instructions.** |

### Files changed in Round 3

- `src/app/layout.tsx` — added `openGraph.images` + `twitter.images` referencing `/og-default.jpg`

### Round 4 deferrals

- Produce the actual `/public/og-default.jpg` (1200×630) asset
- Add real images to /public/ for hero, coverage cards, blog post hero images — site currently uses CSS gradients and decorative Lucide icons only
- Per-page OG image overrides for blog posts (use `post.image` field from frontmatter)

