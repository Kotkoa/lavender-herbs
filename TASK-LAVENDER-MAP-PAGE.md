# Task: Lavender Fields Map Page

## Goal

Create a new page `/map` on the Lavender·Herbs website showing an interactive Google Map with 21 lavender locations across Spain (fields, farms, distilleries, shops, nurseries).

## Data Source

- KML file with all 21 points: `website/public/lavender-spain.kml`
- Each point has: name, category (field/farm/oil/shop), coordinates, rating, review count, description, address

### Point Categories & Icons

| Category | Emoji | Count | Description |
|----------|-------|-------|-------------|
| field | 💜 | 12 | Lavender fields (campos) |
| farm | 🌿 | 4 | Farms, nurseries, museums |
| oil | 🧪 | 3 | Distilleries, essential oil production |
| shop | 🛍️ | 2 | Shops, workshops, experiences |

### Regions Covered

- **Brihuega, Guadalajara** — 8 points (lavender capital of Spain)
- **Tiedra, Valladolid** — 2 points
- **Burgos** — 2 points
- **Albacete / Murcia** — 2 points
- **Andalucía** (Granada, Sevilla) — 2 points
- **Catalonia / Valencia** — 3 points
- **Toledo** — 1 point

## Google Maps Integration

### Google My Maps Embed (Ready to Use)

Map is already created and public. Use this embed iframe:

```html
<iframe
  src="https://www.google.com/maps/d/u/0/embed?mid=15zhBIwk78g-bwl_CxFY3FaCN7a6AxyQ&ehbc=2E312F"
  width="100%" height="600" style="border:0; border-radius: 12px;" allowfullscreen>
</iframe>
```

- **Map ID:** `15zhBIwk78g-bwl_CxFY3FaCN7a6AxyQ`
- **Edit link:** https://www.google.com/maps/d/edit?mid=15zhBIwk78g-bwl_CxFY3FaCN7a6AxyQ
- **View link:** https://www.google.com/maps/d/viewer?mid=15zhBIwk78g-bwl_CxFY3FaCN7a6AxyQ
- Free, no API key needed, all 21 points with icons and descriptions

## Page Requirements

### Route

- Path: `/map`
- File: `website/app/map/page.tsx`
- Add "Map" link to Nav component (`website/components/ui/Nav.tsx`)

### Layout

1. **Hero section** — short: title "Lavender Map of Spain", subtitle "21 lavender fields, farms and distilleries across Spain. Bloom season: late June — mid July."
2. **Map section** — full-width embedded Google Map with all 21 points
3. **Location cards grid** — below the map, cards for each location grouped by region

### Location Card Content

Each card should display:
- Name (from KML `<name>`)
- Category badge (field / farm / oil / shop)
- Rating (stars) and review count
- Short description
- Address
- "Open in Google Maps" link: `https://www.google.com/maps/search/?api=1&query={lat},{lng}`

### Region Grouping

Group cards by region with section headers:
1. Brihuega, Guadalajara (8)
2. Tiedra, Valladolid (2)
3. Burgos (2)
4. South & East — Albacete, Murcia, Granada, Sevilla (4)
5. Catalonia & Valencia (3)
6. Other — Toledo (1)

### Filtering (Optional Enhancement)

Category filter chips at the top: All / Fields / Farms / Distilleries / Shops

## Tech Stack & Conventions

Read `website/CLAUDE.md` for full details. Key points:

- **Framework:** Next.js 16 (App Router)
- **React:** 19 with React Compiler
- **Styling:** Tailwind CSS v4 + custom design tokens (see `website/styles/tokens.css`)
- **TypeScript:** strict mode
- **Font:** Inter variable
- **Design system:** Lavender Tonal Style — monochromatic violet scale (see `website/CLAUDE.md` for color table)
- **Path alias:** `@/*` maps to project root

### Design System Reference

Color tokens (CSS custom properties in `styles/tokens.css`):
- `--tone-50` (#f3f0ff) through `--tone-900` (#5f3dc4)
- Hero backgrounds use lighter tones (50-100)
- Cards: glass effect with `backdrop-filter: blur(8px)`
- The page should follow the "Chromatic Crescendo" pattern — progressively darker sections as user scrolls

### Existing Components to Reuse

- `components/layout/PageHero.tsx` — page hero section
- `components/layout/SectionLabel.tsx` — section label
- `components/ui/GlassCard.tsx` — glass-morphism card
- `components/ui/Button.tsx` — styled button

## Location Data (All 21 Points)

```json
[
  {
    "name": "Campos de Lavanda — Main Fields",
    "region": "Brihuega, Guadalajara",
    "category": "field",
    "lat": 40.7898494,
    "lng": -2.8499762,
    "rating": 4.7,
    "reviews": 2503,
    "description": "The most famous lavender fields in Spain. Brihuega is the 'Spanish Provence.' Annual Lavender Festival in July.",
    "address": "CM-2005, 19400 Brihuega, Guadalajara"
  },
  {
    "name": "Campos de Lavanda — Second Field",
    "region": "Brihuega, Guadalajara",
    "category": "field",
    "lat": 40.7620315,
    "lng": -2.8850287,
    "rating": 4.7,
    "reviews": 505,
    "description": "Another field location closer to town center. Less crowded alternative.",
    "address": "Q467+RX, 19400 Brihuega, Guadalajara"
  },
  {
    "name": "Destilería Jardín de la Alcarria",
    "region": "Brihuega, Guadalajara",
    "category": "oil",
    "lat": 40.7601562,
    "lng": -2.8788345,
    "rating": 4.5,
    "reviews": 317,
    "description": "Lavender essential oil distillery. Guided tours showing steam distillation. Shop with oils, soaps, cosmetics.",
    "address": "Pl. Sector el Alto, 25T, 19400 Brihuega, Guadalajara"
  },
  {
    "name": "Alcarria Natura — El Rincón de la Lavanda",
    "region": "Brihuega, Guadalajara",
    "category": "shop",
    "lat": 40.75979,
    "lng": -2.86989,
    "rating": 4.8,
    "reviews": 25,
    "description": "Lavender shop-museum. Products: oils, honey, cosmetics.",
    "address": "C. Mayor, 8, 19400 Brihuega, Guadalajara"
  },
  {
    "name": "Esencias de Vida — Lavender Ice Cream",
    "region": "Brihuega, Guadalajara",
    "category": "shop",
    "lat": 40.7588418,
    "lng": -2.8705301,
    "rating": 4.9,
    "reviews": 73,
    "description": "Handcrafted lavender oil and artisan lavender ice cream.",
    "address": "C. Ntra. Sra. de la Peña, 2, 19400 Brihuega, Guadalajara"
  },
  {
    "name": "Campos de Oro Azul — Workshop",
    "region": "Brihuega, Guadalajara",
    "category": "shop",
    "lat": 40.760748,
    "lng": -2.86976,
    "rating": 4.1,
    "reviews": 34,
    "description": "Lavender product workshop. 'Blue Gold' is what lavender is called in Alcarria.",
    "address": "C. las Armas, 21, 19400 Brihuega, Guadalajara"
  },
  {
    "name": "Campos de Lavanda Hontanares",
    "region": "Brihuega, Guadalajara",
    "category": "field",
    "lat": 40.8519049,
    "lng": -2.7725542,
    "rating": 4.5,
    "reviews": 11,
    "description": "Fields north of Brihuega. Less known, quieter for photography.",
    "address": "19413 Brihuega, Guadalajara"
  },
  {
    "name": "Campo de Lavanda El Marañal",
    "region": "Brihuega, Guadalajara",
    "category": "field",
    "lat": 40.6973613,
    "lng": -2.9844219,
    "rating": 5.0,
    "reviews": 1,
    "description": "Fields near Caspueñas village, south of Brihuega. Less touristy.",
    "address": "GU-908, 19412 Caspueñas, Guadalajara"
  },
  {
    "name": "Tiedra de Lavanda — Farm Museum",
    "region": "Tiedra, Valladolid",
    "category": "farm",
    "lat": 41.6566776,
    "lng": -5.2637346,
    "rating": 4.5,
    "reviews": 940,
    "description": "Largest lavender farm in Castilla y León. 100,000+ bushes. Tours, tastings, shop. Open May–September.",
    "address": "47870 Tiedra, Valladolid"
  },
  {
    "name": "Campos de lavanda Tiedra",
    "region": "Tiedra, Valladolid",
    "category": "field",
    "lat": 41.6577829,
    "lng": -5.2610332,
    "rating": 4.6,
    "reviews": 91,
    "description": "Lavender fields next to Tiedra farm museum. Open access for photography.",
    "address": "VA-VP-6605, 47870 Tiedra, Valladolid"
  },
  {
    "name": "Campos de Lavanda Caleruega",
    "region": "Burgos",
    "category": "field",
    "lat": 41.8380458,
    "lng": -3.4909258,
    "rating": 4.8,
    "reviews": 57,
    "description": "Lavender fields near Caleruega, birthplace of Saint Dominic. Views of medieval monastery.",
    "address": "Caleruega, 09451, Burgos"
  },
  {
    "name": "Campos de lavanda Cilleruelo de Arriba",
    "region": "Burgos",
    "category": "field",
    "lat": 41.9076093,
    "lng": -3.6604066,
    "rating": 4.6,
    "reviews": 19,
    "description": "Lavender fields in Burgos province. Quiet countryside, great photo spots.",
    "address": "09349 Cilleruelo de Arriba, Burgos"
  },
  {
    "name": "Fábrica de esencias Peñarrubia",
    "region": "South & East",
    "category": "oil",
    "lat": 38.9535002,
    "lng": -2.7496925,
    "rating": 4.6,
    "reviews": 133,
    "description": "Essential oil factory near Lagunas de Ruidera natural park. Tours, aroma tastings.",
    "address": "Camino de Santiago, 02611 Ossa de Montiel, Albacete"
  },
  {
    "name": "Campos de Lavanda de Zaén",
    "region": "South & East",
    "category": "field",
    "lat": 38.1994345,
    "lng": -2.1065238,
    "rating": 4.9,
    "reviews": 9,
    "description": "Lavender fields in Moratalla mountains. Wild lavender on mountain slopes.",
    "address": "RM-702, 30441 Moratalla, Murcia"
  },
  {
    "name": "Aceites Esenciales Labiatae",
    "region": "South & East",
    "category": "oil",
    "lat": 37.1940572,
    "lng": -3.4618583,
    "rating": 4.7,
    "reviews": 21,
    "description": "Lavender essential oil production in Sierra Nevada. Ecological, organic lavender.",
    "address": "C. Eras del Molino, 3, 18192 Quéntar, Granada"
  },
  {
    "name": "Finca Las Coronas",
    "region": "South & East",
    "category": "farm",
    "lat": 37.5783348,
    "lng": -5.6371293,
    "rating": 4.9,
    "reviews": 61,
    "description": "Farm in Carmona, Seville. Lavender and aloe vera. Tours, natural product shop.",
    "address": "Cortijo del Coto, 41410 Carmona, Sevilla"
  },
  {
    "name": "Aromes de can Rosselló",
    "region": "Catalonia & Valencia",
    "category": "farm",
    "lat": 41.59691,
    "lng": 0.62127,
    "rating": 4.0,
    "reviews": 30,
    "description": "Aromatic plant farm in Lleida. Lavender, rosemary, thyme. Tours and workshops.",
    "address": "Partida Sot de Fontanet, 25, 25197 Lleida"
  },
  {
    "name": "Lavanda Experience",
    "region": "Catalonia & Valencia",
    "category": "shop",
    "lat": 41.4842605,
    "lng": 2.0535039,
    "rating": 4.8,
    "reviews": 21,
    "description": "Lavender showroom near Barcelona. Products, soap and cosmetics workshops.",
    "address": "Av Vía Augusta 2-14, 08174 Sant Cugat del Vallès, Barcelona"
  },
  {
    "name": "TheOriginalGarden",
    "region": "Catalonia & Valencia",
    "category": "farm",
    "lat": 38.9473568,
    "lng": -0.1461566,
    "rating": 4.5,
    "reviews": 315,
    "description": "Aromatic plant nursery in Miramar, Valencia. Wide lavender selection. Seedlings for purchase.",
    "address": "Carrer dels Torners, 46714 Miramar, Valencia"
  },
  {
    "name": "Campos de Lavanda El Romeral",
    "region": "Other",
    "category": "field",
    "lat": 39.6975676,
    "lng": -3.4373488,
    "rating": 3.6,
    "reviews": 25,
    "description": "Lavender fields in Toledo, La Mancha. Near windmills of Consuegra.",
    "address": "45770 El Romeral, Toledo"
  }
]
```

## Commands

```bash
cd "/Users/kotkoa/dev/lavender project/website"
yarn dev          # dev server
yarn build        # production build
yarn lint         # ESLint
yarn check-types  # TypeScript type check
```

## Checklist

- [ ] Create `app/map/page.tsx` with hero + map embed + location cards
- [ ] Add location data as a typed constant (or separate data file)
- [ ] Add "Map" link to Nav component
- [ ] Style cards with GlassCard or similar glass-morphism pattern
- [ ] Group locations by region with section headers
- [ ] Each card has "Open in Google Maps" link
- [ ] Responsive layout: map full-width, cards 3→2→1 column grid
- [ ] Follow Lavender Tonal Style (chromatic crescendo)
- [ ] Page passes `yarn build` and `yarn check-types`
- [ ] Optional: category filter chips (All / Fields / Farms / Distilleries / Shops)
