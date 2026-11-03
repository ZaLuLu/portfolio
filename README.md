# RED THREAD — Portfolio & Brand Experience

> Personal portfolio project and digital brand experience for **Wafiq**, updated to the **RED THREAD** direction: **React 19 + Vite + TypeScript**, Japanese contemporary editorial + experimental art-book aesthetic, CRT gateway, and curated asset vault.

---

## 📌 Non-Negotiable Design Rules

- **No random W-logo decorations:** Use brand marks with purpose; avoid arbitrary logo scattering.
- **Authentic Identity:** Use the user's supplied real portrait (`Wafiq.jpeg`) as the portrait source. Do not invent or alter identity.
- **Editorial Direction:** Japanese contemporary editorial + experimental art-book direction. Avoid superficial clichés or decorative Japanese glyphs.
- **Purposeful Motion:** Every visual element and animation must have a purpose. Respect `prefers-reduced-motion` and provide non-WebGL fallbacks.
- **Distinct Experiences:** The CRT gateway (`/`), editorial portfolio (`/portfolio`), puzzle experience (`/puzzle`), and print résumé (`/resume`) are separate experiences.
- **Zero Gatekeeping:** The résumé and portfolio must be directly accessible without requiring completion of the CRT gateway or puzzle.
- **Lean Dependencies:** Do not install every listed library. Select only what the implementation actually requires.
- **Licence Compliance:** Verify per-asset licence and attribution requirements before importing any third-party asset.

---

## 🗺️ Experience Map

| Route | Experience | Purpose |
| :--- | :--- | :--- |
| `/` | **CRT Gateway** | Retro threshold with 3 accessible destinations (Portfolio, Puzzle, Résumé) |
| `/portfolio` | **Editorial Portfolio** | Professional identity, project catalog, capabilities, and bio |
| `/portfolio/work/:slug` | **Case Study** | In-depth project proof, constraints, architectural decisions, and outcomes |
| `/puzzle` | **Puzzle Portfolio** | Standalone cinematic interactive narrative (isolated phase) |
| `/resume` | **Plain Résumé** | Accessible, clean, print-ready document with proper page breaks |

---

## 📁 Repository Structure

```text
portfolio/
├── archive/                     # Preserved archive bundles (.zip)
│   └── RED_THREAD_Agent_Handoff_Pack.zip
├── asset-vault/                 # Curated third-party library & 3D asset vault
│   ├── manifests/sources.json   # Verified registry of components, shaders, & 3D assets
│   ├── ASSET_VAULT.md           # Selection rules & candidate effects
│   ├── IMPORT_QUEUE.md          # Phased adoption protocol for implementation
│   └── LICENSING.md             # Compliance checklist & per-asset tracking
│
├── brand/                       # Visual brand system & source assets
│   ├── 01_Brand_Guidelines/    # Palette specs, guidelines, psychology guide
│   ├── 02_Logo_Assets/         # Scalable SVG & PNG logo marks
│   ├── 03_Favicons/            # Favicon & icon suites (16px to 512px, .ico)
│   ├── 04_Reference/           # Source references & original brand boards
│   ├── archive/                # Original brand bundle (.zip)
│   └── README.md               # Brand asset notes
│
├── docs/                        # Specifications & architectural blueprints
│   ├── ARCHITECTURE.md         # React 19 + Vite + TypeScript architecture
│   ├── DEPENDENCIES.md         # Selection & compatibility policy
│   ├── DESIGN.md               # Experience map, CRT gateway & editorial spec
│   ├── TYPOGRAPHY.md           # Type roles, hierarchy tokens & pairing candidates
│   ├── BRAND_PRESETS.md        # Semantic design tokens & color roles
│   └── QUESTIONS.md            # Content intake questionnaire
│
├── public/                      # Web-ready static assets
│   ├── favicon.ico             # Root browser icon
│   ├── favicons/               # Multi-resolution application icons
│   └── images/logo/            # Scalable SVG brand logos
│
├── src-blueprint/               # Initial application structure guidelines
│   └── README.md               # Vite scaffolding instructions
│
├── .gitignore                   # Ignore rules (node_modules, build outputs, OS files)
├── PACK_MANIFEST.json           # RED THREAD handoff manifest
└── README.md                    # Project overview & roadmap
```

---

## 🎨 Official Five-Colour Palette

| Colour | HEX | RGB | Semantic Token Role |
| :--- | :--- | :--- | :--- |
| **Crimson** | `#EB0E31` | `235, 14, 49` | Primary signature & high-intent call-to-actions |
| **Plum** | `#33212C` | `51, 33, 44` | Dark editorial foundation & deep surfaces |
| **Sand** | `#D8CFC2` | `216, 207, 194` | Warm neutral surface & readable body contrast |
| **Coral** | `#FDA2AC` | `253, 162, 172` | Expressive companion & secondary accents |
| **Canary Yellow** | `#E7C75A` | `231, 199, 90` | High-visibility highlight (tags, micro-markers) |

*Full specifications are documented in [`brand/01_Brand_Guidelines/Brand_Guidelines.md`](brand/01_Brand_Guidelines/Brand_Guidelines.md).*

---

## 📖 Recommended Read Order

1. [`docs/DESIGN.md`](docs/DESIGN.md) — Experience map, CRT gateway, editorial direction, puzzle, and résumé.
2. [`docs/TYPOGRAPHY.md`](docs/TYPOGRAPHY.md) — Type roles, fluid hierarchy tokens, and pairing candidates.
3. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — React 19 + Vite + TypeScript stack, routes, content model, and acceptance gates.
4. [`docs/DEPENDENCIES.md`](docs/DEPENDENCIES.md) — Dependency selection, version alignment, and installation order.
5. [`asset-vault/ASSET_VAULT.md`](asset-vault/ASSET_VAULT.md) — Curated components, 3D assets, icons, and prototype effects.
6. [`asset-vault/LICENSING.md`](asset-vault/LICENSING.md) — Asset licensing register and tracking requirements.
7. [`asset-vault/manifests/sources.json`](asset-vault/manifests/sources.json) — Structured registry of sources and packages.
8. [`src-blueprint/README.md`](src-blueprint/README.md) — Scaffolding instructions for Vite SPA.
