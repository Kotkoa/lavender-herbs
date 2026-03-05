# Lavender Project

## Project Overview

This is a lavender farm research and business project that will become a GitHub repository and public website.

**Current state:** Scientific PDFs, literature reviews, distillation analytics, business model documents, and website design style guides.

**Planned state:** Full GitHub repository + public website showcasing lavender farming research, business analytics, and product information.

## Repository Structure

```
/
├── ROADMAP.md                   # Project roadmap
├── books/                       # Scientific papers (Russian, lavender cultivation)
│   ├── *.pdf
│   └── reviews.md               # Summaries of scientific papers
├── business_model/
│   ├── lavender_business_model_1000sqm.md
│   └── investor_memo_lavender_valencia_1000sqm.md
├── distillation_analytics/
│   ├── sheet1.csv / sheet2.csv  # Raw distillation data
│   ├── analyze_sheet1.py / analyze_sheet2.py
│   ├── metrics.json / metrics_sheet1.json
│   ├── report.md / report_sheet1.md / report_combined.md
│   └── *_breakdown.csv          # CAPEX/OPEX breakdowns
└── site_research/               # Competitor / reference site architecture docs + style guides
    ├── *_site_architecture.md   # Site architecture docs
    ├── *_architecture_brief.md  # Architecture briefs
    ├── md_collection_template.md
    ├── tonal-style.md           # Website design: monochromatic indigo style guide
    ├── velox-style.md           # Website design: dark tech/developer style guide
    ├── lumina-style.md          # Website design: glassmorphism / spatial computing style
    ├── strata-style.md          # Website design: Material Design 2 B2B SaaS style
    └── lavender-tonal-style.md  # Website design: lavender-specific tonal style
```

## Domain Context

**Primary focus:** *Lavandula angustifolia* (English lavender) and *Lavandula x intermedia* (lavandin) cultivation for:
- Essential oil and hydrosol production (steam distillation)
- Dried flower bouquets and buds
- Seedlings/planting material
- Agrotourism

**Key data established:**
- Distillation yield: ~1.25% essential oil by mass (12.5 g/kg raw material)
- Plot size basis: 1000 m² (0.1 ha)
- Location context: Eastern Europe / Russia / Crimea conditions

## Website Plans

The project will become a public website. Visual design directions are in `site_research/`:
- [tonal-style.md](site_research/tonal-style.md) — monochromatic indigo, premium/calm aesthetic
- [velox-style.md](site_research/velox-style.md) — dark, data-rich, developer-centric (tri-color gradient)
- [lumina-style.md](site_research/lumina-style.md) — glassmorphism, frosted glass, deep gradient sky
- [strata-style.md](site_research/strata-style.md) — Material Design 2, elevation system, B2B SaaS
- [lavender-tonal-style.md](site_research/lavender-tonal-style.md) — lavender-specific tonal style

Site architecture research for competitor/reference lavender farm sites is in `site_research/`.
When adding new site architecture docs, place them in `site_research/` and name them `{sitename}_site_architecture.md` or `{sitename}_architecture_brief.md`.

When building the website, reference the style guides and synthesize content from `site_research/`.

## Language Policy

- All code and code comments: **English only**
- Documentation, content, and business docs: Russian (primary audience)
- Scientific papers: Russian (source material, do not translate)
- Git commit messages: English

## Content Guidelines

- Do not invent data — use actual distillation records and literature ranges
- When referencing yield figures, cite the source (Teagasc, Penn State Extension, Land Use NZ, etc.)
- Business calculations should include conservative/realistic/optimistic scenarios
- Regulatory claims about lavender effects (medical/therapeutic) require careful wording — position as aromatic/cosmetic, not medicinal

## Tech Stack (planned)

Not yet decided. Will be determined when website development begins. Likely static site or Next.js.
