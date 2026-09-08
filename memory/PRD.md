# PRD — Nagpal's House of Beauty (Salon Furniture Landing Page)

## Original Problem Statement
User provided a static HTML landing page for "Nagpal's House of Beauty", a Delhi-based salon furniture supplier (styling chairs, shampoo/wash units, workstations, trolleys, mirrors; pan-India delivery, retail + bulk). User then requested an Awwwards-level rebuild inspired by salonfurniture.in: bolder-but-sleeker typography, big furniture photography hero, Explore Now button scrolling to an all-categories section, partners logo wall, rotating category-product selector, warm brown-toned furniture gallery, bigger Instagram section, brand name in CAPS, WhatsApp-based enquiries, placeholder contact numbers for now.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (scroll reveals, masked headline, AnimatePresence) + lenis (smooth momentum scroll). Single-page site, section anchors.
- Backend: FastAPI template retained (health endpoint only; no backend features requested).
- Content: centralized in `/app/frontend/src/data/content.js` (contact info, categories, spotlights, products, partners, gallery, Instagram grid) — single edit point for the user.
- Design system: `/app/design_guidelines.json` — obsidian/deep forest green + ivory + antique brass, Syne display + Karla body.

## User Personas
- Salon owner furnishing a new salon (bulk buyer) — wants categories, specs, WhatsApp quote fast.
- Stylist upgrading one or two pieces (retail buyer).
- Interior designer sourcing furniture for a client salon.

## Core Requirements (static)
- Home/hero with big furniture imagery + Explore Now → #all-categories
- Categories, Products, About, Contact sections; products dropdown in nav
- Partners wall, rotating category selector, brown-toned gallery, large Instagram block
- All enquiries via WhatsApp deep links (wa.me with pre-filled text)
- Brand name always in CAPS

## Implemented (2026-07-08)
- Kinetic hero: full-bleed barbershop photo with scroll parallax + zoom, masked line-by-line headline reveal, Explore Now (Lenis smooth scroll to categories), floating scroll cue
- Slow editorial brass-outline marquee
- Sticky glassmorphism header: CAPS brand, products dropdown, mobile menu, Enquire Now CTA
- Partners logo wall (8 sample salon-chain names — PLACEHOLDER)
- All-categories bento grid (5 categories, real salon photography)
- Auto-rotating category-product selector (4.5s rotation, pause on hover, tab click, per-product WhatsApp enquiry)
- Best sellers grid (6 products, WhatsApp enquiry each)
- Numbered manifesto About chapters (01 Delhi Atelier / 02 Twelve-Hour Days / 03 Pan-India White-Glove)
- Warm brown-toned editorial gallery mosaic
- Oversized Instagram section with 6-image grid + follow button
- Contact band with contact list + WhatsApp CTA; floating WhatsApp bubble; footer
- All imagery verified live; backwash/vanity photos validated for relevance

## Placeholder Data (needs real values from user)
- Phone / WhatsApp: +91 98765 43210 (sample) — edit `WHATSAPP_NUMBER` and `CONTACT` in content.js
- Email: hello@nagpalshouseofbeauty.in (sample)
- Partner names: VLCC, Looks Salon, Affinity, Toni & Guy India, BBlunt, Jawed Habib, Geetanjali Salon, Naturals (SAMPLE — swap for real clients)
- No testimonials section (user said they'd share real ones — not yet provided)

## Backlog
- P0: Real contact numbers, real partner/client names, real testimonials
- P1: Per-category product listing pages with real catalog + prices
- P1: Real Instagram feed embed or real post images
- P2: Enquiry form saving leads to MongoDB (in addition to WhatsApp)
- P2: Multi-language (Hindi) toggle; SEO meta/OG tags; Google Maps showroom embed

## Next Tasks
1. Collect real phone/WhatsApp/email from user and update content.js
2. Replace sample partner names with actual clients served
3. Add testimonials section once user shares reviews
