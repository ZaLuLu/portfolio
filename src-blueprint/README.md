# Source Blueprint

The implementation agent should create the actual Vite application from the architecture documents. This folder intentionally contains no generated starter app or lockfile.

Suggested initial commands (verify current CLI prompts and package manager before running):

```bash
npm create vite@latest red-thread -- --template react-ts
cd red-thread
npm install
```

Then install foundation dependencies in a separate step and validate. Do not install the entire optional ecosystem at once.

Expected initial app structure:
- `src/app/router`
- `src/experiences/gateway`
- `src/experiences/editorial`
- `src/experiences/resume`
- `src/components/ui`
- `src/styles`
- `src/content/projects`

Keep `puzzle` isolated and implement it in its own phase.
