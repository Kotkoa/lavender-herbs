# Cotswold Lavender — Site Architecture & Design Brief

**URL:** https://www.cotswoldlavender.co.uk/
**Platform:** Shopify (custom theme, developed by Chris Dyer — cdyer.co.uk)
**Business:** Cotswold Lavender, Hill Barn Farm, Snowshill, Broadway, Worcestershire WR12 7JY
**Contact:** 01386 854821 · info@cotswoldlavender.co.uk
**Company:** No. 4602157 · VAT: 821 296536
**Social:** Facebook · Instagram
**Season:** Fields open 17 June – 5 August annually

---

## PART I — SITE ARCHITECTURE

---

### Site Map (Full Structure)

```
cotswoldlavender.co.uk/
│
├── /                                    → Homepage
│
├── SHOP (Shopify collections):
├── /collections/all                     → All Products (69 products)
├── /collections/frontpage               → Bestsellers
├── /collections/bath-shower             → Bath & Shower
├── /collections/culinary                → Culinary
├── /collections/oils-grains             → Essential Oils & Grains
├── /collections/gifts                   → Gifts
├── /collections/home                    → Home
├── /collections/skincare                → Skincare
├── /collections/wellbeing               → Wellbeing
├── /products/{slug}                     → Individual product pages
├── /products/cotswold-lavender-online-gift-card → Gift Card
├── /cart                                → Shopping basket
├── /account/login                       → Customer account
│
├── VISIT SECTION (static pages):
├── /pages/visit                         → Visit Us (hub)
├── /pages/lavender-fields-meadows       → Lavender Fields
├── /pages/wildflower-meadows            → Wildflower Meadows
├── /pages/beechwood-trail               → Beechwood Trail
├── /pages/distillery                    → Distillery
├── /pages/the-cabin                     → The Cabin
├── /pages/getting-here                  → Getting Here & Local Info
├── /pages/faqs                          → FAQs
│
├── ABOUT SECTION:
├── /pages/about-us                      → About Us
├── /pages/environmental                 → Our Environment
├── /pages/trade-customers               → Become a Stockist
│
├── BLOG:
├── /blogs/news                          → Blog & Latest Updates
│
├── POLICIES (Shopify standard):
├── /policies/privacy-policy             → Privacy Policy
├── /policies/shipping-policy            → Delivery Information
├── /policies/refund-policy              → Returns Information
├── /policies/terms-of-service           → Terms of Service
└── /pages/photo-policy                  → Photography Policy

External:
├── https://www.facebook.com/pages/Cotswold-Lavender/325319570821987
├── https://www.instagram.com/cotswoldlavender/
└── https://www.britsusa.com/shop/CotswoldLavender/2   → US stockist
```

---

### Global Layout (all pages)

#### Announcement Bar (top of every page)
| Element | Content |
|---|---|
| Seasonal CTA | "Fields Open from 17th June to 5th August 2026" → links to /pages/visit |
| Style | Full-width banner, accent colour background |

#### Header / Navigation
| Element | Description |
|---|---|
| Logo "Cotswold Lavender" | Text logo, links to homepage |
| Search icon | Opens search modal |
| Log in | /account/login |
| Basket icon + count | /cart |
| Facebook icon | External |
| Instagram icon | External |

#### Primary Navigation (dropdown menus)
| Item | Submenu | URLs |
|---|---|---|
| Home | — | / |
| Our Products | Bestsellers, Bath & Shower, Culinary, Essential Oils & Grains, Gifts, Gift Card, Home, Skincare, Wellbeing | /collections/* |
| Visit | Visit Us, Lavender Fields, Wildflower Meadows, Beechwood Trail, Distillery, The Cabin, Getting Here & Local info, FAQs | /pages/* |
| About Us | About Us, Our Environment, Become a Stockist | /pages/* |
| Blog | — | /blogs/news |

#### Footer (four-column layout)
| Column | Links |
|---|---|
| Shop | Bath & Shower, Skincare, Wellbeing, Home, Culinary, Gifts |
| Visit | Visiting Us, Getting Here, Wildflower Meadows, Beechwood Trail, Lavender Fields, Distillery, The Cabin, Our Farm |
| Information | Delivery Info, Returns Info, Blog & Latest Updates, FAQs, Privacy Policy, Photography Policy, Become a Stockist, Terms of Service |
| Contact | 01386 854821 · info@cotswoldlavender.co.uk · Hill Barn Farm, Snowshill, Broadway, WR12 7JY |
| Newsletter | Email field + subscribe (inline form) |
| Social | Facebook, Instagram icons |
| Legal | Company No. 4602157 · VAT 821 296536 · Payment method logos |
| Copyright | © 2026 Copyright Cotswold Lavender · Developed by Chris Dyer |

---

### Pages — Detailed Description

---

#### 1. Homepage (`/`)
**Title:** Cotswold Lavender - English Lavender Products & Essential Oils

| Block | Type | Content |
|---|---|---|
| Hero (full-bleed image) | Full-width image + overlay text | H1 "Welcome to Cotswold Lavender" |
| Seasonal update | H2 text block | Status of fields, upcoming events (Rain or Shine Theatre), dates |
| "Our Products" section | H2 + text + CTA | Description of lavender products; links to /collections |
| "Visit Us" section | H2 + text + Google Review quotes | Fields status, visitor experience description, 3 curated reviews |
| Farm overview | Text block | 45 acres, 25 years growing, 35 varieties, ~250,000 plants |
| Bestsellers grid | H2 + 4-product carousel | 4 featured products with price, "View all" CTA |
| "Our Family Farm" | H2 + text + "Find out more" | 3-generation farming family, 60 years, lavender since 1999 |
| Awards section | H2 + text | North Cotswolds Best Visitor Attraction 2024 |
| "Stockist in USA" | H2 + button | Link to britsusa.com |
| Instagram feed | Embedded grid | @cotswoldlavender posts (via instafeed) |
| Newsletter | H4 + email field | "Subscribe to Our Newsletter / Latest news, products and updates" |

#### Homepage Clickable Elements
| Element | Action |
|---|---|
| Announcement bar | → /pages/visit |
| "Our Products" section | → /collections |
| "Visit Us" section | → /pages/visit |
| "More information" link | → /pages/visit |
| "Mail orders" link | → /collections/all |
| "View all" (bestsellers) | → /collections/frontpage |
| Product cards | → /products/{slug} |
| "Find out more" (farm) | → /pages/about-us |
| "Brits USA website" button | → external britsusa.com |
| Carousel prev/next buttons | Slide carousel |
| Instagram posts | Open Instagram lightbox |

---

#### 2. Lavender Fields (`/pages/lavender-fields-meadows`)
**Title:** Lavender Fields – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| Hero (full-bleed) | Image + H1 | "Lavender Fields" |
| Farmer quote | Pull quote | Charlie Byrd quote about planting first lavender in 1999 |
| Main content | Rich text | History: 1999 first plants → 45 acres, commercial farm, display field ~20 acres |
| Experience description | Text | Walk, relax, picnic, selfies, "one of the most Instagrammable places in the Cotswolds" |
| Distillery cross-link | Text | Visit Distillery, Wildflower Meadows, Woodland Trail, Lavender Cabin |
| "Opening dates and times" | CTA link | → /pages/visit |
| Photo gallery sections | Image blocks | Multiple full-width/split field photos (H2 = empty, content is visual) |
| Seasonal announcement | Footer text | Fields reopen 17th June 2026 |

---

#### 3. Visit Us (`/pages/visit`)
**Title:** Visit and Explore Our Lavender Fields – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| H1 "Visit Us" | Heading | |
| Opening announcement | H2 + text | Dates 2026, ticket policy (no advance booking except groups 15+) |
| Pricing table | Grid/table | 3-tier: Adults, Children (5-15), Under 5 |
| Activity sections (×7) | H2 + text + image + "Find out more" | Lavender Fields, Wildflower Meadows, Beechwood Trail, Picnic, Great Views, The Cabin, Dog Friendly |
| Map | Embedded map | Farm location with zoom capability |
| Seasonal footer | Text | Reopen date |

#### Entry Pricing Table (2026)
| Ticket | Peak (27 Jun – 5 Aug) | Off-peak (17–26 Jun) | Season Ticket |
|---|---|---|---|
| Adults | £7.75 | £5.75 | £19.40 |
| Children (5–15) | £3.50 | £3.00 | £8.75 |
| Under 5 | Free | Free | N/A |

**Notes:** Card payment only on site. No cash. No advance booking (except groups 15+, coaches).

---

#### 4. About Us (`/pages/about-us`)
**Title:** About Us – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| H2 "A Family Farm" | Heading (no H1) | |
| Family story | Rich text | 3 generations at Hill Barn Farm since 1994, childhood memories, Beechwood Trail |
| Farm crops | Text | Wheat, barley, beans, linseed alongside lavender |
| Lavender history | Text | Started 1999, from hundreds to 45 acres, 250,000 plants |

---

#### 5. FAQs (`/pages/faqs`)
**Title:** FAQs – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| H1 "FAQs" | Heading | |
| 14 question accordion | Collapsible items | All visitor-focused questions |

#### FAQ Questions
| # | Question |
|---|---|
| 1 | Do you open the farm to the public? |
| 2 | When is the best time to visit? |
| 3 | Can I bring my dog? |
| 4 | Do I need to book tickets in advance? |
| 5 | Can we buy your lavender products when you are closed? |
| 6 | Do you sell plants? |
| 7 | Do you have a shop and café? |
| 8 | Can I bring a picnic? |
| 9 | Is car parking available? |
| 10 | Are toilets available? |
| 11 | What else can we do at Cotswold Lavender? |
| 12 | Are you wheelchair/pushchair accessible? |
| 13 | Can we visit when you are harvesting and distilling? |
| 14 | Can I use my drone in the lavender fields? |

---

#### 6. Distillery (`/pages/distillery`)
**Title:** Distillery – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| H1 "Distillery" | Heading | |
| H2 "From Field to Bottle" | Section heading | |
| Process description | Text | Steam distillation (ancient Egyptian method), naturally softened rainwater, gravity separation, oils aged 1 year, ~1.5 tons of oil per year |
| Visitor info | Text | Watch distillation during last week of July |

---

#### 7. Getting Here & Local Info (`/pages/getting-here`)
**Title:** Getting Here – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| H1 "Getting Here & Local Info" | Heading | |
| H2 address | Hill Barn Farm, Snowshill, Broadway WR12 7JY | What3Words: yachting.swipes.highly |
| By car | H2 + directions | From Broadway centre: 1.5 miles up to Snowshill, past Snowshill Manor |
| By rail | H2 + info | Nearest station: Moreton in Marsh (6 miles), taxi recommended |
| Taxi booking | H2 + number | Broadway Taxis 07407 707044 |
| Local TIC | H2 + list | Broadway, Bourton-on-the-Water, Moreton-in-Marsh, Evesham |
| Local websites | H2 + links | broadway-cotswolds.co.uk, cotswolds.info, etc. |
| Local accommodation | H2 + links | Hotels, cottages, dog-friendly, camping options |

---

#### 8. Our Environment (`/pages/environmental`)
**Title:** Our Environment – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| H1 "Our Environment" | Heading | |
| H2 "In harmony with our environment" | Intro | Grass/clover between lavender rows — natural nitrogen, carbon capture |
| H2 "Hedges & Trees" | Section | 2200 trees + 1.5 miles of hedges planted in 5 years; Beech, Maple, Wild Cherry, Hornbeam |
| H2 "Wildlife Margins" | Section | Uncropped field corners; deer, hares, barn owls, butterflies |
| H2 "Zero Till & Cover Crops" | Section | No-plough farming, cover crops, soil health |

---

#### 9. Shop — All Products (`/collections/all`)
**Title:** Products – Cotswold Lavender

| Block | Type | Content |
|---|---|---|
| H1 "Collection: Products" | Heading | 69 products total |
| Filter bar | Availability + Price range | In stock (69) / Out of stock (0) |
| Sort options | Dropdown | Featured, Best selling, A-Z, Z-A, Price low-high, Price high-low, Date |
| Product grid | Cards with image, name, price | Paginated: 5 pages |

#### Product Sample (Bestsellers on homepage)
| Product | Price |
|---|---|
| Hand Wash & Handcream Gift Set | £28.85 |
| Lavender Reed Diffuser | £29.10 |
| Lavender Print Linen Wheat Warmer Wrap | £16.45 |
| Foam Bath & Body Lotion Gift Set | £24.10 |

---

### User Flow Architecture

```
Homepage (/)
    │
    ├─[Our Products]──────────────────→ /collections/all
    │    └─ or direct subcategory CTA → /collections/{category}
    │                                        │
    │                                  [Product card] → /products/{slug}
    │                                        │
    │                                  [Add to basket] → /cart → checkout
    │
    ├─[Visit Us]──────────────────────→ /pages/visit
    │    ├── Lavender Fields       → /pages/lavender-fields-meadows
    │    ├── Wildflower Meadows    → /pages/wildflower-meadows
    │    ├── Beechwood Trail       → /pages/beechwood-trail
    │    ├── Distillery            → /pages/distillery
    │    ├── The Cabin             → /pages/the-cabin
    │    ├── Getting Here          → /pages/getting-here
    │    └── FAQs                  → /pages/faqs
    │
    ├─[About Us]──────────────────────→ /pages/about-us
    │    ├── Our Environment       → /pages/environmental
    │    └── Become a Stockist     → /pages/trade-customers
    │
    ├─[Blog]──────────────────────────→ /blogs/news
    │
    └─[Basket]────────────────────────→ /cart → checkout

Footer (all pages):
    ├─ Shop category links → /collections/*
    ├─ Visit links → /pages/*
    ├─ Info links → /policies/* + /pages/*
    ├─ Facebook → external
    ├─ Instagram → external
    └─ Newsletter → inline subscribe form
```

---

---

## PART II — TECHNICAL DESIGN BRIEF

*Format inspired by tonal-style.md. Describes the visual identity system as implemented and as source material for reference.*

---

### Colour System

The site uses a **deep purple / grape monochromatic palette** with a warm-neutral grey support system. The primary visual motif is the lavender flower itself — purple as the single identity colour, expressed through 9 named steps from near-white to near-black.

**CSS custom property palette:**

| Step | Hex | Role |
|---|---|---|
| purple-50 | `#FBF8FC` | Page backgrounds, lightest tints |
| purple-100 | `#F9EDFD` | Card backgrounds, subtle sections |
| purple-150 | `#F5EDF7` | Hover states, dividers |
| purple-200 | `#E6CDEE` | Borders, muted fills |
| purple-500 | `#974BCE` | Mid accent, interactive highlights |
| purple-700 | `#6A2998` | Button text, primary links, active states |
| purple-800 | `#4E0767` | Dark accent, headings on light |
| purple-900 | `#362145` | Primary dark text, deepest heading colour, footer background |

**Grey support system:**

| Step | Hex | Role |
|---|---|---|
| grey-200 | `#DFD9E2` | Light borders, disabled states |
| grey-400 | `#BEB3C6` | Placeholder text, muted borders |
| grey-500 | `#7D698C` | Secondary text |
| grey-600 | `#6E5C7A` | Caption text |
| grey-700 | `#51445A` | Subdued body text |
| grey-800 | `#362145` | Identical to purple-900 — deepest text |

**Semantic colour roles:**
- Body text: `rgba(18, 18, 18, 0.75)` — near-black at 75% opacity
- Link / heading colour: `#362145` (purple-900)
- Button primary text: `#6A2998` (purple-700)
- Page background: `#ffffff`
- Hero text: `#ffffff` (white over full-bleed photo)

**Colour principle:** No secondary hue family exists. All contrast, hierarchy, and emphasis emerge from tonal position within the single purple family plus opacity variation on near-black body text.

---

### Typography

**Two typefaces only — one serif display, one geometric sans:**

| Role | Family | Weight | Style |
|---|---|---|---|
| Headings | `ivymode` | 400 | normal |
| Body / UI | `Figtree` | 400 / 500 / 700 | normal |

**Implemented scale (computed from live CSS):**

| Element | Family | Size | Weight | Line-height | Colour |
|---|---|---|---|---|---|
| H1 (hero) | ivymode | 48px | 400 | 62.4px (1.3) | #ffffff |
| H2 (sections) | Figtree | 19.2px (1.2rem) | 700 | 24.96px | #362145 |
| Body text | Figtree | 16px | 400 | 24px (1.5) | rgba(18,18,18,0.75) |
| Buttons | Figtree | 16px | 500 | 19.2px | #6A2998 |
| Links | Figtree | 16px | 400 | 20.8px | #362145 |
| Nav items | Figtree | 16px | 400 | 24px | rgba(18,18,18,0.75) |

**Typography principle:**
- `ivymode` (elegant serif) is reserved exclusively for hero H1 headlines — cinematic, editorial.
- `Figtree` (geometric sans) handles all functional text: navigation, body, buttons, labels.
- Heading weight is deliberately light (400 for ivymode) — refinement over emphasis. Weight is applied to Figtree H2 (700) for section clarity.
- Letter-spacing: default (normal) throughout — no extreme tracking.

---

### Layout

| Parameter | Value |
|---|---|
| Max page width | `128rem` (1280px) |
| Page width margin | `0rem` (full-width sections with internal padding) |
| Navigation height | ~68px (estimated from visual) |
| Grid — products | 4-column → 2-column → 1-column at breakpoints |
| Grid — activity cards (Visit page) | 2-column → 1-column |

**Layout principles:**
- Full-bleed hero images on every content page (lavender fields photography dominates)
- Sections alternate: full-width image → contained text → full-width image
- Content pages are narrow single-column rich text with wide photo blocks
- Shopify collection pages: standard filter sidebar + product card grid

---

### Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | Transparent background over hero image |
| Scroll | Likely solidifies (white/light background) — standard Shopify pattern |
| Dropdown | Full-width mega-menu or sub-list per section (Our Products, Visit, About Us) |
| Mobile | Drawer menu (hamburger) |
| Basket | Icon with item count, opens cart drawer on add-to-cart |
| Cookie consent | Full-page overlay on first visit with Accept / Decline / Manage preferences |

---

### Interactive Elements & Buttons

**Button variants observed:**

| Variant | Style | Usage |
|---|---|---|
| Primary | Outlined or filled, purple-700 text | "Checkout", "View all", "Find out more" |
| Secondary | Light background | "Continue shopping", basket controls |
| Text/link button | Underline on hover | Inline CTAs within copy |
| Newsletter submit | Icon/arrow button | Inline with email input |
| Slider prev/next | Icon circle buttons | Product carousel, photo galleries |
| Cookie buttons | "Accept" (solid), "Decline" (outlined), "Manage preferences" (text) | Consent banner |

**Transitions:**
```css
--duration-short:   0.1s
--duration-default: 0.2s
--duration-long:    0.5s
```
All interactive states (hover, focus) animate at 0.2s default. No cubic-bezier overrides noted.

---

### Page Section Structure (Scroll Narrative)

The homepage and content pages follow a **field-to-product descent** narrative as the visitor scrolls:

| Section | Visual Treatment | Tone/Mood |
|---|---|---|
| Announcement bar | Accent purple background, white text | Urgency/seasonal |
| Hero | Full-bleed lavender field photo, white headline (ivymode) | Cinematic, aspirational |
| Products intro | White background, purple-900 headings | Clean, commercial |
| Visit intro | White/light background, full-width photo | Inviting, experiential |
| Customer reviews | Quote blocks on light purple tint | Social proof, serene |
| Bestsellers grid | White card grid | Commerce |
| Family Farm | Split image + text | Trust, heritage |
| Awards | Simple text on white | Credibility |
| Instagram feed | Grid of field/product photography | Community, visual |
| Newsletter | Dark purple background, white text | Commitment, seasonal |
| Footer | Dark purple-900 (`#362145`) | Authority, closure |

**Scroll principle:** The page begins airy and light (white with photography), progressively deepens to rich purple at the footer — the brand colour reaches full saturation at the bottom of the page.

---

### Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero photography | Full-bleed, editorial-quality field photography. Endless rows of purple lavender, Cotswold hills, golden light |
| Mood | Serene, spacious, pastoral — the English countryside in high summer |
| Product photography | Clean white/neutral backgrounds for shop pages |
| People | Occasional — visitors in fields, candid rather than staged |
| Pattern | No graphic patterns. The field itself IS the visual identity — no decorative elements compete |
| Instagram embeds | Real visitor photography embedded on homepage — social proof via visual |

---

### E-Commerce Component Patterns (Shopify)

| Component | Description |
|---|---|
| Collection grid | 4-col card grid, hover effect on product image |
| Product card | Image, title (H3, Figtree), "Regular price £X.XX" |
| Filter bar | Availability + Price range (min/max input) |
| Sort dropdown | 8 options |
| Cart drawer | Slides in from right on "Add to basket", shows quantity badge on basket icon |
| Checkout | Shopify standard checkout flow |
| Customer account | /account/login — order history, wishlist |
| Gift card | Standard Shopify gift card product |
| Newsletter | Inline email capture → MailChimp or Shopify Email |

---

### Key Brand Signals

| Signal | Implementation |
|---|---|
| Heritage | "Lavender has been grown here for 25 years" — duration used as trust anchor |
| Family | "Three generations", farmer first-person quotes (Charlie Byrd), children mentioned |
| Quality | "Highest quality lavender essential oils" — repeated; tied to limestone soil and altitude (~1000 ft) |
| Sustainability | Dedicated /pages/environmental — grass/clover, zero-till, 2200 trees, wildlife margins |
| Awards | North Cotswolds Best Visitor Attraction 2024 |
| Famous clients | None mentioned on this site (unlike Daisyshop) — purity of brand |
| Instagram | @cotswoldlavender — embedded on homepage, fields as content |
| Photography policy | /pages/photo-policy — commercial photographers require permit; personal photography encouraged |

---

### Comparative Notes (vs. tonal-style.md reference)

| Dimension | tonal-style.md (reference) | cotswoldlavender.co.uk (observed) |
|---|---|---|
| Colour family | Deep blue/indigo, 10 steps | Deep purple/grape, 9 steps |
| Colour principle | Chromatic crescendo — darker as you scroll | Dark anchor points (hero, footer), light middle |
| Typography | Single typeface (Inter variable) | Two typefaces: ivymode (display) + Figtree (UI) |
| Heading weight | Weight mirrors tonal depth (300→900) | Consistently light (400) for ivymode; 700 only for Figtree H2 |
| Layout max-width | 1140px | 1280px |
| Animation | Extensive: fadeUp, waveform, ring pulse, counters | Minimal: 0.1–0.5s CSS transitions, carousel |
| Glass morphism | Cards with backdrop-filter blur | Not observed |
| Brand motif | Waveform (audio) | The lavender field itself (photography) |
| CTA placement | Deepest/richest section = conversion moment | Bestsellers in middle, newsletter at footer |
| Section rhythm | 8-section chromatic descent | Hero → Commerce → Experience → Heritage → Social |
