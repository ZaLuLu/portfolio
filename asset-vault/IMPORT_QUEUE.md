# Import Queue for the Implementation Agent

Do not bulk clone all repositories into the production bundle.

## Phase 0 — inspect and register
- Review each source listed in `manifests/sources.json`.
- Record current commit/version and exact licence.
- Identify only components/assets that solve a specific design need.
- Keep a copy of relevant licence and third-party notices.

## Phase 1 — foundations
- Install React 19, Vite, TypeScript, React Router, Tailwind and Lucide React.
- Choose font trio after visual comparison.
- Establish tokens and accessible primitives.

## Phase 2 — 2D component toolkit
- Inspect OriginKit and ReactBits.
- Select a small set: typography reveal, gallery treatment, navigation/interaction, image reveal.
- Adapt styles to RED THREAD tokens.
- Do not import an effect solely because it is available.

## Phase 3 — galleries and motion
- Use native scroll snap.
- Add Embla only for a genuine carousel.
- Add a lightbox only if project imagery needs fullscreen inspection.
- Use Motion by default; GSAP only for a specific complex timeline.

## Phase 4 — 3D / shader
- Confirm React 19 + R3F v9 + matching stable Drei dependency tree.
- Prototype one isolated scene.
- Evaluate ShaderGradient compatibility.
- Use `react-three-examples` v10/WebGPU only as a visual/technical reference unless the entire app deliberately migrates to that stack after testing.
- Keep 3D route/component lazy-loaded and provide fallback.

## Phase 5 — asset sourcing
- Start with Poly Haven CC0 assets if an HDRI/material/model is needed.
- Use Khronos samples for testing and inspect each model's own licence.
- Do not use an asset index as a substitute for checking the original asset source.
