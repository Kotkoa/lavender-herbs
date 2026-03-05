Design a single-page API infrastructure landing page for "VELOX" — a next-generation edge API gateway for developers. The style is Tech Forward: dark, data-rich, developer-centric, with a vivid tri-color gradient accent system.

BRAND IDENTITY
Brand: VELOX
Concept: Edge API gateway with sub-millisecond latency, 47 global POPs, and real-time observability
Logo: SVG hexagon (outlined outer + 60% filled inner + solid center) with blue→violet→green gradient, followed by "VELOX" in 800-weight Inter, letter-spacing 0.08em
Tagline concept: Deploy instantly. Scale infinitely. Observe everything.

TYPOGRAPHY
Primary font: Inter (Google Fonts), weights 300/400/500/600/700/800
Monospace font: JetBrains Mono (Google Fonts), weights 300/400/500/600
Base line-height: 1.6
Hero headline: clamp(52px, 9vw, 108px), weight 800, line-height 1.0, letter-spacing -0.02em
Section titles: clamp(36px, 5.5vw, 64px), weight 800, line-height 1.1, letter-spacing -0.02em
All eyebrow/label text: 11px, JetBrains Mono, letter-spacing 0.22em, UPPERCASE, color #3B82F6
Monospace elements: all code, metrics, stats, counters

COLOR SYSTEM (complete)
Page bg: #0B0F1A
Alt bg: #0F1525
Surface (cards): #141928
Surface-2 (code topbar): #1A2035
Border: rgba(255,255,255,0.08)
Border hover: rgba(255,255,255,0.14)
Text primary: #E8ECF4
Text muted: #6B7A99
Blue accent: #3B82F6
Violet accent: #8B5CF6
Green success: #22C55E
Blue glow: rgba(59,130,246,0.25)
Violet glow: rgba(139,92,246,0.25)
Green glow: rgba(34,197,94,0.2)
Main gradient: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #22C55E 100%)
Blue gradient: linear-gradient(135deg, #3B82F6, #8B5CF6)
Green gradient: linear-gradient(135deg, #22C55E, #3B82F6)
macOS red dot: #FF5F57
macOS yellow dot: #FFBD2E
macOS green dot: #28CA41
Scrollbar: 3px wide, thumb #8B5CF6

BORDER RADII
sm: 6px, md: 12px, lg: 20px, pill: 999px

EASING
Spring: cubic-bezier(0.34,1.56,0.64,1)
Smooth out: cubic-bezier(0.22,1,0.36,1)

LAYOUT
Container max-width: 1260px, padding 0 32px
Nav height: 68px, fixed; transparent → rgba(11,15,26,0.88) + backdrop-filter:blur(20px) saturate(180%) + border-bottom on scroll > 40px
Section padding: 120px 32px
CTA padding: 140px 32px

SECTIONS (in order)

1. NAV
Fixed, z-index 100. Logo left. Nav links: 13px/500/letter-spacing 0.04em/#6B7A99, hover #E8ECF4. Lang switcher: 11px pill buttons, active has #3B82F6 background. Ghost button (transparent + border rgba(255,255,255,0.08)) + primary button (gradient-blue background, white text). Both pill-shaped (radius-pill), 600-weight. Hover: translateY(-2px) + spring scale(1.02) + blue-glow shadow.

2. HERO
Full-viewport. Two layers: canvas network graph (90 animated particles in #3B82F6/#8B5CF6/#22C55E, edges < 110px distance at 0.1 opacity) + radial mesh overlays (rgba(59,130,246,0.12) at 20% 40%, rgba(139,92,246,0.10) at 80% 60%, rgba(34,197,94,0.08) at 50% 90%). Content centered, max-width 960px.
Hero badge: monospace pill, 12px, border rgba(59,130,246,0.3), bg rgba(59,130,246,0.08), green animated pulse dot + version text. Appears via fadeUp 0.6s at 0.2s delay.
Title: 3 lines, 800-weight, line1 normal text, line2 gradient text (--grad-main), line3 normal text. Each line appears via fadeUp staggered at 0.4s/0.55s/0.7s.
Subtitle: 19px/400/#6B7A99, fadeUp at 0.9s.
Code window: dark surface card with macOS traffic-light dots; monospace pre block; typing animation (55ms/char + jitter), output revealed after typing completes. fadeUp at 1.0s.
CTA: gradient primary button + ghost button, both pill. fadeUp at 1.15s.
Stats: 3 values with gradient text (28px/800), monospace uppercase labels. fadeUp at 1.3s.
Scroll cue: bottom-centered, animated vertical line (gradient transparent → blue, 2.2s pulse).

3. TICKER
Continuous 30s marquee. Items separated by blue ◆ diamond. Monospace, 12px, #6B7A99, uppercase, letter-spacing 0.1em. Dark surface background with top/bottom borders.

4. LIVE DASHBOARD STRIP
Dark surface panel. Pulse dot (6px, green, glowing box-shadow, 1.8s blink) + "LIVE DASHBOARD" mono label. 6 metrics: RPS (#3B82F6), P50 (#22C55E), P99 (#8B5CF6), Cache (#22C55E), Error (#E8ECF4), POPs (#3B82F6). 22px/600/mono tabular-nums values. Update every 1.6s with random realistic variance. Sparkline canvas below: 80ms redraw interval, gradient stroke + fill.

5. CAPABILITIES
Eyebrow + title with gradient <em>. 2×2 card grid: each card has dark surface bg, 20px radius, 1px border. Card top: colored icon box (color-mix 12% tint, 28% border, 12px radius; rotates scale(1.1) rotate(-5deg) on hover) + mono label. Card body: title (20px/700), description (14px/#6B7A99). Stat row: colored mono value (24px/600) + label. Bar track (3px, rgba(255,255,255,0.06), radius pill): fill animates 0→width on scroll intersection over 1.4s, with color glow.
API showcase: 2-col panel (56px padding): left has title + body + benchmark bars; right has HTTP response code window.

6. ARCHITECTURE
Dark surface section. Eyebrow + title with gradient <em>. 3 steps in vertical list: each step 2-col grid (100px step meta | 1fr body); meta shows monospace number (blue) + vertical connector line; body shows title (22px/700) + description (15px/#6B7A99) + code window. Architecture diagram panel: client → edge cluster (2×2 grid: smart router, cache layer [green], rate limiter [violet], trace engine) → upstream API; animated arrow flows (blue gradient pulse, 1.8s/2.8s linear infinite); stats strip at bottom.

7. SOCIAL PROOF
Eyebrow + title + body. 3-column testimonial grid: dark cards, 20px radius; quote mark (48px Georgia/400/blue/40% opacity); quote text (15px/1.75); author: colored avatar (42×42px circle, color-mix 18% tint, 1px colored border, initial letter). Numbers strip: dark panel (20px radius), flex, gradient counted values (clamp 40–64px, weight 800), mono labels. Logo wall: pill-shaped bordered company names.

8. PRICING
Dark surface section. 3-column grid. Standard cards: dark #0B0F1A bg, 1px border, 20px radius, flex column. Featured card: gradient bg (rgba(59,130,246,0.05) → rgba(139,92,246,0.05)), rgba(59,130,246,0.4) border, scale(1.03), box-shadow 0 0 48px rgba(59,130,246,0.1). Featured badge: gradient-blue pill, centered top, -14px offset. Tier: 10px mono uppercase. Price: 52px/800. Features: 14px with green checkmark SVGs. CTA: full-width pill buttons.

9. CTA
Full-dark centered section with radial glow and 48px CSS grid overlay. Code window with npm install + velox deploy commands. Email form: pill input (dark surface) + gradient primary button. On submit: show green success state. Trust badges: 4 items with tiny SVG icons, separated by · dots.

10. FOOTER
Dark surface. Flex layout: brand block (logo + tagline + green live status dot). 4-col navigation: Product / Developers / Company / Legal. Footer bottom: copyright left (mono, 11px, #6B7A99); live RPS (#22C55E) and latency (#3B82F6) counters right (update with dashboard interval).

ANIMATIONS
Scroll reveal: opacity 0→1 + translateY(28px→0) over 0.65s --ease-out, IntersectionObserver threshold 0.1.
Counter animations: cubic ease-out (1-(1-t)^3) over 1400ms, threshold 0.3.
Hero canvas: 60fps requestAnimationFrame network graph.
Typing: 55ms+random(30ms) per character, starts 1400ms after load.
Ticker: 30s linear CSS animation.
Sparkline: setInterval 80ms canvas redraw.
Dashboard: setInterval 1600ms metric updates.
Button hover: translateY(-2px) + scale(1.02) over 0.25s --ease-spring.
Card hover: translateY(-4px) + border-color upgrade over 0.3s --ease-spring.

RESPONSIVE
≤1024px: API showcase single-column; arch step 80px|1fr.
≤900px: Capabilities 1-col; testimonials 1-col; pricing 1-col; featured card unscaled.
≤700px: Nav links hidden; section padding 80px 20px.
