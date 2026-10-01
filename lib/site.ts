export type Division = {
  key: "smart-home" | "security" | "one-fiber" | "nurse-call";
  name: string;
  href: string;
  summary: string;
  tagline: string;
  /** `planned` pages are in the brief but not built yet — hidden from navigation. */
  links: { label: string; href: string; planned?: boolean }[];
};

export const divisions: Division[] = [
  {
    key: "smart-home",
    name: "Smart Home",
    href: "/smart-home",
    summary: "Locks, switches and appliances",
    tagline: "Homes that respond to the people living in them.",
    links: [
      { label: "Smart locks", href: "/smart-home/locks" },
      { label: "Smart switches", href: "/smart-home/switches" },
      { label: "Smart appliances", href: "/smart-home/appliances" },
      { label: "Ecosystem", href: "/smart-home/ecosystem" },
    ],
  },
  {
    key: "security",
    name: "Security",
    href: "/security",
    summary: "CCTV, fire safety and compliance",
    tagline: "Surveillance and fire safety built to pass inspection.",
    links: [
      { label: "CCTV systems", href: "/security/cctv" },
      { label: "Fire safety", href: "/security/fire" },
      { label: "Solutions", href: "/security/solutions", planned: true },
      { label: "Compliance", href: "/security/compliance", planned: true },
    ],
  },
  {
    key: "one-fiber",
    name: "One Fiber",
    href: "/one-fiber",
    summary: "One backbone for every system",
    tagline: "A single fibre backbone that carries every system in the building.",
    links: [
      { label: "Overview", href: "/one-fiber/overview" },
      { label: "Services & plans", href: "/one-fiber/services", planned: true },
      { label: "Compatible devices", href: "/one-fiber/devices", planned: true },
      { label: "Docs & setup", href: "/one-fiber/docs", planned: true },
    ],
  },
  {
    key: "nurse-call",
    name: "Nurse Call",
    href: "/nurse-call",
    summary: "Clinical calling infrastructure",
    tagline: "Bedside-to-station calling that hospitals can rely on.",
    links: [
      { label: "Product system", href: "/nurse-call/product" },
      { label: "Healthcare solutions", href: "/nurse-call/solutions", planned: true },
      { label: "Case studies", href: "/nurse-call/cases", planned: true },
      { label: "Installation & support", href: "/nurse-call/support", planned: true },
    ],
  },
];

export const liveLinks = (d: Division) => d.links.filter((l) => !l.planned);

/**
 * PLACEHOLDER CONTENT — replace with verified figures, client names and quotes
 * before launch (the brief requires real names and companies only).
 */
export const FOUNDED = 2008;

export const stats = [
  { value: new Date().getFullYear() - FOUNDED, suffix: "+", label: "Years installing and supporting" },
  { value: 500, suffix: "+", label: "Sites delivered", placeholder: true },
  { value: 4, suffix: "", label: "Divisions, one team" },
  { value: 24, suffix: "/7", label: "Support line for critical systems", placeholder: true },
];

export const sectors = [
  "Hospitals",
  "Residential towers",
  "Private villas",
  "Hotels",
  "Corporate offices",
  "Care homes",
  "Warehouses",
  "Schools",
  "Retail",
  "Gated communities",
];

export const contact = {
  phone: "+91 93245 30890",
  phoneHref: "tel:+919324530890",
  email: "harsh@harshinfo.com",
};
