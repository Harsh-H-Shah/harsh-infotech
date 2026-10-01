"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { ArrowRight, ArrowUpRight, ChevronDown, divisionGlyph } from "@/components/icons";
import { divisions, liveLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 320 && y > lastY.current + 4);
      if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the route changes (adjust state during render, not in an effect)
  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setMenuOpen(false);
    setMegaOpen(false);
  }

  useEffect(() => {
    if (menuOpen) window.__lenis?.stop();
    else window.__lenis?.start();
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const inDivision = divisions.some((d) => isActive(d.href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[var(--z-nav)] transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        hidden && !megaOpen && !menuOpen ? "-translate-y-full" : "translate-y-0",
        scrolled || megaOpen || menuOpen
          ? "bg-canvas/85 shadow-[0_1px_0_rgb(18_19_20/0.07),0_12px_32px_-24px_rgb(18_19_20/0.25)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-canvas"
      )}
    >
      <div className="container flex h-[var(--nav-h)] items-center justify-between gap-6">
        <Link href="/" className="rounded-lg" aria-label="Harsh Infotech home">
          <Logo />
        </Link>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <div onMouseEnter={openMega} onMouseLeave={closeMega} className="relative">
            <button
              type="button"
              aria-expanded={megaOpen}
              aria-controls="mega-menu"
              onClick={() => setMegaOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.925rem] font-medium transition-colors",
                megaOpen || inDivision ? "text-ink" : "text-ink-2 hover:text-ink"
              )}
            >
              Solutions
              <ChevronDown size={15} className={cn("transition-transform duration-300", megaOpen && "rotate-180")} />
            </button>
          </div>
          <NavItem href="/one-fiber" active={isActive("/one-fiber")}>One Fiber</NavItem>
          <NavItem href="/about" active={isActive("/about")}>About</NavItem>
          <NavItem href="/contact" active={isActive("/contact")}>Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-dark hidden !h-11 !px-5 text-sm sm:inline-flex">
            Book a site survey
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative flex size-11 items-center justify-center rounded-full bg-ink text-white lg:hidden"
          >
            <span className={cn("absolute h-[1.5px] w-4 bg-current transition-transform duration-300", menuOpen ? "rotate-45" : "-translate-y-[4px]")} />
            <span className={cn("absolute h-[1.5px] w-4 bg-current transition-transform duration-300", menuOpen ? "-rotate-45" : "translate-y-[4px]")} />
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            id="mega-menu"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="container pb-6">
              <div className="card grid grid-cols-[1fr_1fr_1fr_1.15fr] gap-2 p-2">
                {divisions
                  .filter((d) => d.key !== "one-fiber")
                  .map((d) => {
                    const Glyph = divisionGlyph[d.key];
                    return (
                      <div key={d.key} className="rounded-[1.25rem] p-5 transition-colors hover:bg-canvas">
                        <Link href={d.href} className="group flex items-start gap-3">
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-mist text-teal">
                            <Glyph size={19} />
                          </span>
                          <span>
                            <span className="flex items-center gap-1 font-semibold tracking-[-0.02em] text-ink">
                              {d.name}
                              <ArrowRight size={14} className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </span>
                            <span className="mt-0.5 block text-sm text-muted">{d.summary}</span>
                          </span>
                        </Link>
                        <ul className="mt-4 space-y-1 border-t border-line pt-4">
                          {liveLinks(d).map((l) => (
                            <li key={l.href}>
                              <Link href={l.href} className="block rounded-md py-1 text-sm text-ink-2 transition-colors hover:text-teal">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                <Link
                  href="/one-fiber"
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[1.25rem] bg-night p-6 text-white"
                >
                  <video
                    src={asset("/videos/One_Fiber.mp4")}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 size-full origin-top-left scale-110 object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-45"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-night from-30% via-night/70 to-night/20" />
                  <span className="relative flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-teal-bright">
                    <span className="size-1.5 rounded-full bg-teal-bright [animation:pulse-dot_2s_infinite]" />
                    Flagship platform
                  </span>
                  <span className="relative mt-16">
                    <span className="block text-xl font-semibold tracking-[-0.03em]">One Fiber</span>
                    <span className="mt-1 block text-sm text-white/65">One backbone for CCTV, fire, intercom, TV and data.</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                      See how it works <ArrowUpRight size={15} />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-var(--nav-h))] overflow-y-auto bg-canvas lg:hidden"
            data-lenis-prevent
          >
            <nav aria-label="Mobile" className="container flex min-h-full flex-col pb-8 pt-4">
              <ul className="divide-y divide-line">
                {divisions.map((d, i) => {
                  const Glyph = divisionGlyph[d.key];
                  return (
                    <motion.li
                      key={d.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.5, ease }}
                    >
                      <Link href={d.href} className="flex items-center gap-4 py-5">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-teal-mist text-teal">
                          <Glyph size={20} />
                        </span>
                        <span className="flex-1">
                          <span className="block text-xl font-semibold tracking-[-0.03em]">{d.name}</span>
                          <span className="block text-sm text-muted">{d.summary}</span>
                        </span>
                        <ArrowRight size={18} className="text-faint" />
                      </Link>
                    </motion.li>
                  );
                })}
                {[
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.05, duration: 0.5, ease }}
                  >
                    <Link href={l.href} className="flex items-center justify-between py-5 text-xl font-semibold tracking-[-0.03em]">
                      {l.label}
                      <ArrowRight size={18} className="text-faint" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-dark mt-auto w-full">
                Book a site survey <ArrowRight size={17} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative rounded-full px-4 py-2 text-[0.925rem] font-medium transition-colors",
        active ? "text-ink" : "text-ink-2 hover:text-ink"
      )}
    >
      {children}
      {active && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-teal" />}
    </Link>
  );
}
