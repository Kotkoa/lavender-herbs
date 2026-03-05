# The Lavender Fields (Hampshire) — Site Architecture & Design Brief

**URL:** https://www.thelavenderfields.co.uk/
**Platform:** Wix + Wix Stores + Wix Members
**Business:** Family lavender farm, field visitor attraction, farm shop, coffee shop, online shop — Hampshire, England
**Address:** The Lavender Barn, Hartley Park Farm, Selborne Road, Alton, Hampshire, GU34 3HP
**Contact:** T: 01420 511146 · E: info@thelavenderfields.co.uk
**Legal:** English Hampshire Lavender Ltd. T/A Lavender Fields · Company Reg: 03789745 · VAT: 737334036
**Season / Hours:** Shop: Thu–Sat 10:00–16:00 (current winter) · Field: mid-June to mid-August · Closed Dec 19 – Feb 5 2026
**Social:** Facebook · Instagram (icons in header)

---

## PART I — SITE ARCHITECTURE

### 1. Site Map (Full Structure)

```
thelavenderfields.co.uk/
│
├── /                           → Homepage
│
MAIN NAVIGATION:
├── /about-us                   → About Us (team: Nick, Lyndsay, Sarah, Sally)
│
├── /all-about-lavender         → All About Lavender (Lavender vs. Lavandin editorial)
│   ├── /lavender-oil           → Lavender Oil
│   ├── /lavender-plants        → Lavender Plants (educational)
│   └── /culinary-cooking       → Culinary & Cooking
│
├── /shop-online-1              → Shop Lavender (main shop page)
│   ├── /hand-body              → Hand & Body
│   ├── /home-fragrance         → Home Fragrance
│   ├── /essential-oils         → Essential Oils
│   ├── /kitchen-culinary       → Kitchen & Culinary
│   ├── /gift-sets              → Lavender Fields Gift Sets
│   ├── /lavendergiftware       → Lavender Giftware
│   ├── /create-your-own        → Create Your Own Gift Set
│   ├── /all-products           → All Products
│   └── /lavender-plants-1      → Lavender Plants (shop)
│
├── /plan-your-visit            → Plan Your Visit (hub page)
│   ├── /our-shop-coffee-shop   → Our Shop & Coffee Shop
│   ├── /visit-the-field        → Visiting The Field (season info)
│   ├── /the-coffee-shop        → The Coffee Shop  // not in main nav, linked from plan page
│   ├── /commercial-photography → Professional Photography
│   ├── /artists-painters       → Artists & Painters  // not in main nav dropdown
│   └── /faqs                   → FAQ's
│
└── /contactus                  → Contact Us (form + directions + map)
│
FOOTER PAGES:
├── /terms-conditions           → Terms & Conditions
├── /delivery-returns           → Delivery & Returns
├── /privacy-policy             → Privacy Policy
└── /trade-enquiries            → Trade Enquiries
│
CART:
└── /cart                       → Cart (Wix Stores)
```

---

### 2. Global Layout

**Header / Navigation**
| Element | Description |
|---|---|
| Top bar | Email (mailto link) left + phone right |
| Logo | Landscape field image (small square) + "lavenderfields" wordmark ("lavender" dark, "fields" light grey) |
| Social | Facebook + Instagram icons (left side of header) |
| Cart | Wix cart icon with count (right side of header) |
| Container | Entire header framed with decorative purple border box (#7A6991) |
| Background | Light cream/warm white page bg (#F5F5F0 approx) with purple botanical line art illustrations on page margins |

**Primary Navigation**
| Item | Submenu items | URL |
|---|---|---|
| HOME | — | / |
| ABOUT US | — | /about-us |
| ALL ABOUT LAVENDER | LAVENDER OIL · LAVENDER PLANTS · CULINARY & COOKING | /all-about-lavender |
| SHOP LAVENDER | HAND & BODY · HOME FRAGRANCE · ESSENTIAL OILS · KITCHEN & CULINARY · LAVENDER FIELDS GIFT SETS · LAVENDER GIFTWARE · CREATE YOUR OWN GIFT SET · ALL PRODUCTS · LAVENDER PLANTS | /shop-online-1 |
| PLAN YOUR VISIT | OUR SHOP & COFFEE SHOP · VISITING THE FIELD · PROFESSIONAL PHOTOGRAPHY · FAQ's | /plan-your-visit |
| CONTACT US | — | /contactus |

> Type: flat top-level with multi-item dropdowns; UPPERCASE nav labels; 6 top-level items

**Footer**
| Element | Content |
|---|---|
| Legal links | Terms & Conditions · Delivery & Returns · Privacy · Trade Enquiries · FAQ's |
| Mailing list | Subscribe form (email input, "Subscribe Now" button) |
| Company address | Full registered address |
| Legal | Company Reg 03789745 · VAT 737334036 |
| Copyright | © Copyright 2026 Lavender Fields |
| Cookie | Wix cookie banner (Manage Settings / Accept) |

---

### 3. Pages — Detailed Description

#### 1. Homepage (`/`)
**Title:** Lavender Farm UK | Lavender Fields | Hampshire | England

| Block | Type | Content |
|---|---|---|
| Header | Static | Email + phone + social + logo + nav + purple border box |
| Page bg | Decorative | Very light cream, purple botanical line art illustrations in page margins |
| Hero | Photo | Full-width lavender field panoramic photo (field rows + Selborne Hanger woodland backdrop) |
| Intro text | Text | Welcome text — "fourth generation farmers", "English lavender since 1999", "local landmark" |
| Opening hours | Text | Current Thu–Sat 10–16, winter closure dates |
| Featured Products | H4 + product grid | 2 featured products: "Lavender Fields Backdoor Shoes" + "Lavender Bath & Shower" with "Shop Now" CTAs |
| Mailing list | Form | Email subscribe form, "Subscribe Now" button (brown fill #8F705E) |

#### Clickable Elements (Homepage)
| Element | Action |
|---|---|
| "Shop Now" (featured products) | → /product-page/[slug] |
| "Subscribe Now" | → Wix email list signup |
| Nav: SHOP LAVENDER | → /shop-online-1 |
| Cart icon | → /cart |

---

#### 2. About Us (`/about-us`)
**Title:** Lavender Fields | Hampshire | About Us

| Block | Type | Content |
|---|---|---|
| H1 "Lavender Fields, Hampshire" | Heading | Intro paragraph |
| Farm history | Text | Butler family at Hartley Park since early 1930s (W.P. Butler); lavender introduced 1999 by Tim & Anne Butler; Nick & Lyndsay took over January 2018; fifth generation (children) now in background |
| Current farming | Text | Arable: Wheat, Barley, Oats; last commercial hop growers in Hampshire (gave up 2017); lavender as diversification |
| Products | Text | Own essential oils + body/home fragrance range; "All products made in England" |
| Team | H1 per person + photo | Nick · Lyndsay · Sarah · Sally |

---

#### 3. All About Lavender (`/all-about-lavender`)
**Title:** All About Lavender | Lavender Fields | Hampshire

| Block | Type | Content |
|---|---|---|
| H1 "Discover Lavender" | Heading | |
| Lavender vs. Lavandin | H2 + text | Key differences: visual, essential oil yield, chemical composition, scent character |
| Visual variation | H2 | Lavandin larger, longer spikes, flowers later |
| Essential oils | H2 | Lavandin 50% more oil yield, 7–12% camphor, more powerful; lavender floral, sweet, delicate |
| Making scents | H2 | Camphor = stronger/medicinal vs. lavender's floral sweetness |
| Burning up | Text | Lavender only for burns (camphor in lavandin unsuitable for burns) |

Variety grown: **Grosso variety** (Lavandula x intermedia lavandin)

Sub-pages:
- /lavender-oil — detailed oil information
- /lavender-plants — plant educational info
- /culinary-cooking — culinary uses

---

#### 4. Shop Lavender — All Products (`/all-products`)
**Title:** Online Shop | All Products | Lavender Fields

Partial product list (first 20 of more — "Load More" pagination):

**NEW products:**
| Product | Price |
|---|---|
| Lavender Fields Tea Towel | £9.00 |
| Lavender Fields Double Oven Glove | £23.50 |
| Lavender Fields Apron | £18.50 |
| Lavender Fields Classic Clog (Backdoor Shoes) | £34.95 |

**Giftware:**
| Product | Price |
|---|---|
| Lavender Fields Tote Bag | £5.50 |
| Lavender Pendant Necklace | £17.95 |
| Lavender Drop Earrings | £14.95 |
| Lavender Brooch | £17.95 |
| Bee Pendant Necklace | £15.95 |
| Bee Stud Earrings | £13.95 |
| Bee Charm Bracelet | Out of stock |
| Bumble Bee Brooch | £15.95 |
| Lavender Fields Magnet | £3.75 |
| Lavender Fields Coaster | £3.00 |
| Lavender Fields Notelets (10 pack) | £6.00 |

**Body/Beauty:**
| Product | Price |
|---|---|
| Lavender Lip Butter | £6.00 |
| Lavender Bath Essence | £16.00 |

**Essential Oils:**
| Product | Price |
|---|---|
| Premium English Lavender Essential Oil 10ml | £9.50 |
| Pure English Lavender Essential Oil | £7.95 |
| Pure English Lavandin Essential Oil | £6.95 |

Shop categories: HAND & BODY · HOME FRAGRANCE · ESSENTIAL OILS · KITCHEN & CULINARY · LAVENDER FIELDS GIFT SETS · LAVENDER GIFTWARE · CREATE YOUR OWN GIFT SET · LAVENDER PLANTS

Special feature: **/create-your-own** — custom gift set builder (unique among all 11 sites)

---

#### 5. Plan Your Visit (`/plan-your-visit`)
**Title:** Plan Your Visit | Lavender Fields | Hampshire

Hub page with 5 section cards linking to:
- OUR SHOP → /our-shop-coffee-shop
- THE FIELD → /visit-the-field
- THE COFFEE SHOP → /the-coffee-shop
- PROFESSIONAL PHOTOGRAPHY → /commercial-photography
- ARTISTS & PAINTERS → /artists-painters

---

#### 6. Our Shop & Coffee Shop (`/our-shop-coffee-shop`)
**Title:** OUR SHOP & COFFEE SHOP | Lavender Fields

| Block | Content |
|---|---|
| Shop description | Lavender products (own range) + gardening tools, giftware, stationery, oil burners, toys; lavender plants Apr–Sept |
| Free WiFi + free parking | Mentioned |
| Current hours | Thu–Sat 10–16 |
| Coffee shop | Small (handful of tables); teas, coffees, cold drinks, cakes; cream teas available in July |
| Picnic | Permitted in peak season (dedicated grassed area, no benches — bring blanket/chair) |

---

#### 7. Visiting The Field (`/visit-the-field`)
**Title:** Visit The Field | Lavender Fields | Hampshire

| Block | Content |
|---|---|
| Season status | "The fields are now closed for this season" (updated 1 Dec 2025) |
| Reopening | Shop: Thu 5th February 2026 |
| Field season | Blooming mid-June (early varieties) to mid-August |
| Page update date | 1st December 2025 |

---

#### 8. Professional Photography (`/commercial-photography`)
**Title:** Photography | Lavender Fields | Hampshire

| Block | Content |
|---|---|
| Venue offer | "Colourful backdrop for professional photo shoots, fashion shoots and filming during flowering season" |
| Booking | Online booking system — "not currently open for the 2026 season" |
| Rules | All sessions must be booked and paid online beforehand · Drones strictly prohibited · Private farm land, no public right of way |
| Filming | Contact for times and fees: 01420 511146 / info@thelavenderfields.co.uk |
| Credit | "Images Courtesy of Tina Bolton Photography" |

---

#### 9. FAQ's (`/faqs`)
**Title:** FAQs | Lavender Fields | Hampshire

| Question | Answer |
|---|---|
| When is lavender in bloom? | Mid-June (early varieties) to mid-August |
| Is shop only open during lavender season? | No, open February to December |
| Do you have a café? | Small coffee shop — teas, coffees, cold drinks, cakes |
| How much is entry (2025)? | Adults £5.50 · Children 2–16 £3.00 (includes bug hunting kit) · Under 2s free |
| Free tickets for carers? | No. "Our aim is to keep prices as low as possible" |
| Wheelchair friendly? | Shop, patio and fields — yes (reasonably level); accessible toilets + nappy changing |
| Tickets in advance? | No — buy on arrival at the shop |
| Parking? | Free, lots of spaces; gates locked at closing time |
| Dogs allowed? | Yes, on-lead at all times, clear up mess |
| Picnic in fields? | Yes — dedicated grassed area; bring blanket/chair |
| Can I pick lavender? | No picking at any time |
| Photography in fields? | Personal use free for paying visitors; commercial must be booked in advance |
| Drones? | No, strictly prohibited at all times |

---

#### 10. Contact Us (`/contactus`)
**Title:** Contact Us | Lavender Fields | Hampshire

| Block | Content |
|---|---|
| Address | The Lavender Barn, Hartley Park Farm, Selborne Road, Alton, Hampshire GU34 3HP |
| Contact | T: 01420 511146 · E: info@thelavenderfields.co.uk |
| Hours | Thu–Sat 10–16 (current) |
| Contact form | Name · Email · Subject · Message |
| Directions by road | 3 miles SE of Alton on B3006; signposted off A31 at B3006 junction (Selborne direction) |
| Directions by bus | Bus 38 from Alton / Petersfield / Clanfield — stops outside farm |
| Mailing list | Separate email subscribe widget at bottom |

---

### 4. User Flow Architecture

```
Homepage (/)
    │
    ├─[Shop Now (featured product)]──────────→ /product-page/[slug]
    │                                              └─[Add to Cart]──→ /cart
    │
    ├─[Nav: SHOP LAVENDER + dropdown]────────→ /all-products, /hand-body, /essential-oils etc.
    │
    ├─[Nav: PLAN YOUR VISIT]─────────────────→ /plan-your-visit
    │                                         ├─[OUR SHOP]──→ /our-shop-coffee-shop
    │                                         ├─[THE FIELD]─→ /visit-the-field
    │                                         ├─[PHOTOGRAPHY]→ /commercial-photography
    │                                         └─[FAQ's]─────→ /faqs
    │
    └─[Nav: CONTACT US]──────────────────────→ /contactus
                                                └─[Contact form]──→ email inquiry

All pages:
    ├─[Subscribe Now]────→ Wix email mailing list
    ├─[Social icon]──────→ Facebook / Instagram (external)
    └─[Footer links]─────→ /terms-conditions · /delivery-returns · /privacy-policy · /trade-enquiries
```

---

## PART II — TECHNICAL DESIGN BRIEF

### 1. Colour System

**Source:** Wix `--color_N` CSS variables + computed UI colours

**Brand accent (UI-level):**
| Role | Hex | RGB source | Usage |
|---|---|---|---|
| Brand purple / header border | #7A6991 | rgb(122,105,145) | Header box border, nav dropdown bg, cart button bg (`--bg`, `--brd`, `--bgDrop`) |
| Button primary / action | #8F705E | rgb(143,112,94) | CTA buttons (Subscribe Now, Shop Now), `--color_18` = `--wst-color-action` |
| Page background | ~#F5F3EF | approx (warm cream) | Body background — very light warm white |
| Primary text | #1A1A1A | rgb(26,26,26) `--color_15` | Headings, body |
| Secondary text | #565656 | rgb(86,86,86) `--color_14` | Subtext, labels |

**Full Wix colour palette (5 families, 5 steps each):**

Neutral:
| Step | RGB | Hex |
|---|---|---|
| 1 (lightest) | 255,255,255 | #FFFFFF |
| 2 | 212,211,211 | #D4D3D3 |
| 3 | 153,151,151 | #999797 |
| 4 | 86,86,86 | #565656 |
| 5 (darkest) | 26,26,26 | #1A1A1A |

Warm Brown:
| Step | RGB | Hex |
|---|---|---|
| 1 | 218,202,193 | #DACAC1 |
| 2 | 180,161,150 | #B4A196 |
| 3 | 143,112,94 | **#8F705E** ← button/action |
| 4 | 95,75,63 | #5F4B3F |
| 5 | 48,37,31 | #30251F |

Green:
| Step | RGB | Hex |
|---|---|---|
| 1 | 209,230,184 | #D1E6B8 |
| 2 | 177,204,144 | #B1CC90 |
| 3 | 131,179,73 | #83B349 |
| 4 | 87,119,49 | #577731 |
| 5 | 44,59,24 | #2C3B18 |

Pink-Mauve:
| Step | RGB | Hex |
|---|---|---|
| 1 | 249,195,230 | #F9C3E6 |
| 2 | 242,138,206 | #F28ACE |
| 3 | 182,104,154 | #B6689A |
| 4 | 121,69,103 | #794567 |
| 5 | 61,35,51 | #3D2333 |

Purple-Magenta:
| Step | RGB | Hex |
|---|---|---|
| 1 | 225,179,209 | #E1B3D1 |
| 2 | 196,136,175 | #C488AF |
| 3 | 166,65,130 | #A64182 |
| 4 | 110,43,87 | #6E2B57 |
| 5 | 55,22,43 | #37162B |

**Colour character:** The dominant UI colour is a muted purple-grey (#7A6991) used purely as a decorative border element — unusual choice (not in the Wix palette). The actual primary action colour is warm brown (#8F705E) for buttons. The site does not use purple lavender for buttons — earthy brown is the CTA colour. Lavender purple appears only in decorative/structural contexts.

---

### 2. Typography

**Source:** Wix font vars (`--wix-font-*`)

| Role | Family | Weight | Size | Line-height |
|---|---|---|---|---|
| Title / H1 | EB Garamond | 400 | 80px | 1.2em |
| Heading-XL | EB Garamond | 400 | 59px | 1.2em |
| Heading-M | EB Garamond | 400 | 34px | 1.2em |
| Heading-S | EB Garamond | 400 | 23px | 1.2em |
| Page-title / H2 | Open Sans | 400 | 28px | 1.2em |
| Heading-L | Open Sans | 400 | 40px | 1.2em |
| Body-L | Open Sans | 400 | 15px | 1.2em |
| Body-M / Menu | Open Sans | 400 | 13px | 1.2em |
| Body-S | Open Sans | 400 | 11px | 1.2em |

**Font families:**
- **EB Garamond** — Google Fonts classical serif. Used for large display headings (Title 80px, XL 59px). Elegant, literary feel.
- **Open Sans** — Google Fonts humanist sans. Used for page titles, body text, navigation, and all UI elements.

**Character:** Classic serif/sans pairing — EB Garamond is a refined, bookish old-style serif that creates heritage and quality associations. Open Sans provides clean neutrality. All heading/body weights at 400 (normal) — no bold weight emphasis, elegant restraint.

---

### 3. Layout

| Parameter | Value |
|---|---|
| Site width | 980px (`--site-width`) |
| Platform | Wix (full-stack, no CSS grid framework) |
| Header | Decorative purple border box framing entire header area |
| Page background | Light cream-white with botanical line art decorative illustrations in margins |
| Product grid | Wix Stores grid, Quick View enabled |
| Pagination | "Load More" button on product pages |
| Nav height | ~369px full header (`--header-height: 369px`) — unusually tall |

---

### 4. Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | White/cream bg with purple decorative border box |
| On scroll | Static (no scroll-based changes detected) |
| Mobile | Wix mobile hamburger |
| Cart | Wix cart icon with item count |
| Dropdowns | Multi-item dropdowns (up to 9 items for SHOP LAVENDER) |
| Dropdown bg | Semi-transparent purple (#7A6991, 43% opacity via `--alpha-bgDrop: 0.43`) |

---

### 5. Interactive Elements & Buttons

| Variant | Style | Colour | Usage |
|---|---|---|---|
| Primary CTA | Filled button | #8F705E bg / #FFFFFF text | "Subscribe Now", "Shop Now" |
| Nav hover | Purple bg tint | #7A6991 | Nav item hover |
| Quick View | Wix overlay | — | Product cards |
| Wix members | Profile widget | — | Member area (active) |

**Animation:** Wix default transitions — `--transition-duration: 1000ms` (unusually long, 1s)

---

### 6. Page Section Structure (Scroll Narrative)

| Section | Visual Treatment | Mood/Purpose |
|---|---|---|
| Header | White + purple border box | Brand identity / structure |
| Hero | Full-bleed field panorama photo | Arrival / Place |
| Intro text | Cream bg + body text | Heritage / Context |
| Opening hours | Cream bg + structured text | Practical information |
| Featured Products | Cream bg + product cards | Commerce |
| Subscribe | Cream bg + form | Retention |
| Footer | Cream bg + links | Legal / Navigation |

**Scroll narrative:** Flat — all cream-white. No chromatic deepening. Decorative botanical illustrations persist in margins throughout. Design is consistent and calm rather than dramatic.

---

### 7. Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero | Wide-angle field panorama with rows of lavender + English countryside + Selborne Hanger trees |
| Photography credit | "Images Courtesy of Tina Bolton Photography" (commercial photography page) |
| Team photos | Individual headshots for Nick, Lyndsay, Sarah, Sally |
| Brand motif | **Purple botanical line art illustrations** (lavender sprigs, leaf sprays, flower clusters) as page background decoration — most distinctive visual element of the site |
| Bee motif | Bee-themed jewellery products (Bee Pendant, Bee Earrings, Bee Brooch) — secondary brand motif |
| Video | None detected |

---

### 8. E-Commerce Components

| Component | Description |
|---|---|
| Platform | Wix Stores (native, not third-party) |
| Cart | Wix native cart, in-site |
| Product pages | Wix /product-page/[slug] pattern |
| Quick View | Enabled on product grids |
| Load More | Pagination on /all-products |
| Create Your Own | Custom gift set builder (/create-your-own) — unique configurator |
| Currency | GBP (£) — UK only |
| Delivery | /delivery-returns policy page exists |
| Price range | £3.00 (coaster) – £34.95 (clog) |
| Own-brand products | Yes — body care, home fragrance, essential oils made from own-grown lavender |
| Trade | /trade-enquiries page for wholesale buyers |

---

### 9. Key Brand Signals

| Signal | Implementation |
|---|---|
| Generational heritage | "Fourth generation farmers" + "Butler family since early 1930s" + "fifth generation in background" |
| English origin | "All of our products are made in England" |
| Own-source ingredients | "Products made using the lavender we grow here on the farm" |
| Place identity | "Hartley Park Farm", "Selborne Hanger", "Hampshire countryside" — repeated throughout |
| Last hop growers | "Last commercial hop growers in Hampshire" (2017) — unique heritage claim |
| Educational content | Full "All About Lavender" section explaining Lavandula vs. Lavandin differences |
| Accessibility | "Aim is to keep prices as low as possible" (re: carer tickets) |
| Photography invitation | Allows personal photography for paying visitors |
| Botanical aesthetic | Purple line art lavender illustrations as page decor — brand differentiator |
| Bee motif | Bee jewellery products echo natural/ecological farming identity |

---

### 10. Comparative Notes

| Dimension | Prev. avg (10 sites) | thelavenderfields.co.uk |
|---|---|---|
| Colour family | Purple dominant UI | Purple only in decorative border (#7A6991); button/CTA is warm brown (#8F705E) — most unusual CTA colour of all sites |
| Typography | Display + body pairings | EB Garamond + Open Sans — classical serif/sans, most literary pairing |
| Layout | 980–1200px | 980px (Wix standard) |
| Navigation | 4–7 items | 6 items with multi-level dropdowns (up to 9 items in SHOP) |
| Hero | Full-bleed photo standard | Standard field panorama |
| Scroll narrative | Mostly flat | Flat cream-white with botanical margin illustrations |
| Platform | WordPress, Wix, Shopify, ASP | Wix + Wix Stores |
| Shop | Internal or external Square | Wix Stores (internal) + GBP pricing |
| Entry pricing | Variable | Adults £5.50 / Children £3.00 — among lowest entry prices of all sites |
| Bug hunting kit | Not offered elsewhere | Children's entry includes bug hunting kit — unique child engagement detail |
| Brand motif | Photography-first | Botanical line art illustrations as page decor — most decorative site design |
| Create your own | Not present elsewhere | Custom gift set builder (/create-your-own) — unique feature |
| Education | Basic on most | Full "All About Lavender" editorial section with Lavandula vs. Lavandin explanation |
| Heritage claim | Farm history, founders | 4th generation farmers + "last commercial hop growers in Hampshire" |
| Team names | Usually 2 owners | 4 named team members with photos |
| Artists | Not present elsewhere | /artists-painters page for visiting plein air artists — unique |
