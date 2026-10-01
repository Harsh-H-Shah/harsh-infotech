"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { ArrowRight, Play, divisionGlyph } from "@/components/icons";
import { asset } from "@/lib/asset";
import { divisions, FOUNDED, type Division } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Rotating audience word, each tied to the division that serves it. */
const SCENES: { word: string; division: Division["key"]; event: { title: string; meta: string } }[] = [
  { word: "building", division: "one-fiber", event: { title: "Fire panel test passed", meta: "All 8 zones · via One Fiber" } },
  { word: "hospital", division: "nurse-call", event: { title: "Bed 12 call answered", meta: "Ward 3 · response 0:42" } },
  { word: "home", division: "smart-home", event: { title: "Front door locked", meta: "Smart lock · auto-lock at 22:00" } },
  { word: "tower", division: "security", event: { title: "Motion at North gate", meta: "Cam 03 · clip saved" } },
];
const SCENE_MS = 3200;
const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState(0);
  const reduce = useReducedMotion();
  const inView = useInView(root, { amount: 0.3 });

  useEffect(() => {
    if (reduce || !inView) return;
    const t = setInterval(() => setScene((s) => (s + 1) % SCENES.length), SCENE_MS);
    return () => clearInterval(t);
  }, [reduce, inView]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".hero-media", { scale: 1.3, opacity: 0 }, { scale: 1.12, opacity: 1, duration: 2.6 }, 0)
        .from(".hero-pill", { y: 18, opacity: 0, duration: 1 }, 0.3)
        .from(".hero-word", { yPercent: 115, duration: 1.3, stagger: 0.08 }, 0.4)
        .from(".hero-sub", { y: 22, opacity: 0, duration: 1.1 }, 0.95)
        .from(".hero-cta > *", { y: 18, opacity: 0, stagger: 0.08, duration: 1 }, 1.05)
        .from(".hero-console", { y: 50, opacity: 0, rotateX: 8, duration: 1.6 }, 0.7)
        .from(".hero-float", { y: 30, opacity: 0, stagger: 0.12, duration: 1.3 }, 1.15)
        .from(".hero-chip", { y: 14, opacity: 0, stagger: 0.05, duration: 0.9 }, 1.3)
        .from(".hero-cue", { opacity: 0, duration: 1 }, 1.6);

      // Panel eases back and rounds off as you scroll away
      gsap.to(panel.current, {
        scale: 0.94,
        borderRadius: "3rem",
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-media", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-copy", {
        yPercent: -14,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      // Cursor light + depth parallax on the console layers
      const el = panel.current!;
      const layers = gsap.utils.toArray<HTMLElement>("[data-depth]").map((l) => ({
        depth: Number(l.dataset.depth),
        x: gsap.quickTo(l, "x", { duration: 1.1, ease: "power3.out" }),
        y: gsap.quickTo(l, "y", { duration: 1.1, ease: "power3.out" }),
      }));
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = e.clientX - r.left;
        const py = e.clientY - r.top;
        gsap.to(el, { "--sx": `${px}px`, "--sy": `${py}px`, duration: 0.8, ease: "power3.out", overwrite: "auto" });
        const nx = px / r.width - 0.5;
        const ny = py / r.height - 0.5;
        layers.forEach((l) => {
          l.x(nx * l.depth * 28);
          l.y(ny * l.depth * 22);
        });
      };
      el.addEventListener("pointermove", onMove);
      return () => el.removeEventListener("pointermove", onMove);
    },
    { scope: root }
  );

  const current = SCENES[scene];

  return (
    <section ref={root} className="px-3 pt-[var(--nav-h)] md:px-5">
      <div
        ref={panel}
        className="on-dark relative isolate flex min-h-[calc(100dvh-var(--nav-h)-0.75rem)] origin-top flex-col overflow-hidden rounded-[2rem] bg-night text-white [--sx:70%] [--sy:40%]"
      >
        {/* Media */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <video
            className="hero-media absolute inset-0 size-full origin-top-left scale-[1.12] object-cover opacity-70"
            src={asset("/videos/Switches.mp4")}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(11_12_13/0.95)_0%,rgb(11_12_13/0.82)_42%,rgb(11_12_13/0.55)_70%,rgb(11_12_13/0.7)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night via-night/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(560px_circle_at_var(--sx)_var(--sy),rgb(92_199_209/0.16),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(420px_circle_at_var(--sx)_var(--sy),#000,transparent_75%)]" />
        </div>

        <div className="container relative grid flex-1 items-center gap-14 pb-24 pt-16 md:pb-32 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-10">
          {/* Copy */}
          <div className="hero-copy">
            <Link
              href="#one-fiber"
              className="hero-pill group mb-9 inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-1.5 pr-5 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white/10"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-night transition-transform duration-500 group-hover:scale-110">
                <Play size={12} className="translate-x-px" />
              </span>
              See One Fiber in action
            </Link>

            <h1 className="display">
              <span className="sr-only">Every building, connected.</span>
              <span aria-hidden className="block">
                <span className="inline-block overflow-clip pb-[0.14em] align-top">
                  <span className="hero-word inline-block">Every</span>
                </span>{" "}
                <RotatingWord word={current.word} />
              </span>
              <span aria-hidden className="block overflow-clip pb-[0.14em] -mt-[0.14em]">
                <span className="hero-word inline-block">connected.</span>
              </span>
            </h1>

            <p className="hero-sub lede mt-7 !max-w-[33rem]">
              Smart homes, security, fibre backbones and hospital nurse call — designed, installed and supported by one team since {FOUNDED}.
            </p>

            <div className="hero-cta mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/contact" className="btn btn-light">
                Book a site survey <ArrowRight size={17} />
              </Link>
              <Link href="#divisions" className="link-arrow text-white/85 hover:text-white">
                Explore our solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Live console (illustrative) */}
          <HeroConsole active={current.division} event={current.event} sceneKey={scene} />
        </div>

        {/* Footer row */}
        <div className="container relative pb-7 md:pb-9">
          <div className="flex items-end justify-between gap-6">
            <ul className="flex flex-wrap gap-2">
              {divisions.map((d) => {
                const Glyph = divisionGlyph[d.key];
                const on = d.key === current.division;
                return (
                  <li key={d.key} className="hero-chip">
                    <Link
                      href={d.href}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.8rem] font-medium backdrop-blur-md transition-all duration-500",
                        on ? "border-teal-bright/50 bg-teal-bright/10 text-white" : "border-white/12 bg-white/[0.04] text-white/70 hover:border-white/30 hover:text-white"
                      )}
                    >
                      <Glyph size={14} className="text-teal-bright" />
                      {d.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="hero-cue hidden items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-white/50 md:flex">
              Scroll
              <span className="relative h-10 w-px overflow-hidden bg-white/15">
                <span className="absolute inset-x-0 top-0 h-1/2 bg-teal-bright [animation:scroll-cue_1.8s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RotatingWord({ word }: { word: string }) {
  return (
    <span className="inline-grid overflow-clip pb-[0.14em] align-top">
      <span className="hero-word inline-block [grid-area:1/1]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={word}
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-105%", opacity: 0 }}
            transition={{ duration: 0.75, ease }}
            className="inline-block whitespace-nowrap"
          >
            <span className="font-serif-italic text-sheen">{word}</span>
            <span className="-ml-[0.14em]">,</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

const STATUS: Record<Division["key"], { label: string; value: string }> = {
  "one-fiber": { label: "Backbone", value: "312 devices online" },
  "nurse-call": { label: "Ward 1–3", value: "48 beds · 0 open calls" },
  "smart-home": { label: "Residences", value: "214 locks & switches" },
  security: { label: "Perimeter", value: "32 cameras recording" },
};
const ORDER: Division["key"][] = ["one-fiber", "smart-home", "security", "nurse-call"];
const BARS = [38, 52, 44, 61, 57, 70, 64, 76, 69, 82, 74, 88, 80, 91, 85, 78, 86, 93, 88, 95, 90, 97, 92, 96];

function HeroConsole({
  active,
  event,
  sceneKey,
}: {
  active: Division["key"];
  event: { title: string; meta: string };
  sceneKey: number;
}) {
  const names = Object.fromEntries(divisions.map((d) => [d.key, d.name]));
  return (
    <div className="relative hidden h-full min-h-[30rem] items-center justify-center [perspective:1400px] lg:flex" aria-hidden>
      <div className="relative w-full max-w-[25rem]">
      {/* Main console */}
      <div data-depth="0.6" className="relative">
        <div className="hero-console rounded-[1.6rem] border border-white/12 bg-[linear-gradient(160deg,rgb(255_255_255/0.10),rgb(255_255_255/0.03))] p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.12),0_40px_80px_-30px_rgb(0_0_0/0.8),0_0_0_1px_rgb(0_0_0/0.3)] backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/55">
              <span className="size-1.5 rounded-full bg-teal-bright [animation:pulse-dot_2s_infinite]" />
              Tower B · Live
            </span>
            <span className="rounded-md bg-white/8 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-white/50">One Fiber</span>
          </div>

          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-xs text-white/50">Systems healthy</p>
              <p className="mt-1 text-[2.6rem] font-semibold leading-none tracking-[-0.05em] tabular-nums">
                4<span className="text-white/35">/4</span>
              </p>
            </div>
            <div className="flex h-12 items-end gap-[3px]">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="w-[5px] origin-bottom rounded-full bg-gradient-to-t from-teal/60 to-teal-bright"
                  style={{ height: `${h}%`, animation: `bar-breathe 2.4s ease-in-out ${i * 0.08}s infinite` }}
                />
              ))}
            </div>
          </div>

          <ul className="mt-5 space-y-1.5">
            {ORDER.map((key) => {
              const Glyph = divisionGlyph[key];
              const on = key === active;
              return (
                <li
                  key={key}
                  className={cn(
                    "relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-2.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    on ? "border-teal-bright/40 bg-teal-bright/[0.12]" : "border-transparent bg-white/[0.04]"
                  )}
                >
                  {on && (
                    <motion.span
                      key={sceneKey}
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 1.4, ease }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-bright/15 to-transparent"
                    />
                  )}
                  <span className={cn("flex size-8 items-center justify-center rounded-lg transition-colors duration-500", on ? "bg-teal-bright text-night" : "bg-white/8 text-white/70")}>
                    <Glyph size={15} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.8rem] font-semibold tracking-[-0.01em]">{names[key]}</span>
                    <span className="block truncate text-[0.7rem] text-white/50">
                      {STATUS[key].label} · {STATUS[key].value}
                    </span>
                  </span>
                  <span className={cn("size-1.5 rounded-full", on ? "bg-teal-bright [animation:pulse-dot_1.6s_infinite]" : "bg-[#7ee2a8]/70")} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Event toast */}
      <div data-depth="1.4" className="absolute -left-10 -top-12 z-10 xl:-left-20">
        <div className="hero-float [animation:float-soft_7s_ease-in-out_infinite]">
          <AnimatePresence mode="wait">
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 14, scale: 0.96, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, scale: 0.98, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease }}
              className="flex w-[15.5rem] items-center gap-3 rounded-2xl border border-white/12 bg-night-2/85 p-3 pr-4 shadow-[0_24px_50px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal-bright/15 text-teal-bright">
                {(() => {
                  const Glyph = divisionGlyph[active];
                  return <Glyph size={16} />;
                })()}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[0.8rem] font-semibold tracking-[-0.01em]">{event.title}</span>
                <span className="block truncate text-[0.68rem] text-white/50">{event.meta}</span>
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Uptime chip */}
      <div data-depth="1.9" className="absolute -bottom-10 -right-4 z-10 xl:-right-12">
        <div className="hero-float rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3 shadow-[0_24px_50px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl [animation:float-soft_8s_ease-in-out_-3s_infinite]">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/45">Supported since</p>
          <p className="mt-0.5 text-xl font-semibold tracking-[-0.04em]">{FOUNDED}</p>
        </div>
      </div>
      </div>
    </div>
  );
}
