# ESSENSO — Site Architecture & Design Brief

**URL:** https://essenso.az
**Platform:** WordPress + ThemeREX Addons (Strollik-type theme builder)
**Business:** Lavender farm agrotourism — 30 hectares, Gabala, Azerbaijan. Cosmetics, seedlings, eco-tourism.
**Address / Location:** Gabala, Chukur Gabala village 3613, Azerbaijan (foot of Caucasus Mountains)
**Contact:** +99499 714 14 60 · info@essenso.az
**Legal:** "The Best Choice" LLC, operating since 2018
**Season / Hours:** Mon–Fri 9 AM – 6 PM, Saturday 9 AM – 4 PM. No booking required.
**Social:** Instagram (essenso.az) · YouTube (@lavandaqebeleessenso) · TikTok (@essenso.az)

---

## PART I — SITE ARCHITECTURE

### 1. Site Map (Full Structure)

```
essenso.az/
│
├── /                              → Homepage (Lavender Garden intro + Instagram feed)
│
MAIN NAVIGATION:
├── /about-us-2/                   → About Us
├── /visit-us/                     → Visit Us (directions, things to do, transport info)
├── /product/                      → Products (redirect/landing page)
│   ├── /portfolio_group/cosmetics/ → Cosmetics (11 products, portfolio grid)
│   └── /portfolio_group/seedlings/ → Seedlings (1 product stub)
├── /journal/                      → Journal (WordPress blog, 2 posts)
└── /contacts/                     → Contacts (address, hours, map)

PRODUCT PAGES (portfolio custom post type):
├── /portfolio/cleansing-toner-for-face/
├── /portfolio/moisturizing-hand-cream-with-natural-lavender-oil/
├── /portfolio/relaxing-bath-and-shower-gel-with-natural-lavender-oil/
├── /portfolio/100-natural-lavender-oil/
├── /portfolio/natural-lavender-hydrolate/
├── /portfolio/lavender-flower-sachet/
├── /portfolio/natural-lavender-oil-soap/
├── /portfolio/lavender-soy-candle/
├── /portfolio/gift-set-with-soy-candle/
├── /portfolio/gift-set-with-lavender-sachet/
└── /portfolio/gift-set-with-lavender-soap/

HIDDEN / NOT IN MAIN NAV:
├── /about/                        → redirects to /about-us-2/  // not in nav
├── /shop/                         → empty WooCommerce shell (no products) // not in nav
└── /category/lavander/            → blog category page // not in nav

External links:
├── https://www.instagram.com/essenso.az/
├── https://www.youtube.com/@lavandaqebeleessenso
├── https://www.tiktok.com/@essenso.az
└── https://ticket.ady.az/en       → Azerbaijan Railways (train tickets)
```

---

### 2. Global Layout

**Header / Navigation**
| Element | Description |
|---|---|
| Logo | Text "E S S E N S O" with spaced letters, links to / |
| Navigation type | Flat with one dropdown (Products → Cosmetics / Seedlings) |
| Search | Icon (slide-out search field) |
| Account | No |
| Cart | No (WooCommerce installed but unused) |
| Mobile | Hamburger menu drawer |

**Primary Navigation**
| Item | Submenu | URL |
|---|---|---|
| About Us | — | /about-us-2/ |
| Visit Us | — | /visit-us/ |
| Products | Cosmetics, Seedlings | /product/ |
| Journal | — | /journal/ |
| Contacts | — | /contacts/ |

> Type: flat with one dropdown (Products)

**Footer**
| Element | Content |
|---|---|
| Logo | "E S S E N S O" text |
| Tagline | "The Best Choice" LLC — cultivation of medicinal aromatic plants since 2018 |
| Office | Azerbaijan — Gabala, Chukur Gabala village 3613 |
| Email | info@essenso.az |
| Phone | +99499 714 14 60 |
| Links column | About Us · Visit Us · Journal · Contacts |
| Social column | Instagram · YouTube · TikTok |
| Copyright | ESSENSO . AZ LAVANDER Garden © 2026. All Rights Reserved. |

---

### 3. Pages — Detailed Description

#### 1. Homepage (`/`)
**Title:** ESSENSO – Lavender Garden in Gabala

| Block | Type | Content |
|---|---|---|
| Hero | Full-bleed image + overlay text | "Lavender Garden" label, "VISIT US NOW" CTA button |
| Visit Us section | Text + image | 30-hectare farm description, Gabala/Caucasus Mountains setting, "Read More" link |
| Brand intro (H1) | Heading + text | "ESSENSO - Lavander Garden in Gabala" — eco-tourism pitch, plants listed: Lavender Angustifolia, Peppermint, Melissa |
| Stats counter | Animated counters | Flowers, Visitors, Countries (numbers animate on scroll) |
| Instagram feed | Embedded grid | 9 latest Instagram posts/reels with "Follow Me" CTA |
| Newsletter | Form | "Subscribe for the Updates!" — email subscription |

#### Clickable Elements
| Element | Action |
|---|---|
| "VISIT US NOW" button | → /visit-us/ |
| "Read More" (Visit section) | → /visit-us/ |
| "Read More" (About section) | → /about/ → redirects /about-us-2/ |
| Instagram post thumbnails (x9) | → individual Instagram reels/posts |
| "Follow Me" | → instagram.com/essenso.az |

---

#### 2. About Us (`/about-us-2/`)
**Title:** About Us – ESSENSO

| Block | Type | Content |
|---|---|---|
| Eyebrow label | Small caps | "WHO IS" |
| H1 | Hero heading | "Learn More About ESSENSO" |
| Body text | Multi-paragraph | Lavender as "blue gold" of Provence, Gabala as Azerbaijan's Provence, eco-tourism pitch, guided tours/workshops, lavender festivals (June–July peak) |
| Feature list | Bullets | Guided Tours & Workshops · Seasonal Lavender Festivals · Lavender-Inspired Products |
| H1 (second) | Section heading | "Our Lavanda Garden in Gabala" (with video/photo embed) |
| Partners | H2 + logo grid | "Our Partners" — partner logos |

---

#### 3. Visit Us (`/visit-us/`)
**Title:** Visit Us – ESSENSO

| Block | Type | Content |
|---|---|---|
| Getting here | H2 + text | Directions: 30-hectare farm in ChukhurGabala village, foot of Caucasus Mountains |
| Transport info | H2 + text | Trains from Baku to Gabala (Sat–Sun only), schedule at ticket.ady.az |
| Train ticket CTA | Button/link | "Book ticket" → https://ticket.ady.az/en |
| Things to Do | H2 + numbered list | 6 activities listed (see below) |
| No Booking Required | H2 + text | "No reservation is required to visit the Essenso Lavender Field" |

**6 Things to Do:**
1. Explore the lavender field (stroll, see crops)
2. Photography (special decorations in field for photo sessions)
3. Discover Lavender Products (learn production, purchase)
4. Nature Walks (organized walks)
5. Coffee corner (mini coffee bar in the field)
6. Enjoy the Tranquil Atmosphere

---

#### 4. Products → Cosmetics (`/portfolio_group/cosmetics/`)
**Title:** Cosmetics – ESSENSO

| Block | Type | Content |
|---|---|---|
| Product grid | Portfolio cards | 11 products, card with image + H5 title |

**Full Cosmetics Catalog (11 products):**
| # | Product Name | URL |
|---|---|---|
| 1 | Gift Set with Lavender Soap | /portfolio/gift-set-with-lavender-soap/ |
| 2 | Gift Set with Lavender Sachet | /portfolio/gift-set-with-lavender-sachet/ |
| 3 | Gift Set with Soy Candle | /portfolio/gift-set-with-soy-candle/ |
| 4 | Lavender Soy Candle | /portfolio/lavender-soy-candle/ |
| 5 | Natural Lavender Oil Soap | /portfolio/natural-lavender-oil-soap/ |
| 6 | Lavender Flower Sachet | /portfolio/lavender-flower-sachet/ |
| 7 | Natural Lavender Hydrolate | /portfolio/natural-lavender-hydrolate/ |
| 8 | 100% Natural Lavender Oil | /portfolio/100-natural-lavender-oil/ |
| 9 | Relaxing Bath and Shower Gel with Natural Lavender Oil | /portfolio/relaxing-bath-and-shower-gel-with-natural-lavender-oil/ |
| 10 | Moisturizing Hand Cream with Natural Lavender Oil | /portfolio/moisturizing-hand-cream-with-natural-lavender-oil/ |
| 11 | Cleansing Toner for Face | /portfolio/cleansing-toner-for-face/ |

> No pricing shown on site. Products are portfolio items, not WooCommerce products. No add-to-cart buttons.

---

#### 5. Products → Seedlings (`/portfolio_group/seedlings/`)
**Title:** Seedlings – ESSENSO

| Block | Type | Content |
|---|---|---|
| Product grid | Portfolio card | 1 item: "Seedlings" (stub, no detail page) |

> Category exists but only one placeholder product. Selling seedlings implied in About Us text.

---

#### 6. Product Detail Page (example: `/portfolio/cleansing-toner-for-face/`)
**Title:** Cleansing Toner for Face – ESSENSO

| Block | Type | Content |
|---|---|---|
| Product image | Full-width photo | Product photography |
| H2 | Product name | "Cleansing Toner for Face" |
| Description | Body text | "The facial toner with lavender water helps to preserve the skin's microflora..." |
| Meta | Key-value | Manufacturer: ESSENSO · Year: 2025 · Author: ESSENSO.AZ |
| Navigation | Previous/Next | Portfolio navigation between products |

> No price, no add-to-cart. Portfolio showcase only — to buy, customers must contact directly.

---

#### 7. Journal (`/journal/`)
**Title:** Journal – ESSENSO

| Block | Type | Content |
|---|---|---|
| Blog posts | WordPress blog | 2 posts (both May 7, 2025) |
| Sidebar | Widget | Search + Recent Posts list |

**Posts:**
1. "Lavender oil – Known for its antiseptic and antiviral properties throughout history." — May 7, 2025
2. "Embracing the Calm: The Power of Lavender" — May 7, 2025

---

#### 8. Contacts (`/contacts/`)
**Title:** Contacts – ESSENSO

| Block | Type | Content |
|---|---|---|
| Eyebrow | Label | "CONTACT US" |
| H1 | Heading | "Our Lavender Garden Address" |
| Open Hours | H4 + text | Mon–Fri: 9 AM – 6 PM · Saturday: 9 AM – 4 PM |
| Address | H4 + text | Gabala, Chukur Gabala village 3613 · "Check Location" (map link) |
| Get In Touch | H4 + details | Telephone: (+994)997141460 · Email: info@essenso.az |
| Map | Embed | Google Maps embed (implied by "Check Location") |

> No contact form. Contact is by phone/email only.

---

### 4. User Flow Architecture

```
Homepage (/)
    │
    ├─[VISIT US NOW]──────────────────────→ /visit-us/
    │                                           └─[Book ticket] → ticket.ady.az (external)
    │
    ├─[Read More — Visit section]──────→ /visit-us/
    │
    ├─[Read More — About section]──────→ /about/ → /about-us-2/
    │
    ├─[Instagram thumbnails x9]────────→ instagram.com/essenso.az (external)
    │
    └─[Follow Me]──────────────────────→ instagram.com/essenso.az (external)

Products nav:
    ├─[Cosmetics]──────────────────────→ /portfolio_group/cosmetics/
    │                                           └─[Product card click] → /portfolio/{product}/
    └─[Seedlings]──────────────────────→ /portfolio_group/seedlings/

All pages footer:
    ├─[Instagram]──→ instagram.com/essenso.az
    ├─[YouTube]────→ youtube.com/@lavandaqebeleessenso
    ├─[TikTok]─────→ tiktok.com/@essenso.az
    └─[Email link] → mailto:info@essenso.az
```

---

## PART II — TECHNICAL DESIGN BRIEF

### 1. Colour System

**Platform:** WordPress Preset CSS Custom Properties + ThemeREX theme variables
**Palette character:** Warm cream-neutral base + gold accent + supplementary green/blue

| Role | Hex | CSS Variable | Usage |
|---|---|---|---|
| Page background | #FAF7F0 | --wp--preset--color--bg-color | Warm off-white cream — all page background |
| Border | #DDDAD3 | --wp--preset--color--bd-color | Card borders, dividers |
| Dark text | #0A1108 | --wp--preset--color--text-dark | Headings, primary text |
| Muted text | #9D9890 | --wp--preset--color--text-light | Secondary text, meta, captions |
| Body text (computed) | rgb(97,93,88) | — | Actual body text render ≈ #615D58 |
| Primary link / accent | #F2C200 | --wp--preset--color--text-link | Gold/yellow — CTAs, active states |
| Primary link hover | #DCB000 | --wp--preset--color--text-hover | Darker gold on hover |
| Secondary accent | #92BB53 | --wp--preset--color--text-link-2 | Green — tags, badges |
| Secondary hover | #80AB3E | --wp--preset--color--text-hover-2 | Darker green hover |
| Tertiary accent | #7198BA | --wp--preset--color--text-link-3 | Blue — supplementary links |
| Tertiary hover | #4F769D | --wp--preset--color--text-hover-3 | Darker blue hover |

**Colour character:**
- No purple/lavender in the UI colour system — lavender purple exists only in photography
- Warm cream base (#FAF7F0) evokes natural, organic aesthetic
- Gold (#F2C200) as primary CTA colour — unusual, evokes harvest/sunshine
- Three accent colours (gold/green/blue) map to seasonal/natural associations
- Very different from typical lavender purple branding (compare: cotswoldlavender uses 9-step purple)

---

### 2. Typography

**Typeface system:** Two families — Adobe Fonts display + Google Fonts body

| Role | Family | Weight | Size | Line-height | Letter-spacing | Text-transform |
|---|---|---|---|---|---|---|
| H1 | halyard-display | 500 | 3.353em | 1em | 0px | none |
| H2 | halyard-display | 500 | 2.765em | 1.021em | 0px | none |
| H3 | halyard-display | 500 | 2.059em | 1.029em | 0px | none |
| H4 | halyard-display | 500 | 1.647em | 1.036em | 0px | none |
| H5 | halyard-display | 500 | 1.412em | 1.083em | 0px | none |
| H6 | halyard-display | 500 | 1.118em | 1.263em | 0px | none |
| Body (p) | DM Sans | 400 | 1rem (17px) | 1.68em | 0px | none |
| Button | halyard-display | 500 | 14px | 21px | 1.5px | UPPERCASE |
| Menu | halyard-display | 500 | 17px | 1.5em | 0px | none |
| Submenu | DM Sans | 400 | 15px | 1.5em | 0px | none |
| Logo | halyard-display | 500 | 1.7em | 1.25em | 0px | spaced (CSS) |
| Input | inherit (DM Sans) | 400 | 16px | 1.5em | 0px | none |

**Typography notes:**
- Two families: halyard-display (Adobe Fonts) for all display/UI + DM Sans (Google Fonts) for body/submenu
- halyard-display is a contemporary geometric semi-serif — editorial feel
- DM Sans is a clean humanist geometric sans
- Buttons: halyard-display UPPERCASE with 1.5px tracking — premium but warm
- All headings weight 500 (medium) — no 700 bold usage
- Line-height 1.68em on body = very comfortable reading
- Logo styled with CSS letter-spacing ("E S S E N S O" — spaced letters)

---

### 3. Layout

| Parameter | Value |
|---|---|
| Max page width | 1290px (`--theme-var-page_width`) |
| Content width | 840px (`--wp--style--global--content-size`) |
| Wide content width | 1290px (`--wp--style--global--wide-size`) |
| Grid gap | 30px (`--theme-var-grid_gap`) |
| Card corner radius | 0px (`--theme-var-rad: 0px`, `--theme-var-rad_koef: 0`) |
| Button radius | 0px (radius coefficient = 0) |
| Input radius | 0px |
| Spacing tiny | 1rem (`--sc-space-tiny`) |
| Spacing small | 2rem (`--sc-space-small`) |
| Spacing medium | 3.333rem (`--sc-space-medium`) |
| Spacing large | 6.667rem (`--sc-space-large`) |
| Spacing huge | 8.667rem (`--sc-space-huge`) |
| Sidebar width | 410px (blog pages only) |

**Layout notes:**
- Sharp-cornered design throughout (radius coefficient = 0)
- Wide 1290px container — not as constrained as Shopify Dawn (1440px)
- Structured ThemeREX spacing scale (tiny/small/medium/large/huge)

---

### 4. Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | Transparent/light header, logo left-centered |
| On scroll | Likely solid (ThemeREX default) |
| Mobile | Hamburger drawer (`.menu_mobile_close` class present) |
| Cart | None (WooCommerce shell exists but unused) |
| Dropdowns | Single dropdown: Products → Cosmetics / Seedlings |
| Search | Slide-out search overlay (icon in header) |

---

### 5. Interactive Elements & Buttons

| Variant | Style | Usage |
|---|---|---|
| Primary CTA | halyard-display UPPERCASE, gold (#F2C200) fill, 0px radius | "VISIT US NOW" hero button |
| Text link | Gold underline | Inline "Read More", "Follow Me" |
| External link | Icon + text | "Book ticket" (railway), social icons |
| Portfolio card | Image + H5 title, no price | Product browsing |

**Animation system (ThemeREX vars):**
| Variable | Value | Usage |
|---|---|---|
| --trx-addons-fixed-rows-duration | 0.4s | Fixed row transitions |
| --swiper-theme-color | #007aff | Swiper slider default |
| No custom easing vars | — | ThemeREX uses its own animation system |

---

### 6. Page Section Structure (Scroll Narrative)

| Section | Visual Treatment | Mood/Purpose |
|---|---|---|
| Hero | Full-bleed lavender field photo + white overlay text | Aspirational, invitation |
| Visit section | Warm cream bg + text + nature photo | Informational |
| Brand intro | Cream bg + large H1 | Identity, credibility |
| Stats counters | Accent color numbers on cream | Social proof, scale |
| Instagram feed | Dark/neutral bg + photo grid | Social proof, engagement |
| Newsletter | Accent bg | Conversion |
| Footer | Dark text on cream | Closure, contact |

**Scroll narrative:** Mostly flat cream background throughout — alternate dark sections (Instagram feed, newsletter) for contrast. Not a chromatic crescendo; more of a photo-driven narrative.

---

### 7. Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero | Wide-field lavender rows, aerial or eye-level, Caucasus Mountains backdrop |
| Products | Product photography on cream/white backgrounds |
| Instagram | Mix of field photography, product shots, lifestyle (people in lavender) |
| Brand motif | Spaced logotype "E S S E N S O" as signature mark |
| Video | YouTube channel linked but no video embed on site pages |

**Key visual note:** Purple lavender in photography IS the brand colour — not reflected in UI palette (which uses gold/cream). This creates a visual split between photography mood (purple) and UI system (warm earth tones).

---

### 8. E-Commerce / Products Architecture

| Component | Description |
|---|---|
| Platform | WordPress Portfolio custom post type (NOT WooCommerce) |
| Product pages | Informational showcase only — no pricing, no cart |
| Categories | Cosmetics (11 items) · Seedlings (1 stub) |
| Purchase flow | Contact-based (phone/email) — no online checkout |
| WooCommerce | Installed at /shop/ but completely empty and unused |
| Booking | No online booking — "no reservation required" |

**Product range:**
- Gift sets (3 types): soap, sachet, soy candle
- Individual items: soy candle, oil soap, flower sachet, hydrolate, 100% essential oil
- Cosmetics: bath gel, hand cream, cleansing toner
- Seedlings: implied but no detail

---

### 9. Key Brand Signals

| Signal | Implementation |
|---|---|
| Pioneer positioning | "For the first time in Azerbaijan" — large-scale Lavender Angustifolia cultivation |
| Scale | 30 hectares explicitly stated in multiple pages |
| Heritage | Since 2018, "The Best Choice" LLC |
| Tourism focus | Primary CTA is "VISIT US NOW" — experience over products |
| No booking friction | "No reservation is required" — reduces barrier to visit |
| Train accessibility | Partner link to Azerbaijan Railways — thoughtful UX for visitors without car |
| Instagram first | Large Instagram grid on homepage — social proof primary channel |
| Multilingual | Site in English but Instagram posts in Azerbaijani — local audience split |
| Plant diversity | Lavender Angustifolia + Peppermint + Melissa — positioned as medicinal aromatic garden |

---

### 10. Comparative Notes

| Dimension | cotswoldlavender.co.uk | lavenderfieldsforever.org | essenso.az |
|---|---|---|---|
| Platform | Shopify custom | Shopify Dawn | WordPress + ThemeREX |
| Colour family | 9-step purple/grape | Black/white only | Warm cream + gold accent |
| Typography | ivymode + Figtree | Assistant only | halyard-display + DM Sans |
| Button radius | 0px | 0px | 0px |
| Navigation | 3 mega-dropdowns | Flat, 5 items | 1 dropdown (Products) |
| Hero | Full-bleed photo | Full-bleed photo | Full-bleed photo |
| E-commerce | Shopify 69 products, priced | Shopify 11 products, priced | Portfolio only, no pricing |
| Booking/Tickets | Paid entry (£7.75 peak) | Free entry + paid photo pass | Free entry, no booking |
| Social proof | Reviews, Instagram feed | Klaviyo reviews | Instagram feed only |
| Blog/Journal | No (FAQ instead) | No | Yes (2 posts) |
| Events | Internal pages | Eventbrite integration | No events page |
| Location | Cotswolds, England | Buellton, California | Gabala, Azerbaijan |
| Key difference | Most complete e-commerce | Most minimal design | Only non-Western site; pioneer positioning |
