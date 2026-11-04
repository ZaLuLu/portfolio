# RED THREAD
## Creative Direction, Design Specification & Implementation Blueprint

**Project:** RED THREAD  
**Owner:** Wafiq Nawaz C.  
**Design status:** Creative direction finalized  
**Implementation status:** Awaiting approval  
**Application:** React 19 + Vite + TypeScript  
**Deployment target:** Vercel

---

# 1. Creative vision

RED THREAD is an interactive personal portfolio built around an abstract digital environment.

It combines:
- Abstract 3D environments.
- Expressive 2D graphic compositions.
- Kinetic typography.
- Scroll-driven storytelling.
- Cinematic transitions.
- Purposeful interactive elements.
- Conventional, accessible navigation.

The experience should feel like travelling through a continuously transforming digital environment. The visitor is not simply scrolling through a collection of portfolio sections. They are moving through a sequence of carefully constructed visual scenes.

However, this is still a professional portfolio. Projects, skills, personal information, contact details and résumé access must remain understandable and accessible.

### Core identity
**RED THREAD is a connected system of experiences, experiments and things built.**
The red thread represents the visual connection between these experiences. It can appear as a path, geometric structure, transition, line or transformed object. It must not become a repetitive decorative string across the interface.

### Design objectives
1. Create an immediately recognisable visual identity.
2. Make scrolling feel like progression through an environment.
3. Combine 2D and 3D without making everything dependent on WebGL.
4. Present technical work with real substance.
5. Create distinctive visual compositions for individual projects.
6. Keep the experience fast, responsive and accessible.
7. Make the puzzle experience independent from professional information.

---

# 2. Visual design language

## 2.1 Primary visual direction
**Abstract spatial environments + kinetic graphics + controlled cinematic depth.**

The visual language draws from:
- Abstract architecture.
- Geometric sculptures.
- Impossible spatial structures.
- Experimental motion graphics.
- Digital installations.
- Transformative geometric forms.
- Unconventional camera perspectives.
- Layered graphic compositions.

Do not imitate existing portfolio websites. Use external portfolios as references for interaction quality and technical possibilities, never as templates.

## 2.2 Environmental design
Build original abstract environments using geometry and composition.

Potential elements:
- Interconnected geometric structures.
- Suspended planes.
- Distorted architectural forms.
- Sculptural objects.
- Geometric pathways.
- Layered spatial structures.
- Controlled depth and perspective.
- Abstract surfaces and material transitions.

Do not populate the world with random floating objects. Every object must contribute to a scene's composition, narrative or interaction.

Avoid literal cybersecurity imagery such as padlocks, binary rain, hooded figures, glowing code walls and generic server rooms. The environment should represent creativity and engineering, not a stereotypical hacker aesthetic.

## 2.3 Visual density
The selected density is balanced.

Use alternating compositions:
- Large, immersive environmental scenes.
- Dense graphic compositions.
- Clear project presentations.
- Open sections with strong typography.
- Image-led transitions.
- Restrained interactive details.

Do not make every section equally busy. Do not fill negative space merely because it exists.

---

# 3. Colour system

The original brand palette is being evolved rather than discarded.

## Proposed working palette

| Colour | Hex | Role |
|---|---|---|
| **Obsidian** | `#171719` | Dark environmental foundation |
| **Signal Red** | `#EB0E31` | Primary identity colour |
| **Chalk** | `#E6E2DA` | Light content surfaces |
| **Electric Blue** | `#3155E7` | Secondary visual accent |
| **Concrete** | `#C4C0B7` | Structural surfaces |
| **Acid Yellow** | `#D8C34D` | Occasional visual interruption |

These are working design tokens. They require implementation previews and contrast testing before final approval.

### Colour behaviour
- Use Obsidian for selected environments, not every page.
- Use Signal Red as the recognisable visual signature.
- Use Chalk to create contrast and readable content areas.
- Use Electric Blue selectively for visual variation.
- Use Concrete for architectural forms and surfaces.
- Use Acid Yellow sparingly.

Different scenes may use different combinations. Avoid applying all six colours to every section. Do not introduce unrelated colours without a deliberate design reason.

### Colour accessibility
- Test foreground and background combinations.
- Maintain accessible text contrast (WCAG AA).
- Never communicate meaning through colour alone.
- Provide visible focus indicators.
- Ensure text remains readable over imagery and 3D scenes.

---

# 4. Typography system

Typography should feel contemporary, expressive and confident. The previous Instrument Serif-led editorial direction is no longer the primary direction.

## Proposed font roles

| Role | Candidate | Purpose |
|---|---|---|
| **Primary display** | Space Grotesk | Main headings and expressive typography |
| **Body** | Inter | Reading and interface text |
| **Technical** | IBM Plex Mono | Selected technical information |

Alternative display candidates can be tested: Sora, Manrope, General Sans, Plus Jakarta Sans. Choose one primary display typeface after testing actual page compositions. Use a maximum of three primary font families.

### Typography rules
- Large expressive headings are encouraged.
- Use controlled differences in weight and scale.
- Use fluid typography with responsive sizing.
- Maintain readable body text.
- Avoid excessive all-caps typography.
- Avoid generic uppercase eyebrow labels. Never place random labels above main headings.
- Do not use monospace text as decorative technical noise.

### Hierarchy
Establish a clear distinction between:
1. Main display statements.
2. Section titles.
3. Project titles.
4. Body content.
5. Supporting information.

Typography must work independently of animation.

---

# 5. Motion system

The selected motion direction is mixed. Different scenes can use different motion behaviours according to their purpose.

## 5.1 Cinematic movement
Use for transitions between major environments:
- Camera movement through abstract structures.
- Controlled zoom and perspective changes.
- Geometric structures assembling.
- Scene transitions.
- Environment transformations.

## 5.2 Kinetic movement
Use for graphic compositions:
- Typography transformations.
- Image-mask reveals.
- Geometric transitions.
- Shape movement.
- Layered graphic reveals.

## 5.3 Physical interaction
Use selectively:
- Subtle pointer-responsive objects.
- Parallax between environmental layers.
- Objects responding to interaction.
- Scroll-position-based transformations.

Avoid applying pointer effects to every object.

## 5.4 Scroll behaviour
Use native browser scrolling. Implement scroll-driven animation through Motion, GSAP or appropriate CSS features.

Rules:
- Do not hijack scrolling.
- Do not force users to wait for long animations.
- Do not create scroll traps.
- Do not prevent direct navigation.
- Do not make sections inaccessible when JavaScript fails.
- Do not tie content visibility exclusively to animation completion.

Scrolling should feel connected to the environment without sacrificing usability.

## 5.5 Motion performance
- Use transforms and opacity where practical.
- Avoid excessive layout-triggering animations.
- Avoid multiple continuously rendering WebGL canvases.
- Lazy-load complex scenes.
- Stop or reduce inactive animations when possible.
- Respect `prefers-reduced-motion`. Provide a complete reduced-motion experience.

---

# 6. Website architecture and routes

Preserve the established three-entry-point concept.

| Route | Purpose |
|---|---|
| `/` | RED THREAD gateway |
| `/portfolio` | Professional portfolio |
| `/portfolio/work/:slug` | Individual project case study |
| `/puzzle` | Independent interactive puzzle experience |
| `/resume` | Direct, printable résumé |

## Gateway
The gateway should introduce RED THREAD without making the user wait through a long animation.
It should present three clear destinations:
1. Professional portfolio.
2. Puzzle experience.
3. Résumé.

Requirements: Skip intro option, immediate access to all three destinations, keyboard accessibility, visible focus states, reduced-motion alternative, no autoplay audio, no fake system readouts, no unnecessary loading screens.

## Professional portfolio
Main destination containing: Introduction, Portrait, Selected projects, Project case studies, Skills and capabilities, About information, Contact information.

## Project case studies
Each project needs its own visual composition. Required content model: Project name, Summary, Problem, Audience, Personal role, Contributions, Technical decisions, Constraints, Implementation, Outcome or current status, Technologies, Images and diagrams, Relevant links, Credits.

Do not invent project achievements or performance metrics.

## Puzzle experience
The puzzle experience remains separate. It must not be required to access the professional portfolio or résumé.

## Résumé
The résumé must remain a conventional, readable document with direct routing, printable CSS, sensible page breaks, accessible typography, zero required 3D rendering, and zero invented claims.

---

# 7. Homepage scene specification

The homepage should be composed of five major scenes:

## Scene 01: Arrival
- **Purpose:** Establish identity.
- **Visual direction:** Dark abstract environment, one dominant geometric structure, controlled environmental movement, strong name treatment, Signal Red as a visual signature.
- **Interaction:** Scroll initiates a meaningful transformation; camera or composition moves into next scene; direct navigation remains visible.

## Scene 02: Introduction
- **Purpose:** Introduce Wafiq.
- **Visual direction:** Transition into a more graphic composition; use the actual supplied portrait (`public/images/Wafiq.jpeg`); strong typography; deliberate image framing.
- **Content:** Approved name, accurate introduction, current areas of interest, brief professional context. Zero identity alteration.

## Scene 03: Selected work
- **Purpose:** Present actual work.
- **Visual direction:** Sequence of distinct project environments, individual graphic treatments, project imagery and real artifacts, clear titles and concise descriptions.
- **Interaction:** Scroll between projects; project selection opens corresponding case study; direct links available.

## Scene 04: Process and capabilities
- **Purpose:** Explain how the work is approached.
- **Content:** Technical capabilities, engineering process, problem-solving approach, experiments and learning, selected diagrams or project artifacts. Zero generic percentage bars.

## Scene 05: Contact and conclusion
- **Purpose:** End the experience with a memorable final composition.
- **Visual direction:** Environment resolves into a simpler composition; final transformation connects to the RED THREAD concept; contact details presented clearly (GitHub, LinkedIn, Email, Résumé).

---

# 8. The RED THREAD signature mechanism

Develop one original recurring visual mechanism: **The Connection Form**.
It represents continuity between scenes:
1. Geometric form appears during arrival.
2. Changes into a path during introduction.
3. Connects project environments.
4. Becomes a transition between scenes.
5. Resolves into the final composition.

Technologies: SVG paths, CSS transforms, Three.js geometry, Motion timelines, selected shader effects. Do not use a permanently animated red line as decoration.

---

# 9. 2D and 3D implementation strategy

Target: **70% 2D content and 30% 3D experience.**

| Element | Rendering approach |
|---|---|
| Main environmental scenes | React Three Fiber |
| Typography | HTML and CSS |
| Navigation | Semantic HTML |
| Project information | React components |
| Diagrams | SVG |
| Graphic compositions | CSS and SVG |
| Environmental objects | Three.js |
| Transitions | Motion and GSAP |
| Case studies | Primarily 2D |
| Résumé | HTML and print CSS |

### 3D requirements
- Use a single shared rendering architecture where practical.
- Avoid mounting multiple unnecessary WebGL canvases.
- Lazy-load environmental scenes.
- Keep project content outside the canvas.
- Use fallback compositions.
- Reduce geometry and rendering complexity on mobile.
- Avoid unnecessary postprocessing.
- Do not make the website unusable without WebGL.

---

# 10. Technical architecture & stack

- **Core Stack:** React 19, Vite, TypeScript, React Router, Tailwind CSS, React Three Fiber v9, Three.js, Drei, Motion, GSAP, SVG, Lucide React.
- **Optional Dependencies:** React Three Postprocessing, Zustand, Leva (dev-only), Embla Carousel, Lenis, ShaderGradient, ReactBits.
- **Dependency Policy:** Keep dependency tree controlled. Avoid duplicate animation libraries for the same task. Prefer native browser functionality when appropriate.

---

# 11. Permanent design restrictions

RED THREAD must never introduce:
- Generic AI-generated website patterns.
- Fake live counters or fabricated statistics.
- Decorative telemetry or system-status indicators.
- Random uppercase eyebrow headings.
- Labels above headings without purpose.
- Decorative pill badges.
- Generic SaaS language.
- Repetitive card layouts.
- Unnecessary floating panels.
- Arbitrary gradients and glow effects.
- Random terminal interfaces.
- Unnecessary decorative icons.
- Fake technical metadata.
- Random W logo placement.

Every visual element must have a reason to exist.

---

# 12. Implementation roadmap

- **Phase 0:** Repository and specification reconciliation (current).
- **Phase 1:** Visual prototype (1 abstract 3D environment, 1 kinetic typography composition, 1 2D-to-3D transition, 1 scroll-driven camera transition, 1 reduced-motion alternative).
- **Phase 2:** Design system and application foundation.
- **Phase 3:** Gateway and arrival scene.
- **Phase 4:** Professional portfolio (5 scenes).
- **Phase 5:** Case studies.
- **Phase 6:** Puzzle experience.
- **Phase 7:** Résumé.
- **Phase 8:** Final optimisation and release.
