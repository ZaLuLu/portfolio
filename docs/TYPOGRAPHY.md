# RED THREAD — Typography Specification

**Status:** Role system approved; actual typeface selection pending.

## 1. Typography principles

Typography should feel editorial and art-directed, not like a generic SaaS dashboard. Use no more than three principal families unless a specific language/script requirement justifies another.

## 2. Proposed roles

| Role | Candidate | Usage |
|---|---|---|
| Display / editorial | Instrument Serif **or** Space Grotesk | Large titles, opening statements, section headlines |
| Reading / UI | Inter **or** DM Sans | Body copy, project descriptions, navigation and controls |
| Metadata / technical | IBM Plex Mono | Captions, indices, dates, project metadata and CRT copy |

These are candidates, not final selections. Do not install all alternatives. Compare real specimens with the brand palette and portrait before choosing.

## 3. Recommended initial pairing to test

- Display: Instrument Serif for expressive editorial contrast.
- Reading: Inter for neutral, robust readability.
- Metadata: IBM Plex Mono for technical/editorial indexing.

Alternative direction: Space Grotesk + Inter + IBM Plex Mono if the serif feels too literary.

## 4. Hierarchy tokens

Start with fluid sizes and refine in browser. These are starting values, not immutable rules.

| Token | Desktop starting range | Use |
|---|---:|---|
| `--type-display` | `clamp(4rem, 10vw, 10rem)` | Opening title |
| `--type-h1` | `clamp(3rem, 7vw, 7rem)` | Section headline |
| `--type-h2` | `clamp(2rem, 4vw, 4rem)` | Project / subsection |
| `--type-h3` | `1.35rem–2rem` | Card / article title |
| `--type-body` | `1rem–1.125rem` | Reading text |
| `--type-small` | `0.8rem–0.9rem` | Captions |
| `--type-micro` | `0.68rem–0.75rem` | Metadata, only when legible |

Body copy should generally use comfortable line lengths and line-height around 1.5–1.7. Large display text may use tighter line-height and carefully controlled tracking.

## 5. Usage rules

- Use display type for expressive moments, not long paragraphs.
- Body type must remain readable on mobile.
- Monospace is for metadata and terminal-like details, not every heading.
- Avoid excessive all-caps.
- Do not use Japanese glyphs as decoration.
- Do not stretch or distort fonts to force a layout.
- Self-host licensed font files where possible; record source and licence.
- Test actual font rendering and layout shift before launch.

## 6. Required decisions before implementation freeze

1. Compare Instrument Serif vs Space Grotesk for display.
2. Compare Inter vs DM Sans for body.
3. Confirm IBM Plex Mono for metadata.
4. Check font licences and self-hosting options.
5. Review hierarchy on desktop, tablet and mobile.
