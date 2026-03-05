# Farm Tomita — Site Architecture & Design Brief

**URL:** https://www.farm-tomita.co.jp/en/ (English) / https://www.farm-tomita.co.jp/ (Japanese)
**Platform:** Custom ASP (Classic ASP / ASP.NET) — traditional Japanese corporate web stack (.asp extensions). Copyright 2014.
**Business:** Lavender farm agrotourism — Hokkaido, Japan. Largest lavender cultivator in Japan, historically significant. Two physical locations: Farm Tomita (main) + Lavender East (4 km away). Online shop on separate domain.
**Address / Location:** Kisen Kita 15-go, Nakafurano-cho, Sorachi-gun, Hokkaido 071-0704, Japan
**Contact:** TEL +81-167-39-3939 · FAX +81-167-39-3111
**Legal:** Farm Tomita (富田ファーム). Family business — Tomita family, since 1903 (Tokuma Tomita). Current: Tadao Tomita generation.
**Season / Hours:** Summer season (lavender July). Winter hours: 10:00–16:00. Lavender East 2026: June 20 – July 20, 9:30–16:30.
**Social:** Facebook (ラベさん mascot page)
**Languages:** Japanese / English / Traditional Chinese (繁体中文)

---

## PART I — SITE ARCHITECTURE

### 1. Site Map (Full Structure)

```
farm-tomita.co.jp/en/
│
HEADER NAV (top):
├── /en/                           → Home
├── /en/news/                      → News
└── /en/history/                   → History

SIDE NAVIGATION (left sidebar — main site navigation):
├── Farm Guide
│   ├── /en/farm/                  → Farm Guide (overview)
│   ├── /en/farm/flower_map.asp    → Introduction to the flower fields (14 fields)
│   │   ├── /en/farm/flower_guide.asp?id=1   → Hanabito Field
│   │   ├── /en/farm/flower_guide.asp?id=2   → Sakiwai Field
│   │   ├── /en/farm/flower_guide.asp?id=3   → Irodori Field
│   │   ├── /en/farm/flower_guide.asp?id=4   → Traditional Lavender Field
│   │   ├── /en/farm/flower_guide.asp?id=5   → Spring Field
│   │   ├── /en/farm/flower_guide.asp?id=6   → Autumn Field
│   │   ├── /en/farm/flower_guide.asp?id=7   → Forest Field
│   │   ├── /en/farm/flower_guide.asp?id=8   → Hanabito Garden
│   │   ├── /en/farm/flower_guide.asp?id=9   → Greenhouse
│   │   ├── /en/farm/flower_guide.asp?id=10  → Mother's Garden
│   │   ├── /en/farm/flower_guide.asp?id=11  → Lavender Forest Field
│   │   ├── /en/farm/flower_guide.asp?id=12  → Hilltop Field
│   │   ├── /en/farm/flower_guide.asp?id=13  → White Birch Forest
│   │   └── /en/farm/flower_guide.asp?id=15  → Lavandin Field
│   └── /en/farm/facility_map.asp  → Introduction to the houses (14 facilities)
│       ├── Hanabito House          → ?id=1
│       ├── Dried Flower House      → ?id=2
│       ├── Gallery Fleur           → ?id=3
│       ├── Perfume Workshop        → ?id=4
│       ├── Proche House            → ?id=5
│       ├── Potpourri House         → ?id=6
│       ├── Sakiwai Trail           → ?id=7
│       ├── Flower House            → ?id=8
│       ├── Poppy House             → ?id=9
│       ├── Forest House            → ?id=10
│       ├── Distillery Workshop     → ?id=11
│       ├── Rapport House           → ?id=12
│       ├── Sakiwai House           → ?id=13
│       └── Arbre House             → ?id=20
│
├── Cafés
│   ├── /en/cafe/                  → Cafés overview
│   ├── /en/cafe/foodmenu.asp?cat=1 → Soft-serve ice cream
│   ├── /en/cafe/foodmenu.asp?cat=2 → Sweets
│   ├── /en/cafe/foodmenu.asp?cat=3 → Food
│   └── /en/cafe/foodmenu.asp?cat=4 → Drinks
│
├── Lavender East
│   ├── /en/east/                  → Lavender East (overview + hours)
│   ├── /en/east/map.asp           → Lavender East Map
│   └── /en/east/bus.asp           → Lavender Bus
│
├── Access
│   ├── /en/access/                → Access (by car / bus / railway)
│   └── /en/access/station.asp     → Lavender Farm Station (Norokko-go train)
│
└── History
    └── /en/history/               → History of Farm Tomita (timeline 1903–2013)

JAPANESE-ONLY PAGES (not in English section):
├── /history/perfume.asp           → Perfume making
├── /history/oil.asp               → How lavender oil is made
├── /history/dry.asp               → How dried lavender becomes product
├── /history/machine.asp           → Lavender harvesting machine
├── /history/lavender.asp          → How to grow lavender
├── /farm/labo_index.asp           → Farm Tomita flower encyclopedia
├── /farm/photo_diary.asp          → Farm diary (photo blog)
├── /funclub/                      → Fan Club (free membership)
├── /winter/                       → White Season (winter page)
├── /contact/                      → Contact Us
├── /privacy/                      → Privacy Policy
└── /popup.asp?c_id=1/2            → Webcam enlarge popups

EXTERNAL:
├── https://shop-hanabito.net/     → Online Shop (separate domain!)
├── https://recruit.farm-tomita.co.jp/ → Recruitment (separate subdomain)
├── https://www.facebook.com/pages/ラベさん/400359020072188 → Facebook (mascot)
└── https://tenki.jp/...           → Weather forecast (external service)
```

---

### 2. Global Layout

**Header**
| Element | Description |
|---|---|
| Language switcher | Top-right: 繁体中文 · ENGLISH · 日本語 — language pill buttons |
| Logo | Image oval seal + "ファーム富田 / FARM TOMITA" text, left |
| Top navigation bar | ホーム · お知らせ · ファンクラブ入会案内 · お問い合わせ · 採用情報 · ファーム富田資料館 |
| Sub-navigation bar | 園内紹介 (FARM GUIDE) · カフェ (CAFE GUIDE) · ラベンダーイースト (LAVENDER EAST) · アクセスガイド (ACCESS) · 通信販売 (ONLINE SHOP) |

> Navigation structure is hybrid: two horizontal bars at top + a left sidebar (footer/index) on each page. Unlike all other sites — no dropdown mega-menu, no mobile hamburger. Traditional two-column desktop layout.

**Left Sidebar Navigation (all pages)**
| Section | Sub-items |
|---|---|
| Farm Guide | Introduction to flower fields · Introduction to houses |
| Cafés | Ice cream · Sweets · Food · Drinks |
| Lavender East | Lavender East Map · Lavender Bus |
| Access | Lavender Farm Sta. (Norokko-go) |
| History | History of Farm Tomita |
| Language | JAPANESE · 繁体中文 |

**Homepage Special Widgets**
| Widget | Description |
|---|---|
| Live webcam | Two real-time camera feeds: 花人の畑 (Hanabito Field) + Greenhouse — with "To enlarge" popups |
| Today's weather | Live weather integration: temperature + weather icon, linked to tenki.jp weekly forecast |
| Opening hours | Today's hours displayed prominently |
| Farm diary | Latest photo diary entry |
| "ラベさん" mascot | Today's Rave-san — linked to Facebook page |

**Footer**
| Element | Content |
|---|---|
| Links | ホーム · お知らせ · 企業概要 · お問い合わせ · 個人情報の取り扱いについて |
| Address | 071-0704 北海道空知郡中富良野町基線北15号 TEL 0167-39-3939 FAX 0167-39-3111 |
| Copyright | Copyright(C) 2014 FARM TOMITA All Rights Reserved |

---

### 3. Pages — Detailed Description

#### 1. Homepage (`/en/`)
**Title:** FARM TOMITA OFFICIAL WEBSITE

| Block | Type | Content |
|---|---|---|
| Hero | Large banner/slideshow | Lavender field photography, seasonal imagery |
| NEWS | H2 + list | Latest 5–6 news items with dates |
| Opening hours | H2 | Today's hours displayed in real-time |
| Today's Weather | H2 + widget | Temperature + weather from external service |
| Live webcam | H3 | Real-time camera: Hanabito Field + Greenhouse, popup links |
| Farm diary link | H3 | Latest farm diary entry (photo + text) |
| "Today's Rave-san" | H3 | Mascot character → Facebook link |
| Sidebar index | H4 x6 | Full navigation index |
| Fan Club banner | CTA | "ファンクラブ入会案内 入会金・年会費 無料" (Free fan club) |
| Online Shop banner | CTA | "ファーム富田 オンラインショッピング" → shop-hanabito.net |

---

#### 2. Farm Guide (`/en/farm/`)
**Title:** Farm Guide | FARM TOMITA OFFICIAL WEBSITE

**14 Flower Fields:**
| # | Field Name | Character |
|---|---|---|
| 1 | Hanabito Field | Main showcase field, named ("flower person") |
| 2 | Sakiwai Field | (Happiness field) |
| 3 | Irodori Field | (Color field) |
| 4 | Traditional Lavender Field | Original historic lavender planting |
| 5 | Spring Field | Spring blooms |
| 6 | Autumn Field | Autumn blooms |
| 7 | Forest Field | Among trees |
| 8 | Hanabito Garden | Garden-style |
| 9 | Greenhouse | Year-round, heated |
| 10 | Mother's Garden | |
| 11 | Lavender Forest Field | |
| 12 | Hilltop Field | Elevated views |
| 13 | White Birch Forest | Birch trees backdrop |
| 15 | Lavandin Field | Lavandula x intermedia |

**14 Facilities:**
| # | Facility | Type |
|---|---|---|
| 1 | Hanabito House | Main shop/visitor centre |
| 2 | Dried Flower House | Dried flower products |
| 3 | Gallery Fleur | Art gallery (closed — announced Jan 2026) |
| 4 | Perfume Workshop | Perfume-making experience |
| 5 | Proche House | Shop |
| 6 | Potpourri House | Potpourri products |
| 7 | Sakiwai Trail | Walking path |
| 8 | Flower House | Flowers |
| 9 | Poppy House | Poppy-themed |
| 10 | Forest House | |
| 11 | Distillery Workshop | Essential oil distillation (visible process) |
| 12 | Rapport House | |
| 13 | Sakiwai House | |
| 20 | Arbre House | (Tree House) |

---

#### 3. Cafés (`/en/cafe/`)
**Title:** (Cafés section)

**Menu categories:**
| Category | Items |
|---|---|
| Soft-serve ice cream | Lavender ice cream (signature item, mentioned in reviews of similar farms) |
| Sweets | Lavender confections |
| Food | Light meals |
| Drinks | Beverages |

---

#### 4. Lavender East (`/en/east/`)
**Title:** Lavender East | FARM TOMITA OFFICIAL WEBSITE

| Block | Content |
|---|---|
| Description | "One of the largest lavender fields in Japan — in Higashinaka District, Kamifurano Town" |
| Location | 4 km east of Farm Tomita, toward Tokachi Mountains |
| History | Former rice paddies converted to lavender for perfume ingredient production |
| Views | Tokachi Mountains (east) + Yubari Range — Mt. Furanonishi, Mt. Ashibetsu |
| Historical note | "This is where lavender cultivation started in Furano" |
| Blooming season | Late June – mid-July |
| Best viewing | Early July – mid-July |
| 2026 Season | June 20 – July 20, 9:30–16:30 |
| Contact | Tsuji, TEL: 0167-39-3939 (travel agencies) |

---

#### 5. History (`/en/history/`)
**Title:** History | FARM TOMITA OFFICIAL WEBSITE

**Timeline:**
| Year | Event |
|---|---|
| 1903 | Tokuma Tomita (1st generation) arrives from Fukui Prefecture, begins farming at current site |
| 1958 | Lavender cultivation for essence begins |
| 1970 | Peak lavender area: 230 hectares (largest ever — then gradually reduced due to cheaper imports) |
| 1976 | JR Japan Calendar features Farm Tomita — tourists begin visiting |
| 1980 | First original lavender essential oil production (Tadao's own distillery design) |
| 1984 | "Furano" — first original perfume produced |
| 1987 | Original bathroom soaps launched |
| 1990 | Essential oil wins 1st prize, "Lavender Perfume Fair" in France |
| 1993 | Hanabito House opens |
| 1998 | Tomita Lavender Museum opens |
| 2000 | Greenhouse opens |
| 2003 | Dried Flower House opens |
| 2008 | Lavender East opens |
| 2013 | Gallery Fleur opens |

---

#### 6. Access (`/en/access/`)
**Title:** Accesses to Farm Tomita and Lavender East

| Transport | Details |
|---|---|
| By car (from Asahikawa Airport) | National Highway 237 — 45 min |
| By car (from New Chitose Airport) | Doto Expressway, Shimkappu IC — 2.5 hr |
| By car (from Sapporo) | Doo Expressway, Mikasa IC — 2.5 hr |
| Lavender East by car | 4 km / 7 min from Farm Tomita |
| Bus (Furano Bus Lavender-go) | Asahikawa Sta. ⇔ Nakafurano (1hr 25min) · Asahikawa Airport ⇔ Nakafurano (48 min) · Furano Sta. ⇔ Nakafurano (12 min) then 25 min walk or taxi |
| Bus (Chuo Bus Kosoku Furano-go) | Sapporo ⇔ Furano (2.5 hr) then local bus/taxi |
| Train | Lavender Farm Sta. (Norokko-go seasonal train) — 7 min walk from Farm Tomita |
| Train (JR Furano Line) | Nakafurano Sta. — 25 min walk from Farm |

> **Dedicated seasonal train station "Lavender Farm Sta."** operates specifically for Farm Tomita visitors — unique infrastructure not seen at any other site in this study.

---

### 4. User Flow Architecture

```
Homepage (/en/)
    │
    ├─[Farm Guide nav]───────────→ /en/farm/ → individual field/facility pages
    ├─[Cafés nav]────────────────→ /en/cafe/ → food menu categories
    ├─[Lavender East nav]────────→ /en/east/ → map / bus
    ├─[Access nav]───────────────→ /en/access/ → station / directions
    ├─[History nav]──────────────→ /en/history/
    │
    ├─[Online Shop banner]───────→ shop-hanabito.net (external domain)
    ├─[Fan Club banner]──────────→ /funclub/ (JA only)
    ├─[Webcam enlarge links]─────→ /en/popup.asp?c_id=1/2 (popup windows)
    ├─[Weather link]─────────────→ tenki.jp (external)
    └─[ラベさん (Rave-san)]───────→ facebook.com (external)

Language switcher (all pages):
    ├─[日本語]──→ / (full Japanese site)
    ├─[ENGLISH]─→ /en/ (English subset)
    └─[繁体中文]→ /cn/ (Chinese subset)

EN site does NOT have:
    - Contact form
    - Online shop integration
    - Booking system
    - Pricing pages
    - Social media feed
```

---

## PART II — TECHNICAL DESIGN BRIEF

### 1. Colour System

**Platform:** Custom ASP website — no CSS variables, hand-coded CSS
**Design era:** ~2010–2014 aesthetic (flat sections, no gradients, table-based layout elements)

| Role | Hex | Computed value | Usage |
|---|---|---|---|
| Page background | #FFF6EE | rgb(255, 246, 238) | Warm cream/peach — entire body background |
| Header background | #3A2D51 | rgb(58, 45, 81) | Deep dark purple header bar |
| H2 text (on header) | #FFFFFF | rgb(255, 255, 255) | Section headings in white on coloured bg |
| Body text | #000000 | rgb(0, 0, 0) | Black body text |
| Navigation bar bg | likely dark purple | — | Top nav bars (computed from header parent) |
| Link colour | standard blue | — | Default HTML links (not overridden) |

**Colour character:**
- Extremely minimal colour system — essentially 3 colours: warm cream + deep purple + white
- No brand purple palette scale (unlike cotswoldlavender's 9-step system)
- Warm cream (#FFF6EE) as background is closest to essenso.az (#FAF7F0) — both warm organic
- Header dark purple (#3A2D51) is very deep — similar depth to cotswoldlavender's darkest (#362145)
- No CSS custom properties used — all colours hardcoded in traditional CSS
- Default HTML hyperlink blue preserved — no design system for links
- Language switcher buttons use contrasting pill style (light grey/white active state visible in screenshot)

---

### 2. Typography

**Typeface system:** Japanese web-safe stack — no custom web fonts loaded

| Role | Family stack | Weight | Size | Color |
|---|---|---|---|---|
| Body | Verdana, 游ゴシック, YuGothic, Hiragino Kaku Gothic ProN, Meiryo, sans-serif | 400 | 12.16px | #000000 |
| H1 (logo area) | Same stack | 400 | 12.16px | #000000 |
| H2 (section) | Same stack | 700 | 16.29px | #FFFFFF (on purple bg) |
| Navigation | Arial, Helvetica, sans-serif | — | — | — |
| Body fallback | Times (browser default) | 400 | 12.16px | #000000 |

**Typography notes:**
- No web fonts — relying entirely on system fonts installed on the user's OS
- Verdana as primary: optimised for screen readability at small sizes (common pre-2010 choice)
- Japanese font stack: YuGothic (macOS) → Hiragino (macOS/iOS) → Meiryo (Windows) — covers all platforms
- Very small base size: 12.16px — typical of 2000s–2010s Japanese web design
- H2 line-height 50px — provides visual weight via padding/spacing rather than font size
- No display typeface — purely functional, information-first approach
- Radically different from all other sites in this study (all use custom Google/Adobe fonts)

---

### 3. Layout

| Parameter | Value |
|---|---|
| Layout type | Two-column: left sidebar + main content (traditional table/float layout) |
| Page width | Fixed ~980–1000px (old fixed-width design) |
| Left sidebar | ~180px — site navigation index |
| Content area | ~780px — main content |
| No responsive design | Mobile layout not adapted (fixed-width) |
| No CSS Grid/Flexbox | Traditional float or table-based positioning |
| Copyright year | 2014 — design frozen since then |

---

### 4. Navigation Behaviour

| State | Behaviour |
|---|---|
| Default | Fixed-width desktop layout |
| Mobile | No responsive adaptation — horizontal scroll on mobile |
| Scroll | No sticky header |
| Cart | None (shop is external domain) |
| Search | None visible |
| Dropdowns | None — sidebar links always visible |

> Navigation architecture is fundamentally different from all other sites: **persistent left sidebar index** rather than top dropdown or hamburger menu.

---

### 5. Interactive Elements & Buttons

| Element | Style | Usage |
|---|---|---|
| Language switcher | Pill buttons (top right header) | 3 language versions |
| Navigation links | Plain text links | Left sidebar |
| "see more" | Text link | News section |
| Webcam enlarge | Text link → popup window | Live feed |
| News items | Text list | Date + headline |
| Fan Club CTA | Banner image | Free membership |
| Online Shop CTA | Banner image | → external domain |

**No CTA buttons in modern sense** — all interactions via text links and image banners. No JavaScript UI components (sliders, modals, lightboxes) visible in English section.

---

### 6. Page Section Structure (Scroll Narrative)

| Section | Visual Treatment | Mood/Purpose |
|---|---|---|
| Header | Dark purple (#3A2D51) bar + logo | Authority, identity |
| Sub-nav | Second darker bar | Orientation |
| Hero/slider | Large lavender photo | Aspirational |
| News | Warm cream bg + text list | Information |
| Hours/Weather | Warm cream + utility widgets | Practical |
| Live webcam | Warm cream + embedded video | Real-time connection |
| Farm diary | Warm cream + photo | Community |
| Sidebar | Always visible — white/cream | Navigation |
| Footer | Warm cream + text | Closure |

**Scroll narrative:** Entirely flat warm cream (#FFF6EE) — no colour progression. Visual impact comes entirely from photography. Structure is utility-first, not experience-first.

---

### 7. Photography & Visual Motif

| Motif | Description |
|---|---|
| Hero | Vast Hokkaido lavender fields — expansive horizon, open sky, mountain backdrop |
| Field diversity | 14 named fields including White Birch Forest — unique landscape variety |
| Live cameras | Real-time webcam feed — active connection to farm at all times |
| Historical photos | Timeline on History page — black & white 1903+ photographs |
| Seasonal | WHITE SEASON winter section, lavender summer — full year documented |
| Mascot | "ラベさん" (Rave-san) — lavender character with Facebook page |
| Japanese aesthetic | Clean functional photography — no styled "Provence" mise-en-scene |

---

### 8. E-Commerce & Shop Architecture

| Component | Description |
|---|---|
| Online shop | Separate domain: shop-hanabito.net — completely separate site |
| Integration | Banner/link only — no embedded shop, no cart in main site |
| Products | Unknown (not accessed) — likely lavender essential oil, dried flowers, cosmetics, food |
| Entry fee | Not stated in English (likely free entry or undisclosed pricing) |
| Booking | None — walk-in visitors, no online booking system |
| Fan Club | Free membership — Japanese only |
| Perfume Workshop | Available at Perfume Workshop facility — no online booking visible |

---

### 9. Key Brand Signals

| Signal | Implementation |
|---|---|
| Historical depth | 1903 origin — 120+ year family history, three generations |
| National icon | JR Japan Calendar 1976 — made the farm nationally famous |
| International award | 1st prize, Lavender Perfume Fair, France 1990 — European validation |
| Pioneer | "This is where lavender cultivation started in Furano" |
| Scale | 230 hectares peak (1970), now still "one of the largest lavender fields in Japan" |
| Dedicated infrastructure | Own train station (Lavender Farm Sta.) on JR Furano Line |
| Real-time connection | Live webcam + weather widget — farm is always "present" online |
| Family business | Named family (Tomita), named fields (Hanabito = "flower person") |
| Distillery on-site | Visible Distillery Workshop — oil production is a tourist attraction |
| Multi-facility campus | 14 named fields + 14 named facilities — village-scale destination |
| Mascot | ラベさん (Rave-san) — personalised lavender character with own Facebook page |
| Seasonal diversity | WHITE SEASON (winter), spring, summer lavender, autumn — year-round destination |

---

### 10. Comparative Notes

| Dimension | cotswoldlavender | lavenderfieldsforever | essenso.az | indigolavender | loesshillslavender | hunterlavender | farmtomita |
|---|---|---|---|---|---|---|---|
| Platform | Shopify custom | Shopify Dawn | WordPress | Wix | WP+WooCommerce | Shopify custom | **Custom ASP** |
| Country | England | California | Azerbaijan | Michigan | Iowa | Australia | **Japan (Hokkaido)** |
| Design era | 2020s | 2020s | 2020s | 2020s | 2010s–2020s | 2020s | **~2010–2014 (frozen)** |
| CSS framework | Shopify | Shopify Dawn | ThemeREX | Wix | Divi | Custom | **None (hand-coded)** |
| Font loading | Adobe+Google | Google | Adobe+Google | Google | Google | Google | **System fonts only** |
| Responsive | Yes | Yes | Yes | Yes | Yes | Yes | **No** |
| Colour vars | Rich 9-step | None | Brand palette | 5-step | Minimal | Shopify vars | **None** |
| Navigation type | Mega-dropdown | Flat | Dropdown | Multi-dropdown | 4-flat | 4-dropdown | **Dual header + persistent sidebar** |
| Named fields | 2–3 | 1 | 1 | 9 varieties | 1 | 1 | **14 named fields** |
| Facilities | 1 shop | 1 store | 1 shop | 1 store+events | 1 store | — | **14 named facilities** |
| Own train station | No | No | No | No | No | No | **Yes (JR Furano Line)** |
| Live webcam | No | No | No | No | No | No | **Yes (2 cameras)** |
| Online shop | Shopify | Shopify | None | Wix Store | WooCommerce | Shopify | **Separate domain** |
| Entry fee | Paid (£7.75) | Free+photo | Free | $7.50 | Free | Paid+free | **Unclear (walk-in)** |
| Founded | 1970s (est.) | 2009 | 2018 | 2015 | 2009 | 2019 | **1903 (120+ years)** |
| Languages | EN only | EN only | EN only | EN only | EN only | EN only | **JA / EN / ZH** |
| Key difference | Premium UK heritage | Minimal Californian | Pioneer Azerbaijani | Richest events | Video hero+craft | S.hemisphere pioneer | **Oldest, largest, most complex, national icon** |
