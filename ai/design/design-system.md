# adventurebikeinsurance.com — Design System

**Brand:** Contractors Choice Agency (CCA) — adventure & dual-sport motorcycle insurance.
**Mood:** Rugged-premium adventure-touring meets clean, trustworthy insurance brand. Light, bright, airy, corporate — never dark.

## Palette (exact hexes)
| Token | Hex | Use |
|-------|-----|-----|
| Primary (Trail Rust) | `#C2410C` | brand, buttons, headings accents |
| Primary Dark | `#9A3412` | hovers, deep accents |
| Secondary (Ember) | `#F97316` | gradient mid, highlights |
| Accent | `#EA580C` | links, focus |
| Amber (Summit) | `#F59E0B` | gradient end, badges |
| Ink | `#1C1917` | headings (stone-900) |
| Body | `#44403C` | paragraph (stone-700) |
| Muted fg | `#78716C` | captions (stone-500) |
| Background | `#FFFFFF` | base |
| Surface | `#FAFAF9` | sections (stone-50) |
| Surface elevated | `#F5F5F4` | cards (stone-100) |
| Border | `rgba(194,65,12,0.15)` | hairlines |

Warm stone neutrals + burnt-orange brand = the "dusty trail at golden hour" feel, distinct from the blue corporate look of every other CCA niche site.

## Typography
- **Display / headings:** Archivo (700–900) — sporty, geometric, confident.
- **Body / UI:** Inter — neutral, highly legible.
- Scale: hero `text-5xl/6xl`, section `text-3xl/4xl`, card title `text-lg/xl`, body `text-base`.

## Motif / shape language
- **Topographic contour lines** (trail-map aesthetic) as subtle section backgrounds (`.topo-pattern`).
- Rounded-2xl/3xl cards, soft warm shadows.
- Floating gradient orbs in burnt-orange/amber on the animated background.
- Photography: real adventure-touring riders, loaded ADV bikes, mountain gravel roads, warm daylight.

## Motion
- `motion` (framer-motion) scroll-reveal (fade-up, stagger) on every section.
- Sticky responsive navbar (transparent → frosted white on scroll).
- Hover lift on cards (`.card-lift`), animated gradient hero orbs.
- Respects `prefers-reduced-motion`.

## Why it's unique
Every other CCA site is blue/charcoal corporate. This one is warm stone + trail-rust orange with a topographic motif and adventure-moto photography — a deliberate, niche-true identity no other site in the batch reuses.
