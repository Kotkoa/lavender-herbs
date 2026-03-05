# Daisyshop.co.uk — Site Architecture

**URL:** https://daisyshop.co.uk/
**Platform:** WordPress + Ecwid (e-commerce engine)
**Business:** Daisy Gifts Ltd® — online shop for dried flowers, dried lavender, confetti petals and botanicals
**Owners:** Ruth & Mike Ridley, trading since 2003 (company incorporated 2002)
**Address:** 1 Sutton Drove Cottages, Seaford BN25 3NG, UK (not open to walk-in customers)
**Email:** sales@daisygifts.co.uk
**Tel:** 01323 896807 (Mon–Thu 09:30–13:00, 14:00–17:00; Fri–Sun closed)
**Registered:** Company no. 4599874, VAT GB 921 1599 32, Daisy Gifts Ltd is a Registered Trademark ®

---

## Site Map (Full Structure)

```
daisyshop.co.uk/
│
├── / (Homepage – marketing/landing page)
│
├── /dried-flowers/                  → Shop root (Ecwid storefront)
│   │
│   ├── PRODUCT CATEGORIES:
│   ├── /dried-flowers/dried-lavender-products
│   ├── /dried-flowers/dried-flower-bunches
│   ├── /dried-flowers/petal-confetti-and-wedding
│   ├── /dried-flowers/home-fragrance
│   ├── /dried-flowers/dried-roses-and-rose-products
│   ├── /dried-flowers/pressed-flowers
│   ├── /dried-flowers/potpourri-ingredients
│   ├── /dried-flowers/mothers-day
│   ├── /dried-flowers/handmade-in-sussex
│   ├── /dried-flowers/packaging-and-florist-sundries
│   ├── /dried-flowers/special-offers
│   ├── /dried-flowers/new-in
│   ├── /dried-flowers/uk-dried-flowers
│   └── /dried-flowers/wholesale
│       │
│       ├── SHOP UTILITY PAGES (Ecwid):
│       ├── /dried-flowers/search
│       ├── /dried-flowers/account
│       ├── /dried-flowers/account/orders
│       ├── /dried-flowers/account/favorites
│       └── /dried-flowers/cart
│
├── INFORMATIONAL PAGES (WordPress):
│
├── /about-us/                       → About Us
├── /contact/                        → Contact Us
├── /delivery/                       → Delivery & Shipping
├── /reviews/                        → Customer Reviews
├── /dried-flowers-care/             → Dried Flowers Care
├── /cancellation/                   → Cancellation & Returns
├── /terms/                          → Terms and Conditions
├── /privacy/                        → Privacy Policy
├── /environmental-policy/           → Environmental Policy
├── /cookie-policy-uk/               → Cookie Policy
│
├── /information-pages-dried-flowers-shop/ → Help & Info Hub
│   │
│   ├── /frequently-asked-questions-shop/         → Shopping FAQ
│   ├── /frequently-asked-questions-dried-flowers/ → Floral FAQ
│   ├── /dried-flowers-inspiration/                → Inspiration
│   ├── /catalogue-overview/                       → Catalogue Overview
│   │
│   ├── SEASONAL SECTION:
│   ├── /seasonal-dried-flowers/                   → Seasonal hub
│   ├── /dried-flowers-valentines-day/
│   ├── /seasonal-dried-flowers/spring-dried-flowers/
│   ├── /dried-flowers/summer-blooms
│   ├── /harvest-late-summer-blooms/
│   ├── /autumn-dried-flowers/
│   ├── /winter-dried-flowers/
│   └── /natural-christmas-gift-ideas-dried-flowers/
│
├── LAVENDER INFO SECTION:
│   ├── /dried-lavender/
│   ├── /buy-dried-lavender-loose/
│   ├── /buy-dried-lavender-products-shop/
│   ├── /lavender-bunch-blue/
│   ├── /natural-moth-repellent/
│   ├── /wholesale-dried-lavender/
│   └── /lavender-10kg-sack/
│
├── WHOLESALE INFO SECTION:
│   ├── /dried-flowers-wholesale/
│   └── /wholesale-confetti/
│
├── BUNCHES INFO SECTION:
│   ├── /buy-dried-flower-bunches-shop/
│   ├── /dried-flowers-by-colour/
│   ├── /poppy-seed-heads/
│   ├── /billy-buttons-dried-flowers-craspedia/
│   ├── /dried-gypsophila/
│   └── /buy-dried-flower-bunches-shop/pussy-willow-salix/
│
├── CONFETTI INFO SECTION:
│   ├── /natural-wedding-confetti-petals/
│   ├── /confetti-petals/
│   ├── /dried-flower-confetti-bulk/
│   └── /glassine-bags-uk-confetti/
│
├── PRESSED FLOWERS INFO:
│   └── /pressed-flowers-uk/
│
└── OTHER:
    ├── /dried-flowers-drying-methods/
    ├── /buy-dried-rose-buds-shop/
    ├── /british-dried-flowers-showcase/
    └── /dried-flowers-bunches-petals-shop/

External resources:
├── https://driedflowercraft.co.uk/       → Ruth's external craft blog
├── https://www.facebook.com/daisyshop.co.uk/
├── https://uk.pinterest.com/ruthdaisy/
├── https://x.com/daisyshopuk
├── https://www.instagram.com/daisyshopuk
├── https://www.tiktok.com/@daisyshopuk
└── Etsy: daisyshopuk.etsy.com
```

---

## Global Layout (all pages)

### Header
| Element | Description |
|---|---|
| Logo + site name "Dried flowers Lavender Shop - Daisy Gifts Ltd" | Links to homepage |
| H2 "Dried Flowers and Lavender shop est 2002" | Brand tagline |
| "Menu" (hamburger/toggle) | Opens primary navigation |

### Primary Navigation (top bar)
| Item | URL | Purpose |
|---|---|---|
| Buy Dried Flowers | /dried-flowers/ | Main Ecwid shop |
| My Account | /dried-flowers/account/orders | Customer account |
| Shopping Cart | /dried-flowers/cart | Shopping basket |
| Help & Info | /information-pages-dried-flowers-shop/ | Info hub |

### Secondary Navigation (in Help & Info dropdown / footer area)
| Item | URL |
|---|---|
| Contact us | /contact/ |
| Delivery | /delivery/ |
| Reviews | /reviews/ |
| About Us | /about-us/ |
| Dried flowers care | /dried-flowers-care/ |
| Cancellation and Returns | /cancellation/ |
| Terms and Conditions | /terms/ |
| Privacy policy | /privacy/ |

### Right Column / Sidebar (on info pages)
| Block | Content |
|---|---|
| "SHOP PAGES" | Links: Store → /dried-flowers/, Wholesale → /dried-flowers/wholesale |
| "BUY NEW SEASON FRAGRANT DRIED LAVENDER" | Promo block with link to lavender product |
| "BUY NEW SEASON UK PUSSY WILLOW" | Promo block for seasonal product |
| "KEEP IN TOUCH!" | Newsletter subscribe form (MailChimp) |
| "RECENT INFO PAGES" | Links to 3 latest info posts |
| "INFO PAGES – POPULAR TOPICS" | Quick links: Loose Lavender, Wedding Confetti, UK pressed flowers, Bunches, Wholesale, Care, Floral FAQ, More Info pages |

### Newsletter Form (sidebar + contact page)
| Field | Type |
|---|---|
| Email Address | email (required) |
| First Name | text |
| Last Name | text |
| Subscribe button | submit |

### Footer
| Element | Description |
|---|---|
| "Daisy Gifts Ltd® dried flowers & dry lavender" | Brand text |
| My Account | Link to /dried-flowers/account/orders |
| Store | Link to /dried-flowers/ |
| Help & Info | Link to /information-pages-dried-flowers-shop/ |
| Cookie Policy (UK) | Link to /cookie-policy-uk/ |
| Facebook icon | facebook.com/daisyshop.co.uk/ |
| Pinterest icon | uk.pinterest.com/ruthdaisy/ |
| Twitter/X icon | x.com/daisyshopuk |
| Instagram icon | instagram.com/daisyshopuk |
| TikTok icon | tiktok.com/@daisyshopuk |
| Email icon | mailto:sales@daisygifts.co.uk |
| Reviews badge (HelpfulCrowd) | Links to /reviews/ |
| Cookie consent banner | Accept / Deny / View preferences / Save preferences |

---

## Pages — Detailed Description

---

### 1. Homepage (`/`)
**Title:** Dried flowers, lavender, bunches, petal confetti: Daisyshop

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Dried flowers Lavender Shop - Daisy Gifts Ltd" | Heading | SEO heading |
| H2 "Dried Flowers and Lavender shop est 2002" | Subheading | Brand tagline |
| H2 "Welcome to our shop for dried lavender..." | Intro heading | Product scope summary |
| "Enter Shop" CTA | Button/link | → /dried-flowers |
| H3 "Buy dry flowers – rose, home fragrance and more" | Section heading | |
| H4 "For UK home decor, craft and weddings" | Sub-section | Target audience |
| Delivery banner | Info bar | "UK only – delivery is £4.99 and takes about 4 working days" + "Learn more" link |
| H3 "See highlights from our wide range..." | Section heading | Intro to category grid |
| Category highlight grid (7 tiles) | Image + text grid | Key product categories (see below) |
| H3 "UK dry florist shop run by Mike & Ruth Ridley since 2003" | Owner section | Personal branding |
| H4 "Specialising in dried lavender and dried flowers UK" | Quote block | Ruth's quote about French lavender |
| H4 "Dried lavender specialists" | Quote block | Story about starting with lavender |
| H4 "Buy pressed flowers UK" | Quote block | Info about in-house pressed flowers |
| H4 "Buy dry plants for UK Home Decor and weddings" | Quote block | Styling tips + use cases |
| "Optional newsletter" | H4 + form | MailChimp subscribe form |

#### Homepage Category Highlight Tiles
| Tile | Links to | Description |
|---|---|---|
| Dried lavender | /dried-flowers/dried-lavender-products | "Famous dried lavender grains, bunches and bags" |
| Potpourri making | /dried-flowers/potpourri-ingredients + /dried-flowers/home-fragrance | Natural ingredients for DIY potpourri; ready-made options |
| Our bunch range | /dried-flowers/dried-flower-bunches | Grasses, seed heads, natural and dyed blooms |
| UK dried flowers | /dried-flowers/uk-dried-flowers | UK-sourced: wheat, hydrangeas, lavender, etc. |
| Real natural confetti petals | /dried-flowers/petal-confetti-and-wedding | Biodegradable petal confetti in colours/mixes |
| Wholesale | /dried-flowers/wholesale | Bulk lavender, confetti, stems — no minimum order |

#### Inline text links (within copy)
| Link text | Destination |
|---|---|
| "delphinium confetti petals" | /dried-flowers/delphinium-petal-confetti-uk |
| "Billy Buttons" | /dried-flowers/billy-buttons-dry-flowers-craspedia-bunch-10-stems |
| "dried lavender" | /dried-flowers/dried-lavender-flowers-fragrant |
| "New Stock" | /dried-flowers/new-in |
| "pressed flowers info page" | /pressed-flowers-uk/ |
| "dyed grasses" | /dried-flowers/dyed-items |
| "lavender bag" | /dried-flowers/lavender-bags-and-sachets |
| Reviews badge | /reviews/ |

---

### 2. Shop Root (`/dried-flowers/`)
**Title:** Buy dried flowers
**Engine:** Ecwid (embedded in WordPress page)

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Buy dried flowers" | Heading | |
| H2 "Buy dried flowers and dried lavender UK" | Subheading | |
| H2 "Buy dried flowers – Shop dried lavender..." | Ecwid heading | |
| Category grid (13 tiles) | Ecwid category grid | All product categories with thumbnail images |
| Ecwid utility bar | Widget | Search, My Account, Track Orders, Favorites, Shopping Bag |
| H3 "A huge range of dry bunches, lavender, confetti..." | Copy block | Product overview text |
| H4 "Buy dried lavender and other plant material" | Sub-section | Lavender focus |

#### Shop Product Categories (Ecwid)
| # | Category | URL Slug |
|---|---|---|
| 1 | Dried lavender products | /dried-lavender-products |
| 2 | Dried flower bunches | /dried-flower-bunches |
| 3 | Petal confetti and wedding | /petal-confetti-and-wedding |
| 4 | Home fragrance | /home-fragrance |
| 5 | Dried roses and rose products | /dried-roses-and-rose-products |
| 6 | Pressed flowers | /pressed-flowers |
| 7 | Potpourri ingredients | /potpourri-ingredients |
| 8 | Mothers Day | /mothers-day |
| 9 | Handmade in Sussex | /handmade-in-sussex |
| 10 | Packaging and florist sundries | /packaging-and-florist-sundries |
| 11 | Special Offers | /special-offers |
| 12 | New In | /new-in |
| 13 | Wholesale | /wholesale |

#### Ecwid Utility Elements
| Element | Action |
|---|---|
| Search Products | /dried-flowers/search |
| My Account | /dried-flowers/account |
| Track Orders | /dried-flowers/account |
| Favorites | /dried-flowers/account/favorites |
| Shopping Bag | /dried-flowers/cart |
| Display prices in: GBP | Currency toggle |

#### Sidebar links (Shop page)
| Block | Links |
|---|---|
| "Spring blooms" | /seasonal-dried-flowers/spring-dried-flowers/ |
| "Wholesale and bulk" | /dried-flowers-wholesale/ |
| "Care" | /dried-flowers-care/ |
| "Floral FAQ" | /frequently-asked-questions-dried-flowers/ |
| "More Info pages" | /information-pages-dried-flowers-shop/ |
| "My Account" | /dried-flowers/account/orders |
| "Store" | /dried-flowers/ |

---

### 3. About Us (`/about-us/`)
**Title:** About Daisy Gifts Ltd - Dried flowers - Daisyshop

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "About Us" | Heading | |
| H2 "About us – Daisy Gifts Limited is an online shop..." | Subheading | Business scope statement |
| "Enter Shop" CTA | Button | → /dried-flowers |
| H3 "Ruth and Mike Ridley's online shop..." | Owner intro | History: garden centre → gift shop → online botanicals |
| H4 "Trading online in botanicals" | Sub-section | Ruth's current role: buying, social media, Etsy, blog |
| H4 "Contact Mike about our dried floral range" | Sub-section | Mike's role: office, accounts, customer services |
| H4 (photo of Rowan & Hazel) | Image | Seasonal team members |
| H4 "Packing orders and processing flowers" | Sub-section | Team info |
| H4 "Find out more about our dry florist business" | Sub-section | Notable clients list |

#### Notable Clients Mentioned
Cath Kidston, Disney (Beauty & the Beast, Aladdin), Mamma Mia 2, Kew Gardens, Wakehurst Place, Royal Academy, Courtauld Gallery, Royal Yacht Britannia, Amazon film Cinderella, Netflix Frankenstein (2025), Dr Doolittle, Enola Holmes, Colette, Fantastic Beasts, Call the Midwife, Mr Selfridge, Shetland

#### External Links on Page
| Link | Destination |
|---|---|
| Blog | driedflowercraft.co.uk |
| Pinterest | uk.pinterest.com/ruthdaisy |
| Etsy | daisyshopuk.etsy.com |
| YouTube video | YouTube (50-second video about the business) |
| Contact page | /contact/ |

---

### 4. Contact Us (`/contact/`)
**Title:** Contact us at daisyshop UK for dried flowers

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Contact us about our dried flowers" | Heading | |
| H2 "Contact us about our dried flowers and dried lavender" | Subheading | |
| Contact details | Text | Email, phone, address, opening hours |
| H2 "Contact us about our dried flowers..." | Section | Guidance on what to contact about |
| Business info | Text | FSB member, registered company details |
| Newsletter form | Widget | MailChimp (Email, First Name, Last Name, Subscribe) |

#### Contact Details
| Detail | Value |
|---|---|
| Email | sales@daisygifts.co.uk |
| Phone | 01323 896807 |
| Address | 1 Sutton Drove Cottages, Seaford BN25 3NG, UK |
| Mon–Thu | 09:30–13:00, 14:00–17:00 |
| Fri–Sun | Closed |
| Note | Premises not open to walk-in customers |

#### Internal Links on Page
| Link | Destination |
|---|---|
| About Daisy Gifts Ltd | /about-us/ |
| Delivery information | /delivery/ |
| Returns and cancellation | /cancellation/ |
| information and help pages | /information-pages-dried-flowers-shop/ |

---

### 5. Delivery (`/delivery/`)
**Title:** Shipping terms - Dried flowers and lavender shop

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Delivery" | Heading | |
| H2 "Delivery charges for dried flowers..." | Subheading | |
| H3 "Shipping terms" | Section | Full delivery policy |

#### Delivery Terms Summary
| Parameter | Details |
|---|---|
| Coverage | UK only (no international orders post-Brexit) |
| Standard fee | £4.99 |
| Dispatch time | 1–3 working days |
| Total delivery | ~4 working days from payment |
| Primary carrier | Royal Mail Tracked 24 (1–2 working days from dispatch) — 95% of orders |
| Heavy/high-value | Next day courier (mainland UK); Highlands/islands may take longer |
| Signature | May be required |
| Customer responsibility | Valid delivery address; unattended delivery at own risk |

---

### 6. Reviews (`/reviews/`)
**Title:** Daisyshop reviews for dried flowers and dried lavender UK

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Reviews" | Heading | |
| H2 "Great reviews for our dry flowers and dried lavender shop" | Subheading | |
| H3 "Customers love our quick delivery, customer service" | Section intro | 20-year track record |
| Review widget (HelpfulCrowd) | Embedded widget | Product/business reviews from verified buyers |
| H2 "See reviews for our customer service and products..." | Section | Widget area |
| CTA to leave Google review | Link/button | Links to Google review page |
| Facebook review mention | Text | Alternative review channel |

#### Key Policy
- Only verified buyers can leave product reviews
- No incentives offered for reviews

---

### 7. Dried Flowers Care (`/dried-flowers-care/`)
**Title:** Dried flowers care - how to look after your blooms delivery

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Dried flowers care" | Heading | |
| H2 "Advice on dried flower care" | Subheading | |
| H3 "Care of a dried flower bunch" | Section | |
| H4 "Unpacking your bunch delivery" | Sub-section | What to expect on arrival |
| H4 "Storage of dry blooms" | Sub-section | Store in original box, out of sunlight |
| H4 "Displaying your blooms" | Sub-section | Tips: stem lengths, mixing, vases |
| H4 "Aftercare of your flowers" | Sub-section | Dusting, dismantling, humidity issues |
| H3 "Wedding confetti petals care advice" | Section | |
| H4 "Unpacking your confetti delivery" | Sub-section | |
| H4 "Storage of confetti before the big day" | Sub-section | |
| H4 "Displaying your confetti" | Sub-section | |
| H4 "Confetti after the event" | Sub-section | |
| H3 "Dried lavender care advice" | Section | |
| H3 "Pressed flower care advice" | Section | |
| H3 "More help with caring for your dried flowers delivery" | Section | Links to further info |

---

### 8. Cancellation & Returns (`/cancellation/`)
**Title:** Right of withdrawal - Dried flowers shop

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Cancellation and Returns" | Heading | |
| H2 "We're proud of our dried flowers and want you to be happy" | Subheading | |
| H3 "Cancellation policy and returns" | Section | Full policy text |

#### Returns Policy Summary
| Scenario | Policy |
|---|---|
| Before dispatch | Full refund including delivery — cancel immediately |
| Faulty or wrong item | Full refund or replacement; seller pays return postage |
| Change of mind (within 60 days) | Full refund; customer pays return postage |
| Handmade/hand-filled items | May not be returnable unless faulty (confetti mixes, lavender bags, hand-tied bouquets) |
| Non-faulty orders over £100 | 15% restocking fee may apply |
| Natural imperfections | Small ones expected (snip off); contact if serious quality concerns |

---

### 9. Help & Info Hub (`/information-pages-dried-flowers-shop/`)
**Title:** Information pages - Dried flowers shop

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Information pages – Dried flowers shop" | Heading | |
| H2 "Help pages about Daisy Gifts Ltd..." | Subheading | |
| H3 "Information hub for daisyshopUK" | Section intro | Intro text |
| H4 "More information about us..." | Link grid | Categorised list of all info pages |
| H4 "Information elsewhere on the internet" | External links | driedflowercraft.co.uk blog |

#### Info Hub Link Categories
| Category | Pages |
|---|---|
| Company | About Us, Contact Us, Terms, Privacy, Returns, Environment, Shopping FAQ, Reviews, Delivery, Care of Blooms |
| Inspiration | Inspiration pages, Seasonal (Valentine's, Mothers Day, Spring, Summer, Late Summer, Autumn, Winter, Christmas) |
| Floral | Floral FAQs, How to dry petals and bunches |
| Lavender | Our range, Choosing grains, Products walkthrough, Bunch range, Moth repellents, Wholesale, 10Kg sack |
| Wholesale | Wholesale dry flowers |
| Bunches | About stems/bunches, Filter by colour, Poppy seed pods, Billy buttons, Gypsophila, Pussy Willow |
| Roses | Choosing rose buds |
| Confetti | About wedding confetti, Confetti petals colours, Bulk confetti, Wholesale confetti, Glassine bags |
| Pressed flowers | UK pressed flowers from Sussex |
| Overview | Catalogue overview |

---

### 10. Floral FAQ (`/frequently-asked-questions-dried-flowers/`)
**Title:** Frequently Asked Questions - Dried Flowers and lavender

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Frequently asked questions – dried flowers" | Heading | |
| H2 "FAQs – Flowers and Lavender" | Subheading | |
| H3 "Dried flowers and lavender hints and tips" | Section | Intro + link to driedflowercraft.co.uk |
| H4 "Dried lavender questions" | Q&A section | 5 questions |
| H4 "Confetti petals questions" | Q&A section | 5 questions |
| H4 "Questions about our bunch range" | Q&A section | 6 questions |
| H4 "Questions about pressed flowers" | Q&A section | 3+ questions |
| H4 "Potpourri making questions" | Q&A section | |

#### FAQ Topics Summary
| Topic | Sample Questions |
|---|---|
| Dried lavender | Fragrance level, how much to buy, storage, refreshing scent, bunch fragrance |
| Confetti | Order timing before wedding, colour matching, quantity, bulk cost, best petals for photos |
| Bunches | Longevity, fragility, packaging, care on arrival, limp stems fix, unique options |
| Pressed flowers | Origin (own workshop), use cases (cards, resin, phone cases), sustainability |
| Potpourri | Making tips |

---

## E-Commerce Flow (Ecwid)

```
/dried-flowers/  (Category grid)
    │
    ├── Click category
    │       ↓
    │   Category page (product grid)
    │       │
    │       └── Click product
    │               ↓
    │           Product detail page
    │               ├── Add to Favorites (requires account)
    │               └── Add to Shopping Bag
    │                       ↓
    │                   /dried-flowers/cart
    │                       │
    │                       └── Checkout → Payment
    │
    ├── /dried-flowers/search  (keyword search)
    │
    └── /dried-flowers/account
            ├── /account/orders    (order history)
            └── /account/favorites (saved items)
```

---

## User Flow Architecture

```
Homepage (/)
    │
    ├─[Enter Shop]────────────────────→ /dried-flowers/ (shop root)
    │                                        │
    │                                        ├─[Category tile]──→ product category
    │                                        │                         └─[Product]──→ cart──→ checkout
    │                                        ├─[Search]──────────→ /dried-flowers/search
    │                                        ├─[My Account]──────→ /dried-flowers/account
    │                                        └─[Shopping Bag]────→ /dried-flowers/cart
    │
    ├─[Help & Info]───────────────────→ /information-pages-dried-flowers-shop/
    │                                        ├── About Us → /about-us/
    │                                        ├── Contact  → /contact/
    │                                        ├── Delivery → /delivery/
    │                                        ├── Returns  → /cancellation/
    │                                        ├── Reviews  → /reviews/
    │                                        ├── Care     → /dried-flowers-care/
    │                                        ├── FAQ shop → /frequently-asked-questions-shop/
    │                                        ├── FAQ flora→ /frequently-asked-questions-dried-flowers/
    │                                        └── Seasonal → /seasonal-dried-flowers/
    │
    ├─[Learn more] (delivery banner)──→ /delivery/
    │
    └─[Category image tiles]──────────→ /dried-flowers/{category}

All pages:
    ├─[Facebook]──→ facebook.com/daisyshop.co.uk/
    ├─[Pinterest]─→ uk.pinterest.com/ruthdaisy/
    ├─[Twitter/X]─→ x.com/daisyshopuk
    ├─[Instagram]─→ instagram.com/daisyshopuk
    ├─[TikTok]────→ tiktok.com/@daisyshopuk
    ├─[Email icon]→ mailto:sales@daisygifts.co.uk
    └─[Newsletter]→ MailChimp subscribe form
```

---

## Technical Characteristics

| Parameter | Value |
|---|---|
| Platform | WordPress (CMS) |
| E-commerce | Ecwid (embedded via plugin, store ID: 83254752) |
| Newsletter | MailChimp |
| Reviews | HelpfulCrowd (badge + widget) |
| Image CDN | CloudFront (d2j6dbq0eux0bg.cloudfront.net) |
| Image format | WebP (with lazy loading via cwvlazyload) |
| Payments | Handled by Ecwid checkout |
| International | UK only (post-Brexit, no EU/international orders) |
| Social media | Facebook, Pinterest, Twitter/X, Instagram, TikTok |
| External blog | driedflowercraft.co.uk (Ruth's personal craft blog) |
| External shop | Etsy (daisyshopuk.etsy.com) — secondary channel |
| Cookie consent | GDPR banner with Accept/Deny/Preferences |

---

## Text Block Types Summary

| Block Type | Pages | Purpose |
|---|---|---|
| Hero H1 + intro paragraph | All content pages | SEO heading, page purpose |
| Delivery banner | Homepage, shop | Conversion: sets delivery expectations upfront |
| Category highlight grid | Homepage | Showcase key product categories with CTA |
| Owner voice / quotes | Homepage, About | Trust-building, brand personality |
| Sidebar promo blocks | All info pages | Cross-sell: drive traffic to shop |
| Sidebar info link clusters | All info pages | Navigation to related topics |
| Newsletter form | All pages (sidebar + contact) | Email list building |
| Q&A blocks | FAQ, Care, Floral FAQ | Self-service customer support |
| Policy text | Delivery, Returns, Terms, Privacy | Legal & trust |
| Notable client list | About Us | Social proof, brand credibility |
| Ecwid category grid | /dried-flowers/ | Product discovery |
| Ecwid utility bar | Shop pages | Account, search, cart access |
| Reviews widget (HelpfulCrowd) | /reviews/ | Social proof |
| Cookie consent banner | All pages | GDPR compliance |
