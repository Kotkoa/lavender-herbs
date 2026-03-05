# Lavender Fields DE — Site Architecture & Design Brief

**URL:** https://www.lavenderfieldsde.com/
**Platform:** WordPress + Elementor + JetPlugins + Depicter (hero slider)
**Business:** Agrotourism lavender farm, boutique spa, event venue, café — Delaware's first lavender farm
**Address:** 28376 Martins Farm Road, Milton, DE 19968
**Contact:** 302-684-1514 (farm) · 302-236-5437 (Cait, events) · wildflower@lavenderfieldsde.com (café) · lavenderbloomroom@gmail.com (spa)
**Legal:** Lavender Fields at Warrington Manor LLC
**Season / Hours:** Wed–Sun 10–4 (regular) · Thu–Sun 11–3 (winter) · All weekends December 11–2
**Social:** Facebook (LavenderFieldsAtWarringtonManor) · Instagram (@lavenderfieldsmiltonde)
**Shop:** External Square — https://lavender-fairy.square.site/

---

## PART I — SITE ARCHITECTURE

### 1. Site Map (Full Structure)

```
lavenderfieldsde.com/
│
├── /                           → Homepage
│
MAIN NAVIGATION:
├── /history/                   → About (farm history 1684–present)
├── /about/                     → Visit The Farm (hours, rules, photo policy)
├── /wildflower-cafe/           → Wildflower Café (farm-to-table café)
├── /the-bloom-room/            → The Bloom Room (massage & esthetics spa)
├── /book-event/                → Party At The Farm (events booking)
│   └── /book-event/#Events     → Upcoming Events (anchor on same page)
│
External links:
├── https://lavender-fairy.square.site/           → Online Shop (Square)
├── https://www.facebook.com/LavenderFieldsAtWarringtonManor
└── https://www.instagram.com/lavenderfieldsmiltonde/
```

**Notes:**
- Shop is fully external (Square), not hosted on main domain
- No policy/legal pages in footer
- No blog
- No dedicated gallery page (photos embedded on Visit page)
- Powered by C.A.N. (canwebmanagement.com) — local web agency

---

### 2. Global Layout

**Header / Navigation**
| Element | Description |
|---|---|
| Logo | Text/image, top-left, links to / |
| Search | JetBlocks search popup (purple icon #421c73) |
| Social icons | Facebook + Instagram in header |
| Cart | None (shop is external) |
| Background | Transparent over hero |

**Primary Navigation**
| Item | Submenu | URL |
|---|---|---|
| About | — | /history/ |
| Visit The Farm | — | /about/ |
| Wildflower Café | — | /wildflower-cafe/ |
| The Bloom Room | — | /the-bloom-room/ |
| Party At The Farm | — | /book-event/ |
| Upcoming Events | — | /book-event/#Events |
| Shop | — | https://lavender-fairy.square.site/ (external) |

> Type: flat, 7 items, no dropdowns, transparent header

**Footer**
| Element | Content |
|---|---|
| Address | 28376 Martins Farm Road, Milton, DE 19968 |
| Phone | 302-684-1514 |
| Social | Facebook · Instagram (muted grey-purple icon bg #8A7E88) |
| Credit | Powered by C.A.N. |
| Newsletter | Subscribe form on homepage (separate section, not in footer) |

---

### 3. Pages — Detailed Description

#### 1. Homepage (`/`)
**Title:** Lavender Fields – Lavender Fields at Warrington Manor

| Block | Type | Content |
|---|---|---|
| Hero | Depicter slider | Full-bleed photo, H1 "Welcome to Lavender Fields", subtext "Delaware's first lavender farm is open Wed-Sun from 10-4", CTA "Shop Online" → Square |
| Notice banner | Text | "No Smoking or Pets on Property!" |
| History teaser | Text + CTA | H2 "Over 300 Years Of History", brief text, "LEARN MORE" → /history/ |
| Garden gallery | Photo grid | H2 "Explore Our Gardens", credit "Richard Holaday Photography" |
| Shop teaser | Text + CTA | H2 "Visit Our Shop", description of products (soaps, lotions, scrubs etc.), "ORDER ONLINE" → Square |
| Events CTA | Text + buttons | H2 "Book An Event With Us!", description, "LEARN MORE" → /book-event, "CALL NOW" → tel:3026841514 |
| Testimonials | Review carousel | H2 "What People Say", 4 Google reviews, credit "Photography by Rebecca Renner Portraits" |
| Newsletter | Email form | H2 "Subscribe to our Newsletter" |

#### Clickable Elements (Homepage)
| Element | Action |
|---|---|
| "Shop Online" (hero) | → https://lavender-fairy.square.site/ |
| "LEARN MORE" (history) | → /history/ |
| "ORDER ONLINE" (shop) | → https://lavender-fairy.square.site/ |
| "LEARN MORE" (events) | → /book-event/ |
| "CALL NOW" | → tel:3026841514 |
| Address link | → Google Maps |

---

#### 2. About / History (`/history/`)
**Title:** About – Lavender Fields

| Block | Type | Content |
|---|---|---|
| H2 "History of the Farm" | Heading | Long-form history text |
| Farm history | Text | From 1684 William Penn patent → fruit farm 1850s → dairy 1958 → lavender from 1994 (Pauline Petitt, "Lavender Lady") → current owners 2002 |
| USLA badge | H4 | "Member of United States Lavender Growers Association (750+ members)" |

**History summary:**
- 1684: William Penn patent, Molestine & Kipstaven
- 1770–1946: Warrington family ownership
- 1850s: 3,400 peach trees, grain, sugarcane
- 1958: W. Weldon & Elizabeth Brittingham (dairy farm, silos added)
- 1994: Pauline Petitt purchased, renamed "Manor at Cool Spring B&B and Lavender Farm", first lavender plants
- 2002: Marie Mayor & Sharon Harris purchased; Mary Ann Etu joined until 2015
- Current: Cait (operator)

---

#### 3. Visit The Farm (`/about/`)
**Title:** Visit The Farm – Lavender Fields

| Block | Type | Content |
|---|---|---|
| H3 "Visit The Farm" | Heading | Welcome text |
| Rules | Text list | No pets · No smoking · No speeding · No littering |
| Check-in policy | Text | All guests check in at The Cottage Store |
| Grounds access | Text | Free walk-through when open (contingent on events/staffing) |
| Amateur photography | Text | Free for guests (phone photos, candid) |
| Professional photography | Text | $50/hr, must be from exclusive vendor list, booked in advance, 10am–4pm |
| Groups | Text | 10+ require advanced booking; school groups require permission |
| Food policy | Text | Outside food strictly prohibited |
| Events CTA | Text | → /book-event/ |
| Café CTA | Text | → /wildflower-cafe/ |
| Winter Hours | Text | Thu–Sun 11–3 |

---

#### 4. Wildflower Café (`/wildflower-cafe/`)
**Title:** Wildflower Café – Lavender Fields

| Block | Type | Content |
|---|---|---|
| H3 "Wildflower Cafe'" | Heading | |
| Description | Text | Farm-to-table grab & go, established 2024 by Spieker-Gee family |
| Menu items | Text | House-blended teas · Gaia coffee · Kin Euphoric mocktails · kombucha · baked goods · seasonal sandwiches · quiche |
| Seating | Text | 2 tables for 4 indoors, ample outdoor seating |
| Hours | Text | 11–2, all weekends in December |
| Private tea party | Text | Email wildflower@lavenderfieldsde.com to reserve |

---

#### 5. The Bloom Room (`/the-bloom-room/`)
**Title:** The Bloom Room – Lavender Fields

| Block | Type | Content |
|---|---|---|
| H3 "The Bloom Room" | Heading | Intro: bodywork, energy healing, holistic aesthetic services |
| Contact CTA | Text | lavenderbloomroom@gmail.com + "Schedule Appointment" button |
| Massage services | Text sections | 5 massage types |
| Esthetic services | Text sections | 4 facial/brow services |
| Practitioners | H3 per person | Rachel Haas LMT · Cheyenne Luck Esthetician · Ky Elliott LMT |

**Massage services:**
| Service | Description |
|---|---|
| Swedish Massage | Long flowing strokes, heated table, hot towel, infrared, aromatherapy |
| Integrated/Deep Tissue | Therapeutic + deep tissue, specific chronic pain relief |
| Lavender Bliss Massage | Swedish + Lavender Fields massage oil/mist, warm lavender towels |
| Cupping Massage | Suction therapy + fascia release, IMMT technique |
| Mama Love Prenatal | Prenatal-safe, slow and intentional |

**No-charge inclusions:** infrared heat lamp, hot stones, Chinese herbal liniment/balm, CBD lotion, aromatherapy, hot towels, heated table

**Esthetic services:**
| Service | Description |
|---|---|
| The DeLucks | Custom facial with extractions, massage, mask |
| Bloomlight Therapy | DeLucks + 15 min LED light therapy |
| Purple Haze Glow | Dermaplaning + herbal toner |
| Brow Shape + Tint / Brow Lamination / Wax | Brow services |

---

#### 6. Party At The Farm / Upcoming Events (`/book-event/`)
**Title:** Book Event – Lavender Fields

| Block | Type | Content |
|---|---|---|
| H2 "Events at Lavender Fields" | Heading | Tagline: "Whimsical · Fairytale · Groovy · One-of-a-Kind" |
| Contact | Text | "For all bookings, Contact Cait directly: 302-236-5437" |
| What We Host | Text sections | Garden parties, indoor micro-events, micro weddings, photography |
| Booking form | Elementor form | Fields: Name, [field_1355d33], Phone, Email, Event date (date picker), [field_6c0986e] (number), Message |
| H2 "Upcoming Events" | Heading | Current events list |
| Event item | H3 | "Talk Tour & Sachet Workshop — Every Wednesday" → Square ticketing |

**Event types hosted:**
| Type | Capacity | Notes |
|---|---|---|
| Garden Party / Outdoor | Unspecified | Bridal/baby showers, seasonal tea parties, birthdays, picnics |
| Indoor Micro-Events | Up to 15 guests | Baby/bridal showers, children's tea parties, "Fancy Nancy parties" |
| Micro Weddings | Up to 50 guests | SELECT availability, ceremony + reception |
| Photography Sessions | Individual | Booked via Cait, fees to nonprofit, requires advance booking |

---

### 4. User Flow Architecture

```
Homepage (/)
    │
    ├─[Hero "Shop Online"]──────────────────→ lavender-fairy.square.site (external)
    │
    ├─[History "LEARN MORE"]───────────────→ /history/
    │
    ├─[Shop "ORDER ONLINE"]────────────────→ lavender-fairy.square.site (external)
    │
    ├─[Events "LEARN MORE"]────────────────→ /book-event/
    │                                              └─[Booking form]──→ email inquiry
    │                                              └─[Workshop link]──→ Square ticketing
    │
    └─[Events "CALL NOW"]──────────────────→ tel:3026841514

Nav → /about/ → "Party at the Farm!" → /book-event/
Nav → /about/ → "Wildflower Café!" → /wildflower-cafe/
Nav → /the-bloom-room/ → "Schedule Appointment" → lavenderbloomroom@gmail.com

All pages:
    ├─[Social icon]──→ Facebook / Instagram (external)
    └─[Shop]─────────→ lavender-fairy.square.site (external)
```

---

## PART II — TECHNICAL DESIGN BRIEF

### 1. Colour System

**Source:** Computed styles (no custom CSS colour vars — Elementor defaults not customised)

| Role | Hex | Computed | Usage |
|---|---|---|---|
| Page background | #FFFFFF | rgb(255,255,255) | All pages |
| Body text | #3B3D42 | rgb(59,61,66) | Body copy |
| Nav text | #44484D | rgb(68,72,77) | Navigation links |
| Headings (H2–H3) | #000000 | rgb(0,0,0) | Section headings |
| Hero text (H1) | #FFFFFF | rgb(255,255,255) | Over photo |
| Social icon bg (footer) | #8A7E88 | rgb(138,126,136) | Facebook/Instagram icons |
| Social icon bg (header) | #F5EFF0 | rgb(245,239,240) | Header social icons |
| Search icon / accent | #421C73 | rgb(66,28,115) | JetBlocks search button only |
| Elementor global primary | #6EC1E4 | (unused in visible UI) | Default, not applied |
| Elementor global accent | #61CE70 | (unused in visible UI) | Default, not applied |

**Colour character:** Near-monochrome black/white. Photography provides all colour. The only brand purple (#421C73) appears only in the search icon — not a dominant UI colour. Social icon bg is a muted mauve-grey (#8A7E88), likely closest to the brand accent in the UI.

---

### 2. Typography

| Role | Family | Weight | Size | Line-height | Letter-spacing | Colour |
|---|---|---|---|---|---|---|
| H1 (hero) | LoveSeed | 400 | 90px | 81px (0.9) | normal | #FFFFFF |
| H2 / H3 | LoveSeed | 400 | 50px | 69.7px (1.39) | 1.8px | #000000 |
| Body | Open Sans | 300 | 14px | 22.4px (1.6) | normal | #3B3D42 |
| Nav | Open Sans | 300 | 14px | 22.4px | normal | #44484D |
| Buttons (Elementor) | Roboto | 900 | 16px | 26px | 1px | #421C73 |

**Font families:**
- **LoveSeed** — custom decorative/script display font (not Google Fonts, not Adobe Fonts — appears to be a purchased decorative typeface or locally hosted). Used for all headings exclusively. Organic, floral, slightly handwritten character.
- **Open Sans** — Google Fonts. All body text, navigation, footer.
- **Roboto** — Elementor default globals. Button typography (though actual visible buttons may inherit other styles).
- **Playfair Display** — present in font stack (found in computed fonts array) but usage not confirmed in primary UI.

**Character:** Heavy contrast between whimsical display (LoveSeed) and neutral utility (Open Sans 300). Ultra-light body weight (300) creates airy, delicate feel.

---

### 3. Layout

| Parameter | Value |
|---|---|
| Max page width | 1140px (--container-max-width) |
| Page builder | Elementor |
| Hero | Full-bleed Depicter slider |
| Section spacing | ~20px (Elementor --widgets-spacing) |
| Grid gap | 20px (--widgets-spacing-column) |
| Card corner radius | Not specified (no --buttonRadius found) |
| Nav height | ~60px (estimated) |
| Layout type | Full-width sections, white bg, no chromatic progression |

---

### 4. Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | Transparent (over hero image/slider) |
| On scroll | Unknown (no scroll-based class change detected) |
| Mobile | Burger menu (standard WordPress/Elementor) |
| Cart | None — shop is external |
| Dropdowns | None — flat navigation |
| Search | JetBlocks popup trigger (purple icon) |

---

### 5. Interactive Elements & Buttons

| Variant | Style | Usage |
|---|---|---|
| CTA (hero slider) | Depicter button, white bg / dark text | "Shop Online" |
| Section CTA | Text link or text button, uppercase | "LEARN MORE", "ORDER ONLINE", "CALL NOW" |
| Search | JetBlocks popup, purple icon #421C73 | Header search |
| Booking form | Elementor form | /book-event/ |

**Animation system:** Standard Elementor/WordPress transitions — no custom animation variables detected.

---

### 6. Page Section Structure (Scroll Narrative)

| Section | Visual Treatment | Mood/Purpose |
|---|---|---|
| Hero | Full-bleed photo + white text (Depicter slider) | Arrival / Welcome |
| History teaser | White bg + black text | Heritage / Credibility |
| Garden gallery | White bg + photos | Beauty / Aspiration |
| Shop teaser | White bg + text + CTA | Commerce |
| Events CTA | White bg + text + buttons | Conversion |
| Testimonials | White bg + quote carousel | Social proof |
| Newsletter | White bg + form | Retention |
| Footer | White/transparent bg | Closure |

**Scroll narrative:** Flat — all sections are white background. No chromatic progression. Photography provides all mood. Layout is informational/sequential with no tonal deepening.

---

### 7. Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero | Full-bleed field photography, Depicter slider |
| Garden | Botanical garden shots (credit: Richard Holaday Photography) |
| Events | Outdoor party/shower/wedding atmosphere shots |
| Testimonials | Farm photography credit: Rebecca Renner Portraits |
| Style | Soft, natural light, floral garden aesthetic |
| Brand names | Two named photographers — professional credits, curated imagery |
| Video | None detected |

---

### 8. Services & E-Commerce Components

| Component | Description |
|---|---|
| Online shop | External Square (lavender-fairy.square.site) — products: soaps, lotions, scrubs, creams, eye pillows, sachets, bouquets |
| Spa bookings | Via email (lavenderbloomroom@gmail.com) |
| Event bookings | On-site Elementor form + phone (Cait 302-236-5437) |
| Workshop tickets | Square product links (e.g., /product/june-bloom-talk-tour-sachet-workshop/) |
| Café reservations | Email (wildflower@lavenderfieldsde.com) for private tea parties |
| Photography sessions | Phone booking with Cait, $50/hr, exclusive vendor list |

---

### 9. Key Brand Signals

| Signal | Implementation |
|---|---|
| Pioneer positioning | "Delaware's first lavender farm" — hero subtext |
| Heritage | "Over 300 Years Of History" — H2 on homepage |
| Whimsical identity | "Whimsical · Fairytale · Groovy · One-of-a-Kind" — events tagline |
| Association | USLA member (United States Lavender Growers Association, 750+ members) |
| Photography policy | $50/hr professional session fee, exclusive vendor list, nonprofit proceeds |
| Local craft | Handcrafted products (soaps, lotions, sachets) made on-farm |
| Farm-to-table | Wildflower Café partnership with local farms |
| Wellness expansion | The Bloom Room (spa/massage/esthetics) — diversification beyond flowers |
| Community roots | Named original founders, "beloved members of community" |
| Social proof | 4 Google reviews embedded, named photographers credited |

---

### 10. Comparative Notes

| Dimension | Prev. avg (9 sites) | lavenderfieldsde.com |
|---|---|---|
| Colour family | Purple / lavender dominant | Near-monochrome (black/white); only mauve #8A7E88 in social icons |
| Typography | Display serif or sans + body sans | LoveSeed (unique decorative script) + Open Sans — most distinctive heading font of all sites |
| Layout | 1100–1200px max width | 1140px (Elementor default) |
| Navigation | 4–7 items, some dropdowns | 7 items, flat, transparent |
| Hero | Full-bleed photo or video | Depicter slider (multi-photo) |
| Scroll narrative | Mostly flat or light chromatic | Flat (all white) |
| Platform | WordPress, Wix, Shopify, ASP | WordPress + Elementor |
| Shop | On-site or integrated | Fully external (Square domain) — unique among all sites |
| Booking | Wix Bookings, email, phone | Email + Elementor form + Square for tickets |
| Events | Festivals, workshops, UPick | Micro weddings + showers + workshops + photography sessions |
| Unique feature | Webcams (Tomita), festival (Indigo), café (Loess Hills) | The Bloom Room (full spa with 3 practitioners) — most diversified wellness offering |
| Café | Some sites mention café plans | Operational Wildflower Café (since 2024) |
| Wellness/spa | Not present on other sites | Full spa: massage, facials, energy healing — unique differentiator |
| Brand font | Serif/sans standard pairings | LoveSeed custom script — most unconventional heading font of all sites |
| Photography policy | Free (most), fee-based (Hunter $200+) | $50/hr professional session, exclusive vendor list, proceeds to nonprofit |
