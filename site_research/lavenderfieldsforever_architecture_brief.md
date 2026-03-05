# Lavender Fields Forever — Site Architecture & Design Brief

**URL:** https://www.lavenderfieldsforever.org/
**Platform:** Shopify (Dawn theme variant)
**Business:** Lavender Fields Forever LLC — family-owned organic lavender farm & distillery
**Location:** 1807 W HWY 246 Buellton, CA 93427 (Central Coast, California)
**Wholesale contact:** ccouto@eldorado.group
**Season:** Bloom season June 30 – August 30
**Lavender variety:** Lavandula x intermedia 'Grosso' (French × broadleaf cross)

---

## PART I — SITE ARCHITECTURE

---

### Site Map (Full Structure)

```
lavenderfieldsforever.org/
│
├── /                                          → Homepage (Visit the Farm)
│
├── SHOP (Shopify):
├── /collections/all                           → All Products (11 products)
├── /collections/organic-lavender-flower       → Organic Lavender Flower category
├── /collections/spa-series                    → Spa Series / All Products view
├── /products/{slug}                           → Individual product pages
├── /cart                                      → Shopping cart
├── /customer_authentication/redirect          → Log in / customer account
│
├── STATIC PAGES:
├── /pages/contact                             → Hours & Location + Contact form
├── /pages/upcoming-events-workshops           → Upcoming Events & Workshops
└── /pages/lavender-wholesale                  → Wholesale Lavender

External integrations:
├── Eventbrite — event booking (The Violet Hour sound bath)
└── Klaviyo — reviews carousel on homepage
```

---

### Global Layout (all pages)

#### Announcement Bar
| Element | Content |
|---|---|
| Location text | "Located: 1807 W HWY 246 Buellton, CA 93427" |
| Style | Full-width, static (no CTA link) |

#### Header / Navigation
| Element | Description |
|---|---|
| Logo (text) | "Lavender Fields Forever LLC" — links to homepage |
| Search icon | Opens inline search modal |
| Log in | /customer_authentication/redirect |
| Cart icon + count | /cart — opens cart drawer on add |

#### Primary Navigation (flat — no dropdowns)
| Item | URL | Purpose |
|---|---|---|
| Visit the Farm | / | Homepage |
| Shop | /collections/all | All products |
| Wholesale Lavender | /pages/lavender-wholesale | B2B wholesale |
| Hours & Location | /pages/contact | Farm stand hours + contact form |
| Upcoming Events and Workshops | /pages/upcoming-events-workshops | Events calendar |

#### Footer (minimal — single column)
| Element | Content |
|---|---|
| Brand name | "Lavender Fields Forever LLC" |
| Tagline | "Come join us, embrace sustainability, and discover the magic of lavender in Buellton." |
| Address | 1807 W Hwy 246, Buellton CA 93427 |
| Payment method logos | Shopify standard |
| Copyright | © 2026, Lavender Fields Forever LLC |
| Platform credit | Powered by Shopify |

> Note: No social media links visible in footer. No newsletter form in footer. No multi-column link structure.

---

### Pages — Detailed Description

---

#### 1. Homepage / Visit the Farm (`/`)
**Title:** Lavender Fields Forever LLC

| Block | Type | Content |
|---|---|---|
| Hero (full-bleed image) | Image + overlay text | H2 "Lavender Fields Forever" · H2 "Central Coast's Premier Lavender Destination" |
| Hero CTA buttons | 2 buttons | "Shop" (secondary) + unnamed primary action |
| "Farm Stand & Shop Now Open" | H2 + text | Season dates: bloom season June 30–Aug 30; farm stand + online year-round |
| "Our Story" | H2 + text | Family farm vision: cultivate beauty, promote sustainability, organic farming, community |
| "Journey Through Lavender Paradise" | H2 + text | Location, Field Pass mention, Buellton CA |
| "From Field to Fragrance" | H2 + text + CTA | Distillation process (Grosso lavender → essential oil); "Shop Products" button |
| "Our Lavender" | H2 + text | Lavandula x intermedia 'Grosso' — richly fragrant, long stems, French×broadleaf cross |
| Featured Products | H2 + 4-product grid | 4 products, "View all" CTA |
| Reviews carousel | Klaviyo widget | 5 verified buyer reviews, swiper navigation |
| Pass Information | H2 + 3 pass cards | Field Pass $5, Photo Pass $50/hr, Private Photo Pass $85 |
| "Visit the Farm" CTA | H2 + "Contact" button | → /pages/contact |
| Footer brand block | H2 + address | "Lavender Fields Forever LLC" + location |

#### Homepage Clickable Elements
| Element | Action |
|---|---|
| "Shop" (hero CTA) | → /collections/all |
| "Shop Products" | → /collections/all |
| Product cards | → /products/{slug} |
| "View all" | → /collections/all |
| Review carousel prev/next | Slide reviews |
| "Contact" button | → /pages/contact |

---

#### 2. Hours & Location (`/pages/contact`)
**Title:** Hours & Location – Lavender Fields Forever LLC

| Block | Type | Content |
|---|---|---|
| Hero/banner | Image slider | "Come Visit Us!" with "Shop year-round" slide |
| "SHOP" CTA | Button | → /collections/{category} |
| H1 "Hours & Location" | Heading | |
| Address | Text | 1807 W HWY 246 Buellton, CA 93427 |
| Farm Stand Hours | Text table | Thu 12–3pm; Fri/Sat/Sun 10am–4pm; closed Mon/Tue/Wed |
| H2 "Contact" | Section | |
| Contact form | Shopify form | Name, Email*, Phone number, Comment, Send |

#### Farm Stand Hours
| Day | Hours |
|---|---|
| Thursday | 12:00pm – 3:00pm |
| Friday | 10:00am – 4:00pm |
| Saturday | 10:00am – 4:00pm |
| Sunday | 10:00am – 4:00pm |
| Monday – Wednesday | Closed |

---

#### 3. Upcoming Events & Workshops (`/pages/upcoming-events-workshops`)
**Title:** Upcoming Events & Workshops – Lavender Fields Forever LLC

| Block | Type | Content |
|---|---|---|
| Hero/banner | Image slider | "See What's Happening This Season!" + "Shop year-round" slide |
| H1 "Upcoming Events & Workshops" | Heading | |
| Event listing | Text + image | Monthly events listed in plain text |
| "Book My Session Now!" | External CTA button | → Eventbrite booking page |
| Contact form | Shopify form | Name, Email*, Phone number, Comment, Send |

#### Events Observed (2025 season)
| Date | Event | Details |
|---|---|---|
| July 19th, 4–5pm | The Violet Hour: A Lavender Sound Immersion | Meditative sound bath in lavender fields; free gift bag with lavender goodies; book via Eventbrite |

> Pattern: Events listed as plain text by month, each with Eventbrite "Book My Session Now!" CTA. Contact form at bottom for enquiries.

---

#### 4. Wholesale Lavender (`/pages/lavender-wholesale`)
**Title:** Lavender Wholesale – Lavender Fields Forever LLC

| Block | Type | Content |
|---|---|---|
| H2 "Wholesale Bulk Lavender" | Section heading | Intro: farm-grown premium lavender in Buellton |
| H2 "Wholesale at Lavender Fields Forever" | Section | Overview of wholesale program |
| H2 "Why Choose Lavender Fields Forever?" | Section | 3 selling points (see below) |
| H2 "Wholesale Offerings" | Section | 3 product categories |
| H3 "Dried & Fresh Bundles" | Sub-section | Description |
| H3 "Bulk Sachets" | Sub-section | Description |
| H3 "Lavender Oil" | Sub-section | Description |
| H2 "How to Order" | Section | Email + form |
| H2 "Wholesale Contact Form" | Form | Name, Email*, Phone, Comment, Send |

#### Wholesale Value Props
| Point | Details |
|---|---|
| Farm-Fresh Quality | Grown, harvested, and processed on-farm |
| Sustainable Practices | Environmentally friendly commitment |
| Locally Sourced | California Central Coast |

#### Wholesale Products
| Category | Description |
|---|---|
| Dried & Fresh Bundles | Harvested lavender bundles |
| Bulk Sachets | Dried lavender bud sachets for boutiques/gift shops |
| Lavender Oil | Pure essential oil for aromatherapy/skincare |

---

#### 5. Shop — All Products (`/collections/all`)
**Title:** Products – Lavender Fields Forever LLC

| Block | Type | Content |
|---|---|---|
| H2 "From Our Farm To Your Home" | Banner heading | "Shop organic, handcrafted products made on our farm" |
| "Shop Collections" CTA | Button | → collections view |
| "Wholesale Contact" CTA | Button | → /pages/lavender-wholesale |
| H2 "Organic Lavender Essentials" | Sub-heading | "Discover artisanal treasures at our online store, available year-round" |
| Filter bar | Availability + Price | In stock / Out of stock filter |
| Sort dropdown | 8 options | Featured, Best selling, A-Z, Z-A, low-high, high-low, old-new, new-old |
| Product grid | 11 product cards | H3 title + price + availability badge |
| Collections section | H2 + 2 collection tiles | Organic Lavender Flower, All Products (Spa Series) |

#### Full Product Catalog (11 products)
| Product | Price | Status |
|---|---|---|
| 1 oz Bottle of Pure Lavender Oil | $40.00 | In stock |
| 1 Pint (16 fl oz) Pure Essential Lavender Oil | $200.00 | Sold out |
| Dry Lavender Bundle | $15.00 | Sold out |
| Fresh Lavender Bundle | $15.00 | In stock |
| Handmade Soap | $15.00 | In stock |
| Lavender Honey | $12.00 | Sold out |
| Organic Handmade Lavender Bath Bomb | $8.00 | In stock |
| Organic Handmade Lavender Candles | from $17.00 | In stock |
| Organic Handmade Lavender Sachet | $6.00 | In stock |
| Organic Lavender Hydrosol | $15.00 | In stock |
| Pure Organic Lavender Oil - 5ml | $12.00 | In stock |

#### Pass Pricing (purchased at farm stand)
| Pass | Price | Details |
|---|---|---|
| Field Pass | $5 | Walk through fields, learn about lavender variety |
| Photo Pass 1 Hour | $50 | Staged/professional photos, no exclusive use |
| Private Photo Pass | $85 | 1-hour exclusive field rental, reservation required, leashed pets allowed |

---

### User Flow Architecture

```
Homepage (/)
    │
    ├─[Shop / Shop Products]────────→ /collections/all
    │                                      │
    │                                  [Product card] → /products/{slug}
    │                                      │
    │                                  [Add to cart] → cart drawer → /cart → checkout
    │
    ├─[Wholesale Lavender]───────────→ /pages/lavender-wholesale
    │                                      └─[Wholesale Contact Form] → email submission
    │
    ├─[Hours & Location]─────────────→ /pages/contact
    │                                      └─[Contact Form] → email submission
    │
    ├─[Upcoming Events]──────────────→ /pages/upcoming-events-workshops
    │                                      └─[Book My Session Now!] → Eventbrite (external)
    │
    └─[Contact button] (homepage)────→ /pages/contact

All pages footer:
    └─ Brand name / Address / Payment logos / Copyright
```

---

---

## PART II — TECHNICAL DESIGN BRIEF

---

### Colour System

The site uses a **near-monochromatic black/white/neutral palette** — no brand-specific colour CSS variables defined. Identity is carried entirely by photography (lavender purple) rather than UI colour.

**Extracted colour roles:**

| Role | Value | Usage |
|---|---|---|
| Body text | `rgba(18, 18, 18, 0.75)` | All body copy, nav |
| Heading text | `rgb(18, 18, 18)` | H1, H2 (full opacity) |
| Background | `#ffffff` | All pages |
| Link / interactive | `rgb(18, 18, 18)` | Links inherit body colour |
| Buttons (border) | `rgba(18, 18, 18, 1.0)` | Outlined button border |
| Focus outline | `rgba(18,18,18, 0.5)` | Accessibility focus ring |
| Reviews bg | `#e9e9eb` | Klaviyo review card background |
| Shadow | `rgba(18,18,18, 0.0)` | Disabled — no shadows |

**Colour principle:** Zero brand colour in UI. The lavender purple exists only in photography. The contrast system is pure black/white/opacity. This creates maximum visual focus on field imagery — the photo IS the colour palette.

---

### Typography

**Single typeface — `Assistant` for everything:**

| Role | Family | Weight | Size | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| H1 | Assistant | 400 | 40px | 0px (!—CSS issue) | 0.6px |
| H2 | Assistant | 400 | 13px | 19.5px | 0.4px |
| Body | Assistant | 400 | 16px | 28.8px (1.8) | 0.6px |
| Bold | Assistant | 700 | 16px | — | — |
| Nav | Assistant | 400 | 16px | 28.8px | 0.6px |

> `Assistant` is an open-source humanist sans-serif (Google Fonts). Supports Hebrew and Latin. Clean, neutral, minimal personality — chosen to not compete with the photography.

**Typography principles:**
- Single typeface, two weights (400/700). No display or editorial font.
- Very generous letter-spacing (0.6px) — adds airiness to body text.
- H2 rendered at 13px — smaller than body — used as eyebrow/label text, not traditional section headings.
- Line-height 1.8 on body — unusually open, reinforcing the "breathe" feeling of the farm brand.
- No italic usage noted.

---

### Layout

| Parameter | Value |
|---|---|
| Max page width | `120rem` (1200px) |
| Page width margin | `0rem` |
| Section spacing desktop | `0px` — sections touch each other (full bleed transitions) |
| Section spacing mobile | `0px` |
| Grid desktop gap | 8px vertical · 8px horizontal |
| Grid mobile gap | 4px vertical · 4px horizontal |
| Product card radius | 0px (square corners) |
| Button radius | 0px (square corners) |
| Badge radius | 4rem (pill badges) |
| Input radius | 0px |

**Layout principles:**
- Aggressive full-bleed approach: `--spacing-sections-desktop: 0px` — sections are zero-gapped, creating seamless image-to-image transitions.
- Square corners everywhere (buttons, cards, inputs) — creates a raw, honest, craft aesthetic. No softness.
- Product cards: no border, no shadow, no padding around image — image bleeds to card edge.

---

### Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | Transparent over hero, or white on inner pages |
| Mobile | Hamburger drawer |
| Cart | Slide-in cart drawer on add-to-cart action |
| Search | Inline modal opens from search icon |
| No dropdowns | Flat navigation — all 5 items visible at top level |

---

### Interactive Elements & Buttons

**Button variants:**

| Variant | CSS Class | Style | Usage |
|---|---|---|---|
| Primary | `button--primary` | Solid fill, black bg, white text | "Shop Products", "Check out", "Contact" |
| Secondary | `button--secondary` | Outlined, black border | "Shop", "View cart" |
| Text link | `link button-label` | Underline only | "Continue shopping" |
| External CTA | Standard button | Applied to Eventbrite links | "Book My Session Now!" |

**Animation system (CSS vars):**

| Variable | Value | Usage |
|---|---|---|
| `--duration-short` | 0.1s | Quick microinteractions |
| `--duration-default` | 0.2s | Standard hover/focus transitions |
| `--duration-announcement-bar` | 0.25s | Announcement bar transitions |
| `--duration-medium` | 0.3s | Medium transitions |
| `--duration-long` | 0.5s | Longer transitions |
| `--duration-extra-long` | 0.6s | Slide-in animations |
| `--duration-extra-longer` | 0.75s | Extended reveals |
| `--duration-extended` | 3s | Slow ambient animations |
| `--ease-out-slow` | `cubic-bezier(0, 0, .3, 1)` | Primary easing curve |
| `--animation-slide-in` | `slideIn 0.6s ease-out-slow forwards` | Scroll reveal |
| `--animation-fade-in` | `fadeIn 0.6s ease-out-slow` | Fade reveal |

> Scroll-triggered animations: `.scroll-trigger.animate--slide-in` class applied to CTA buttons — elements slide in from below when entering viewport.

---

### Page Section Structure (Scroll Narrative)

| Section | Visual | Mood |
|---|---|---|
| Announcement bar | Neutral dark text on white | Utilitarian, location-first |
| Hero | Full-bleed field photography, white overlay text, minimal | Aspirational, immersive |
| "Farm Stand & Shop Now Open" | Text + season dates | Transactional |
| "Our Story" | Light background, text-heavy | Authentic, values-driven |
| "Journey Through Lavender" | Location + field pass info | Invitation |
| "From Field to Fragrance" | Process + distillation focus | Educational |
| "Our Lavender" | Botanical description | Expertise |
| Featured Products | White card grid, no decoration | Commerce |
| Reviews | Light gray review cards, carousel | Social proof |
| Pass Information | 3-column card layout, pricing | Decision |
| Visit the Farm CTA | Dark/photo background + button | Final conversion |
| Footer | White, minimal text | Administrative |

**Scroll principle:** No progressive colour deepening. The page alternates between photography sections and white text sections — rhythm of immersion/breath. The purchase decision (passes + products) sits in the middle, framed by experience content above and the farm invitation below.

---

### Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero photography | Full-bleed field shots: rows of Grosso lavender, strong purple saturation |
| Tone | Warm, California light — brighter and more saturated than UK lavender sites |
| Product photography | Clean backgrounds or in-situ field context |
| Carousel banners | Multiple image slides on inner pages (contact, events) |
| No illustration | Zero graphic elements, patterns, or decorative flourishes |
| Video section | Deferred-load video embed on homepage (poster + play button pattern) |

---

### E-Commerce Component Patterns (Shopify)

| Component | Description |
|---|---|
| Product card | Zero-radius, zero-border, image flush to edge; title (H3), price, sold-out badge |
| Cart drawer | Slides in from right; "View cart" + "Check out" buttons |
| Filter bar | Availability (in stock / out of stock) + price range |
| Sort | 8 sort options dropdown |
| Reviews | Klaviyo Reviews widget — carousel with swiper, star ratings, verified buyer badge |
| Variant pills | Radius 40px (pill shape) — only UI element with rounded corners |
| Event booking | Eventbrite external integration via link/button |

---

### Key Brand Signals

| Signal | Implementation |
|---|---|
| Organic | Word "organic" in 5 of 11 product names; sustainability mentioned in story |
| Family-owned | "Our family-owned farm" — first words of the story section |
| California identity | "Central Coast's Premier Lavender Destination"; Buellton, CA repeated throughout |
| Specific variety | Lavandula x intermedia 'Grosso' named explicitly — signals expertise |
| Distillation | Own distillery → own oil → own products — vertical integration as trust signal |
| Community events | Sound baths, workshops — positions farm as experiential destination beyond flowers |
| Photography access | Tiered photo pass system ($5/$50/$85) — positions farm as Instagrammable destination |
| Wholesale | Separate wholesale page with B2B contact — signals commercial scale |

---

### Comparative Notes (vs. cotswoldlavender.co.uk reference)

| Dimension | cotswoldlavender.co.uk | lavenderfieldsforever.org |
|---|---|---|
| Scale | 45 acres, 250,000 plants, 25 years | Smaller, newer, family startup feel |
| Platform | Shopify (custom theme, bespoke dev) | Shopify (Dawn theme, lighter customisation) |
| Colour system | 9-step purple palette in CSS vars | No brand colour vars — black/white only |
| Typography | ivymode (display) + Figtree (UI) | Assistant only — one typeface |
| Heading aesthetic | Elegant serif display font — premium feel | Minimal sans — democratic, accessible |
| Navigation | 3 dropdown menus, rich structure | 5 flat items, no dropdowns |
| Product range | 69 products, 9 categories | 11 products, 2 categories |
| Events | Theatre, seasonal programming | Sound baths, Eventbrite-integrated |
| Passes | Tickets purchased on arrival | Tiered photo pass system ($5/$50/$85) |
| Social media | Facebook + Instagram in header | No social links visible |
| Wholesale | Not prominently featured | Dedicated nav item + full page |
| Footer | 4-column structured footer | Minimal single-column |
| Section spacing | Standard gap between sections | 0px gap — full bleed aggressive |
| Card corners | Default Shopify rounded | Square (0px radius) throughout |
| Reviews | Not observed on homepage | Klaviyo carousel with verified buyers |
