# RED THREAD — Technical Architecture

**Status:** React direction approved. Exact dependency versions must be resolved and tested by the implementation agent before installation.

## 1. Foundation

- React 19
- Vite
- TypeScript
- React Router
- Tailwind CSS (current compatible release)
- Vercel deployment

This is a client-focused portfolio with static content and selective interaction. Do not introduce a database or backend without a concrete feature requirement.

## 2. Route architecture

| Route | Experience |
|---|---|
| `/` | CRT gateway |
| `/portfolio` | Editorial portfolio |
| `/portfolio/work/:slug` | Project case study |
| `/puzzle` | Separate puzzle experience |
| `/resume` | Print-friendly résumé |

Add route-level lazy loading. The puzzle and 3D-heavy modules must not be loaded by the gateway or résumé route.

## 3. Suggested structure

```text
red-thread/
├── public/
│   ├── fonts/
│   ├── images/
│   ├── models/
│   └── textures/
├── src/
│   ├── app/
│   │   ├── router/
│   │   └── providers/
│   ├── experiences/
│   │   ├── gateway/
│   │   ├── editorial/
│   │   ├── puzzle/
│   │   └── resume/
│   ├── components/
│   │   ├── ui/
│   │   ├── gallery/
│   │   ├── motion/
│   │   └── three/
│   ├── content/
│   │   └── projects/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── typography.css
│   │   ├── global.css
│   │   └── print.css
│   └── main.tsx
├── asset-vault/
├── docs/
└── package.json
```

## 4. Rendering and performance

- Lazy-load route bundles and all 3D scenes.
- Keep the gateway and résumé lightweight.
- Use native CSS scroll snapping before adding a smooth-scroll library.
- Prefer Motion for ordinary React animation; use GSAP only for complex timelines.
- Use R3F v9 with React 19 for the stable baseline. Do not copy v10 alpha/WebGPU example dependencies into the production app.
- Pause or reduce 3D rendering when off-screen where practical.
- Provide non-WebGL fallbacks.
- Respect reduced motion.
- Optimise images, fonts, GLB and texture sizes.
- Avoid multiple always-running canvases.
- Test on mobile, integrated GPUs and lower-powered devices.

## 5. Content model

Each project record should support:
`slug`, `title`, `summary`, `problem`, `audience`, `role`, `contributions`, `constraints`, `decisions`, `outcome`, `status`, `technologies`, `links`, `media`, `credits`, `publish`.

Do not publish unapproved claims, confidential work or unsupported metrics.

## 6. SEO and accessibility

A Vite SPA requires deliberate SEO handling:
- Route-specific document titles and descriptions.
- Open Graph and social preview metadata.
- Sitemap and robots configuration.
- Semantic HTML and keyboard navigation.
- Focus-visible states.
- Reduced-motion support.
- Meaningful image alt text.
- Static fallback content if animation or WebGL fails.

If search indexing becomes a primary requirement, evaluate prerendering or a React framework before launch rather than assuming client rendering is sufficient.

## 7. Dependency ownership

- Use one icon family: Lucide React.
- Use shadcn/ui as source-owned accessible primitives.
- Use ReactBits selectively; copy only chosen components.
- OriginKit components are subject to OriginKit's component licence and terms.
- Keep R3F/Drei versions aligned with React 19.
- Keep `react-three-examples` v10/WebGPU as a reference gallery only for this stable baseline.
- Do not install every tool listed in the asset vault.

## 8. Acceptance gates

1. Dependency versions resolve without peer-dependency overrides.
2. Production build succeeds.
3. Gateway and résumé do not load Three.js.
4. Reduced-motion and no-WebGL fallbacks work.
5. Routes work on direct refresh in Vercel.
6. Print résumé has correct page breaks.
7. Asset credits and licences are recorded.


---

## 9. Shared Component Design System Enforcement

All shared components (`src/components/ui/`, `src/components/layout/`, and experience views) must strictly comply with the RED THREAD Permanent Design System Rules:
- **No Library Default Aesthetics:** Never import an external component and use its default styles without stripping generic badges, pill shapes, glassmorphism, or colored card borders.
- **Design Token Integration:** All typography, colors, and spatial geometry must map directly to the semantic design tokens in `src/styles/tokens.css`.
- **Composition Over Repetition:** Avoid turning every piece of information into a card. Use typography, asymmetrical editorial grids, and active negative space (*Ma* 間).
- **Mandatory 8 States:** Every interactive component must handle Default, Hover, Active, Focus-Visible, Loading, Disabled, Error, and Success states.
