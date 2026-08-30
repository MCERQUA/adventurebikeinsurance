# Research Summary + Quality Gates

## Phase 3 — research quality gate
| Area | Score | Note |
|---|---|---|
| Topic research | 9 | All three machines sourced to manufacturer pages where reachable; every number traceable. |
| Keyword research | 8 | Intent-led. No new paid DataForSEO call — the commercial terms are already priced by the site's five existing posts; the three model names are branded/navigational. |
| Authority links | 9 | 7 links, every one HTTP-verified 200 from this container. One candidate rejected as unverifiable. |
| FAQ research | 9 | 10 questions, each answerable from verified data rather than generic filler. |
**PASS** (8+ all areas).

## Phase 8 — final gate
| Gate | Result |
|---|---|
| `npm ci` | rc=0 (lockfile fix 6434a60 present on pulled main) |
| `npm run build` (NODE_ENV=production) | rc=0, 28/28 static pages, route exported |
| Components | title 54 chars, meta desc 214, 9 H2, intro >40w, 3,551 words, CTA present, author + date + cover |
| Internal links | 11, every target confirmed present in `out/` |
| Outbound authority | 7 outbound, all 200; 4 commercial carry `rel="nofollow noopener"` |
| Images | 5 of 5 embedded (1 cover + 4 body figures), all present in `out/images/` |
| Schema | BlogPosting + BreadcrumbList (build-time) + FAQPage x10 (in-body, confirmed in exported HTML) |
| Photo integrity | see article-design/visual-plan.md — every caption checked against the pixels |
**PASS.**

## Standing caveat carried forward
`cfmotousa.com` is Cloudflare-challenge blocked from this container on every path. The residential-pool
escape hatch had no live node at the time of writing. Ibex 800 E specs are therefore cited to a verified
third-party spec sheet. If a residential node comes back up, re-verifying against CFMOTO's own page and
swapping the citation is a five-minute follow-up — the numbers are not expected to move.
