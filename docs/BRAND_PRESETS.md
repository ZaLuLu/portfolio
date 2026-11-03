# Color and brand presets

These are starting palettes, not a final identity. Choose one in [QUESTIONS.md](QUESTIONS.md), or supply brand colors later. All colors are grouped by **semantic role** so the site can switch palettes without rewriting components. Use the designated `on-accent` color on accent backgrounds; avoid placing arbitrary text colors on them.

| Role | 01 · Warm Editorial | 02 · Night Studio | 03 · Plum Archive | 04 · Cobalt Field |
| --- | --- | --- | --- | --- |
| Mood | Human, thoughtful, crafted | Technical, confident, vivid | Reflective, expressive, premium | Clear, energetic, modern |
| Background | `#F7F3EA` | `#121A26` | `#FAF5EE` | `#F8F7F2` |
| Surface | `#FFFFFF` | `#1D2938` | `#FFFFFF` | `#FFFFFF` |
| Main text | `#17211F` | `#F3F5F1` | `#271A2E` | `#1C2758` |
| Muted text | `#46514E` | `#BBC8CD` | `#5B4D60` | `#485477` |
| Accent | `#A33722` | `#D9F86A` | `#6C315D` | `#2349C4` |
| On accent | `#FFFFFF` | `#121A26` | `#FFFFFF` | `#FFFFFF` |
| Border | `#C9C7BE` | `#536271` | `#D2C8CF` | `#C7CCE0` |

## How to use them

- **01 · Warm Editorial — recommended starting point:** warm paper, near-black ink, and a restrained red accent. Suits case studies with process, writing, and mixed project imagery.
- **02 · Night Studio:** deep navy and a sharp lime accent. Suits motion, code, digital products, and high-contrast screen imagery. Keep the lime concentrated on actions and key details.
- **03 · Plum Archive:** soft ivory and deep plum. Suits research, storytelling, and a more personal editorial voice.
- **04 · Cobalt Field:** warm white and decisive blue. Suits product, engineering, and service work that needs a direct, crisp feel.

The main text/background pairs have strong contrast. Accent text on its listed background also meets normal-text WCAG AA in these presets. Still test actual component combinations after implementation, including hover, focus, captions, and text on images.

## Token contract for implementation

Map the chosen preset to these names: `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-on-accent`, and `--color-border`. Components should reference these roles, not raw hex values. Add `--color-focus` and state colors during implementation after the chosen palette and interaction design are confirmed. Do not treat the accent as the only indicator of a link, error, or status.

Brand colors can be swapped later, but the selected palette should be reviewed against actual project images and any logo before launch.
