Design a glassmorphism-style single-page landing page for "LUMINA", a spatial computing workspace for creative minds. The aesthetic is luminously modern and spatially deep — frosted glass panels floating over a deep fixed gradient sky, ambient colored blobs providing the backlighting that makes glass glow. Everything feels weightless, layered, and dimensional.

BRAND IDENTITY:
- Brand name: LUMINA
- Logo: SVG gradient circle icon (stroke + inner fill, gradient from #FF6B9D to #00D2FF) + "LUMINA" wordmark

COLOR SYSTEM (exact values):
- Background: linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%), background-attachment: fixed
- Glass bg: rgba(255, 255, 255, 0.08)
- Glass border: rgba(255, 255, 255, 0.18)
- Glass highlight (hover): rgba(255, 255, 255, 0.25)
- Text primary: #FFFFFF
- Text muted: rgba(255, 255, 255, 0.65)
- Accent 1 (Rose): #FF6B9D
- Accent 2 (Deep Rose): #C44569
- Accent 3 (Cyan): #00D2FF
- Accent 4 (Blue): #3A7BD5
- Accent 5 (Amber): #F8B500
- Accent 6 (Purple): #7B2CBF
- Gradient primary (rose→cyan): linear-gradient(135deg, #FF6B9D, #00D2FF) — for text, buttons, badges
- Gradient alt (cyan→amber): linear-gradient(135deg, #00D2FF, #F8B500) — for section alt text
- CTA button shadow: rgba(255, 107, 157, 0.4), hover: rgba(255, 107, 157, 0.5)

GLASSMORPHISM RECIPE (use consistently):
- background: rgba(255, 255, 255, 0.08)
- backdrop-filter: blur(20px) saturate(180%)
- border: 1px solid rgba(255, 255, 255, 0.18)
- border-radius: varies by component (16/24/32px)

AMBIENT BACKGROUND (critical):
4 fixed blobs behind all content, opacity 0.5, blur(80px):
- Blob 1: 600×600px, background #FF6B9D, top: -200px, left: -200px
- Blob 2: 500×500px, background #00D2FF, top: 20%, right: -150px
- Blob 3: 400×400px, background #7B2CBF, bottom: -100px, left: 30%
- Blob 4: 350×350px, background #F8B500, bottom: 30%, left: -100px
All blobs: blobFloat animation 20s ease-in-out infinite with -5s stagger each. Keyframes: translate(0,0) scale(1) → translate(50px,-50px) scale(1.1) → translate(-30px,30px) scale(0.95) → translate(30px,50px) scale(1.05)

TYPOGRAPHY:
- Display: "Space Grotesk" (Google Fonts, weights 400/500/600/700)
- Body: "Inter" (Google Fonts, weights 300/400/500/600/700)
- Hero title: clamp(48px, 6vw, 72px), Space Grotesk 700, line-height 1.1, letter-spacing -0.02em
- Section titles: clamp(40px, 5vw, 56px), Space Grotesk 700, line-height 1.15
- Gradient text: background-clip: text technique with linear-gradient(135deg, #FF6B9D, #00D2FF)

ANIMATION:
Easing smooth: cubic-bezier(0.4, 0, 0.2, 1)
Easing spring: cubic-bezier(0.34, 1.56, 0.64, 1)
- Badge dot pulse: opacity 1→0.5, scale 1→0.8, 2s ease-in-out infinite
- Rotating card glow: 200%×200% radial gradient pseudo-element rotates 360° over 10s linear infinite
- Float elements: translateY(0) rotate(0)→translateY(-20px) rotate(5deg), 6s ease-in-out infinite, staggered
- Card float (mini cards): translateY(0)translateX(0)→translateY(-15px)translateX(5px), 8s ease-in-out, staggered
- Node float: translateY(0)→translateY(-10px), 5s ease-in-out infinite, staggered 1s
- Reveals: opacity 0 translateY(30px) → visible, 0.6s ease-smooth, 100ms stagger
- Feature card hover: translateY(-8px), border → glass-highlight, glow opacity 0.2→0.6, 0.4s spring
- Btn primary hover: translateY(-2px), shadow rgba(255,107,157,0.5), 0.3s spring

LAYOUT:
- Container: max-width 1200px
- Nav height: 80px
- Nav: floating glass pill (border-radius 32px), positioned 16px from viewport edges
- Section padding: 120px 48px
- Border radii system: sm=16px, md=24px, lg=32px

PAGE SECTIONS (in order):

1. FIXED AMBIENT BLOBS: 4 colored blobs, fixed position, z-index -1, always behind content.

2. NAVIGATION: Floating glass pill (border-radius 32px, glass recipe). Logo (SVG gradient icon + LUMINA). Nav links (hidden mobile). Language switcher (glass bg pill, active item = rose→deep-rose gradient, border-radius: 12px). Ghost glass CTA button.

3. HERO: 2-column grid (equal), max-width 1400px. Left column (flex column, gap 24px):
   - Glass pill badge with pulsing rose dot, muted text
   - Two-line Space Grotesk title: first line white, second line gradient (rose→cyan) via background-clip
   - Muted subtitle, 18px
   - Two buttons: primary (rose→deep-rose gradient, 16px border-radius, spring hover) + glass-outline
   - Glass stats panel (border-radius 24px, blur 20px, padding 24px 32px): 3 stats separated by 1px glass-border lines. Stat values use gradient text (cyan→blue).
   Right column: 500px height
   - Main glass card (420×320px, border-radius 32px, glass recipe): rotating radial glow + 3 floating gradient squares (rose/cyan/amber-purple gradients) + workspace node preview (3 glass squares + 2 gradient connection lines at 50% opacity)
   - 3 mini floating glass cards (text labels with emoji) positioned around main card with staggered float animations

4. FEATURES: "FEATURES" glass tag (cyan text) + two-line gradient title + subtitle. 3×2 grid of glass cards (border-radius 24px). Each: 56×56px glass icon box with per-accent-color SVG icon, heading (Space Grotesk 600, 20px), body (muted 15px), radial corner glow matching icon color. Hover: lift -8px + glow brightens.

5. WORKSPACE SHOWCASE: Dark overlay section (rgba(0,0,0,0.2)). 2-column, 80px gap. Left: glass-light tag + alt-gradient title + subtitle + 3 feature items (glass icon 48×48px + title/subtitle flex). Right: glass showcase panel (480×400px, border-radius 32px, blur 30px): 2 interior blobs (200px rose + 180px cyan, blur 60px) + 4 floating glass nodes with labels + 3 gradient connector lines at 40% opacity.

6. TESTIMONIALS: Centered "STORIES" tag + gradient title. 3-column grid of deep glass cards (rgba(255,255,255,0.05), border-radius 24px). Each: amber ★★★★★, muted quote text (15px), author row (glass circle avatar 44px + name/role).

7. PRICING: Centered "PRICING" tag + gradient title + subtitle. 3-column grid (border-radius 24px). Standard cards: rgba(255,255,255,0.05) glass. Featured (middle): gradient tint rgba(255,107,157,0.1)→rgba(0,210,255,0.1), rose border rgba(255,107,157,0.3), scale(1.05), floating rose gradient badge "Most Popular". All: centered header, 48px price, feature list (colored SVG checkmarks per tier: cyan/rose/amber), full-width CTA button.

8. EARLY ACCESS / CTA: Centered glass panel (700px max, border-radius 32px, blur 30px, box-shadow 0 20px 60px rgba(0,0,0,0.3)). Interior glows (rose top-left 300px, cyan bottom-right 250px, blur 80px, 30% opacity). Gradient title + subtitle + email input (glass recipe, border-radius 16px) + primary button inline. Cyan success icon in glass circle replaces form.

9. FOOTER: Glass-border top line. Grid 1.5fr/2fr. Brand + tagline. 4 link columns (uppercase headers 13px, link items 14px muted). Bottom bar: copyright + 3 glass icon social links (X/GitHub/Discord, 40×40px, border-radius 16px).

RESPONSIVE:
- 1024px: hero → 1 column; features/testimonials → 2-col; pricing → 1-col (max 400px); showcase → 1-col
- 768px: sections padding 80px 24px; nav links hidden; features/testimonials → 1-col; footer → 1-col; footer links → 2-col; form → stacks; floating mini cards hidden

SPECIAL DETAILS:
- Scrollbar: 6px, track #0F0C29, thumb linear-gradient(180deg, #FF6B9D, #00D2FF), radius 3px
- Text selection: background #00D2FF, text #0F0C29
- All backdrop-filter also include -webkit-backdrop-filter for Safari
- background-attachment: fixed on body for parallax gradient effect on scroll
