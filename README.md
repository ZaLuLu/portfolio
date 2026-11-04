# RED THREAD — Interactive Portfolio & Spatial Environment

> Personal portfolio experience and systems showcase for **Wafiq Nawaz C.**, built as an **interactive abstract digital environment**: **React 19 + Vite + TypeScript**, **React Three Fiber v9**, kinetic graphics, Space Grotesk typography, and controlled cinematic depth.

---

## 📌 Non-Negotiable Design Rules & Enforcement

RED THREAD must look **designed, not generated**. All development is governed by the permanent canon in [`AGENTS.md`](AGENTS.md) and [`docs/DESIGN.md`](docs/DESIGN.md):

- **No Generic UI Decoration:** No eyebrow text above headings, no uppercase labels above titles, no fake live counters, no fake telemetry/coordinates, no fake command prompts, no generic pill badges, no repetitive section numbering.
- **No Generic SaaS Aesthetics:** No repetitive card grids, no unnecessary rounded containers, no glassmorphism, no glowing borders, no neon text shadows, and no random gradient blobs.
- **Authentic Identity & Portrait:** Use the owner's supplied real portrait ([`public/images/Wafiq.jpeg`](public/images/Wafiq.jpeg)). Never generate a replacement face or distort identity.
- **Restrained Brand Mark:** No random reuse of the "W" logo as decorative watermarks or background fillers.
- **Abstract Environmental Direction:** Geometric sculptures, suspended planes, architectural forms, and controlled depth. Zero literal hacker cliches (no padlocks, matrix rain, or hooded figures).
- **Direct Copywriting & Zero Invention:** Natural, specific language without startup buzzwords. No invented metrics, claims, or testimonials.
- **Decoupled Experiences & Zero Gatekeeping:** The gateway (`/`), portfolio (`/portfolio`), puzzle (`/puzzle`), and clean résumé (`/resume`) remain distinct. The résumé and portfolio are directly accessible at all times without completing gateway animations or puzzles.

---

## 🎨 Working Colour Palette

| Colour | Hex | Intended Role |
| :--- | :--- | :--- |
| **Obsidian** | `#171719` | Dark environmental foundation |
| **Signal Red** | `#EB0E31` | Primary identity colour & visual signature |
| **Chalk** | `#E6E2DA` | Light content surfaces & readable foreground |
| **Electric Blue** | `#3155E7` | Secondary visual accent (used selectively) |
| **Concrete** | `#C4C0B7` | Structural surfaces & architectural planes |
| **Acid Yellow** | `#D8C34D` | Occasional visual interruption (used sparingly) |

---

## 🗺️ Experience Map & Route Architecture

| Route | Experience | Technology & Rendering |
| :--- | :--- | :--- |
| `/` | **RED THREAD Gateway** | Fast environmental threshold with 3 accessible destinations |
| `/portfolio` | **Professional Portfolio** | 5-Scene environmental scroll (~70% 2D / 30% R3F) |
| `/portfolio/work/:slug` | **Case Study** | Project-specific proof, constraints, architectural decisions, and outcomes |
| `/puzzle` | **Interactive Puzzle** | Decoupled cinematic narrative experience (independent phase) |
| `/resume` | **Plain Résumé** | Accessible, clean, print-ready document with proper page breaks (zero 3D) |

---

## 📁 Repository Structure

```text
portfolio/
├── archive/                     # Preserved archive bundles (.zip)
├── asset-vault/                 # Curated third-party library & 3D asset vault
├── brand/                       # Visual brand system & source assets
├── docs/                        # Specifications & architectural blueprints
│   ├── ARCHITECTURE.md         # React 19 + R3F v9 hybrid architecture
│   ├── DEPENDENCIES.md         # Selection & compatibility policy
│   ├── DESIGN.md               # Creative direction & implementation blueprint
│   ├── TYPOGRAPHY.md           # Space Grotesk / Inter / IBM Plex Mono spec
│   └── QUESTIONS_answered.md   # Confirmed intake questionnaire & project inventory
├── public/                      # Web-ready static assets (portrait, favicons, logos)
├── src/                         # Application source code
│   ├── app/                    # Routing & App entry
│   ├── components/             # Layout and reusable UI primitives
│   ├── content/                # Profile & verified project records
│   ├── experiences/            # Gateway, Editorial, Case Study, Puzzle, Résumé
│   └── styles/                 # DTCG tokens, typography, print, global styles
├── AGENTS.md                    # Permanent agent instructions & creative canon
├── README.md                    # Project overview & roadmap
├── vercel.json                  # Vercel SPA deployment configuration
└── vite.config.ts               # Vite configuration with Tailwind CSS v4
```

---

## 🚀 Phased Implementation Roadmap

- [x] **Phase 0:** Repository and specification reconciliation (Documentation, AGENTS.md, dependency audit, implementation plan).
- [ ] **Phase 1:** Visual prototype (1 abstract 3D environment, 1 kinetic typography composition, 1 2D-to-3D transition, 1 scroll-driven camera transition, 1 reduced-motion alternative).
- [ ] **Phase 2:** Design system and application foundation.
- [ ] **Phase 3:** Gateway and arrival scene.
- [ ] **Phase 4:** Professional portfolio (5 scenes: Arrival, Introduction, Work, Process, Conclusion).
- [ ] **Phase 5:** Case studies.
- [ ] **Phase 6:** Puzzle experience.
- [ ] **Phase 7:** Résumé.
- [ ] **Phase 8:** Final optimisation and release.
