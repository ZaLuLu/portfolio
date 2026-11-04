# RED THREAD — Permanent Agent Instructions & Design System Canon

> **Status:** Permanent & Mandatory  
> **Applies To:** Every page, component, feature, interaction, responsive layout, and future agent session.

---

## 1. Prime Directive

RED THREAD is a digital publication and personal systems showcase, **not a generic developer portfolio, SaaS landing page, or component-library demo**.

**RED THREAD must look designed, not generated.**
- Restraint is a design decision. Intentionality is mandatory.
- If an element does not communicate meaningful information, support an interaction, or contribute deliberately to the composition, **remove it**.

---

## 2. Strictly Prohibited Design Patterns

The following patterns are **permanently banned** across all code, components, and layouts:

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

### No Generic SaaS Aesthetics
- ❌ **No repetitive card-based layouts** (e.g. endless 3-column cards with icons and descriptions).
- ❌ **No unnecessary rounded containers** or pill-shaped buttons everywhere.
- ❌ **No glassmorphism**, glowing borders, neon text shadows, or backdrop-blur novelties.
- ❌ **No random gradient blobs** or constantly moving backgrounds.
- ❌ **No dashboard-style information arrangements**.

---

## 3. Visual Direction & Composition

**Aesthetic Definition:** Japanese contemporary editorial design fused with experimental art-book composition.

- **Asymmetrical Editorial Grids:** Compose sections thoughtfully. Break symmetrical card monotony.
- **Active Negative Space (*Ma* 間):** Give ideas room to breathe. Do not fill empty space simply because it exists.
- **Intentional Imagery:** Use the owner's authentic portrait ([`public/images/Wafiq.jpeg`](public/images/Wafiq.jpeg)). Never generate a replacement face, distort identity, or apply aggressive glitch effects.
- **Restrained Brand Mark:** Do not scatter the "W" logo as watermarks, backgrounds, or decorative section dividers.
- **Zero Cultural Clichés:** No cherry blossoms, random Japanese glyphs, stamps, anime references, or fake paper textures everywhere.

---

## 4. Brand Palette

Strict adherence to the official 5-colour palette is required:

| Colour | Hex | Intended Role |
| :--- | :--- | :--- |
| **Crimson** | `#EB0E31` | Primary signature accent |
| **Plum** | `#33212C` | Dark editorial foundation |
| **Sand** | `#D8CFC2` | Warm neutral reading foundation |
| **Coral** | `#FDA2AC` | Supporting expressive colour |
| **Canary Yellow** | `#E7C75A` | Restrained highlight (sparingly) |

- Never let pure white `#FFFFFF` dominate the screen (except inside dedicated `@media print` stylesheets).
- Maintain WCAG contrast across all pairings.

---

## 5. Typography Standards

- **Independence:** Main headings must stand independently without supporting eyebrows or micro-labels.
- **Sentence Case:** Sentence case is the universal default. Uppercase is restricted to short technical abbreviations.
- **Type Families:**
  - Display: `Instrument Serif` (expressive, literary, elegant).
  - Body: `Inter` (neutral, legible, restrained).
  - Technical: `IBM Plex Mono` (strictly for code, files, coordinates, or data schemas).
- **Line Lengths:** Robert Bringhurst optimal measure of $45\text{--}75\text{ch}$.

---

## 6. Copywriting & Truth Invariants

- **Natural Voice:** Direct, calm, and specific. No exaggerated marketing buzzwords (*"building the future"*, *"innovative solutions"*, *"crafting digital experiences"*).
- **Zero Invention:** Never invent accomplishments, statistics, client testimonials, or unverified claims. All portfolio data must trace directly to [`docs/QUESTIONS_answered.md`](docs/QUESTIONS_answered.md).

---

## 7. Component Library Restrictions

When utilizing components from libraries (ReactBits, shadcn/ui, OriginKit, etc.):
1. Never adopt default library styling without stripping generic badges, colored pill borders, and SaaS cards.
2. Adapt every component directly to the RED THREAD token system.
3. Every component must support the 8 mandatory interactive states: Default, Hover, Active/Pressed, Focus-Visible, Loading, Disabled, Error, and Success.

---

## 8. Quality Control Checklist

Before completing any task or commit, verify:
- [ ] No eyebrow headings or uppercase labels above titles.
- [ ] No fake telemetry, system status, or terminal prompts.
- [ ] No generic pill badges or colored status chips.
- [ ] No repetitive card grids.
- [ ] Real portrait (`Wafiq.jpeg`) used with deliberate editorial framing.
- [ ] No invented metrics or claims.
- [ ] Accessible print résumé accessible directly at `/resume`.
- [ ] Keyboard navigation, visible focus rings, and reduced-motion modes fully functional.
- [ ] Production build (`npm run build`) compiles cleanly with zero errors.
