# RED THREAD — Typography Specification

> **Status:** Finalized Creative Direction  
> **Primary Display:** Space Grotesk  
> **Body / UI:** Inter  
> **Technical / Metadata:** IBM Plex Mono  

---

## 1. Typography Principles

Typography should feel contemporary, expressive and confident. The previous Instrument Serif-led editorial direction is no longer the primary direction. Use no more than three primary font families unless an exceptional script requirement justifies another.

---

## 2. Approved Font Roles

| Role | Face | Purpose |
| :--- | :--- | :--- |
| **Primary Display** | `Space Grotesk` | Main headings and expressive typography |
| **Body & UI** | `Inter` | Reading, narrative copy, navigation and interface controls |
| **Technical** | `IBM Plex Mono` | Selected technical information, indices, and code snippets |

*Alternative display candidates for benchmark comparison if requested: Sora, Manrope, General Sans, Plus Jakarta Sans.*

---

## 3. Hierarchy Tokens

Fluid responsive sizing tokens:

| Token | Desktop Range | Mobile Range | Intended Use |
| :--- | :--- | :--- | :--- |
| `--type-display` | `clamp(3.5rem, 8vw, 7.5rem)` | `clamp(2.5rem, 6vw, 3.5rem)` | Environmental arrival statements |
| `--type-h1` | `clamp(2.5rem, 5vw, 5rem)` | `clamp(2rem, 4.5vw, 2.5rem)` | Scene headlines |
| `--type-h2` | `clamp(1.75rem, 3.2vw, 3rem)` | `clamp(1.4rem, 2.8vw, 1.75rem)` | Project titles & major subdivisions |
| `--type-h3` | `clamp(1.2rem, 2vw, 1.75rem)` | `clamp(1.1rem, 1.8vw, 1.25rem)` | Section subtitles & article headers |
| `--type-body` | `1rem–1.125rem` | `0.95rem–1rem` | Reading text |
| `--type-small` | `0.85rem–0.9rem` | `0.8rem–0.85rem` | Captions & supporting notes |
| `--type-micro` | `0.72rem–0.78rem` | `0.7rem` | Metadata (only when strictly legible) |

---

## 4. Typography Rules & Invariants

- **Independent Headings:** Main headings stand on their own. Never place an eyebrow, uppercase category tag, or micro-label above a title just to fill space.
- **Sentence Case Default:** Sentence case is the universal default. Avoid excessive all-caps typography.
- **Readable Body Text:** Robert Bringhurst measure of $45\text{--}75\text{ch}$ (optimal $65\text{ch}$).
- **Restrained Monospace:** Use monospace typography only where it has a genuine technical purpose (code, paths, schemas, technical specs). Never sprinkle monospace text as decorative technical noise.
- **No Distortion:** Do not artificially stretch, squeeze, or apply aggressive glitch shaders to text.
- **Animation Independence:** Typography must remain fully readable and functional when JavaScript or animation is disabled.
