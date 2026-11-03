# RED THREAD — Dependency & Compatibility Plan

**Policy:** Treat this as a selection guide. The implementation agent must check current package releases, peer dependencies and licences before installing. Do not force peer dependencies to make an incompatible combination install.

## Core

| Package | Purpose | Policy |
|---|---|---|
| `react`, `react-dom` | UI foundation | React 19 |
| `vite` | Build/dev server | Stable compatible release |
| `typescript` | Type safety | Current stable |
| `react-router` | Routing | Current React Router release |
| `tailwindcss` | Styling | Current Vite-compatible release |
| `lucide-react` | Icons | Sole default icon family |

## 3D

| Package | Purpose | Compatibility guidance |
|---|---|---|
| `three` | WebGL/WebGPU 3D engine | Match R3F/Drei peer requirements |
| `@react-three/fiber` | React renderer | v9 pairs with React 19 |
| `@react-three/drei` | R3F helpers | Choose stable release compatible with R3F v9 |
| `@react-three/postprocessing` | Postprocessing effects | Optional; validate peer versions |
| `leva` | Developer scene controls | Development-only unless justified |
| `@shadergradient/react` | ShaderGradient renderer | Current project README says React 18/19; align Fiber version with environment |

Do not use `react-three-examples` v10 alpha dependency pins as the application baseline. It is a reference repository and currently requires WebGPU-capable browsers.

## Motion

| Package | Purpose | Policy |
|---|---|---|
| `motion` | React transitions, gestures and layout animation | Default React animation tool |
| `gsap` | Complex timelines and scroll choreography | Add only for sequences Motion/CSS cannot handle cleanly |
| CSS | Simple reveal, hover and CRT effects | Prefer for lightweight motion |
| `lenis` | Smooth scrolling | Optional; native scroll snapping first |

GSAP's current licensing model has changed over time. Verify its current licence and terms before adding it to a commercial/public deployment.

## Components and media

| Package / source | Purpose | Policy |
|---|---|---|
| `shadcn/ui` | Accessible UI primitives | Source-owned; install only needed components |
| ReactBits | Animated components and effects | Selectively copy and customise |
| OriginKit | Premium/free visual components | Follow its component licence and terms; do not redistribute its source as a library |
| `embla-carousel-react` | Gallery carousel | Use when a carousel is actually needed |
| `yet-another-react-lightbox` | Fullscreen image viewing | Optional; verify current licence/version |
| `zustand` | Shared state | Only if local component state/context is insufficient |

## Fonts

Use self-hosted font files where the licence permits:
- Instrument Serif or Space Grotesk (display; choose one).
- Inter or DM Sans (body; choose one).
- IBM Plex Mono (metadata).

Record the exact font source, version and licence.

## Installation order

1. Create Vite + React + TypeScript app.
2. Add Tailwind and React Router.
3. Add Lucide React and chosen font files.
4. Add Motion.
5. Add shadcn/ui primitives and selected ReactBits components.
6. Add Embla / Lightbox only when gallery implementation begins.
7. Add Three.js + R3F v9 + compatible Drei only when a real 3D scene is approved.
8. Add ShaderGradient only after testing compatibility and performance.
9. Add GSAP only for a specific sequence that requires it.

## Validation commands

The agent should record output from:
- package manager install with no peer override flags
- package manager dependency tree / why commands for React, Three, Fiber and Drei
- production build
- lint and typecheck
- browser smoke tests on direct route refresh
