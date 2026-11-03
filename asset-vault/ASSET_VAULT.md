# RED THREAD — Asset Vault

This vault is a curated source registry, not permission to bulk-copy every repository. Select assets based on a specific design need. Verify source, version, licence, attribution and compatibility before copying anything into the product.

## A. Component and visual-effect sources

| Source | Use | Status / caution |
|---|---|---|
| OriginKit | Polished visual components and effects | Check component-specific availability and OriginKit terms. Do not redistribute its source as a standalone library. |
| ReactBits | Text effects, animated components, backgrounds, galleries | MIT + Commons Clause stated by current repository. Review exact licence and third-party notices. |
| shadcn/ui | Accessible functional primitives | Source-owned components; use selectively. |
| pmndrs/react-three-examples | R3F visual/technical reference examples | Current repository is R3F v10 alpha and WebGPU-first. Reference only; do not copy its package pins into R3F v9 app. |
| pmndrs/examples | R3F example patterns and asset metadata | Inspect individual example and referenced asset licences. |
| ShaderGradient | Programmable animated gradients | `@shadergradient/react`; check current compatibility matrix. |
| Liquid Logo | Liquid / metallic shader treatment | Use as inspiration or integrate according to its repo licence. Avoid applying effects without purpose. |

## B. 3D assets and materials

| Source | Asset type | Licence note |
|---|---|---|
| Poly Haven | HDRIs, PBR textures, models | Poly Haven states its assets are CC0. |
| Khronos glTF Sample Assets | glTF/GLB sample models | Each model has its own licence/credits. Do not assume all are CC0. |
| awesome-3d-assets | Index of model, texture, HDRI and tool sources | It is an index; every destination has its own licence. |
| Kenney | Game/web-ready asset packs | Verify the licence of each pack before use. |
| NASA 3D Resources | Space/science models | Verify individual asset terms and attribution. |
| Smithsonian 3D | Digitised collection objects | Verify each object's rights and usage terms. |

## C. Icons

- Standard family: Lucide React.
- Alternative to evaluate only if necessary: Tabler Icons.
- Do not mix multiple icon families in the same interface.
- Use custom SVG only for brand-specific or editorial illustrations.

## D. Effects to prototype

1. Image masking / reveal.
2. Halftone and dithering.
3. Liquid distortion.
4. Chromatic aberration (rarely).
5. Glass/refraction.
6. Procedural particles.
7. Shader gradients.
8. CRT phosphor / scanline for gateway only.
9. Subtle paper grain / print texture.
10. Carefully art-directed 3D material or object.

These are prototype candidates, not approved requirements. Every effect needs a specific role in the design.

## E. Asset selection rules

- Prefer GLB/glTF for web 3D assets.
- Optimise geometry, texture resolution and file size.
- Avoid downloading huge asset packs without a defined use.
- Prefer CC0 or permissive assets where practical.
- Keep source URL, author, licence, attribution text, version/commit, modifications and intended use.
- Do not commit unlicensed or unclear assets.
- Keep third-party notices in the repository.
