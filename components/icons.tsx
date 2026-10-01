import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export const ArrowRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);

export const ArrowUpRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);

export const ChevronDown = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m6 9 6 6 6-6" /></svg>
);

export const Plus = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 5v14M5 12h14" /></svg>
);

export const Play = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" stroke="none" /></svg>
);

export const Check = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);

/* Division glyphs — deliberately not the house / shield clichés */
export const GlyphHome = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="5" y="3" width="14" height="18" rx="3" />
    <circle cx="12" cy="9" r="2.2" />
    <path d="M12 13.5v3.5" />
  </svg>
);

export const GlyphSecurity = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);

export const GlyphFiber = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 12h18" />
    <path d="M7 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5Z" opacity=".5" />
    <circle cx="3.5" cy="12" r="1.3" fill="currentColor" />
    <circle cx="20.5" cy="12" r="1.3" fill="currentColor" />
  </svg>
);

export const GlyphPulse = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M2.5 12h4l2.5-5.5 4 11 2.5-5.5h6" />
  </svg>
);

export const divisionGlyph = {
  "smart-home": GlyphHome,
  security: GlyphSecurity,
  "one-fiber": GlyphFiber,
  "nurse-call": GlyphPulse,
} as const;
