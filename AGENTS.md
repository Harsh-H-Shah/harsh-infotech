<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project conventions

- **Static export to GitHub Pages:** no API routes, server actions, cookies or default image optimisation.
- **Assets:** reference `/public` files through `asset()` from `lib/asset.ts`, never as bare strings. Bare paths 404 under the `/harsh-infotech` base path.
- **Styling:** use the tokens and shared classes in `app/globals.css` (see `docs/DESIGN-SYSTEM.md`). Keep to the single teal accent and avoid inline styles in new code.
- **Content:** divisions, navigation, stats and contact details live in `lib/site.ts`. Links to unbuilt pages are marked `planned: true`.
- **Motion:** use the `data-reveal` and `data-split` attributes for reveals, and `useGSAP` from `lib/gsap.ts` for bespoke timelines. Always handle reduced motion.
- **Before committing:** run `npm run lint`, `npm run typecheck` and `npm run build`.
