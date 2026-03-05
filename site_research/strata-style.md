Design a **Material Design 2 B2B SaaS landing page** (single-page, vertically scrolling) built on a strict **five-level elevation system** (`--elev-0` through `--elev-4`) encoded as CSS custom properties. Every element's visual hierarchy must be communicated through shadow depth alone — no arbitrary box-shadows outside the token set.


```
Primary:           #6200EE   (deep purple)
Primary variant:   #3700B3   (hover/pressed)
Primary light:     rgba(98, 0, 238, 0.08)   (hover wash)
On-primary:        #FFFFFF
Secondary:         #03DAC5   (teal)
Secondary dark:    #018786   (hover)
Background:        #FAFAFA
Surface:           #FFFFFF
On-surface:        #1C1C1E
On-surface medium: rgba(28, 28, 30, 0.60)
Divider:           rgba(28, 28, 30, 0.12)
Error:             #B00020
Stars:             #F4B400
```


Single font — **Roboto** (weights 300 / 400 / 500 / 700). Button labels at `14px / 500 / letter-spacing: 1.25px / uppercase`. Section overlines at `12px / 500 / letter-spacing: 2px / uppercase`. Hero display at `clamp(40px, 6vw, 72px) / 700`. No decorative typefaces.


```css
--elev-0: none;
--elev-1: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
--elev-2: 0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12);
--elev-3: 0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10);
--elev-4: 0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05);
```


```css
--ease-standard:   cubic-bezier(0.4, 0, 0.2, 1)
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1)
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1)
```

Use `--ease-decelerate` for all entering transitions (reveals, hover lifts, ripple). Use `--ease-standard` for state changes (nav scroll, button background). Duration `0.55s` for scroll reveals, `0.3s` for hover transitions, `0.6s` for ripple.


```css
--radius-card: 8px
--radius-btn:  4px
--radius-fab:  28px
--radius-chip: 16px
```


On every button `mousedown`, append a `span.ripple` sized to `max(button-width, button-height) * 2`, centred at the cursor position relative to the button. Animate from `scale(0)` to `scale(4)` with `opacity` to `0` over `0.6s --ease-decelerate`. Colour: `rgba(255,255,255,0.40)` on contained buttons; `rgba(98,0,238,0.12)` on outlined and text buttons. Remove span on `animationend`.


1. **Fixed nav** — white surface, `64px` height, `--elev-0` at rest → `--elev-2` on `scrollY > 50` via `0.25s --ease-standard`. Contained CTA button with ripple.

2. **Hero** — two-column grid (`1fr 1fr`, `60px` gap). Left: overline chip, `h1 clamp(40px,6vw,72px)/700`, subheadline `clamp(18px,2.5vw,24px)/300`, two buttons (contained + outlined), three KPI metric chips. Right: CSS-only dashboard mockup at `--elev-3` containing KPI cards at `--elev-1`, a bar chart (bars as `border-radius: 2px` strips — active `#6200EE`, inactive `rgba(98,0,238,0.20)`), and an SVG polyline chart in `#03DAC5`.

3. **Trust bar** — full-width, `--elev-1`, partner logotypes at `rgba(28,28,30,0.38)`.

4. **Feature cards** — six cards, `repeat(auto-fit,minmax(300px,1fr))`, `gap: 24px`. Each: `--elev-1` rest → `--elev-3 + translateY(-4px)` hover. `::before` pseudo — 3px `linear-gradient(90deg,#6200EE,#03DAC5)` bar, `scaleX(0→1)` on hover over `0.35s --ease-decelerate`. Icon in `48×48px` `--c-primary-light` container.

5. **Process track** — four numbered steps, horizontal gradient connector at `2px / opacity: 0.25`. Step icon: `48×48px` circle at `rgba(98,0,238,0.06)`.

6. **Integration chips** — card-style tiles, `--elev-1` → `--elev-2 + translateY(-2px)` hover over `0.2s --ease-standard`.

7. **Testimonials** — three-col grid. Centre card starts at `--elev-3 + translateY(-4px) + border-top: 3px solid #6200EE`. Stars `#F4B400`. Avatar: `48×48px` circle with primary bg, initials in white.

8. **Pricing** — three-col grid. Featured plan starts at `--elev-3`, primary top border, primary chip label. Price: `48px / 700`. Feature list with teal checkmarks.

9. **CTA section** — split layout. Right side: three absolutely positioned `.stack-card` divs at `rotate(-6deg)/--elev-1`, `rotate(-2deg)/--elev-2`, `0deg/--elev-3`. Success chip: `rgba(3,218,197,0.08)` bg + `border-left: 3px solid #03DAC5`. Material outlined text fields with floating labels (`top: 50% → 8px`, `15px → 11px`, `color → #6200EE` on focus).

10. **FAB** — `position: fixed; bottom: 32px; right: 32px; width: 56px; height: 56px; border-radius: 28px; background: #6200EE; box-shadow: var(--elev-3)`. Hover: `--elev-4 + translateY(-2px)` over `0.3s --ease-standard`. Always `z-index: 999`.

11. **Footer** — white surface, `border-top: 1px solid rgba(28,28,30,0.12)`, `padding: 64px 24px 32px`. Four-column grid. Social buttons: `36×36px`, `--radius-btn`, ripple-enabled.


`IntersectionObserver` with `threshold: 0.1`. Initial state: `opacity: 0; transform: translateY(24px)`. Revealed: `opacity: 1; transform: none`. Transition: `0.55s --ease-decelerate`. Stagger grid children with `transition-delay` increments of `0.05s`.


```css
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: #6200EE; border-radius: 2px; }
```
