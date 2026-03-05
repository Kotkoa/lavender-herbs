# Loess Hills Lavender Farm — Site Architecture & Design Brief

**URL:** https://loesshillslavender.com
**Platform:** WordPress + WooCommerce + Divi theme + Gravity Forms
**Business:** Lavender farm agrotourism — Iowa Loess Hills. Bath & body products, craft store (40+ vendors), events, wedding venue.
**Address / Location:** 2278 Loess Hills Trail, Missouri Valley, IA 51555 (~40 min north of Omaha)
**Contact:** (712) 642-9016 · lhlavenderfarm@gmail.com
**Legal:** New owners Tracy & Chelsea (purchased 2022 from founders Tim & Mary Hamer)
**Season / Hours:** Seasonal — opens first Saturday of May (2026: May 9). Closed for season off-season.
**Social:** Facebook (loesshillslavender) · Instagram (link present but broken)

---

## PART I — SITE ARCHITECTURE

### 1. Site Map (Full Structure)

```
loesshillslavender.com/
│
├── /                              → Homepage (video hero + farm intro + reviews)
│
MAIN NAVIGATION (flat, 4 items):
├── /events_and_services/          → Events & Services
├── /gallery/                      → Gallery (photo grid)
├── /shop/                         → Products (WooCommerce, 35 products)
│   └── /product/{slug}/           → Individual product pages
└── /contact-us/                   → Contact Us (form + map + directions)

External:
├── https://www.facebook.com/loesshillslavender
└── /cart/                         → WooCommerce cart
```

---

### 2. Global Layout

**Header**
| Element | Description |
|---|---|
| Top bar | Email (lhlavenderfarm@gmail.com) left · Phone (712-642-9016) right |
| Logo | Image logo (centered or left) |
| Cart | "0 Items" text link → /cart/ |
| Navigation | 4 items, flat, UPPERCASE |
| Social icons | Facebook + Instagram icons in header |

**Primary Navigation**
| Item | URL |
|---|---|
| EVENTS & SERVICES | /events_and_services/ |
| GALLERY | /gallery/ |
| PRODUCTS | /shop/ |
| CONTACT US | /contact-us/ |

> Type: flat, no dropdowns, 4 items, UPPERCASE text.

**Footer**
| Element | Content |
|---|---|
| Contact block | PHONE · LOCATION · CONTACT — three columns |
| Phone | (712) 642-9016 |
| Location | 2278 Loess Hills Trail, Missouri Valley, IA 51555 |
| Contact | lhlavenderfarm@gmail.com |
| Copyright | © Copyright Loess Hills Lavender Farm |
| Credit | Website by Kelly Laine Design |

---

### 3. Pages — Detailed Description

#### 1. Homepage (`/`)
**Title:** Home - Loess Hills Lavender Farm

| Block | Type | Content |
|---|---|---|
| Hero | Full-screen video | Lavender field video background + "Come Connect With Nature" H1 |
| Three pillars | H4 + text | VISIT THE FARM · HOST AN EVENT · SHOP LOCAL |
| Visit Us | H1 + address | Address, phone, hours ("Closed for the season") |
| Upcoming Events | H1 + widget | Events calendar/list |
| About the Farm | H2 + long text | Farm history (2005–2022), founders Tim & Mary, new owners Tracy & Chelsea |
| NEW OWNERS | H3 + H2 | "Tracy & Chelsea" — invitation, farm features list |
| Farm features list | Bullets | fairy garden, gnome garden, troll bridge, "Birds Bees & Butterflies" education, giant chair |
| Reviews | H2 + carousel | "What Visitors Are Saying" — 10+ testimonials with names |
| Future Plans | H2 + text | Native grasses, pollinators, conservation (CRP) |
| Contact form | H2 + Gravity Form | "Get In Touch!" — Name, Phone, Email, Address, Message |
| Footer contact | H4 x3 | PHONE · LOCATION · CONTACT |

**Three pillars content:**
| Pillar | Content |
|---|---|
| VISIT THE FARM | "We provide a peaceful experience centered around the mystical and magical herb, lavender." |
| HOST AN EVENT | "The lavender field's natural beauty and enticing aroma makes for an unforgettable special event." |
| SHOP LOCAL | "Shop over 40 local craft vendors which features handmade items as well as the Farm's bath and body products." |

---

#### 2. Events & Services (`/events_and_services/`)
**Title:** Events & Services - Loess Hills Lavender Farm

| Block | Type | Content |
|---|---|---|
| H1 | Page title | "Events" |
| Festival intro | Body text | "Third weekend in July is festival time" — UPick, craft class, live music, vendor tables |
| Season opening | Body | "Opens first Saturday of May" — lavender plants, lunch, craft store |
| 2026 Announcement | H2 | "STAY TUNED FOR 2026 EVENTS!" |
| Opening date | H3 | "Re-open Saturday, May 9, 2026" |
| Holiday Shopping | H3 | "Keep an eye out for dates in November" |
| Other Events | H2 | Section header |
| Bloom & Harvest | H3 + text | Primary bloom mid June–July; secondary bloom late August |
| Small Group Lunches/Tea Party | H3 + text | Min 10 people: lavender tea, lemonade, cookies, finger sandwiches, desserts — call to schedule |
| Special Events | H3 + text | Wedding/event venue: outdoor pergola + bench seating, indoor reception up to 130 guests, Bridal Suite |
| Mailing list | H2 + form | Name + Email signup |

**Services pricing:** Not listed on site — "Call for details"

---

#### 3. Products (`/shop/`)
**Title:** Shop - Loess Hills Lavender Farm

| Block | Type | Content |
|---|---|---|
| Hero | H1 + tagline | "Products — FROM OUR FARM TO YOU" |
| Promo | H2 | "All orders over $50 receive a FREE gift!" |
| Description | Body | "Bath & skin care products... labor of love... all natural." |
| Product grid | WooCommerce | 35 products with image, name, price |

**Full Product Catalog (35 items):**
| Product | Price |
|---|---|
| All Natural Insect Repellent | $15.00 |
| Body Scrub | $12.00 |
| Car Diffuser | $7.00 |
| Creamy Lavender Lotion | $6.00–$16.50 |
| Dryer Balls with Lavender Oil | $12.50 |
| Kitty Litter Deodorizer | $8.50 |
| Lavender Bar Soap | $5.50–$6.00 |
| Lavender Bath Bomb | $3.50 |
| Lavender Bath Salt | $10.00 |
| Lavender Body Wash | $9.50 |
| Lavender Butter Balm | $6.00–$14.00 |
| Lavender Car Freshie | $5.00 |
| Lavender Carpet & Rug Deodorizer | $8.50 |
| Lavender Culinary Buds | $7.00 |
| Lavender Cuticle Oil | $8.00 |
| Lavender Disinfectant Spray | $18.00 |
| Lavender Dressing | $7.00 |
| Lavender Fairy Dust ⭐5.0 | $8.50 |
| Lavender Foaming Hand Wash | $7.00 |
| Lavender Herb Rub | $14.00 |
| Lavender Lemon Shaving Soap | $6.00 |
| Lavender Pepper | $10.00 |
| Lavender Roll On | $4.00–$8.00 |
| Lavender Royal Tea | $6.50 |
| Lavender Sachet | $6.50 |
| Lavender Salt | $10.00 |
| Lavender Shower Steamers | $6.50 |
| Lavender Simple Syrup | $8.50 |
| Lavender Soy Candle | $12.50 |
| Lavender Spritz | $5.50–$15.00 |
| Lavender Sugar | $10.00 |
| Lavender Trio | $15.00 |
| Lip Balm | $3.50 |
| Pet Shampoo with Lavender ⭐5.0 | $12.50 |

**Price range:** $3.50 (bath bomb/lip balm) — $18.00 (disinfectant spray)
**All-natural:** explicitly stated for all products
**Bonus:** Free gift on orders over $50

---

#### 4. Contact Us (`/contact-us/`)
**Title:** Contact Us - Loess Hills Lavender Farm

| Block | Type | Content |
|---|---|---|
| H1 | Page title | "Contact Us" |
| Visit Us | H4 + address | 2278 Loess Hills Trail, Missouri Valley, IA 51555 |
| Hours | H4 | "Closed for the season" |
| Call Us | H4 | (712) 642-9016 |
| Contact form | Gravity Forms | Name*, Phone, Email*, Address (Street), Message |
| Directions | H4 + text | Detailed driving from Omaha (I-29 north) and Sioux City (I-29 south) |
| Map | OpenStreetMap embed | Interactive map |

---

### 4. User Flow Architecture

```
Homepage (/)
    │
    ├─[VISIT THE FARM pillar]───────→ implied /contact-us/ or /events_and_services/
    ├─[HOST AN EVENT pillar]────────→ /events_and_services/ (wedding/event section)
    ├─[SHOP LOCAL pillar]───────────→ /shop/
    │                                     └─[Add to cart] → /cart/ → WooCommerce checkout
    │
    ├─[View our Upcoming Events]────→ /events_and_services/
    └─[Get In Touch form]───────────→ Gravity Forms submit (same page)

Events nav:
    └─[Events & Services]───────────→ /events_and_services/
            ├─[Mailing list signup] → embedded form (no separate page)
            └─[Venues/Tea Party]    → call to book (no online booking)

All pages footer:
    └─[Facebook icon]───────────────→ facebook.com/loesshillslavender
```

---

## PART II — TECHNICAL DESIGN BRIEF

### 1. Colour System

**Platform:** WordPress + Divi theme + WooCommerce CSS variables
**Palette character:** Purple accent on white/neutral — WooCommerce-influenced

| Role | Hex | Source | Usage |
|---|---|---|---|
| WooCommerce primary | #720eec | --woocommerce / --wc-primary | Cart, checkout, WC elements |
| WC primary text | #fcfbfe | --wc-primary-text | Text on WC buttons |
| WC secondary | #e9e6ed | --wc-secondary | WC secondary elements |
| WC secondary text | #515151 | --wc-secondary-text | WC secondary text |
| H2 accent purple | #7a3d8c | computed (rgb 122,61,140) | Section headings colour |
| H1 text | #333333 | computed (rgb 51,51,51) | Hero headings |
| Body text | #0a0a0a | computed (rgb 10,10,10) | Near-black body text |
| Page background | #ffffff | --wc-content-bg | White |
| Form border | rgba(32,7,7,0.8) | --wc-form-border-color | Input borders |
| WC subtext | #767676 | --wc-subtext | Product meta |

**Colour character:**
- Purple appears only in H2 colour (#7a3d8c) and WooCommerce chrome (#720eec) — not a full brand palette
- White background throughout — very minimal colour use
- No brand CSS variable system (unlike essenso or cotswoldlavender)
- Divi theme with custom purple heading colour applied per-element
- Simple 2-tone system: dark text on white + purple accents

---

### 2. Typography

**Typeface system:** Playfair Display (display) + Open Sans (body/UI) + Frank Ruhl Libre

| Role | Family | Weight | Size | Line-height | Color |
|---|---|---|---|---|---|
| H1 | Playfair Display | 500 | 70px | 98px (1.4) | #333333 |
| H2 | Playfair Display | 500 | 48px | 67.2px (1.4) | #7a3d8c (purple) |
| Body (p) | Open Sans | 500 | 14px | 23.8px (1.7) | #0a0a0a |
| Navigation | Open Sans | 600 | 14px | — | #0a0a0a |
| Additional | Frank Ruhl Libre | — | — | — | — |

**Typography notes:**
- Two-family system: Playfair Display (editorial serif) + Open Sans (clean humanist sans)
- Playfair Display: classic editorial serif — conveys elegance, tradition; same family as many publishing brands
- Open Sans: Google's most popular UI sans — clean, neutral, highly legible
- Frank Ruhl Libre: additional serif face (Hebrew/Latin, editorial feel) — likely used for quotes/accents
- Body weight 500 (medium) — slightly heavier than usual for readability at 14px
- Nav weight 600 — clear hierarchy via weight, not colour
- UPPERCASE navigation text — structured, minimal
- H2 in purple — colour differentiation between H1 (dark) and H2 (purple accent)

---

### 3. Layout

| Parameter | Value |
|---|---|
| Content width | 823px (`--wp--style--global--content-size`) |
| Wide content width | 1080px (`--wp--style--global--wide-size`) |
| Spacing scale | 0.44rem → 5.06rem (WordPress preset) |
| Form border radius | 4px (`--wc-form-border-radius`) |
| Form border | 1px rgba(32,7,7,0.8) |
| Video hero | Full-viewport video background |

---

### 4. Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | White/light header with top contact bar |
| On scroll | Likely sticky (Divi default) |
| Mobile | Hamburger (Divi responsive) |
| Cart | "0 Items" text link (no icon) |
| Dropdowns | None — flat 4-item nav |

---

### 5. Interactive Elements & Buttons

| Variant | Style | Usage |
|---|---|---|
| WooCommerce "Add to Cart" | Purple (#720eec) fill, white text | Product pages |
| Gravity Forms submit | Default GF styling | Contact/mailing list forms |
| Facebook icon | Header social icon | → facebook.com |
| Cart link | Text "0 Items" | Header right |

**No dedicated CTA buttons visible in homepage hero.** Navigation drives all actions.

---

### 6. Page Section Structure (Scroll Narrative)

| Section | Visual Treatment | Mood/Purpose |
|---|---|---|
| Hero | Full-screen video (lavender field) | Immersive arrival |
| Three pillars | White bg + H4 + text | Orientation (Visit/Event/Shop) |
| Visit Us | White bg + address | Practical |
| About Farm | White bg + long text | Heritage, story |
| New Owners | White/light bg | Personal connection |
| Reviews | Carousel | Social proof |
| Future Plans | White bg | Vision |
| Contact form | White bg | Conversion |
| Footer | White bg with columns | Closure |

**Scroll narrative:** Entirely flat white throughout — no chromatic progression. Visual drama delivered by video hero only. Rest of page is text-heavy with minimal visual contrast between sections.

---

### 7. Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero | Full-screen video of lavender field (unique — only video hero among sites studied) |
| Gallery | Dedicated /gallery/ page — photo grid of farm, events, products |
| Products | WooCommerce product photos on white |
| Installations | Fairy garden, gnome garden, troll bridge, windmill — whimsical rural installations |
| Brand motif | No strong graphic identity — nature photography driven |

---

### 8. E-Commerce Components

| Component | Description |
|---|---|
| Platform | WooCommerce (WordPress) |
| Total products | 35 |
| Categories | Bath & Body (primary), Culinary, Candles, Pet |
| Price range | $3.50–$18.00 |
| Reviews | WooCommerce native reviews (⭐5.0 on Lavender Fairy Dust, Pet Shampoo) |
| Free gift | Orders over $50 |
| Cart | WooCommerce standard cart page |
| Checkout | WooCommerce standard checkout |
| Shipping | Not specified on shop page |
| In-store | Physical craft store (40+ local vendors) — complementary channel |

---

### 9. Key Brand Signals

| Signal | Implementation |
|---|---|
| Heritage | Founded 2005/2009 — detailed origin story with founders' names |
| Transition story | New owners 2022 — "continuing their vision" — community trust signal |
| No entrance fee | Explicitly stated — low friction |
| 40+ local vendors | Community embeddedness — supports local artisans |
| All-natural products | Stated explicitly for all bath/body products |
| Conservation | CRP acres — "Birds, Bees & Butterflies" educational area |
| US Lavender Growers Association | Membership stated |
| Personal | Owner names (Tracy & Chelsea) on homepage — human, approachable |
| Lavender ice cream | Mentioned in reviews as memorable experience — culinary hospitality |
| Reviews | Long testimonial carousel — community, word-of-mouth brand |

---

### 10. Comparative Notes

| Dimension | cotswoldlavender | lavenderfieldsforever | essenso.az | indigolavender | loesshillslavender |
|---|---|---|---|---|---|
| Platform | Shopify custom | Shopify Dawn | WordPress+ThemeREX | Wix | WordPress+WooCommerce+Divi |
| Colour family | 9-step purple | Black/white | Warm cream+gold | Purple 5-step+navy | White+purple accents only |
| Typography | ivymode+Figtree | Assistant sans | halyard-display+DM Sans | Elsie+Source Serif Pro | Playfair Display+Open Sans |
| Hero type | Photo | Photo | Photo | Photo | **Video** (unique) |
| Nav items | 3 mega-dropdowns | 5 flat | 5 (1 dropdown) | 14+ (2 dropdowns) | **4 flat** (minimal) |
| Products | 69, Shopify | 11, Shopify | 11, no price | 113, Wix Store | **35, WooCommerce** |
| Entry fee | Paid (£7.75) | Free+photo pass | Free | $7.50 | **Free** |
| Events | Internal pages | Eventbrite | None | Rich Wix calendar | July festival + weddings |
| Wedding venue | No | No | No | Yes | **Yes** (130 guests + Bridal Suite) |
| Reviews | — | Klaviyo | Instagram feed | None | **Testimonial carousel** (10+) |
| Craft vendors | No | No | No | No | **40+ local vendors** (unique) |
| Location | Cotswolds, England | California | Azerbaijan | Michigan | **Iowa (Loess Hills)** |
| Key difference | Most mature e-com | Most minimal | Only non-Western | Richest events | Video hero + craft market hybrid |
