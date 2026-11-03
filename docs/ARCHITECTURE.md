# Portfolio architecture

Status: **proposed**. No application code or framework has been chosen yet. Confirm the stack, publishing needs, and content workflow in [QUESTIONS.md](QUESTIONS.md) before implementation.

## Recommended approach

Use a fast, mostly static site with content stored in the repository. **Astro** is the provisional framework choice because a portfolio is primarily pages and images, while small interactive elements can be added only where needed. Astro [prerenders pages by default](https://docs.astro.build/en/guides/on-demand-rendering/) and supports [build-time content collections](https://docs.astro.build/en/reference/modules/astro-content/) for structured project records. If the questionnaire names a different stack or a visual editor is required, revisit this decision. Avoid a database or server until a real feature requires one.

## Proposed pages

| Route | Purpose | Content source |
| --- | --- | --- |
| `/` | Introduction, selected work, short about, contact action | Site profile and featured project records |
| `/work/[slug]/` | Project case study | One project record and its media |
| `/about/` | Longer bio, skills, résumé link if useful | Site profile |
| `/contact/` | Contact details or form if requested | Site settings |
| `/404` | Recovery and route back to work | Static copy |

The final route list can be smaller. For a compact portfolio, About and Contact may be homepage sections rather than separate pages.

## Content model

Keep content separate from layout. Each project should have a stable `slug`, `title`, `summary`, `problem`, `audience`, `role`, `contributions`, `constraints`, `outcome`, `technologies`, `links`, `media` with alt text/captions, `credits`, and a `publish` flag. `outcome` may be qualitative; numbers require a source. Profile data should contain the displayed name, title, bio, contact method, social links, résumé link, and optional availability text.

During build, validate required fields and link formats. Omit empty optional sections gracefully. Draft or confidential projects must not appear in generated public pages, feeds, or sitemaps.

## Proposed folder layout

```text
portfolio/
  QUESTIONS.md
  DESIGN.md
  BRAND_PRESETS.md
  ARCHITECTURE.md
  src/
    content.config.ts
    content/projects/
    components/
    layouts/
    pages/
    styles/
  public/
    images/
    files/
```

This is a target layout, not a claim that those directories already exist.

## Rendering and behavior

- Generate pages at build time. Use semantic HTML and minimal client-side JavaScript.
- Use responsive image sizes and modern formats where practical; keep originals only when useful. Give every informative image meaningful alt text and a caption where context matters.
- Use direct email or an external booking link if selected. If a form is requested, choose a supported form service or backend and specify spam prevention, delivery, privacy, and failure states before adding it.
- Keep secrets out of source control. Public analytics, embeds, and third-party scripts require a deliberate decision because they affect performance and privacy.
- Centralize site metadata, canonical URL, social sharing image, sitemap rules, and robots behavior once a domain is known.

## Quality and release checks

- Verify every public claim, project attribution, image permission, contact link, and downloadable file against the completed questionnaire.
- Check keyboard navigation, focus visibility, reduced motion, color contrast, image alternatives, and mobile layout.
- Build and preview the production output; check internal/external links, missing images, metadata, and 404 behavior.
- Measure representative pages for load performance. Set concrete budgets after the chosen assets and hosting are known; prioritize image weight and font loading.
- Publish only after the domain, hosting target, and final public content are confirmed.

## Open decisions

Audience and featured projects; final content and imagery; stack and content editing workflow; whether separate About/Contact pages are useful; contact form versus direct link; analytics; domain and hosting. These decisions come from [QUESTIONS.md](QUESTIONS.md), not assumptions about other projects in the coding directory.
