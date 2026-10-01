# Design system

The visual direction is a warm off-white canvas with near-black "bands" for high-impact sections. The site uses one teal accent, taken from the Harsh Infotech mark. The reference was [shireintelligence.com](https://shireintelligence.com/).

All tokens and shared classes live in `app/globals.css`. Use them rather than hard-coding colours or sizes.

## Colour

Tokens are defined in `@theme`, so each one is available as a Tailwind utility (`bg-canvas`, `text-muted`, `border-line`, …).

| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#f7f6f3` | Page background |
| `canvas-2` | `#efede8` | Subtle alternate section background |
| `paper` | `#ffffff` | Cards, raised surfaces |
| `ink` / `ink-2` | `#121314` / `#2c2e31` | Headings / body emphasis |
| `muted` / `faint` | `#5f6266` / `#8c8f93` | Secondary text / labels and meta |
| `line` | `ink` at 9% | Borders and dividers |
| `night` / `night-2` | `#0b0c0d` / `#141618` | Dark bands (hero, One Fiber, testimonials) |
| `teal` | `#17707a` | Accent on light backgrounds (5.4:1 contrast on canvas) |
| `teal-bright` | `#5cc7d1` | Accent on dark backgrounds (9.8:1 on night) |
| `teal-mist` | `#dff1f2` | Icon tiles, soft highlights |

Rules:

- **One accent colour.** Don't introduce more. The older division pages still contain hard-coded indigo, red and green inline colours. Replace them with tokens when those pages are redesigned.
- **Dark sections are inset panels** (`rounded-[2rem] bg-night` inside `px-3 md:px-5`), never full-bleed black stripes across a light page.
- **Add `on-dark` to any dark container.** It switches eyebrows, ledes and focus rings to their light-on-dark variants.

## Typography

| Font | Variable | Use |
| --- | --- | --- |
| Plus Jakarta Sans | `--font-jakarta` → `font-sans` | Everything by default |
| Geist Mono | `--font-geist-mono` → `font-mono` | Eyebrows, labels, figures in mock UI |
| Instrument Serif Italic | `--font-instrument` | Rare emphasis words only (`.font-serif-italic`) |

All three are self-hosted through `next/font` in `app/layout.tsx`.

| Class | Use |
| --- | --- |
| `.display` | Hero-size headline (clamps to about 100px) |
| `.headline` | Section headline (clamps to 64px) |
| `.lede` | Intro paragraph under a headline (muted, about 38rem max width) |
| `.eyebrow` | Small mono label with a leading rule, placed above headlines |
| `.text-sheen` / `.text-sheen-light` | Teal gradient text, for dark and light backgrounds respectively |

Write headlines in sentence case with tight tracking. Keep paragraphs short, plain and specific, with no exclamation marks.

## Components and classes

| Class or component | Notes |
| --- | --- |
| `.container` | Max width 1320px, gutters of 20px on mobile and 40px from tablet up |
| `.section` | Standard vertical rhythm. The bottom padding is slightly larger than the top. |
| `.btn` + `.btn-dark` / `.btn-light` / `.btn-teal` / `.btn-outline` | Pill buttons with hover lift and press scale. Use `btn-light` on dark bands. |
| `.link-arrow` | Tertiary text link whose arrow nudges on hover |
| `.card` | White surface with hairline ring and teal-tinted shadow |
| `<SpotlightCard>` (`components/ui/spotlight-card.tsx`) | Border and surface glow that follows the cursor |
| `<Marquee>`, `<AnimatedBeam>`, `<NumberTicker>` (`components/ui/`) | Magic UI components. They import from `framer-motion`. |
| `<Logo>` | Mark plus wordmark. `tone="light"` for dark backgrounds. |
| Icons (`components/icons.tsx`) | One stroke weight (1.6). Division glyphs are available via `divisionGlyph[key]`. |

Legacy classes (`.btn-primary`, `.btn-ghost`, `.glass-card`, `.tag-pill`, `.section-label`, `.gradient-text-*`, `.video-hero`, `.division-hero`) are kept so the older division pages render in the new style. Don't use them in new code.

## Motion

Motion is set up once in `components/SmoothScrollProvider.tsx`, which shares a single GSAP ticker with Lenis. Most reveals are declared with data attributes, and no per-component code is needed:

| Attribute | Effect |
| --- | --- |
| `data-reveal` | Fades and rises in when scrolled into view. Values: `"fade"`, `"scale"`, `"left"`. |
| `data-reveal-delay="0.2"` | Delay in seconds |
| `data-reveal-stagger` | On a parent element: its children rise in sequence |
| `data-split` | Headline words rise out of line masks (GSAP SplitText) |
| `data-split-now` | With `data-split`: play on load instead of on scroll (above-the-fold headlines) |

Bespoke timelines (hero intro and parallax, One Fiber film reveal, pinned timeline) use `useGSAP` from `lib/gsap.ts` inside their components.

Guidelines:

- **Animate only `transform` and `opacity`.** Use the expo-out easing (`ease-out-expo` token / GSAP default `expo.out`).
- **Respect reduced motion.** Check `prefersReducedMotion()` (GSAP) or `useReducedMotion()` (Framer Motion) and skip the animation. A CSS rule already shortens CSS animations to near zero for these visitors.
- **Avoid a flash before reveals run.** An inline script adds `js-motion` to `<html>` before first paint, which hides reveal targets. If animations haven't started after 3.5s, the class is removed so content never stays hidden.
- **Gradient text inside `data-split` headlines** works because the splitter copies `.text-sheen` onto each word. Keep that logic if you change the splitter.

## Assets

- **Always reference `/public` files through `asset()`** from `lib/asset.ts`, otherwise they 404 on GitHub Pages.
- **Brand mark:** `public/brand/mark.svg`, a vector redraw of the original logo. The originals are in `design/brand/`.
- **Product videos:** they carry a small "Veo" watermark in the bottom-right corner. Videos are scaled about 1.1× from the top-left (`origin-top-left scale-[1.1]`) to crop it out. Keep this until clean exports replace them.
