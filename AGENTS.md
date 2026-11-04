# RED THREAD — Permanent Agent Instructions & Creative Canon

> **Status:** Permanent & Mandatory  
> **Creative Direction:** Abstract Spatial Environments + Kinetic Graphics + Controlled Cinematic Depth  
> **Architecture Ratio:** ~70% 2D content and ~30% 3D experience  
> **Applies To:** Every page, scene, component, 3D environment, interaction, and future coding session.

---

## 1. Prime Directive

RED THREAD is an interactive digital environment and personal systems showcase, **not a generic developer portfolio, SaaS landing page, or component-library demo**.

**RED THREAD must look designed, not generated.**
- Restraint is a design decision. Intentionality is mandatory.
- The environment attracts attention; the work earns it.
- Never build everything in one pass; development must follow the phased roadmap.
- If an element does not communicate meaningful information, support an interaction, or contribute deliberately to the scene, **remove it**.

---

## 2. Strictly Prohibited Design Patterns

The following patterns are **permanently banned** across all code, 3D scenes, components, and layouts:

### No Generic UI Decoration
- ❌ **No eyebrow text** above headings (e.g. `[ PORTFOLIO · 2026 ]`, `SYSTEM RECORD`, `01 // SUMMARY`).
- ❌ **No uppercase section labels** sitting above main titles to fill space.
- ❌ **No fake live counters**, visitor counts, or fabricated activity feeds.
- ❌ **No fake telemetry**, system-status indicators, timestamps, or coordinates.
- ❌ **No decorative terminal interfaces** or fake command prompts (`> AWAITING INPUT...`).
- ❌ **No generic pill badges**, status chips, or decorative metadata tags.
- ❌ **No repetitive section numbering** (`01`, `02`, `03` sprinkled on every card).
- ❌ **No arbitrary decorative icons** placed beside text without functional meaning.
- ❌ **No decorative progress bars**, fake loading states, or artificial notifications.
- ❌ **No generic hacker tropes:** No padlocks, binary rain, hooded figures, matrix code walls, or neon server racks.

### No Generic SaaS Aesthetics
- ❌ **No repetitive card-based layouts** (e.g. endless 3-column cards with icons and descriptions).
- ❌ **No unnecessary rounded containers** or pill-shaped buttons everywhere.
- ❌ **No glassmorphism**, glowing borders, neon text shadows, or backdrop-blur novelties.
- ❌ **No random gradient blobs** or constantly moving backgrounds.
- ❌ **No dashboard-style information arrangements**.

---

## 3. Visual Direction & Spatial Environments

**Aesthetic Definition:** Abstract spatial environments + kinetic graphics + controlled cinematic depth.

- **Environmental Design:** Construct original abstract environments from geometry, suspended planes, distorted architectural forms, and controlled depth.
- **The Connection Form:** The red thread appears as a recurring, transformative visual mechanism (geometric form, path, scene transition, line) connecting scenes. It is never a permanently animated decorative line.
- **Visual Density Balance:** Alternate between immersive environmental scenes, open typography, dense graphic moments, and clear project presentations.
- **Authentic Imagery:** Use the owner's authentic portrait ([`public/images/Wafiq.jpeg`](public/images/Wafiq.jpeg)). Never generate a replacement face, distort identity, or apply aggressive glitch shaders.
- **Restrained Brand Mark:** Do not scatter the "W" logo as watermarks, backgrounds, or decorative section dividers.
- **Zero Cultural Clichés:** No cherry blossoms, random Japanese glyphs, stamps, or artificial paper textures everywhere.

---

## 4. Working Colour Palette

Adhere to the evolved 6-colour system:

| Colour | Hex | Intended Role |
| :--- | :--- | :--- |
| **Obsidian** | `#171719` | Dark environmental foundation |
| **Signal Red** | `#EB0E31` | Primary identity colour & visual signature |
| **Chalk** | `#E6E2DA` | Light content surfaces & readable foreground |
| **Electric Blue** | `#3155E7` | Secondary visual accent (used selectively) |
| **Concrete** | `#C4C0B7` | Structural surfaces & architectural planes |
| **Acid Yellow** | `#D8C34D` | Occasional visual interruption (used sparingly) |

- Different scenes may use different combinations; avoid applying all six colours to every section.
- Maintain accessible WCAG AA contrast across all pairings. Never communicate information through colour alone.

---

## 5. Typography Standards

- **Independence:** Main headings must stand independently without supporting eyebrows or micro-labels.
- **Sentence Case:** Sentence case is the universal default.
- **Type Families:**
  - **Primary Display:** `Space Grotesk` (contemporary, expressive, confident).
  - **Body:** `Inter` (neutral, legible, restrained).
  - **Technical:** `IBM Plex Mono` (strictly for actual code, file paths, coordinates, or data schemas).
- **Line Lengths:** Robert Bringhurst optimal measure of $45\text{--}75\text{ch}$.

---

## 6. Copywriting & Truth Invariants

- **Natural Voice:** Direct, calm, and specific. No exaggerated marketing buzzwords (*"building the future"*, *"innovative solutions"*, *"crafting digital experiences"*).
- **Zero Invention:** Never invent accomplishments, statistics, client testimonials, or unverified claims. All portfolio data must trace directly to [`docs/QUESTIONS_answered.md`](docs/QUESTIONS_answered.md).

---

## 7. 2D / 3D Implementation Rules

- **70/30 Rule:** Approximately 70% 2D content (DOM, semantic HTML, typography, case studies) and 30% 3D experience (R3F environmental canvas).
- **Single Canvas Instance:** Use a single shared WebGL canvas architecture; avoid mounting multiple canvases.
- **Content Stays Outside Canvas:** Project details, descriptions, and accessible copy remain in DOM elements.
- **Zero 3D on Résumé:** The `/resume` route must never load Three.js, R3F, or shader libraries.
- **Reduced Motion & Fallbacks:** Always provide a complete, functional non-WebGL and reduced-motion fallback.

---

## 8. Quality Control Checklist

Before completing any task or commit, verify:
- [ ] No eyebrow headings or uppercase labels above titles.
- [ ] No fake telemetry, system status, or terminal prompts.
- [ ] No generic pill badges or colored status chips.
- [ ] No repetitive card grids.
- [ ] Real portrait (`Wafiq.jpeg`) used with deliberate framing.
- [ ] No invented metrics or claims.
- [ ] Accessible print résumé accessible directly at `/resume` without WebGL.
- [ ] Keyboard navigation, visible focus rings, and reduced-motion modes fully functional.
- [ ] Production build (`npm run build`) compiles cleanly with zero errors.
- [ ] Work is stopped after the assigned phase for user review and approval.
