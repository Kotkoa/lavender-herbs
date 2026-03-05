# Indigo Lavender Farms — Site Architecture & Design Brief

**URL:** https://www.indigolavender.com
**Platform:** Wix (Wix Store for e-commerce, Square for gift cards)
**Business:** Lavender farm agrotourism — 50 acres, 14,000+ plants, Imlay City, Michigan. Events, workshops, UPick, photography sessions, farm store, Etsy.
**Address / Location:** 631 N Van Dyke, Imlay City MI 48444
**Contact:** (810) 417-0909 · indigolavenderfarms@gmail.com
**Legal:** Owner: Trish Dennis. Operating since 2015.
**Season / Hours:** Thu–Sun 10am–5pm (Thu open until 7pm in season). Holiday hours vary.
**Social:** Instagram (@lavenderfarming)

---

## PART I — SITE ARCHITECTURE

### 1. Site Map (Full Structure)

```
indigolavender.com/
│
├── /                              → Homepage
│
MAIN NAVIGATION:
├── /private-event                 → Private Event (weddings, showers, parties)
│
├── /event                         → Events overview (yearly calendar)
│   ├── /fairy-festival            → Fairy Festival (Mother's Day weekend, May)
│   ├── /lavender-daze             → Indigo Lavender Festival (July 10-12, 2026 — 8th year!)
│   ├── /date-night                → Date Night (select Fridays, June–Aug)
│   ├── /brunch-in-bloom           → Brunch in Bloom (select Sundays, June–Aug)
│   ├── /wreath-making             → Wreath Making workshop
│   ├── /oil-distillation-workshop → Oil Distillation Workshop
│   └── /planting-workshop         → Planting Workshop
│
├── /photo-session                 → Photo Session (1hr $60 / 2hr $100, bookable online)
│
├── /contact-us                    → Contact & Info (form + hours + location + certifications)
│   ├── /map                       → Map page (Google Maps embed)
│   ├── /faq                       → FAQ (17 questions)
│   └── /tours-and-presentations   → Tours, Presentations & Grower Consultations
│
├── /how-to                        → How To (care guides)
├── /recipes                       → Recipes (culinary lavender)
├── /social                        → Social (social media aggregator)
├── /certifications                → Certifications detail page
├── Gift card (external)           → squareup.com/gift/6A5579DK0H0QF/order
└── /s/shop                        → Wix Store (113 products, 9 categories)

External links:
├── https://www.etsy.com/shop/indigolavenderfarms/  → Etsy shop
├── https://mainstreatcoffeehouse.com/              → Local retailer (Main Streat Coffee House)
└── https://squareup.com/gift/...                  → Square gift card
```

---

### 2. Global Layout

**Announcement Bar**
| Element | Content |
|---|---|
| Rotating banner | "Join us for Galentine's Day! February 14 10am to 5pm" / "Raffle Prize! Beverages! Sales! In Store Only - One Day Only - Feb 14th" |

**Header / Navigation**
| Element | Description |
|---|---|
| Logo | Image logo (top left) |
| Search | Icon (top right, slide-out) |
| Cart | Mini-cart icon (top right), drawer slide-out |
| Sign In | Account button |
| Shop Now | Persistent CTA button in header |

**Primary Navigation**
| Item | Submenu items | URL |
|---|---|---|
| Home | — | / |
| Private Event | — | /private-event |
| Events | Fairy Festival, Indigo Lavender Festival, Date Night, Brunch in Bloom, Wreath Making, Oil Distillation Workshop, Planting Workshop | /event |
| Photo Session | — | /photo-session |
| Contact & Info | Map, FAQ, Tours Presentation & Growers | /contact-us |
| How To | — | /how-to |
| Recipes | — | /recipes |
| Social | — | /social |
| Certifications | — | /certifications |
| Gift Card | — | squareup.com (external) |

> Type: flat + two dropdowns (Events, Contact & Info). Navigation items rendered in UPPERCASE.

**Footer**
| Element | Content |
|---|---|
| Links | Home · Private Event · Events · Photo Session · Contact & Info · Social · Certifications · Gift card |
| Copyright | © 2026 |

> Minimal footer — no newsletter, no social icons in footer (social has its own page).

---

### 3. Pages — Detailed Description

#### 1. Homepage (`/`)
**Title:** Home | My Site

| Block | Type | Content |
|---|---|---|
| Announcement bar | Scrolling text | Seasonal event promo (Galentine's Day) |
| Hours bar | H3 | "We are open Thursdays through Sundays 10a to 5p" |
| Featured Products | H3 + product grid | 10 featured products with prices |
| Events promo | Two-column | Fairy Festival (May 9) + Lavender Daze (July 10-12) |
| Brand story | H2 + long text | "A peaceful oasis..." — farm history, plant varieties, growing philosophy |
| Etsy section | H3 + CTA | "Etsy — View products" → external |
| Local Retailer | H3 + CTA | "Local Retailer — View products" → mainstreatcoffeehouse.com |

**Featured Products on Homepage (with prices):**
| Product | Price |
|---|---|
| Crescent Purse | $68.00 |
| Lavender Essential Oil (farm made from fresh lavender) | $18.00–$65.00 |
| Lavender Weighted Hot or Cold Eye Mask | $14.00 |
| Goat's Milk Hair Shampoo Bar | $14.50 (2 for $28) |
| Luxurious Hair Conditioner Bar | $14.50 (2 for $28) |
| Lavender Scented Laundry Detergent - Liquid | $14.50 |
| All-Natural Laundry Fabric Softener | $19.50 |
| Lavender Scented Dryer Balls - Eco-Friendly! | $12.00 |
| Lavender Magnesium Hand & Body Lotion | $9.00–$18.00 |
| Lavender Magnesium Spray | $18.00 |

**Farm Story Details:**
- Started 2015 with under 4,000 plants
- By 2018: 10,000+ plants added
- 50 acres total: lavender fields, farm store, greenhouse, garden, chicken coop, wetlands
- 14,000+ plants, 9 varieties, no pesticides/chemicals
- 6 Lavandula angustifolia: Hidcote, Big Time Blue, Melissa, Rosea, Royal Velvet, Munstead
- 3 Lavandula x intermedia (Lavandin): Grosso, Phenomenal, Edelweiss
- Grosso used for essential oil production; Phenomenal used in culinary recipes

---

#### 2. Events Overview (`/event`)
**Title:** Event | My Site

| Block | Type | Content |
|---|---|---|
| Yearly Calendar | H3 + list | Annual events listed with months |
| Event grid | Wix Events widget | Upcoming events with book/register links |

**Yearly Events Calendar:**
- May — Fairy Festival (Mother's Day Saturday, 10am–5pm)
- June–August — UPick lavender and other cut flowers
- June–August — Date Night (select Friday nights)
- June–August — Brunch on the Farm (select Sunday mornings)
- June–August — Seasonal outdoor workshops and classes
- July — Indigo Lavender Festival (second weekend, Fri–Sun)
- Year-round — Farm store + seasonal indoor workshops

---

#### 3. Fairy Festival (`/fairy-festival`)
**Title:** Fairy Festival | My Site

| Block | Type | Content |
|---|---|---|
| Hero banner | Announcement | "Live lavender plants available for pickup during this event — Order starting in March!" |
| Event details | H3 | "Indigo Fairy Festival — May 9, 2026 · 10am to 5pm" |
| Poem | Quote block | Fairy-themed poem |
| Description | Body | Live music, vendors, food, kids crafts + vendor registration |
| Purchase Tickets | H2 + CTA | "Join us for a fairy good time! Tickets" |
| Plant sales | H2 + CTA | "Buy your own Lavender Plant — Available every Spring, order in advance" |

---

#### 4. Indigo Lavender Festival (`/lavender-daze`)
**Title:** Lavender Daze | My Site

| Block | Type | Content |
|---|---|---|
| H1 | Festival title | "Indigo Lavender Festival — July 10-12, 2026 — Join us in our 8th Year!" |
| CTA | H2 + button | "Info and Purchase Tickets — More Info" |

> Minimal page — links to external ticketing for details.

---

#### 5. Private Event (`/private-event`)
**Title:** Private Event | My Site

| Block | Type | Content |
|---|---|---|
| Hero | H3 | "Let us help make your BIG DAY perfect!" |
| Private Events | H4 + text | Baby showers, bridal luncheons, retirement parties, anniversaries, celebration of life — "Learn more" CTA |
| Weddings | H4 + text | Inclusive wedding packages (tent to dance floor), private farm access — "Download brochure" + "Learn more" |
| Contact form | H3 + form | Name, date, vision description — Submit |

---

#### 6. Photo Session (`/photo-session`)
**Title:** Photo Session | My Site

| Block | Type | Content |
|---|---|---|
| Hero disclaimer | H3 | Timing of bloom warning, not guaranteed, no photographer provided |
| Rules overview | Body | Non-refundable, reschedule allowed, $30/30min overcharge |
| Booking widget | Wix Bookings | Two service tiers, calendar picker |
| Photographer gallery | Photos | Sample work from Sara Munce Studios, Ivette Gersh Photography, Kayla Spencer Photography |
| Rules | H4 + list | Full rules for private photo sessions |

**Photo Session Pricing:**
| Session | Price | Duration |
|---|---|---|
| Photo Session 1 Hour | $60.00 | 1 hr |
| Photo Session 2 Hour | $100.00 | 2 hrs |

> Rules: Must check in at farm store (+$30 if not); non-refundable; 15-min grace period; $30 per 30 min overrun; tag @lavenderfarming on social.

---

#### 7. Contact & Info (`/contact-us`)
**Title:** Contact Us-1 | My Site

| Block | Type | Content |
|---|---|---|
| Contact form | H3 + form | Full name · Email · Message — Submit (reCAPTCHA protected) |
| Location & Hours | H3 | Address + hours table |
| Certifications | H3 | MAEAP + DTE MIGreenPower + Green-e Energy |
| Privacy Policy | H4 + long text | Full privacy policy on same page |

**Hours:**
| Day | Hours |
|---|---|
| Mon–Wed | Closed |
| Thu–Sun | 10am–5pm (Thu until 7pm in season) |

**Contact details:** 631 N Van Dyke, Imlay City MI 48444 · (810) 417-0909 · indigolavenderfarms@gmail.com

---

#### 8. FAQ (`/faq`)
**Title:** FAQ | My Site

17 questions covering:
| # | Question |
|---|---|
| 1 | Does lavender come back every year? (Yes, perennial shrub) |
| 2 | Can we take pictures on the farm? (Yes, tag @lavenderfarming; pro sessions must be pre-booked) |
| 3 | Do you have to pay to enter? ($7.50 entry; UPick bundle $18 includes admission; senior/veteran discounts) |
| 4 | Can I bring my dog? (Service animals only) |
| 5 | Can I dig up the lavender? (No — mature perennial plants) |
| 6 | What are your hours? (Sun–Sat 10am–5pm, Thu until 7pm) |
| 7 | Can I rent the farm for a private event? (Yes — showers, weddings, etc.) |
| 8 | Is the farm wheelchair accessible? (Grass and gravel paths, uneven terrain) |
| 9 | Do you sell lavender plants? (Yes, March/April, pre-order online) |
| 10 | How long does fresh lavender last? (1–2 days in refrigerator in water) |
| 11 | When should we visit? (First/second week of July for peak bloom) |
| 12 | Which lavender tastes best? (All edible, no chemicals; Phenomenal used in recipes) |
| 13 | Which lavender smells best? (Personal preference; Grosso used for oil) |
| 14 | How do I care for lavender plants? (Rocky/sandy soil, good drainage, full sun) |
| 15 | How does UPick work? (Buy bundle at store, get band + scissors, cut until band wraps, return scissors) |
| 16 | Can I bring food on the farm? (Yes, picnics encouraged) |
| 17 | Do you offer presentations? (Yes — in-person at venue or on-farm tours) |

---

#### 9. Tours, Presentations & Grower Consultations (`/tours-and-presentations`)
**Title:** Tours & Presentations | My Site

| Service | Details | Price |
|---|---|---|
| Farm Tour | By appointment, UPick season only (July 5–Aug 2), ~30 min, ~0.5+ mile walk, min 6 people | $10/person |
| Presentation | All year, at your venue, ~1 hour + Q&A, speaker: owner Trish Dennis | $100 flat |
| Grower Consultation | March & Sept only, on-farm or video call, no time limit | $60 |

---

#### 10. Shop (`/s/shop`)
**Title:** My Site (Wix Store)

**113 products across 9 categories:**

| Category | Examples |
|---|---|
| Bath & Body | Goat's Milk Shampoo Bar, Conditioner Bar, Magnesium Lotion, Bath Gel |
| Beeswax Barrn | Taper candles, pillar candles, bee-shaped candles, votives, tea lights |
| Clothing And Jewelry | Crescent Purse ($68), Bandana & Scrunchie, Boho Clips, Daisy Hair Clip |
| Events | Workshop/event registration tickets |
| Home Goods | Bud vases, incense holder, dryer balls |
| Honey, Tea & Food | Blackberry Lavender Balsamic ($22), Blueberry Lavender Balsamic ($22) |
| Laundry | Detergent ($14.50), Fabric Softener ($19.50), Dryer Balls ($12) |
| Natural Life | Various natural lifestyle products |
| Oil Plants Stems And Buds | Essential Oil ($18–$65), Linen Spray ($15), Dried Buds BULK 5lbs ($130) |

**Price range:** $4 (beeswax votive) — $130 (bulk dried buds)
**Shipping:** Wix Store checkout
**Gift card:** Square platform (external)
**Also sells on:** Etsy (indigolavenderfarms)

---

#### 11. Certifications (`/certifications`)
| Certification | Details |
|---|---|
| MAEAP Cropping Systems Certified | Michigan Agriculture Environmental Assurance Program — verified 2018, renewed 2023 (5 years) |
| DTE MIGreenPower Subscriber | 20% energy matched to DTE wind farms and solar parks |
| Green-e Energy Certified | Renewable energy certification |

---

### 4. User Flow Architecture

```
Homepage (/)
    │
    ├─[Featured Products]────────────→ /s/shop (product detail)
    │                                       └─[Add to Cart] → Wix checkout
    │
    ├─[Fairy Festival / Lavender Daze]─→ /fairy-festival or /lavender-daze
    │                                       └─[Tickets] → Wix Store event tickets
    │
    ├─[Etsy — View products]────────→ etsy.com/shop/indigolavenderfarms (external)
    └─[Local Retailer]──────────────→ mainstreatcoffeehouse.com (external)

Events nav:
    ├─[Fairy Festival]────────────→ /fairy-festival → [Purchase Tickets] → shop
    ├─[Lavender Daze]─────────────→ /lavender-daze → [More Info] → external ticketing
    ├─[Date Night / Brunch / Workshops] → individual pages → [Shop Now] to register
    └─[Photo Session]─────────────→ /photo-session → [Book] → Wix Bookings

Contact & Info:
    ├─[FAQ]───────────────────────→ /faq
    ├─[Map]───────────────────────→ /map
    └─[Tours]────────────────────→ /tours-and-presentations → email to book

Header (all pages):
    ├─[Shop Now]──────────────────→ /s/shop
    ├─[Gift Card]─────────────────→ squareup.com (external)
    └─[Cart icon]─────────────────→ slide-out cart drawer → checkout
```

---

## PART II — TECHNICAL DESIGN BRIEF

### 1. Colour System

**Platform:** Wix CSS Custom Properties
**Palette character:** Lavender purple primary + navy secondary + neutral grays

| Role | Hex | CSS Variable | Usage |
|---|---|---|---|
| Page background | #ffffff | --site-background-color | White site background |
| Primary purple | #94619a | --primary-color | Main brand colour, lavender purple |
| Primary dark | #512b55 | --primary-bright-dark | Dark headings, hover states |
| Primary deepest | #2e1d30 | --primary-subtle-dark | Darkest overlay text |
| Primary light | #d0aad4 | --primary-bright-light | Light tint accents |
| Primary lightest | #f5eff5 | --primary-subtle-light | Very light backgrounds |
| Primary contrast | #ffffff | --primary-contrast-color | Text on purple backgrounds |
| Secondary navy | #2d3953 | --secondary-bright-dark | Secondary dark elements |
| Secondary deepest | #1d2330 | --secondary-subtle-dark | Deepest secondary |
| Secondary light | #acb9d2 | --secondary-bright-light | Light blue-gray tint |
| Secondary lightest | #eff1f5 | --secondary-subtle-light | Secondary pale background |
| Secondary contrast | #000000 | --secondary-contrast-color | Text on secondary |
| Gray light 1 | #f6f7f9 | --gray-light-one | Lightest neutral bg |
| Gray light 2 | #ebedef | --gray-light-two | Border/divider grey |
| Gray dark | #343b42 | --gray-dark | Dark text, footer |
| White | #ffffff | --color-white | Pure white |
| Black | #000000 | --color-black | Pure black |

**Colour character:**
- Full purple colour system with 5 steps (deepest to lightest): #2e1d30 → #512b55 → #94619a → #d0aad4 → #f5eff5
- Navy/indigo secondary palette (same 5-step structure)
- White site background — purple appears in accents only, not background
- Very different from essenso.az (warm cream/gold) — this is true lavender purple branding
- Closest to the purple palette of cotswoldlavender.co.uk (though fewer formal steps)

---

### 2. Typography

**Typeface system:** Two families — Elsie (display) + Source Serif Pro (UI/body)

| Role | Family | Weight | Size | CSS Variable |
|---|---|---|---|---|
| H1/Headlines | Elsie | 400 | scale-based | --headline-font / --primary-font |
| H2 (computed) | Elsie | 400 | 31.37px | — |
| Section titles | Elsie | 400 | scale-based | --section-title-font |
| Body | Source Serif Pro | 400 | 16px base | --body-font / --secondary-font |
| Navigation | Source Serif Pro | 400 | 16px | --navigation-font |
| UI / Buttons | Source Serif Pro | 400 | — | --ui-font |
| Product price | Source Serif Pro | 400 | — | --product-price-font |
| Attribution | Source Serif Pro | 400 | — | --attribution-font |

**Computed styles:**
- Body: Inter fallback (Wix system font) 16px, color black, line-height 16px
- Nav: Source Serif Pro 16px, 400, color black
- H2: Elsie 31.37px, 400, color black, line-height 34.5px, letter-spacing -0.31px

**Typography notes:**
- Type scale: 1.15 (minor second) — gentle modular scale
- Base: 16px
- Elsie: decorative serif with swashes — romantic, whimsical character (matches fairy/festival aesthetic)
- Source Serif Pro: classical readable serif for body/UI — consistent with the rustic farm brand
- Both families are serifs — rare pattern (most sites use serif display + sans body)
- All-caps navigation text in HTML (not CSS text-transform) — stylistic choice
- No dedicated heading weight change (all weight 400) — lightness, femininity

---

### 3. Layout

| Parameter | Value |
|---|---|
| Max page width | Wix full-width (no fixed max, responsive) |
| Column gutter (all breakpoints) | 16px (`--gutter-column-xs/sm/md/lg/xl`) |
| Row gutter (all breakpoints) | 16px (`--gutter-row-xs/sm/md/lg/xl`) |
| Card corner radius | Wix default (rounded) |
| Button radius | Wix default (rounded) |
| Section spacing | Wix default section padding |

**Layout notes:**
- Wix full-width layout — no fixed content-max like Shopify
- Minimal gutter system: 16px across all breakpoints (flat, non-adaptive)
- Product grid: Wix Store default grid
- Booking widget: Wix Bookings embedded
- Cart: Wix slide-out drawer (`.cart-slideout-container`)

---

### 4. Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | White/transparent header, logo left, icons right |
| On scroll | Likely sticky (Wix default) |
| Mobile | Hamburger (`.nav-btn` class pattern) |
| Cart | Slide-out drawer with checkout button |
| Dropdowns | Two dropdowns: Events (7 items) + Contact & Info (3 items) |
| Search | Slide-out search overlay |
| Account | "Sign In" button (Wix Members) |

---

### 5. Interactive Elements & Buttons

| Variant | Style | Usage |
|---|---|---|
| Primary CTA | "Shop Now" — persistent header button | All pages |
| Event registration | Purple filled button | Event pages |
| Book now | Wix Bookings widget button | Photo Session |
| External CTA | Text + "View products" | Etsy, local retailer |
| Download | Text link | Wedding brochure |
| Form submit | "Submit" button | Contact, Private Event forms |

**Booking system:** Wix Bookings (native Wix, no third-party)
**E-commerce:** Wix Store (113 products, 9 categories)
**Payments:** Square (gift cards), Wix payments (shop), Wix Bookings (sessions)

---

### 6. Page Section Structure (Scroll Narrative)

| Section | Visual Treatment | Mood/Purpose |
|---|---|---|
| Announcement bar | Purple/accent bg + white text | Urgency, seasonal event |
| Hours bar | Light bg | Practical info |
| Featured Products | White bg + product cards | Shopping conversion |
| Events promo | Full-bleed photos | Seasonal excitement |
| Brand story | White bg + long text | Trust, education |
| Distribution section | Two-column | Retail expansion |
| Footer | Minimal white | Navigation |

**Scroll narrative:** Flat white background throughout — visual interest comes from photography and product cards, not colour deepening. Announcement bar is only accent colour element. Whimsical/cottage aesthetic rather than premium dark narrative.

---

### 7. Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero | Lavender field rows, aerial/ground-level, Michigan countryside (flatter than Caucasus or Cotswolds) |
| Events | Lifestyle — families, couples, children, festival atmosphere |
| Products | Clean product shots on white or natural backgrounds |
| Fairy Festival | Whimsical fairy-themed decorations, costumed visitors |
| Brand motif | Vintage/cottage script + fairy/nature whimsy — unique among lavender farms |
| Video | No video embeds found |

**Key visual character:** Most whimsical and community-oriented of all sites studied. Fairy Festival theme, kids crafts, picnics encouraged — family farm rather than premium destination. Instagram tag @lavenderfarming (not @indigolavender) — brand handles split.

---

### 8. E-Commerce Components

| Component | Description |
|---|---|
| Platform | Wix Store (native) |
| Total products | 113 across 9 categories |
| Price range | $4 (beeswax votive) – $130 (bulk dried buds 5lbs) |
| Filters | Category, Price range, Availability, Sale/Deals |
| Sort options | Popularity, Newest, Price High-Low, Price Low-High, A-Z, Z-A |
| Show options | 30 / 60 / 120 / 180 per page |
| Cart | Slide-out drawer with "Checkout" + "Continue Shopping" |
| Gift card | Square platform (external link) |
| Etsy | Parallel sales channel (indigolavenderfarms) |
| Local retail | Main Streat Coffee House (offline retail) |
| UPick | In-person only — purchased at farm store |
| Event tickets | Sold through Wix Store (Events category) |

---

### 9. Key Brand Signals

| Signal | Implementation |
|---|---|
| Largest in Michigan | "Largest lavender farm in MI" — explicit claim |
| Pioneer | "In 2015 after a lot of research, we began planting" — origin story |
| Scale | 14,000+ plants, 50 acres, 9 varieties listed with names |
| Scientific credibility | Latin names (Lavandula angustifolia, L. x intermedia) + variety names |
| Community | Vendors, UPick, picnics, family events, fairy festival |
| Environmental | MAEAP certified, DTE MIGreenPower, Green-e Energy — 3 certifications |
| No chemicals | "We grow our plants without pesticides or other chemicals" |
| Owner-led | Trish Dennis named on Tours page — personal, human brand |
| Education | How To, Recipes, Grower Consultations, Presentations |
| Weddings | Dedicated page + brochure download — revenue diversification |

---

### 10. Comparative Notes

| Dimension | cotswoldlavender.co.uk | lavenderfieldsforever.org | essenso.az | indigolavender.com |
|---|---|---|---|---|
| Platform | Shopify custom | Shopify Dawn | WordPress + ThemeREX | Wix + Wix Store |
| Colour family | 9-step purple/grape | Black/white only | Warm cream + gold | Purple 5-step + navy |
| Typography | ivymode serif + Figtree sans | Assistant sans only | halyard-display + DM Sans | Elsie serif + Source Serif Pro serif |
| Button radius | 0px | 0px | 0px | Rounded (Wix default) |
| Navigation | 3 mega-dropdowns | Flat, 5 items | 1 dropdown (Products) | 2 dropdowns, 14+ items |
| Hero | Full-bleed photo | Full-bleed photo | Full-bleed photo | Announcement bar first |
| E-commerce | Shopify 69 products, priced | Shopify 11 products, priced | Portfolio only, no pricing | Wix Store 113 products, priced |
| Entry fee | Paid (£7.75 peak) | Free + paid photo pass | Free, no booking | $7.50 (UPick $18 incl.) |
| Photo sessions | No (photo policy page) | Paid photo pass | No dedicated page | Yes, $60/$100, Wix Bookings |
| Events | Internal pages | Eventbrite integration | No events | Full events calendar, Wix native |
| Certifications | Environmental page | No | No | 3 certs (MAEAP, DTE, Green-e) |
| Blog/Content | No (FAQ instead) | No | Yes (2 posts) | How To + Recipes |
| Weddings | No | No | No | Yes — dedicated page + brochure |
| Grower consultation | No | No | No | Yes — $60, Trish Dennis |
| Brand character | Premium English heritage | Minimal California | Pioneer/agrotourism | Whimsical Michigan family farm |
