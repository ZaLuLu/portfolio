# RED THREAD — Design System & Experience Specification

**Status:** Direction approved; detailed composition and content still require review.

## 1. Experience map

| Route | Experience | Purpose |
|---|---|---|
| `/` | CRT gateway | Three clear destinations |
| `/portfolio` | Editorial portfolio | Professional identity and work |
| `/portfolio/work/:slug` | Case study | Detailed project proof |
| `/puzzle` | Puzzle portfolio | Separate cinematic interactive narrative |
| `/resume` | Plain résumé | Accessible print-ready document |

The résumé must be directly accessible without completing the CRT animation.

## 2. Gateway

A retro CRT display is the threshold, not the visual identity of the whole website.

Sequence:
1. Near-black screen.
2. Restrained power-on cue.
3. Brief CRT activation / vertical collapse.
4. Boxy monospace welcome text.
5. Three accessible destinations:
   - Enter the Portfolio
   - Enter the Puzzle
   - View / Print Résumé

Glitching must be brief and must never obscure choices. No autoplay audio. Include skip-intro, keyboard support, visible focus, reduced-motion mode and a functional static fallback.

Suggested copy is provisional:
```text
WAFIQ NAWAZ C.
PERSONAL INTERFACE / 2026

WELCOME, VISITOR.
THREE WAYS TO EXPLORE.

[ 01 ] ENTER THE PORTFOLIO
[ 02 ] ENTER THE PUZZLE
[ 03 ] VIEW / PRINT RESUME

SELECT YOUR PATH _
```

## 3. Editorial direction

**Japanese contemporary editorial design fused with experimental art-book composition.**

This is an art-direction reference, not a literal Japanese theme. Avoid cherry blossoms, anime references, decorative kanji, stereotyped motifs or meaningless Japanese text.

Design characteristics:
- Asymmetrical editorial grids.
- Oversized, expressive but legible typography.
- Deliberate negative space.
- Art-directed photography and purposeful crops.
- Small captions, indexes, page references and metadata only when meaningful.
- Restrained print textures, paper grain and ink references.
- Strong typographic hierarchy and image composition.

Avoid generic developer cards, fake terminals, cyberpunk/neon grids, arbitrary stamps and excessive UI ornament.

## 4. Brand palette

| Name | Hex | Role |
|---|---|---|
| Crimson | `#EB0E31` | Signature accent and strong statements |
| Coral | `#FDA2AC` | Supporting expressive colour |
| Plum | `#33212C` | Dark foundation and dark typography |
| Sand | `#D8CFC2` | Warm neutral / paper surface |
| Canary Yellow | `#E7C75A` | Sparse highlight |

White must not dominate. Test contrast for every text and control combination. Never use colour alone to communicate state.

## 5. Introductory portrait

Use the user's supplied `Wafiq.jpeg` as the source photograph. It is the authentic portrait. Do not substitute ASCII art, generate a different face or alter facial identity.

Build the opening spread around the image's actual proportions. Final crop, position, background treatment and motion remain undecided until the real asset is placed in the layout. Avoid face distortion, aggressive glitching and awkward crops. Portrait must remain legible without animation.

## 6. Editorial content sequence

1. Introduction: portrait, approved name, short introduction and current focus.
2. Selected work: projects as evidence, with role, contributions, decisions, constraints, status, outcomes and links.
3. Capabilities: evidence-based skills, not inflated technology lists.
4. About: approved education, interests and working philosophy.
5. Contact: verified contact and professional links.

Do not invent metrics, outcomes, users, testimonials, qualifications or project status. Mark drafts clearly.

## 7. Motion language

Motion should provide orientation, reveal content, transition between sections, establish hierarchy or provide feedback.

Approved techniques to explore:
- Controlled typography reveals.
- Image masks and unmasking.
- Restrained parallax where it improves composition.
- Section-index transitions.
- Carefully timed colour-field changes.
- Small hover and focus responses.
- Optional shader or 3D effects used as a deliberate focal moment.

Avoid scroll hijacking, long forced intros, constant animation, excessive parallax, indiscriminate glitch, and motion that delays access to work.

Use native CSS scroll snapping first. It must not trap readers. Respect `prefers-reduced-motion`; provide static fallbacks.

## 8. Three.js / shader restraint

3D is an optional enhancement, not the default background of every page. Lazy-load scenes. Prefer one purposeful scene over multiple simultaneous canvases. Pause rendering when off-screen or when the page is hidden where practical. Provide non-WebGL fallbacks and test mobile/integrated GPUs.

## 9. Résumé

Plain paper-style layout, readable type, no elaborate animation, dedicated print CSS, correct page breaks and direct access. PDF only after résumé content is approved.

## 10. Acceptance criteria

- Visitor can identify the three entry paths immediately.
- Every destination is keyboard-accessible.
- Professional information is never locked behind the puzzle.
- Portfolio work and contributions are easy to inspect.
- Portrait remains authentic.
- Palette and typography are coherent and accessible.
- Animation can be disabled without losing content.
- Print résumé works independently.


---

## 11. Permanent Design System Rules & Canon

> These rules are permanent and mandatory for all existing and future pages, layouts, and components.

### Strictly Prohibited Patterns
- **No generic UI decoration:** No eyebrow text above headings; no uppercase section labels; no fake live counters, telemetry, coordinates, or system-status chips; no fake terminal prompts (`> AWAITING INPUT...`); no generic pill badges; no repetitive section numbering (`01`, `02`, `03` on every card); no arbitrary decorative icons.
- **No generic SaaS aesthetics:** No repetitive 3-column card grids; no unnecessary rounded containers; no glassmorphism, glowing borders, or neon text shadows; no random gradient blobs.

### Typography & Copy Invariants
- Main headings stand independently. Never add an eyebrow or category label just to fill space.
- Sentence case is the universal default.
- Natural, direct, specific language. Zero generic startup buzzwords (*"building the future"*, *"innovative solutions"*).
- Zero invented metrics, testimonials, or claims.

### Visual Composition
- Japanese contemporary editorial design fused with experimental art-book composition.
- Asymmetrical layouts and active negative space (*Ma* 間).
- Use the verified portrait (`Wafiq.jpeg`) with deliberate framing; never replace or distort identity.
- The "W" mark is reserved for brand applications, not arbitrary decoration.
