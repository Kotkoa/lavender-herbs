Design a **monochromatic single-page landing page** for a premium lavender farm. The entire visual identity must be constructed from exactly one colour family — violet/lavender — expressed through a ten-step tonal scale from near-white at the lightest to rich saturated purple at the deepest. No additional accent colours exist; all hierarchy, emphasis, and depth emerge from tonal position alone.

**Colour System:**
Ten named steps from `#f3f0ff` (step 50) through `#e5dbff`, `#d0bfff`, `#b197fc`, `#9775fa`, `#845ef7`, `#7950f2`, `#7048e8`, `#6741d9` to `#5f3dc4` (step 900). The footer background drops one level further to `#4c2fa8`. All semantic roles are aliases of these steps — body text on light is step-900, muted text on light is step-500, text on dark is step-50, muted text on dark is step-200.

**Chromatic Crescendo Structure:**
Every section occupies a darker band of the tonal scale: Hero at step-50, Features gradient step-100→200, Depth Statement at step-300, Process gradient step-200→500, Testimonials gradient step-500→600, Pricing gradient step-700→800, CTA at step-900, Footer at `#4c2fa8`. As the visitor scrolls, they descend into the colour — mirroring the physical experience of walking deeper into a lavender field as the plants close around you. The conversion moment sits at the richest, most saturated point — the chromatic culmination.

**Typography:**
Single typeface only: Inter variable font across all weights from 100 to 900. Weight mirrors tonal position — lighter weights (300, 400) at lighter sections, heavier weights (800, 900) at deeper sections. Hero headline is three stacked lines demonstrating the principle: line 1 in step-100 (barely visible), line 2 in step-400 (mid), line 3 in step-800 (anchor). All sizes use `clamp()` for fluid scaling. Section labels: `10px`, `700` weight, `letter-spacing: 0.22em`, uppercase. Main headline: `clamp(3.2rem, 8.5vw, 7.5rem)`. CTA headline: `clamp(2.4rem, 5.5vw, 4.5rem)`. No second typeface under any circumstances.

**Layout:**
Max content width `1140px` with `36px` horizontal padding. Nav height `68px`, fixed with transparent-to-glass scroll behavior. Features, testimonials, and pricing sections use 3-column grids collapsing to 2 then 1 at breakpoints 1024px and 768px. Process is a vertical track of 4 steps each in a `100px + 1fr` two-column grid.

**Lavender Stalk Brand Motif:**
Sixty-four animated vertical bars at the hero base representing a stylised lavender field — thin stalks that sway with a slight `rotate` variation per bar. A miniature 5-bar icon in every feature card. Bars use CSS custom property `--i` with `calc()` to create per-bar timing variation. Animation: `scaleY(0.25)` to `scaleY(1)` combined with `rotate(-1deg)` to `rotate(1deg)`, duration `calc(1.8s + var(--i) * 0.06s)`, delay `calc(var(--i) * 0.05s)`, `ease-in-out infinite`. Opacity: `0.18` for the decorative hero version; full opacity for card icons.

**Cards and Glass Surfaces:**
All cards — feature, testimonial, and pricing — use `rgba()` backgrounds drawn from the tone scale with `backdrop-filter: blur(8px)`. Feature cards: `rgba(243,240,255,0.55)` with `1px solid rgba(177,151,252,0.3)` border. Testimonial cards: `rgba(121,80,242,0.25)` background. Pricing cards: `rgba(112,72,232,0.2)`. On hover: `translateY(-5px to -6px)`, background lightens, border shifts to more saturated tone, box-shadow deepens.

**Process Section:**
Four steps in a vertical track separated by `1px solid rgba(177,151,252,0.25)`. Left column: large italic Roman numeral (2.4rem, 900 weight) in a per-step accent colour. Right column: eyebrow label, title, horizontal rule, body text. Each step sets `--proc-accent` and `--proc-text` locally — steps 1-2 use mid tones, steps 3-4 invert to light tones as background deepens. A `3px` progress bar animates `width: 0 → 100%` (1.2s, ease-out) when the step scrolls into view.

**CTA Section:**
The deepest section at step-900 (`#5f3dc4`). Three large concentric circles (900px, 650px, 400px) pulse via `ringPulse` animation (6s, staggered) with `1px solid rgba(177,151,252,0.08)` borders — evoking the aerial view of a lavender field's circular planting pattern. Email capture with pill input and white CTA button. To the right, a widget: three tighter rings + 12 animated stalks in step-400. Trust indicators below form in step-400 colour.

**Animation:**
- Entrance: `fadeUp` — `opacity: 0; translateY(24px)` to `opacity: 1; translateY(0)` — `0.85s, cubic-bezier(0.22, 1, 0.36, 1)` — hero elements staggered 0.1s to 1.4s
- Scroll reveal: `.reveal` class — same duration, threshold `0.12`, staggered by group (feature cards 80ms, process steps 120ms, testi cards 100ms, pricing cards 90ms)
- Stalk/bar animations: `scaleY` + `rotate` cycling via keyframes, infinite, staggered per element
- Ring pulse: `scale(1.1)` + `opacity: 0.2` at 50% — `ringPulse` — 4s or 6s, infinite
- Scroll indicator: `scaleY(1.3)` + opacity cycle — `scrollPulse` — 2s, ease-in-out, infinite
- Counter: animated over 1800ms with cubic ease-out from 0 to target

**Navigation:**
Fixed, `68px` tall. On scroll past 48px: background becomes `rgba(243,240,255,0.88)` with `backdrop-filter: blur(20px) saturate(180%)`, bottom border `rgba(95,61,196,0.12)`, box-shadow `0 2px 24px rgba(95,61,196,0.06)`. Logo text with first letter in step-600. Nav CTA: pill outline button in step-700 that fills solid on hover. Language switcher: 11px uppercase locale codes, active state inverted (step-50 text on step-600 bg).

**Footer:**
Background `#4c2fa8` — one step below tone-900. Brand column left (240px), five link columns right in flex-between layout. Column titles: `10px`, `letter-spacing: 0.2em`, uppercase, step-400. Links: `13px`, step-400, hover to step-100. Social icons: 34×34px, `8px` radius, bordered. Bottom colophon `11px` in step-600, dot separators in step-700.

---

**Colour Scale Reference:**

| Step | Hex       | Role                              |
|------|-----------|-----------------------------------|
| 50   | `#f3f0ff` | Hero bg · near-white lavender     |
| 100  | `#e5dbff` | Features section start            |
| 200  | `#d0bfff` | Features section end              |
| 300  | `#b197fc` | Depth statement bg                |
| 400  | `#9775fa` | Icons · muted text on dark        |
| 500  | `#845ef7` | Muted text on light · process mid |
| 600  | `#7950f2` | Nav logo accent · hover states    |
| 700  | `#7048e8` | Pricing section start             |
| 800  | `#6741d9` | Pricing section end               |
| 900  | `#5f3dc4` | Body text on light · CTA bg       |
| –    | `#4c2fa8` | Footer bg (below scale)           |

**Semantic Aliases:**
```css
--tone-50:  #f3f0ff;
--tone-100: #e5dbff;
--tone-200: #d0bfff;
--tone-300: #b197fc;
--tone-400: #9775fa;
--tone-500: #845ef7;
--tone-600: #7950f2;
--tone-700: #7048e8;
--tone-800: #6741d9;
--tone-900: #5f3dc4;

--text-on-light:      var(--tone-900);
--text-on-dark:       var(--tone-50);
--text-muted-light:   var(--tone-500);
--text-muted-dark:    var(--tone-200);
--rule-light:         rgba(95, 61, 196, .12);
--rule-dark:          rgba(243, 240, 255, .14);

--f:        "Inter", system-ui, sans-serif;
--ease:     cubic-bezier(.25, .1, .25, 1);
--ease-out: cubic-bezier(.22, 1, .36, 1);
--nav-h:    68px;
--mx:       1140px;
```

**Delta from original tonal-style.md (indigo):**
- Hue shift: ~230° (indigo) → ~270° (violet/lavender)
- All `--tone-*` hex values replaced with Mantine Violet scale
- Footer: `#2b3ea8` → `#4c2fa8`
- Stalk animation replaces waveform animation (adds `rotate` axis)
- CTA concentric circles reframed as aerial field planting pattern
- Scroll narrative metaphor: "descending into a lavender field"
