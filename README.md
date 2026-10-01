# Harsh Infotech — website

Marketing site for **Harsh Infotech**, a technology solutions provider (est. 2008) with four divisions: Smart Home, Security, One Fiber and Nurse Call.

**Live:** <https://harsh-h-shah.github.io/harsh-infotech/>

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript, exported as a static site |
| Styling | Tailwind CSS v4 with design tokens in `app/globals.css` |
| Motion | GSAP (ScrollTrigger, SplitText), Lenis smooth scroll, Framer Motion |
| UI components | Magic UI components (marquee, animated beam, number ticker) copied into `components/ui` |
| Hosting | GitHub Pages, deployed by GitHub Actions on every push to `main` |

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site into `out/` |
| `npm run start` | Serve `out/` locally (run `build` first) |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |

## Project structure

```text
app/                    Routes (App Router)
  layout.tsx            Fonts, metadata, navbar/footer, motion bootstrap
  globals.css           Design tokens and shared component classes
  page.tsx              Home page, composed from components/home/*
  contact/              Contact page
  smart-home/ security/ one-fiber/ nurse-call/ about/   Division pages
  not-found.tsx         404 page
  icon.svg              Favicon (the brand mark)
components/
  home/                 Home page sections (Hero, Divisions, Process, OneFiber, …)
  ui/                   Reusable motion components (marquee, animated-beam, …)
  Navbar.tsx Footer.tsx Logo.tsx ContactForm.tsx icons.tsx
  SmoothScrollProvider.tsx   Lenis + GSAP setup and the data-attribute reveal system
lib/
  site.ts               Divisions, navigation, stats, contact details (edit content here)
  asset.ts              asset() — prefixes /public paths with the deploy base path
  gsap.ts               GSAP plugin registration
  utils.ts              cn() class helper
public/                 Videos, images and the brand mark served by the site
design/brand/           Original logo files (kept for reference, not served)
docs/                   Design system documentation
.github/workflows/      GitHub Pages deployment
```

## Editing content

- **Divisions, menu links, stats and contact details** are all in `lib/site.ts`.
  - A link marked `planned: true` points to a page that isn't built yet. It stays hidden from the navbar and footer until you remove the flag.
- **Home page sections** are in `components/home/`, one file per section.
- **Images and videos** go in `public/`. Always reference them through `asset()`:

  ```tsx
  import { asset } from "@/lib/asset";
  <video src={asset("/videos/Switch.mp4")} />
  ```

  A plain `"/videos/…"` string works locally but returns 404 on GitHub Pages, where the site is served from `/harsh-infotech/`.

### Placeholder content to replace before launch

The brief requires real names and verified figures only. These are placeholders, each marked in the code:

| What | Where |
| --- | --- |
| "500+ sites delivered", "24/7 support line" | `lib/site.ts` → `stats` |
| Three client testimonials (they show a "Sample copy" tag in development) | `components/home/Proof.tsx` |
| Company milestone years (2010, 2013, 2016, 2019) | `components/home/Story.tsx` |
| Sample figures in the mock interfaces (hero dashboard, survey and install panels) | `components/home/Hero.tsx`, `components/home/Process.tsx` |

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which:

1. Reads the Pages base path (`/harsh-infotech`) from `actions/configure-pages` and passes it in as `NEXT_PUBLIC_BASE_PATH`.
2. Runs `next build`. `next.config.ts` sets `output: "export"`, so the site is written as static files to `out/`.
3. Uploads `out/` and publishes it to GitHub Pages.

**Static-export limits:** the site can't use API routes, server actions or Next's image optimisation. For this reason the contact form opens the visitor's email app with the enquiry filled in.

**Custom domain:** to serve from a domain such as harshinfotech.com:

1. Add the domain in the repo's Settings → Pages.
2. Add a `public/CNAME` file containing the domain.
3. Build with an empty base path. In the workflow, set `NEXT_PUBLIC_BASE_PATH: ""`.

## Roadmap

- **Division pages:** redesign Smart Home, Security, One Fiber, Nurse Call and About using the new design system. They currently use the shared tokens but still have their original layouts and inline styles.
- **Pages from the brief:** build the planned pages, such as Security solutions and compliance, One Fiber plans, devices and docs, and the Nurse Call case studies and support pages.
- **Contact form:** connect it to a form service (for example Formspree) so enquiries arrive without the visitor's email app.
- **3D product model:** the brief's 3D hero was removed for now, because the model was 12 MB against a 2 MB target. The original `textured.glb` and the `Hero3D` component are in the git history (commit `d91de70`). To bring them back, compress the model with `gltf-transform` first, then reinstall `three`, `@react-three/fiber` and `@react-three/drei`.

See [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) for the colours, type, components and motion conventions.
