# Hunter Lavender Farm — Site Architecture & Design Brief

**URL:** https://hunterlavenderfarm.com.au
**Platform:** Shopify (custom theme by Propel Digital)
**Business:** Lavender farm agrotourism — Hunter Valley, NSW, Australia. Seasonal farm walks, experiences (beekeeping, yoga, photo sessions), online shop.
**Address / Location:** 125 Adams Peak Road, Broke, 2330 NSW, Australia (Hunter Valley wine region)
**Contact:** Via contact form at /pages/faq
**Legal:** Owners: Marianne and JR. First lavender farm in Hunter Valley. Founded 2019.
**Season / Hours:** Southern hemisphere summer: Season 5 — 5 Dec 2026 to 3 Jan 2027 (closed Christmas Eve, Christmas Day, New Year's Eve, New Year's Day). Off-season special events (A Little Bit of Broke Festival 14 March 2026, 9am–5pm).
**Social:** Instagram (@hunterlavenderfarm) · Facebook (hunterlavenderfarm)

---

## PART I — SITE ARCHITECTURE

### 1. Site Map (Full Structure)

```
hunterlavenderfarm.com.au/
│
├── /                                    → Homepage
│
MAIN NAVIGATION (with dropdowns):
├── SHOP
│   ├── /collections/all                 → All Products (35)
│   ├── /collections/bath-and-body       → Bath and Body
│   ├── /collections/gourmet-food        → Gourmet Food
│   ├── /collections/gift-sets           → Gift Sets
│   └── /collections/home-decor-and-fragrance → Home Décor and Fragrance
│
├── ABOUT
│   ├── /pages/our-story                 → Our Story
│   └── /pages/the-farm                  → The Farm
│
├── VISIT
│   ├── /pages/visit                     → Lavender Farm (visit info)
│   ├── /pages/see-and-do                → Stay, See and Do
│   └── /pages/photoshoot                → Location and Photo Shoots
│
├── PHOTOS
│   ├── /pages/season-2024-album         → Season 2024 Album
│   ├── /pages/season-2023-album         → Season 2023 Album
│   └── /pages/lavender-season-2022      → Season 2022 Album
│
├── /pages/experience                    → Experiences (booking page)
│   └── /collections/summer-experiences  → Summer Experiences (Shopify collection)
│
└── /pages/faq                           → FAQ & Contact (combined)

UTILITY NAV:
├── /search                              → Search
├── /account                             → Account
└── /cart                                → Cart

FOOTER LINKS (not in main nav):
├── /blogs/lavender                      → Recipes & Blog  // not in main nav
├── /pages/contact                       → Contact Us     // separate from FAQ
├── /pages/freebies                      → Freebies (free lavender growing guide) // not in main nav
├── /policies/shipping-policy            → Shipping Policy
├── /policies/refund-policy              → Refund Policy
├── /policies/terms-of-service           → Terms of Service
└── /policies/privacy-policy            → Privacy Policy

External:
├── https://www.instagram.com/hunterlavenderfarm/
└── https://www.facebook.com/hunterlavenderfarm/
```

---

### 2. Global Layout

**Announcement Bar**
| Element | Content |
|---|---|
| Rotating slides | "VISIT THE FARM DURING A LITTLE BIT OF BROKE FESTIVAL 14 MARCH 2026!" |
| Second slide | "Free Shipping on Orders Over $120" → /collections/all |

> Background: teal (#5394a6), white text — high contrast, prominent.

**Header / Navigation**
| Element | Description |
|---|---|
| Logo | Text logo "Hunter Lavender Farm" (top left) |
| Currency selector | Country/currency dropdown (full global list — 150+ countries) |
| Navigation | 7 items with 3 dropdowns |
| Search | Icon link → /search |
| Account | Icon link → /account |
| Cart | Icon link → /cart |
| Nav text colour | Dark purple (#6c3f99) on white — nav links are purple, not black |

**Primary Navigation**
| Item | Submenu items | URL |
|---|---|---|
| HOME | — | / |
| SHOP | View all · Bath and Body · Gourmet Food · Gift Sets · Home Décor and Fragrance | /collections/all |
| ABOUT | Our Story · The Farm | /pages/our-story |
| VISIT | Lavender Farm · Stay, See and Do · Location and Photo Shoots | /pages/visit |
| PHOTOS | Season 2024 · Season 2023 · Season 2022 | /pages/season-2024-album |
| EXPERIENCES | — | /pages/experience |
| FAQ & CONTACT | — | /pages/faq |

> Type: 4 dropdowns (SHOP, ABOUT, VISIT, PHOTOS). UPPERCASE text.

**Footer**
| Column | Content |
|---|---|
| Visit Our Farm | Hours · Season dates · Address · LEARN MORE CTA |
| Quick Links | Shop · FAQs · Recipes & Blog · Contact Us · Freebies |
| Policies | Shipping · Refund · Terms · Privacy |
| Follow us | Instagram · Facebook |
| Newsletter | "Join Our Farm Friend List! — 10% off first order" + Subscribe form |
| Copyright | © 2026 Hunter Lavender Farm Site by Propel Digital |

---

### 3. Pages — Detailed Description

#### 1. Homepage (`/`)
**Title:** Hunter Lavender Farm | Lavender Fields and Natural Lavender Products

| Block | Type | Content |
|---|---|---|
| Announcement bar | Rotating slideshow | Festival + Free shipping |
| Hero | Full-bleed video/photo | "Sip, Stroll & Discover Lavender" — festival event invite + "VISIT THE FARM" CTA |
| Brand tagline | H2 + text | "Embrace the Calming Scent of Lavender — Transform your home" + "EXPLORE COLLECTION" CTA |
| Season banner | H2 + dates | "SEASON 5 BLOOMING SOON 🌿💜 — 5 December 2025 – 3 January 2027" |
| Lavender Field Walk | H1 + H4 | Ticket widget — "TICKETS SOLD OUT! — Take a stroll..." + rules/expectations |
| Summer Experiences | H2 + product grid | 5 experiences with Quick Shop |
| Lavender Gift Guide | CTA section | "Thoughtful. Local. Beautiful." + "SHOP NOW" |
| Photo Shoots section | Image + text | "Location and Photo Shoots — MORE INFO" |
| Freebies | H2 + CTA | "How to Grow Lavender at Home — FREE GUIDE — I WANT IT" |
| Blog preview | H2 + 4 articles | "Read About Lavender" — WELLNESS/NEWS/GARDENING categories |
| Instagram feed | H2 + grid | "Follow Our Adventures — @hunterlavenderfarm" |
| Newsletter | Form | "Join Our Farm Friend List! — 10% off first order" |
| Footer visit info | Address + dates | Season 5 save the date |

#### Clickable Elements (Homepage)
| Element | Action |
|---|---|
| "VISIT THE FARM" | → /pages/experience |
| "EXPLORE COLLECTION" | → /collections/all |
| "SEASON 5 DATES" | → /pages/visit |
| Experience product cards (x5) | → /products/{experience-slug} |
| "SHOP NOW" | → /collections/all |
| "MORE INFO" (photo shoots) | → /pages/photoshoot |
| "I WANT IT" (free guide) | → /pages/freebies |
| "View all" (blog) | → /blogs/lavender |
| @hunterlavenderfarm | → instagram.com/hunterlavenderfarm |
| "LEARN MORE" (footer) | → /pages/experience |

---

#### 2. Our Story (`/pages/our-story`)
**Title:** Our Story | Hunter Valley Lavender – Hunter Lavender Farm

| Block | Type | Content |
|---|---|---|
| Mission statement | H2 + text | "We Are Passionate About — Inspiring positive emotions and improving your well-being by creating all-natural lavender products..." |
| Our Story | Heading + text | Marianne and JR — Sydney hustle → Hunter Valley dream → 2019 moved to Broke |
| First of Its Kind | Subheading | Provence honeymoon inspiration → first lavender farm in Hunter Valley |
| Where To Next | Subheading | Future plans: farm shop and café (5-year vision) |
| CTA | Button | "BOOK YOUR VISIT" → /pages/experience |

**Key brand facts:**
- Married at St. Michael's in Wollombi (Hunter Valley connection)
- 2019: purchased property in Broke
- Inspired by Provence, France honeymoon
- First lavender farm in Hunter Valley — explicitly stated

---

#### 3. Visit (`/pages/visit`)
**Title:** Visit | Hunter Lavender Farm

| Block | Type | Content |
|---|---|---|
| Hero | H2 + text | "Visit Us — We're excited to be part of A Little Bit of Broke Festival..." |
| Festival info | Text | FREE ENTRY during festival hours, 14 March 2026 |
| Season dates | H3 + address | "Save the Date for Season 5 — 5 Dec 2026 to 3 Jan 2027" |
| Address | Text | 125 Adams Peak Road, Broke, 2330 NSW, Australia |
| Directions | Button | "Get Directions" → Google Maps |
| Three pillars | CTA blocks | Farm Experiences (BOOK NOW) · Lavender Collection (SHOP NOW) · Countryside Escape (VISIT US) |

---

#### 4. Experiences (`/pages/experience`)
**Title:** Hunter Lavender Farm Experiences

| Block | Type | Content |
|---|---|---|
| Hero text | H2 | "Farm Experiences — Part of A Little Bit of Broke Festival, FREE ENTRY" |
| Honey Harvest | Card + CTA | "Discover the fascinating world of busy bees and harvest raw honey" — BOOK NOW |
| Beekeeping | Card + CTA | "Learn the basics of beekeeping through this hands-on exploration" — BOOK NOW |
| Visit info | H3 | Open hours, address, Get Directions |

**Summer Experiences (bookable via Shopify):**
| Experience | Price (AUD) | Status |
|---|---|---|
| Lavender Field Walk | from $0 (was seasonal ticket) | SOLD OUT |
| Honey Harvest Experience | $40.95 | Available |
| Lavender Mini Photo Session | $200.95 | Available |
| Yoga in Lavender Bloom | from $54.95 | Available |
| Beekeeping For Beginners | $70.95 | Available |

> Note: Lavender Field Walk SOLD OUT — entry was paid during season. Currently FREE during festival only.

---

#### 5. FAQ & Contact (`/pages/faq`)
**Title:** Frequently Asked Questions | Hunter Lavender Farm

**12 FAQ questions:**
| # | Question |
|---|---|
| 1 | When is the best time to visit? |
| 2 | Are you open for farm tours? |
| 3 | Are you open other times of the year? |
| 4 | Can we book your farm as a venue for special events? |
| 5 | Do I need to pre-book tickets for your Experiences? |
| 6 | Do you offer a "pick your own lavender" experience? |
| 7 | Do you allow dogs on the farm? |
| 8 | What lavenders do you grow on the farm? |
| 9 | Will you be selling on a wholesale basis? |
| 10 | Is the farm wheelchair accessible? |
| 11 | Can we use drones or tripods for photography? |
| 12 | What is the suggested transportation route from Sydney CBD? |

**Contact form** (on same page):
- Fields: Name · Email · Message
- Protected by hCaptcha

---

#### 6. Shop — All Products (`/collections/all`)
**Title:** ALL – Hunter Lavender Farm

**35 products across 4 categories + extras:**

**Gift Sets:**
| Product | Price (AUD) |
|---|---|
| Lavender Pamper Gift Set | $72.95 |
| Lavender at Home Gift Set | $90.95 (SOLD OUT) |
| Lavender Lover Gift Set | $75.95 |
| Lavender Wellness Set | $77.95 |
| Lavender Heat and Cold Pack | $35.95 |
| Lavender Wellness Trio | $44.95 |
| Relax and Unwind Set | $28.95 |
| Refresh Bath Set | $43.95 (SOLD OUT) |

**Bath and Body:**
| Product | Price (AUD) |
|---|---|
| Nourish Body Oil | $19.95 |
| Sleep Well Pillow Mist | $17.95 |
| Be Calm Lavender Roll-on | $14.95 |
| Pure Lavender Essential Oil | $19.95 |
| Lavender Grosso Essential Oil | $17.95 |
| Refresh Lavender Shower Steamer | from $7.95 (SOLD OUT) |
| Relax Lavender Bath Salts | from $9.95 |
| Handcrafted Lavender Soap | from $7.95 |
| Gentle Bubbles | $7.95 |
| Lavender Soap and Towel Set | $18.95 |

**Gourmet Food:**
| Product | Price (AUD) |
|---|---|
| Pure Honey | from $9.95 |
| Lavender Rock Candy | $9.95 |
| Lavender Tea | $9.95 (SOLD OUT) |
| Lavender Simple Syrup | $11.95 (SOLD OUT) |
| Culinary Lavender | $9.95 (SOLD OUT) |

**Home Décor and Fragrance:**
| Product | Price (AUD) |
|---|---|
| Unwind Lavender Candle | from $19.95 |
| Dried Lavender and Rose Bouquet | $42.95 |
| Dried Lavender Bunch | $24.95 |
| Dried Lavender and Wheat | $34.95 |
| Lavender Eye Pillow | $27.95 |
| Dried Lavender Sachets | $22.95 |
| Dried Lavender and Handmade Ceramic Vase | $40.95 |
| Lavender Linen Tea Towels | from $15.95 |
| Handcrafted Brooch | $27.95 |
| Handmade Ceramic Oil and Wax Burner with Pure Lavender Oil | $40.95 |

**Other:**
| Product | Price (AUD) |
|---|---|
| Lavender eGift Card | from $18.49 |
| Send As Gift (add-on) | $4.95 |

**Price range:** $4.95 (gift add-on) — $90.95 (gift set)
**Free shipping:** orders over $120 AUD
**Promo popup:** "GIFTING SOMEONE SPECIAL? Add on 'Send As Gift' to your Purchase!"

---

#### 7. Freebies (`/pages/freebies`)
**Title:** (not visited — inferred from links)

| Block | Type | Content |
|---|---|---|
| Lead magnet | Free guide | "How to Grow Lavender at Home" — downloadable PDF |
| CTA | "I WANT IT" button | Email capture for free guide |

---

#### 8. Blog (`/blogs/lavender`)
**Categories:** WELLNESS · NEWS · GARDENING

**Recent posts:**
- "Why Our Winter Honey Is the Natural Remedy Your Immune System Needs" (WELLNESS)
- "Sleep Like Never Before: How Lavender Pillow Mist Can Help You Drift Off Naturally" (WELLNESS)
- "A Touch of Provence in Broke: Lavender Fields in the Hunter Valley" (NEWS)
- "Run Through Fields of Purple at NSW's Lavender Farms" (NEWS)

---

### 4. User Flow Architecture

```
Homepage (/)
    │
    ├─[VISIT THE FARM]────────────────→ /pages/experience
    │                                       ├─[BOOK NOW — Honey Harvest] → Shopify checkout
    │                                       ├─[BOOK NOW — Beekeeping] → Shopify checkout
    │                                       └─[Lavender Field Walk] → SOLD OUT
    │
    ├─[EXPLORE COLLECTION]────────────→ /collections/all
    │                                       └─[Add to cart / Quick shop] → /cart → checkout
    │
    ├─[SHOP NOW — Gift Guide]─────────→ /collections/all
    ├─[MORE INFO — Photo Shoots]──────→ /pages/photoshoot
    │                                       └─booking contact (email/form)
    ├─[I WANT IT — Free Guide]────────→ /pages/freebies (email capture)
    ├─[Blog articles]─────────────────→ /blogs/lavender/{post-slug}
    └─[Newsletter signup]─────────────→ Shopify email list (10% off)

SHOP dropdown:
    ├─[Bath and Body]─────────────────→ /collections/bath-and-body
    ├─[Gourmet Food]──────────────────→ /collections/gourmet-food
    ├─[Gift Sets]─────────────────────→ /collections/gift-sets
    └─[Home Décor]────────────────────→ /collections/home-decor-and-fragrance

All pages footer:
    ├─[Instagram]──→ instagram.com/hunterlavenderfarm
    ├─[Facebook]───→ facebook.com/hunterlavenderfarm
    └─[Policies]───→ /policies/*
```

---

## PART II — TECHNICAL DESIGN BRIEF

### 1. Colour System

**Platform:** Shopify custom theme CSS variables (Propel Digital)
**Palette character:** Dual accent — medium purple primary + teal secondary on white base

| Role | Hex | CSS Variable | Usage |
|---|---|---|---|
| Button primary | #8a73b4 | --colorBtnPrimary | All primary CTA buttons |
| Button primary light | #a694c6 | --colorBtnPrimaryLight | Button hover state |
| Button primary dim | #7c62ab | --colorBtnPrimaryDim | Button active/pressed |
| Button text | #ffffff | --colorBtnPrimaryText | Text on primary buttons |
| Nav text | #6c3f99 | --colorNavText | All navigation links (dark purple) |
| Nav background | #ffffff | --colorNav | Header background |
| Body background | #ffffff | --colorBody | Page background |
| Body text | #767676 | --colorTextBody | All body text (medium gray) |
| Price | #1c1d1d | --colorPrice | Product prices |
| Announcement bar | #5394a6 | --colorToolbar | Teal announcement bar |
| Announcement text | #ffffff | --colorToolbarText | Text on announcement bar |
| Border | #e8e8e1 | --colorBorder | Card/section borders |
| Link/muted | #767676 | --colorLink | Secondary text, links |
| Sale tag | #ffce7b | --colorSaleTag | Sale/discount badges |
| Sale tag text | #6c3f99 | --colorSaleTagText | Text on sale badges |
| Savings text | #ff5c8d | --colorTextSavings | Discount savings label |
| Footer | #ffffff | --colorFooter | Footer background |
| Footer border | #767676 | --colorFooterBorder | Footer top border |
| Colour Scheme 1 bg | #5394a6 | --colorScheme1Bg | Teal section blocks |
| Colour Scheme 1 text | #ffffff | --colorScheme1Text | White text on teal |
| Colour Scheme 2 bg | #8a73b4 | --colorScheme2Bg | Purple section blocks |
| Colour Scheme 2 text | #ffffff | --colorScheme2Text | White text on purple |
| Colour Scheme 3 bg | #ffffff | --colorScheme3Bg | White section blocks |
| Colour Scheme 3 text | #b87969 | --colorScheme3Text | Terracotta text on white |

**Colour character:**
- Unique dual-accent: medium purple (#8a73b4) + teal (#5394a6) — unusual for a lavender farm
- Terracotta (#b87969) as scheme 3 text — warm earth contrast to cool purple/teal
- Body text (#767676 gray) — softer than black, lighter reading tone
- Sale label: amber (#ffce7b) + dark purple text — vibrant pairing
- No CSS variable lavender colour — purple is UI purple, not plant-inspired

**Colour system vs. others:**
- cotswoldlavender: deep grape 9-step scale → very different, richer
- lavenderfieldsforever: black/white only → opposite extreme
- indigolavender: 5-step purple → similar family but darker, more saturated
- hunterlavender: light purple (#8a73b4) + teal (#5394a6) = lightest, most contemporary palette

---

### 2. Typography

**Typeface system:** Single family — Montserrat throughout

| Role | Family | Weight | Size | Line-height | Letter-spacing | CSS Variable |
|---|---|---|---|---|---|---|
| Headings (all) | Montserrat | 700 | 32px base | 1.1 | 0.05em | --typeHeaderPrimary |
| Body text | Montserrat | 500 | 18px | 1.6 | 0.05em | --typeBasePrimary |
| H1 (computed) | Montserrat | 700 | 24px | 26.4px | 1.2px | — |
| H2 (computed) | Montserrat | 700 | 40px | 44px | 2px | — |
| Button | Montserrat | 700 | 20px | 28.4px | 1px | — |
| Nav | Montserrat | 500 | 18px | 28.8px | 0.9px | — |
| Body (computed) | Montserrat | 500 | 18px | 28.8px | 0.9px | — |

**Typography notes:**
- Single family Montserrat throughout — geometric sans, clean and modern
- Same approach as lavenderfieldsforever (Assistant) — monotype system
- Weight contrast between headings (700) and body (500) drives hierarchy
- Large body size: 18px — very comfortable reading, accessible
- Letter-spacing 0.05em consistently — subtle open tracking, airy feel
- Montserrat: more geometric and precise than Assistant — modern/startup feel
- No serif — purely contemporary; contrasts with essenso (serif display) and Indigo (double serif)

---

### 3. Layout

| Parameter | Value |
|---|---|
| Button radius | 3px (`--buttonRadius`) |
| Roundness (global) | 0px (`--roundness`) |
| Grid gutter | 22px (`--gridGutter`) |
| Page narrow width | 700px (`--pageNarrow`) |
| Page width padding | 40px (`--pageWidthPadding`) |
| Section padding | 60px (`--indexSectionPadding`) |
| Section header bottom | 40px (`--sectionHeaderBottom`) |
| Page top padding | 35px (`--pageTopPadding`) |
| Product tile margin | 10% (`--productTileMargin`) |
| Collection tile margin | 15% (`--collectionTileMargin`) |
| Swatch size | 40px |

**Layout notes:**
- Nearly sharp corners: button radius only 3px, global roundness 0px
- 40px page padding — comfortable breathing room
- 60px section padding — generous white space between sections
- Product tile at 10% margin — slightly inset from edges

---

### 4. Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | White header, purple nav text (#6c3f99), announcement bar above |
| On scroll | Likely sticky (Shopify theme default) |
| Mobile | Hamburger (`.nav-btn` pattern implied) |
| Cart | Icon → /cart page |
| Currency | Full global currency selector (150+ countries) |
| Dropdowns | 4 dropdowns: SHOP (5 items), ABOUT (2), VISIT (3), PHOTOS (3) |
| Search | Icon → /search page |
| Account | Icon → /account (Shopify accounts) |

---

### 5. Interactive Elements & Buttons

| Variant | Style | Usage |
|---|---|---|
| Primary CTA | Montserrat 700, purple (#8a73b4) fill, white text, 3px radius, 11px 25px padding | BOOK NOW, SHOP NOW, EXPLORE COLLECTION |
| "Quick shop" | Overlay on product card hover | Product grids |
| "Add to cart" | Standard Shopify | Product pages |
| "SOLD OUT" badge | Overlay on card | Unavailable products |
| Newsletter subscribe | Email input + Submit | Footer form |
| hCaptcha | Contact form protection | FAQ/Contact page |
| Multiselect currency | Dropdown | Header right |

**Experiences booking:** Sold as Shopify products in /collections/summer-experiences — standard Shopify checkout, no separate booking system.

---

### 6. Page Section Structure (Scroll Narrative)

| Section | CSS Scheme | Visual Treatment | Mood |
|---|---|---|---|
| Announcement bar | Scheme 1 (teal #5394a6) | High-contrast teal strip | Urgency/Info |
| Hero | Dark overlay on photo | Full-bleed photo + white text | Aspirational |
| Brand tagline | White | Text + CTA | Inviting |
| Season banner | Scheme 2 (purple #8a73b4) | Purple bg + white text | Season excitement |
| Field Walk / Experiences | White | Product cards | Conversion |
| Gift Guide | Scheme 3 or photo | Photo + CTA | Commerce |
| Blog preview | White | Article cards | Content/trust |
| Instagram | White | Photo grid | Social proof |
| Newsletter | Scheme 1 or 2 | Coloured bg + form | Conversion |
| Footer | White | Three-column links | Closure |

**Scroll narrative:** Three-scheme alternation (teal → purple → white → teal) creates visual rhythm. Not a chromatic crescendo — more of a brand-palette cycling pattern. Warmer and more playful than the monochrome-deepening style of cotswoldlavender.

---

### 7. Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero | Australian lavender fields, NSW countryside, Broke valley backdrop |
| Products | Clean product photography, white/minimal backgrounds |
| Season albums | Seasonal documentation — 3 years of photo albums (2022/2023/2024) |
| Experiences | Lifestyle — couples walking through fields, beekeeping activities |
| Photo shoots | Farm as backdrop for professional photography — paid sessions |
| Instagram feed | Mixed farm life + product lifestyle — @hunterlavenderfarm |
| Brand motif | No strong graphic motif — photography-led identity |
| Ceramic/artisan | Handmade ceramic vases, oil burners, brooches — artisan touch |

---

### 8. E-Commerce Components

| Component | Description |
|---|---|
| Platform | Shopify (Propel Digital custom theme) |
| Total products | 35 |
| Categories | Bath and Body · Gourmet Food · Gift Sets · Home Décor and Fragrance |
| Experiences | /collections/summer-experiences (5 experience-products) |
| Price range | $4.95 (gift add-on) – $90.95 (gift set) |
| Free shipping | Orders over $120 AUD |
| Gift wrap | "Send As Gift" add-on product ($4.95) |
| eGift card | Shopify native gift card (from $18.49) |
| Reviews | Klaviyo Reviews integration (`--kl-reviews-color-light-gray` CSS var present) |
| Currency | Full multi-currency (150+ countries in selector) |
| Sort options | Featured · Best selling · A-Z · Z-A · Price · Date |
| View options | Small / Large / List |
| Lead magnet | Free lavender growing guide (/pages/freebies — email capture) |
| Newsletter offer | 10% off first order |
| Photo session | Bookable via Shopify at $200.95 (2hr session implied) |

---

### 9. Key Brand Signals

| Signal | Implementation |
|---|---|
| First in Hunter Valley | Explicit claim — "first of its kind in the Hunter Valley" |
| Provence inspiration | Founders' honeymoon → lavender farm concept — romantic origin story |
| Season-driven | Southern hemisphere (Dec-Jan) — completely opposite to Northern sites |
| Couple-founders | Marianne and JR — personal story, named owners on About page |
| Hunter Valley context | Wine region, boutique vineyards, "award-winning wines" mentioned — premium tourist area |
| Local/Australian | "Proudly Australian Grown & Owned" — explicit patriotic claim |
| Educational content | Blog (WELLNESS/NEWS/GARDENING), free growing guide — content marketing |
| Beekeeping integration | Beekeeping for Beginners ($70.95), Honey Harvest ($40.95) — honey as secondary product and experience |
| Artisan products | Handmade ceramics, handcrafted brooch — artist/craft positioning |
| Future vision | Farm shop + café planned — shows growth trajectory, investment story |
| Photo as revenue | Professional photo sessions ($200.95) as bookable product |

---

### 10. Comparative Notes

| Dimension | cotswoldlavender | lavenderfieldsforever | essenso.az | indigolavender | loesshillslavender | hunterlavender |
|---|---|---|---|---|---|---|
| Platform | Shopify custom | Shopify Dawn | WordPress+ThemeREX | Wix | WordPress+WooCommerce | Shopify custom |
| Country | England | California | Azerbaijan | Michigan | Iowa | **Australia (NSW)** |
| Colour system | 9-step grape purple | Black/white | Cream+gold | Purple 5-step+navy | White+purple H2 | **Purple+teal+terracotta** |
| Typography | ivymode+Figtree | Assistant | halyard+DM Sans | Elsie+SourceSerif | PlayfairDisplay+OpenSans | **Montserrat only** |
| Hero type | Photo | Photo | Photo | Photo | **Video** | Photo |
| Navigation | 3 mega-dropdowns | 5 flat | 5 (1 dropdown) | 14+ items | 4 flat | **7 items, 4 dropdowns** |
| Products | 69, Shopify | 11, Shopify | 11, no price | 113, Wix | 35, WooCommerce | **35, Shopify** |
| Experiences | No | No | No | Yes (5 types) | Tea party/wedding | **5 types incl. beekeeping/yoga** |
| Entry | Paid (£7.75) | Free+photo pass | Free | $7.50 | Free | **Paid ticket (SOLD OUT) / Free at festivals** |
| Photo sessions | Photo policy page | Paid pass | No | $60/$100 | No | **$200.95 professional session** |
| Blog | No | No | 2 posts | How To+Recipes | No | **Active (WELLNESS/NEWS/GARDENING)** |
| Lead magnet | No | No | No | No | Mailing list | **Free lavender growing guide** |
| Beekeeping | No | No | No | No | No | **Yes — Honey Harvest + Beekeeping ($40–$70)** |
| Multi-currency | No | No | No | No | No | **Yes (150+ countries)** |
| Season timing | **June–July (N.hemisphere)** | June–July | Summer (no fixed season) | June–Aug | June–Aug | **Dec–Jan (S.hemisphere)** |
| Key difference | Most mature UK site | Minimal Californian | Pioneer Azerbaijani | Richest events | Video hero+craft market | **S.hemisphere pioneer, highest experience price point** |
