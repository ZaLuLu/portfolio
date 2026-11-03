# Portfolio design direction

Status: **provisional**. This is a buildable starting direction, not a claim that the personal brand has been decided. Update it using the answers in [QUESTIONS.md](QUESTIONS.md). Color choices live in [BRAND_PRESETS.md](BRAND_PRESETS.md).

## Purpose and experience

The site should let a visitor understand the person's work in seconds, then inspect the evidence. The portfolio is an **Experience** surface: projects and their artifacts lead, while navigation and decoration stay quiet. The first viewport should feature a meaningful piece of work or an honest, specific project statement once the content is known. Avoid generic claims such as “passionate developer” and invented metrics.

The likely visitor path is: understand the specialty → scan selected work → open a case study → assess the person's contribution and outcome → contact them. The primary action should use the contact method selected in the questionnaire. A secondary action can link to a résumé or profile if supplied.

## Provisional visual concept

**Working concept: an editorial collection of work.** Use strong typography, generous space, and project imagery as the dominant visual material. Let each project have its own clear identity within a consistent page frame. The recommended initial palette is **01 · Warm Editorial** from the presets; it can be replaced by switching semantic color tokens.

This concept should change if the answers point to a different audience or work type. For example, an illustration portfolio needs a denser gallery; a software engineering portfolio needs clearer architecture and outcome evidence.

## Information hierarchy

1. Identity: name, specialty, and a specific promise or point of view.
2. Selected work: 3–6 projects, strongest first; visible image or artifact, concise problem, role, and result.
3. Case studies: context, constraints, contribution, process or key decisions, outcome, links, and credits.
4. About: focused biography, capabilities, working style, and optional portrait.
5. Contact: a direct invitation and one obvious way to respond.

The homepage may combine these into one scroll, with dedicated case study routes for deeper work. Show only supplied, publishable content.

## Layout and responsive behavior

- Use a restrained content width for reading and a wider frame for project imagery. Let featured work interrupt the grid where the assets justify it.
- Desktop: clear top navigation, large project previews, and case study content with readable line lengths. Mobile: single column, thumb-friendly links, readable project captions, and no essential hover behavior.
- Use a consistent spacing scale and visual rhythm, but allow project imagery to determine each section's height. Avoid equal-height cards that crop important evidence.
- Case studies should use scannable subheads and captions so visitors can understand the work quickly.

## Typography and imagery

- Start with a robust system sans for body text and a contrasting display face only if it suits the chosen brand. Decide exact fonts after the questionnaire; licensing and loading cost matter.
- Body text should generally be at least 16px with comfortable line height. Keep long paragraphs around 60–75 characters per line.
- Prefer real project screenshots, diagrams, photos, and artifacts. Captions should explain why an image matters. Provide alt text describing content or purpose, not decorative filler.
- If project visuals are unavailable, use honest text-led layouts and simple diagrams based on verified project facts. Do not fabricate screenshots.

## Interaction and accessibility

- Keep motion purposeful: subtle transitions can clarify navigation or project changes. Respect `prefers-reduced-motion`.
- Provide visible keyboard focus, semantic headings, skip navigation, descriptive link labels, and accessible menus if one is needed.
- Maintain WCAG AA text contrast in the selected preset. Accent colors may be decorative when their contrast is insufficient for small text.
- Ensure touch targets are comfortably sized and the layout works at narrow widths and 200% zoom.

## Design decisions to finalize after intake

- Audience and what the first viewport must prove.
- Which project leads and what imagery is available.
- Final palette, logo/wordmark, typography, and tone of voice.
- Whether case studies are image-led, text-led, or mixed.
- Contact action, résumé placement, and any availability message.
