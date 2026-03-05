# Blue Mountain Lavender Farm — Site Architecture

**URL:** https://www.bluemountainlavender.com/
**Platform:** Wix
**Business:** Blue Mountain Lavender Farm, LLC — lavender farm in Walla Walla Valley, WA. Est. 2000.
**Address:** 345 Short Road, Lowden, WA 99360 (12 miles west of Walla Walla, Lowden exit off HWY 12)
**Contact:** 509-529-3276 (text) · info@bluemountainlavender.com

---

## Site Map (Full Structure)

```
bluemountainlavender.com/
│
├── /                          → Welcome (Homepage)
├── /visit                     → Hours
├── /growing-lavender          → Plants
├── /gallery                   → Gallery
├── /faq                       → FAQ
├── /contact-us                → Contact Us
│
└── /thingstodo                → Things To Do (not in main nav; linked from /visit and /faq)
    │
    ├── /service-page/lavender-u-pick-just-show-up
    ├── /service-page/blue-mountain-coffee-co-on-site
    ├── /service-page/lavender-lemonade-by-whitman-acres
    ├── /service-page/yoga-for-the-senses-with-cjoy-yoga
    ├── /service-page/golden-hour-fridays-6-13-6-20-6-27
    ├── /service-page/embodied-mindfulness-with-christel-joy
    ├── /service-page/yoga-for-the-senses-with-cjoy-yoga-1
    ├── /service-page/monday-am-wreath-class
    ├── /service-page/tuesday-am-wreath-class
    ├── /service-page/meet-the-farmer
    └── /service-page/picnic-table-in-the-pavilion-2
        │
        └── /booking-calendar/{service-slug}   → Booking calendar (for bookable services)
            ├── /booking-calendar/yoga-for-the-senses-with-cjoy-yoga
            ├── /booking-calendar/embodied-mindfulness-with-christel-joy
            ├── /booking-calendar/yoga-for-the-senses-with-cjoy-yoga-1
            ├── /booking-calendar/monday-am-wreath-class
            └── /booking-calendar/tuesday-am-wreath-class

External links:
├── https://www.etsy.com/shop/BlueMountainLavender   → "Shop Online" (Etsy store)
├── https://www.facebook.com/bluemountainlavender/    → Facebook
└── https://www.instagram.com/bluemountainlavenderfarm/ → Instagram
```

---

## Global Layout (all pages)

### Header
| Element | Description |
|---|---|
| Logo (image) | Decorative lavender leaf icon |
| H2: "BLUE MOUNTAIN LAVENDER FARM" | Farm name, links to homepage |
| H3: "In the Walla Walla Valley, WA / Established in 2000" | Subtitle with location and founding year |
| "Shop Online" button | Links to Etsy store (external) |

### Main Navigation
| Item | URL | Purpose |
|---|---|---|
| Welcome | / | Homepage |
| Hours | /visit | Hours and seasonal schedule |
| Plants | /growing-lavender | Plant sales and growing guides |
| Gallery | /gallery | Photo gallery |
| FAQ | /faq | Frequently asked questions |
| Contact Us | /contact-us | Contact form |

### Footer (identical on all pages)
| Element | Description |
|---|---|
| Facebook icon | Link to Facebook page |
| Instagram icon | Link to Instagram profile |
| Address | Blue Mountain Lavender Farm, LLC · 345 Short Road, Lowden, WA 99360 |
| Phone | 509-529-3276 (text) |
| Email | info@bluemountainlavender.com |
| Directions | "12 miles west of Walla Walla, WA / Use the Lowden exit off Highway 12" |
| Copyright | 2025 by Blue Mountain Lavender Farm, LLC |

---

## Pages — Detailed Description

---

### 1. Welcome (`/`)
**Title:** Welcome | Blue Mtn Lavender

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Welcome to the Farm" | Heading | Page greeting |
| Intro paragraph | Text | Farm description: founded 2000, Walla Walla Valley, 25 lavender varieties, u-pick, boutique, family activities |
| Event announcement | Text | Upcoming annual lavender plant sale starting late April |
| "Farm Hours" link | CTA link | Goes to /visit for visit planning |
| "Follow us on Instagram" | Widget/section | Instagram follow prompt |
| Contact block | Text | Address, phone, email |

#### Clickable Elements
| Element | Action |
|---|---|
| "Shop Online" (header) | Opens Etsy store |
| "Hours" / "Farm Hours" | Goes to /visit |
| "Follow us on Instagram" | Opens Instagram profile |
| "Reach out" / "509-529-3276" | Opens phone/text |
| "info@bluemountainlavender.com" | Opens email client |
| Facebook icon | Opens Facebook page |
| Instagram icon | Opens Instagram profile |

---

### 2. Hours (`/visit`)
**Title:** Opening Dates & Hours | Blue Mountain Lavender Farm

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Farm Hours" | Heading | Page heading |
| Intro text | Text | Season overview: fields green up in May, blooms early June to mid-July, free entrance, closed Saturdays |
| Seasonal grid (6 cells) | Block grid | Monthly schedule (see below) |
| "Follow us on Instagram" | Widget | Instagram link |
| "Things To Do" link | Internal link | Goes to /thingstodo |

#### Seasonal Schedule
| Period | Status | Hours |
|---|---|---|
| Jan – Feb – Mar | Boutique open (Valentine Shopping) | Sun Feb 1 & 8, 10am–3pm; or by appt |
| April – May | Pre-Bloom, Boutique + Plant Sale | Watch for details |
| June 1 – July 15 | FULL SEASON: boutique + u-pick | Sun–Fri 10am–5pm (closed Sat) |
| July 16 – August | Boutique on select dates | Watch for details / by appt |
| Sept – Oct – Nov | Boutique on select dates | Watch for details / by appt |
| December | Holiday Open House | Sun Dec 7, 14 & 21, 11am–4pm |

#### Clickable Elements
| Element | Action |
|---|---|
| "Things To Do" | Goes to /thingstodo |
| "Follow us on Instagram" | Opens Instagram |
| "509-529-3276" | Opens phone/text |

---

### 3. Plants (`/growing-lavender`)
**Title:** Growing Lavender | Blue Mountain Lavender Farm

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "PURCHASE LAVENDER PLANTS" | Heading | Page heading |
| "PLANTS FOR SALE" | Section + text | Plant sale April 20 to mid-July, up to 20 varieties/week. Sizes: 3.5" pot ($6.95+), quart, 1-gallon. On-site only, no shipping. Zones 5+. |
| "PLANTING & GROWING LAVENDER" | Section + text | Care tips: sun (6+ hrs), soil, watering, pruning |
| "COMMON LAVENDER VARIETIES" | Section + text | 3 lavender types: English (angustifolia), French (x intermedia), Spanish (stoechas) with variety names |
| "HOURS" link | CTA link | Goes to /visit |

#### Lavender Varieties Detail
| Type | Scientific Name | Key Varieties | Hardiness |
|---|---|---|---|
| English Lavender | Lavandula angustifolia | Munstead, Hidcote, Folgate, Royal Velvet | Zones 5–9 |
| French Lavender | Lavandula x intermedia | Grosso, Gros Bleu, Sensational, Super, Provence | Zones 5–9 |
| Spanish Lavender | Lavandula stoechas | (rabbit ear petals) | Zones 7–9 (annual in pots in cooler climates) |

#### Clickable Elements
| Element | Action |
|---|---|
| "HOURS" | Goes to /visit |

---

### 4. Gallery (`/gallery`)
**Title:** Gallery | Blue Mountain Lavender Farm

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H2 "Welcome to the Gallery" | Heading | Gallery greeting |
| Intro text | Text | "Explore our lavender fields, artisan crafts and our unique story..." |
| Photo gallery | Wix Pro Gallery widget | Farm, fields, and product images (dynamically loaded) |

> Note: Gallery is a Wix Pro Gallery widget. Images load dynamically and are not indexed as standard `<img>` elements.

---

### 5. FAQ (`/faq`)
**Title:** FAQ | Blue Mountain Lavender Farm

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Frequently Asked Questions" | Heading | Page heading |
| 13 Q&A blocks | H3 + paragraph | Full FAQ list (see below) |

#### FAQ Questions
| # | Question | Answer Summary |
|---|---|---|
| 1 | Payment methods | Credit/debit, cash, Apple Pay, Cash App, local check |
| 2 | Pets | Leash only in parking areas. No fields/boutique. Service animals by announcement. |
| 3 | How U-Pick works | Scissors, baskets, instructions provided. Bundle = handful in 8" zip tie. Free ribbon. From $12. |
| 4 | Picnics | June–July. Free (first come), or table $15 by reservation. After hours $60/90 min. |
| 5 | Own products | Yes, farm-made + French and local sourced. Online via Etsy. |
| 6 | Organic certification | No, but no spraying. Sustainable practices. |
| 7 | Retirement center visits | Yes, Tue–Wed mornings, June. Reservation required. |
| 8 | Professional photography | Yes, June–early July. $60 site fee, book via /thingstodo. |
| 9 | Weddings / elopements | Wedding party photos: $100 site fee, June. Elopements up to 8 people. Email required. |
| 10 | Parties / events | Yes, Pavilion rental. Email with subject Meeting/Party Reservation. |
| 11 | Wheelchair accessibility | Yes, with caveats. Main areas accessible. No ADA restrooms. |
| 12 | Parking | No full-size buses. Large RVs park on Short Road shoulder. |
| 13 | Off-season visits | Boutique open select Fri/Sun. By appt: txt 509-539-3276. Not Saturdays. |

#### Clickable Elements
| Element | Action |
|---|---|
| "table can be reserved" | Goes to /thingstodo |
| "online" (Etsy) | Opens Etsy store |
| "Click here" (x2) | Goes to /thingstodo |
| "Pavilion rental" | Goes to /thingstodo |
| "info@bluemountainlavender.com" (Wedding) | mailto: with subject "Wedding Photography Request" |
| "info@bluemountainlavender.com" (Elopement) | mailto: with subject "Elopment Request" |
| "info@bluemountainlavender.com" (Party) | mailto: with subject "Party Request" |
| "Hours" | Goes to /visit |

---

### 6. Contact Us (`/contact-us`)
**Title:** Contact Us | Blue Mountain Lavender Farm

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| "CONTACT US" | Section heading | Form heading |
| Contact form | Wix Form | 5 fields + submit button |

#### Form Fields
| Field | Type | Placeholder |
|---|---|---|
| First Name | text | First Name |
| Last Name | text | Last Name |
| Email | email | Email |
| Phone | tel | Phone |
| Message | text | Add message here |
| Checkbox | checkbox | (likely consent checkbox) |

#### Buttons
| Button | Action |
|---|---|
| "Send" | Submits form |

---

### 7. Things To Do (`/thingstodo`)
**Title:** Things To Do | Blue Mtn Lavender
**Access:** Linked from /visit and /faq (not in main navigation)

#### Page Blocks
| Block | Type | Content |
|---|---|---|
| H1 "Free Things & Fee-Based Options" | Heading | Page heading |
| Activity cards | Wix Bookings service grid | 11 activities with descriptions and CTA buttons |

#### Activities Catalog
| Activity | Type | CTA Button | Notes |
|---|---|---|---|
| Lavender U-Pick | Walk-in, no reservation | More Info | From $12 |
| Blue Mountain Coffee Co. | On-site coffee (Tue–Wed) | More Info | — |
| Lavender Lemonade by Whitman Acres | Beverages (Sun, Mon, Thu, Fri) | More Info | — |
| Yoga for the Senses (CJoy Yoga) | Class, Sun Jun 8, 6–7pm | Book Now | — |
| Golden Hour Fridays (6/13, 6/20, 6/27) | Evening hours | More Info | — |
| Embodied Mindfulness (Christel Joy) | Class, Sun Jun 22, 6–7pm | Book Now | — |
| Yoga for the Senses (Wed variant) | Class, Wed Jun 25, 7–8pm | Book Now | — |
| Monday AM Wreath Class | Workshop (3 dates) | Book Now | — |
| Tuesday AM Wreath Class | Workshop (2 dates) | Book Now | — |
| Meet the Farmer | Info session (Sun 11:15am) | More Info | — |
| Picnic Table in the Pavilion | Table reservation (1h 45min) | More Info | $15/$60 |

---

### 8. Service Page (`/service-page/{slug}`)
**Template:** shared layout for all activities

#### Block Structure
| Block | Type | Content |
|---|---|---|
| H1 (service name) | Heading | Activity name |
| Short description | Subheading | Tagline |
| Address | Text | 345 Short Road |
| H2 "Service Description" | Section | Full activity description |
| H2 "Upcoming Sessions" | Section | Next available slots or "No sessions in the next 7 days" |
| Time Zone | Toggle button | Pacific Standard Time (PST) |
| H2 "Cancellation Policy" | Section | Cancellation terms / conditions |
| H2 "Contact Details" | Section | Address, phone, email |

---

### 9. Booking Calendar (`/booking-calendar/{slug}`)
**Template:** shared layout for all bookable activities

#### Block Structure
| Block | Type | Content |
|---|---|---|
| H1 "Schedule your service" | Heading | |
| Subheading | Text | "Check out our availability and book the date and time that works for you" |
| H2 "Select a Date and Time" | Section | Interactive monthly calendar |
| Time Zone | Toggle button | Pacific Standard Time (PST) |
| Availability | Text | Time slots list or "No availability" |
| "Check Next Availability" | Button | Finds next available slot |
| H2 "Service Details" | Section | Service name + "More details" link |
| "Next" | Button | Proceeds to payment/booking form |

---

## User Flow Architecture

```
Homepage (/)
    │
    ├─[Shop Online]──────────────────→ Etsy (external)
    │
    ├─[Hours / Farm Hours]───────────→ /visit
    │                                      │
    │                                      └─[Things To Do]──→ /thingstodo
    │                                                               │
    │                                      ┌────────────────────────┤
    │                                      │  [More Info]  ──→ /service-page/*
    │                                      │  [Book Now]   ──→ /booking-calendar/*
    │                                      │                         │
    │                                      │               [Next] → payment form
    │
    ├─[Plants]───────────────────────→ /growing-lavender
    │                                      └─[HOURS]──→ /visit
    │
    ├─[Gallery]──────────────────────→ /gallery
    │
    ├─[FAQ]──────────────────────────→ /faq
    │                                      ├─[table can be reserved]──→ /thingstodo
    │                                      ├─[Click here (x2)]────────→ /thingstodo
    │                                      ├─[Pavilion rental]────────→ /thingstodo
    │                                      ├─[online]─────────────────→ Etsy (external)
    │                                      └─[email links]────────────→ mailto: (pre-filled subject)
    │
    └─[Contact Us]───────────────────→ /contact-us
                                           └─[Send]──→ form submission

All pages (global):
    ├─[Facebook icon]──→ facebook.com/bluemountainlavender/
    ├─[Instagram icon]─→ instagram.com/bluemountainlavenderfarm/
    └─[Shop Online]────→ etsy.com/shop/BlueMountainLavender
```

---

## Technical Characteristics

| Parameter | Value |
|---|---|
| Platform | Wix (URL patterns: /service-page/, /booking-calendar/, Wix Bookings) |
| Booking system | Wix Bookings (built-in) |
| Online store | External — Etsy |
| Social media | Facebook, Instagram |
| Responsive | Yes (Wix responsive layout) |
| Contact form | Wix Forms |
| Gallery | Wix Pro Gallery |

---

## Text Block Types Summary

| Block Type | Pages | Purpose |
|---|---|---|
| Hero H1 + paragraph | /, /visit, /growing-lavender, /gallery, /faq | Page purpose explanation, SEO heading |
| Seasonal schedule blocks | /visit | Inform visitors of operating hours by season |
| FAQ accordion | /faq | Handle objections and questions before visiting |
| Service cards | /thingstodo | Activity showcase with CTA (More Info / Book Now) |
| Service Description | /service-page/* | Detailed description of one activity |
| Booking Calendar | /booking-calendar/* | Date/time selection for reservations |
| Contact Form | /contact-us | Inbound inquiry form |
| Global footer | all pages | Contact info, directions, copyright |
| "Shop Online" button | all pages (header) | CTA to purchase goods via Etsy |
