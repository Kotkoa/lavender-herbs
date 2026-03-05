Design a **monochromatic single-page landing page** for a premium audio subscription platform. The entire visual identity must be constructed from exactly one colour family — deep blue/indigo — expressed through a ten-step tonal scale from near-white at the lightest to rich saturated indigo at the deepest. No additional accent colours exist; all hierarchy, emphasis, and depth emerge from tonal position alone.

**Colour System:**
Ten named steps from `#f0f4ff` (step 50) through `#dbe4ff`, `#bac8ff`, `#91a7ff`, `#748ffc`, `#5c7cfa`, `#4c6ef5`, `#4263eb`, `#3b5bdb` to `#364fc7` (step 900). The footer background drops one level further to `#2b3ea8`. All semantic roles are aliases of these steps — body text on light is step-900, muted text on light is step-500, text on dark is step-50, muted text on dark is step-200.

**Chromatic Crescendo Structure:**
Every section occupies a darker band of the tonal scale: Hero at step-50, Features gradient step-100→200, Depth Statement at step-300, Process gradient step-200→500, Testimonials gradient step-500→600, Pricing gradient step-700→800, CTA at step-900, Footer at #2b3ea8. As the visitor scrolls, they descend into the colour. The conversion moment sits at the richest, most saturated point — the chromatic culmination.

**Typography:**
Single typeface only: Inter variable font across all weights from 100 to 900. Weight mirrors tonal position — lighter weights (300, 400) at lighter sections, heavier weights (800, 900) at deeper sections. Hero headline is three stacked lines demonstrating the principle: line 1 in step-100 (barely visible), line 2 in step-400 (mid), line 3 in step-800 (anchor). All sizes use `clamp()` for fluid scaling. Section labels: `10px`, `700` weight, `letter-spacing: 0.22em`, uppercase. Main headline: `clamp(3.2rem, 8.5vw, 7.5rem)`. CTA headline: `clamp(2.4rem, 5.5vw, 4.5rem)`. No second typeface under any circumstances.

**Layout:**
Max content width `1140px` with `36px` horizontal padding. Nav height `68px`, fixed with transparent-to-glass scroll behavior. Features, testimonials, and pricing sections use 3-column grids collapsing to 2 then 1 at breakpoints 1024px and 768px. Process is a vertical track of 4 steps each in a `100px + 1fr` two-column grid.

**Waveform Brand Motif:**
Sixty-four animated vertical bars at the hero base and a miniature 5-bar icon in every feature card. Bars use CSS custom property `--i` with `calc()` to create per-bar timing variation. Animation: `scaleY(0.25)` to `scaleY(1)`, duration `calc(1.2s + var(--i) * 0.05s)`, delay `calc(var(--i) * 0.04s)`, `ease-in-out infinite`. Opacity: `0.18` for the decorative hero version; full opacity for card icons.

**Cards and Glass Surfaces:**
All cards — feature, testimonial, and pricing — use `rgba()` backgrounds drawn from the tone scale with `backdrop-filter: blur(8px)`. Feature cards: `rgba(240,244,255,0.55)` with `1px solid rgba(145,167,255,0.3)` border. Testimonial cards: `rgba(76,110,245,0.25)` background. Pricing cards: `rgba(75,100,245,0.2)`. On hover: `translateY(-5px to -6px)`, background lightens, border shifts to more saturated tone, box-shadow deepens.

**Process Section:**
Four steps in a vertical track separated by `1px solid rgba(145,167,255,0.25)`. Left column: large italic Roman numeral (2.4rem, 900 weight) in a per-step accent colour. Right column: eyebrow label, title, horizontal rule, body text. Each step sets `--proc-accent` and `--proc-text` locally — steps 1-2 use mid tones, steps 3-4 invert to light tones as background deepens. A `3px` progress bar animates `width: 0 → 100%` (1.2s, ease-out) when the step scrolls into view.

**CTA Section:**
The deepest section at step-900 (`#364fc7`). Three large concentric circles (900px, 650px, 400px) pulse via `ringPulse` animation (6s, staggered) with `1px solid rgba(145,167,255,0.08)` borders. Email capture with pill input and white CTA button. To the right, a widget: three tighter rings + 12 animated bars in step-400. Trust indicators below form in step-400 colour.

**Animation:**
- Entrance: `fadeUp` — `opacity: 0; translateY(24px)` to `opacity: 1; translateY(0)` — `0.85s, cubic-bezier(0.22, 1, 0.36, 1)` — hero elements staggered 0.1s to 1.4s
- Scroll reveal: `.reveal` class — same duration, threshold `0.12`, staggered by group (feature cards 80ms, process steps 120ms, testi cards 100ms, pricing cards 90ms)
- Waveform/bar animations: `scaleY` cycling via keyframes, infinite, staggered per element
- Ring pulse: `scale(1.1)` + `opacity: 0.2` at 50% — `ringPulse` — 4s or 6s, infinite
- Scroll indicator: `scaleY(1.3)` + opacity cycle — `scrollPulse` — 2s, ease-in-out, infinite
- Counter: animated over 1800ms with cubic ease-out from 0 to target

**Navigation:**
Fixed, `68px` tall. On scroll past 48px: background becomes `rgba(240,244,255,0.88)` with `backdrop-filter: blur(20px) saturate(180%)`, bottom border `rgba(54,79,199,0.12)`, box-shadow `0 2px 24px rgba(54,79,199,0.06)`. Logo text "TONAL" with first letter in step-600. Nav CTA: pill outline button in step-700 that fills solid on hover. Language switcher: 11px uppercase locale codes, active state inverted (step-50 text on step-600 bg).

**Footer:**
Background `#2b3ea8` — one step below tone-900. Brand column left (240px), five link columns right in flex-between layout. Column titles: `10px`, `letter-spacing: 0.2em`, uppercase, step-400. Links: `13px`, step-400, hover to step-100. Social icons: 34×34px, `8px` radius, bordered. Bottom colophon `11px` in step-600, dot separators in step-700.
