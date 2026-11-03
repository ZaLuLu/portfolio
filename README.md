# Wafiq · Portfolio

> Personal portfolio project and digital brand experience for **Wafiq**, built with a crimson-led editorial design direction, high-performance static architecture, and rigorous design standards.

---

## 📁 Repository Structure

```text
portfolio/
├── brand/                       # Complete visual brand system & source assets
│   ├── 01_Brand_Guidelines/    # Palette specifications, guidelines, psychology guide
│   ├── 02_Logo_Assets/         # Scalable SVG & PNG logo marks (Crimson, Plum, White, Black)
│   ├── 03_Favicons/            # Comprehensive favicon & icon suites (16px to 512px, .ico)
│   ├── 04_Reference/           # Original source references & brand boards
│   ├── archive/                # Original asset bundles (.zip)
│   └── README.md               # Brand asset usage notes
│
├── docs/                        # Project planning & architectural blueprints
│   ├── ARCHITECTURE.md         # Technical architecture & content model
│   ├── BRAND_PRESETS.md        # Semantic design tokens & color roles
│   ├── DESIGN.md               # Visual concept & editorial design doctrine
│   └── QUESTIONS.md            # Content intake questionnaire & project inventory
│
├── public/                      # Web-ready static assets for frontend builds
│   ├── favicon.ico             # Root browser icon
│   ├── favicons/               # Multi-resolution application icons
│   └── images/logo/            # Scalable SVG brand logos for UI components
│
├── .gitignore                   # Standard ignore rules (node_modules, build outputs, OS files)
└── README.md                    # Project overview & roadmap
```

---

## 🎨 Brand Identity

The brand identity follows a **Crimson-led editorial direction** combining disciplined typography, purposeful negative space, and a curated five-color palette:

| Colour | HEX | RGB | Semantic Token Role |
| :--- | :--- | :--- | :--- |
| **Crimson** | `#EB0E31` | `235, 14, 49` | Primary signature & high-intent call-to-actions |
| **Plum** | `#33212C` | `51, 33, 44` | Dark editorial foundation & deep surfaces |
| **Sand** | `#D8CFC2` | `216, 207, 194` | Warm neutral surface & readable body contrast |
| **Coral** | `#FDA2AC` | `253, 162, 172` | Expressive companion & secondary accents |
| **Canary Yellow** | `#E7C75A` | `231, 199, 90` | High-visibility highlight (tags, micro-markers) |

*Full specifications, contrast pairings, and logo usage rules are documented in [`brand/01_Brand_Guidelines/Brand_Guidelines.md`](brand/01_Brand_Guidelines/Brand_Guidelines.md).*

---

## 📑 Planning & Architecture

- **[Technical Architecture](docs/ARCHITECTURE.md):** Proposed Astro static site generation, build-time validated content collections (`src/content/projects/`), and zero-JS default runtime.
- **[Editorial Design Doctrine](docs/DESIGN.md):** Human-crafted aesthetic, Bringhurst typographical measure ($45\text{--}75\text{ch}$), fluid layout, and honest artifact presentation.
- **[Brand Token Contract](docs/BRAND_PRESETS.md):** DTCG 3-tier token mappings for automated styling and theme safety.
- **[Content Questionnaire](docs/QUESTIONS.md):** Project intake form for featured case studies, biography, and professional links.

---

## 🚀 Next Steps

1. Fill out project details and bio in [`docs/QUESTIONS.md`](docs/QUESTIONS.md).
2. Initialize the frontend application (Astro + Tailwind CSS / Vanilla CSS).
3. Connect content collections with case study records.
