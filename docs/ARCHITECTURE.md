# RED THREAD — Technical Architecture & Application Blueprint

> **Stack:** React 19 + Vite + TypeScript + Tailwind CSS v4  
> **3D Engine:** React Three Fiber v9 + Three.js + Drei  
> **Motion:** Motion + GSAP (complex timelines)  
> **Deployment Target:** Vercel (SPA with zero-404 rewrites)  
> **Composition Ratio:** ~70% 2D content and ~30% 3D environmental experience  

---

## 1. Architectural Strategy: 70/30 Hybrid

RED THREAD combines an abstract 3D environment with high-contrast, accessible 2D typography and interface elements:

```text
┌─────────────────────────────────────────────────────────────┐
│                    DOM & UI LAYER (70%)                     │
│  - Semantic HTML & Accessible Navigation                    │
│  - Space Grotesk / Inter Typography (outside canvas)        │
│  - Case Study Content, Documentation, & Print Résumé        │
│  - Native Browser Scroll & Kinetic 2D Transitions           │
├─────────────────────────────────────────────────────────────┤
│               3D ENVIRONMENTAL CANVAS (30%)                 │
│  - Single Shared R3F Canvas (Lazy-loaded)                   │
│  - Abstract Geometric Sculptures & Perspective Shifts       │
│  - The Connection Form (The Red Thread recurring mechanism) │
│  - Camera Choreography Driven by Scroll Progression         │
└─────────────────────────────────────────────────────────────┘
```

### Invariants:
1. **Single Canvas Instance:** Avoid mounting multiple independent WebGL canvases across scenes.
2. **Zero 3D on Résumé:** The `/resume` route must not load Three.js, R3F, or shader libraries.
3. **Content Stays in DOM:** All copy, project descriptions, and credentials remain in accessible semantic DOM elements, never trapped in WebGL meshes or textures.
4. **Fallback & Reduced Motion:** When WebGL fails or `prefers-reduced-motion` is active, the 2D layout remains 100% complete, legible, and interactive.

---

## 2. Route Architecture

| Route | View Experience | Technology & Rendering |
| :--- | :--- | :--- |
| `/` | **RED THREAD Gateway** | Fast threshold with skip-intro; 3 direct destinations |
| `/portfolio` | **Professional Portfolio** | 5-Scene environmental scroll (~70% 2D / 30% R3F) |
| `/portfolio/work/:slug` | **Project Case Study** | Dedicated 2D editorial composition with media & proof |
| `/puzzle` | **Interactive Puzzle** | Decoupled cinematic narrative experience |
| `/resume` | **Plain Printable Résumé** | Pure semantic HTML + print CSS; zero 3D overhead |

---

## 3. Five Homepage Scenes

The `/portfolio` route is composed of five continuous scenes linked by **The Connection Form**:

1. **Scene 01: Arrival:** Dark abstract environment (Obsidian), dominant geometric structure, Signal Red signature.
2. **Scene 02: Introduction:** Transition to graphic composition, authentic portrait (`Wafiq.jpeg`) with deliberate framing, personal focus.
3. **Scene 03: Selected Work:** Sequential project environments (RetailMind flagship, ML implementations, Cybersecurity notes, Hajime initiative).
4. **Scene 04: Process & Capabilities:** Technical problem-solving, engineering workflow, and diagrams without generic percentage bars.
5. **Scene 05: Contact & Conclusion:** Environmental resolution, clear direct communication channels (Email, GitHub, LinkedIn).

---

## 4. Application Folder Layout

```text
red-thread/
├── public/
│   ├── favicon.ico
│   ├── favicons/
│   ├── images/
│   │   ├── Wafiq.jpeg
│   │   └── logo/
│   ├── models/
│   └── textures/
│
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── router/index.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Icons.tsx
│   │   └── transitions/
│   │
│   ├── scenes/
│   │   ├── 01-arrival/
│   │   ├── 02-introduction/
│   │   ├── 03-work/
│   │   ├── 04-process/
│   │   └── 05-conclusion/
│   │
│   ├── three/
│   │   ├── canvas/
│   │   ├── environments/
│   │   ├── geometry/
│   │   └── materials/
│   │
│   ├── content/
│   │   ├── profile.ts
│   │   └── projects.ts
│   │
│   ├── experiences/
│   │   ├── gateway/
│   │   ├── editorial/
│   │   ├── puzzle/
│   │   └── resume/
│   │
│   ├── hooks/
│   ├── lib/
│   └── styles/
│       ├── tokens.css
│       ├── typography.css
│       ├── print.css
│       └── global.css
│
├── docs/
│   ├── DESIGN.md
│   ├── ARCHITECTURE.md
│   ├── TYPOGRAPHY.md
│   ├── DEPENDENCIES.md
│   └── QUESTIONS_answered.md
│
├── AGENTS.md
├── README.md
├── package.json
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## 5. Performance Targets & Budgets

| Metric | Target |
| :--- | :--- |
| **Lighthouse Performance** | $90+$ |
| **Lighthouse Accessibility** | $95+$ |
| **Lighthouse Best Practices** | $95+$ |
| **Lighthouse SEO** | $95+$ |
| **Largest Contentful Paint (LCP)** | $< 2.5\text{s}$ |
| **Cumulative Layout Shift (CLS)** | $< 0.1$ |
| **Interaction to Next Paint (INP)** | $< 200\text{ms}$ |
