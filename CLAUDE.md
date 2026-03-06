# Lavender Project

## Overview

Lavender farm research & business project: GitHub repo + public website.

- **Research:** scientific PDFs, literature reviews, distillation analytics, business model
- **Website:** Next.js app in `website/` (see `website/CLAUDE.md` for details)

## Repository Structure

```
/
├── ROADMAP.md
├── books/                        # Scientific papers (Russian) + reviews.md
├── business_model/               # Business model & investor memo
├── distillation_analytics/       # Raw CSV data, Python analysis, reports
├── site_research/                # Competitor site architecture + style guides
└── website/                      # Next.js website (has its own CLAUDE.md)
```

## Domain Context

**Focus:** *Lavandula angustifolia* & *Lavandula x intermedia* cultivation for:
essential oil, hydrosol, dried flowers, seedlings, agrotourism.

**Key data:** yield ~1.25% EO by mass, plot 1000 m2, Eastern Europe conditions.

## Style Guides (in `site_research/`)

- `lavender-tonal-style.md` — monochromatic violet tonal scale (primary)
- `tonal-style.md` — monochromatic indigo, premium/calm
- `velox-style.md` — dark, data-rich, developer-centric
- `lumina-style.md` — glassmorphism, frosted glass
- `strata-style.md` — Material Design 2, B2B SaaS

New site architecture docs: `site_research/{sitename}_site_architecture.md`

## Language Policy

- Code & comments: **English only**
- Docs, content, business docs: **Russian**
- Scientific papers: Russian (do not translate)
- Git commits: English

## Content Guidelines

- No invented data — use actual records and literature ranges
- Cite yield sources (Teagasc, Penn State Extension, Land Use NZ, etc.)
- Business calculations: conservative/realistic/optimistic scenarios
- Lavender effects: aromatic/cosmetic positioning, not medicinal
