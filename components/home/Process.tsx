"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Check, Plus } from "@/components/icons";
import { cn } from "@/lib/utils";

const STEP_MS = 6500;
const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    title: "Survey",
    heading: "We walk the building before we quote.",
    body: "An engineer maps every room, riser and cable run on site, so the proposal you sign matches the building you own.",
    Panel: SurveyPanel,
  },
  {
    title: "Design & install",
    heading: "Our engineers, our schedule.",
    body: "Installation is done by our own certified team, not subcontractors. You get one site lead and a dated plan for every floor.",
    Panel: InstallPanel,
  },
  {
    title: "Connect on One Fiber",
    heading: "Every system on one backbone.",
    body: "Locks, cameras, fire panels and nurse call share a single fibre network, monitored from one place.",
    Panel: ConnectPanel,
  },
  {
    title: "Support",
    heading: "Support for the life of the system.",
    body: "One number to call. Critical systems get priority response, and every visit is logged against your site.",
    Panel: SupportPanel,
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLElement>(null);
  const inView = useInView(root, { amount: 0.35 });
  const reduce = useReducedMotion();
  const running = inView && !paused;

  const Panel = steps[active].Panel;

  return (
    <section ref={root} className="section bg-paper">
      <div className="container">
        <div className="max-w-3xl">
          <span className="eyebrow" data-reveal>How we work</span>
          <h2 className="headline mt-5" data-split>One team from the first site visit to the last service call.</h2>
        </div>

        <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div>
            {/* Segmented progress */}
            <div className="mb-6 flex gap-1.5" aria-hidden>
              {steps.map((_, i) => (
                <div key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-line">
                  <div
                    key={`${i}-${active}`}
                    onAnimationEnd={i === active && !reduce ? () => setActive((active + 1) % steps.length) : undefined}
                    className="h-full origin-left rounded-full bg-teal"
                    style={{
                      transform: i < active || (reduce && i === active) ? "scaleX(1)" : "scaleX(0)",
                      animation: i === active && !reduce ? `fill ${STEP_MS}ms linear forwards` : undefined,
                      animationPlayState: running ? "running" : "paused",
                    }}
                  />
                </div>
              ))}
            </div>

            <ol className="divide-y divide-line border-y border-line">
              {steps.map((s, i) => {
                const open = i === active;
                return (
                  <li key={s.title}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={open}
                      className="flex w-full items-center gap-5 py-5 text-left"
                    >
                      <span className={cn("font-mono text-xs tabular-nums transition-colors", open ? "text-teal" : "text-faint")}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={cn("flex-1 text-[1.05rem] font-semibold tracking-[-0.02em] transition-colors", open ? "text-teal" : "text-ink")}>
                        {s.title}
                      </span>
                      <Plus size={18} className={cn("text-faint transition-transform duration-500", open && "rotate-45 text-teal")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-10">
                            <p className="text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[1.1] tracking-[-0.04em]">{s.heading}</p>
                            <p className="mt-3 max-w-md text-muted">{s.body}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.75rem] bg-[radial-gradient(120%_100%_at_100%_0%,#d4eef0_0%,#e7f3f3_40%,#eef1f1_100%)] p-5 shadow-[inset_0_0_0_1px_rgb(18_19_20/0.05)] md:min-h-[32rem] md:p-10" aria-hidden>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.99 }}
                transition={{ duration: 0.7, ease }}
                className="h-full"
              >
                <Panel />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style>{`@keyframes fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </section>
  );
}

/* ── Illustrative panels ─────────────────────────────────────── */

function Frame({ label, meta, children }: { label: string; meta?: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-paper p-5 shadow-[0_0_0_1px_rgb(18_19_20/0.05),0_30px_60px_-30px_rgb(14_74_82/0.35)] md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
          <span className="size-1.5 rounded-full bg-teal [animation:pulse-dot_2s_infinite]" />
          {label}
        </span>
        {meta && <span className="font-mono text-[0.68rem] text-faint">{meta}</span>}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function SurveyPanel() {
  const pins = [
    { x: 18, y: 26, k: "CCTV" }, { x: 46, y: 20, k: "Switch" }, { x: 76, y: 30, k: "Lock" },
    { x: 28, y: 66, k: "Fire" }, { x: 62, y: 70, k: "Call" }, { x: 84, y: 64, k: "AP" },
  ];
  return (
    <Frame label="Site survey · Tower B, Floor 7" meta="12 rooms">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-canvas">
        <svg viewBox="0 0 100 62" className="absolute inset-0 size-full" fill="none" stroke="rgb(18 19 20 / 0.18)" strokeWidth=".4">
          <rect x="4" y="4" width="92" height="54" rx="1.5" />
          <path d="M4 32h40M56 32h40M36 4v20M64 4v20M36 40v18M70 40v18" />
          <path d="M44 32h12" strokeDasharray="1.2 1.2" stroke="rgb(23 112 122 / 0.6)" strokeWidth=".6" />
        </svg>
        {pins.map((p, i) => (
          <motion.span
            key={p.k}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className="flex items-center gap-1 rounded-full bg-ink px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.06em] text-white shadow-lg">
              <span className="size-1 rounded-full bg-teal-bright" />{p.k}
            </span>
          </motion.span>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
        {[["Cable runs", "38"], ["Devices", "64"], ["Risers", "2"]].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-canvas p-3">
            <p className="text-xs text-muted">{k}</p>
            <p className="mt-1 text-xl font-semibold tabular-nums tracking-[-0.03em]">{v}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function InstallPanel() {
  const rows = [
    { f: "Floor 1–3", t: "CCTV + access", d: "Mon 14", p: 100 },
    { f: "Floor 4–6", t: "Smart switches", d: "Wed 16", p: 72 },
    { f: "Floor 7", t: "Fire detection", d: "Fri 18", p: 35 },
    { f: "Plant room", t: "Fibre backbone", d: "Mon 21", p: 0 },
  ];
  return (
    <Frame label="Install plan · Week 3" meta="Site lead: R. Kulkarni">
      <ul className="space-y-3">
        {rows.map((r, i) => (
          <motion.li
            key={r.f}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease }}
            className="rounded-xl bg-canvas p-4"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold tracking-[-0.01em]">{r.f} <span className="font-normal text-muted">· {r.t}</span></span>
              <span className="font-mono text-xs text-faint">{r.d}</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${r.p}%` }}
                transition={{ delay: 0.4 + i * 0.1, duration: 1.2, ease }}
                className={cn("h-full rounded-full", r.p === 100 ? "bg-teal" : "bg-teal-bright")}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </Frame>
  );
}

function ConnectPanel() {
  const devices = [
    ["Main entrance lock", "Smart Home"], ["Lobby camera array", "Security"], ["Fire panel · Zone 1–8", "Security"],
    ["Ward 3 call points", "Nurse Call"], ["Apartment switches", "Smart Home"],
  ];
  return (
    <Frame label="One Fiber · Network" meta="5 of 5 online">
      <ul className="divide-y divide-line">
        {devices.map(([n, d], i) => (
          <motion.li
            key={n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease }}
            className="flex items-center justify-between py-3.5"
          >
            <div>
              <p className="text-sm font-semibold tracking-[-0.01em]">{n}</p>
              <p className="text-xs text-muted">{d}</p>
            </div>
            <motion.span
              initial={{ backgroundColor: "rgb(18 19 20 / 0.08)" }}
              animate={{ backgroundColor: "rgb(23 112 122 / 1)" }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
              className="relative h-6 w-10 rounded-full"
            >
              <motion.span
                initial={{ x: 3 }}
                animate={{ x: 19 }}
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 400, damping: 26 }}
                className="absolute top-[3px] size-[18px] rounded-full bg-white shadow"
              />
            </motion.span>
          </motion.li>
        ))}
      </ul>
    </Frame>
  );
}

function SupportPanel() {
  const log = [
    ["09:12", "Fault reported", "Camera 14 offline · Car park B1"],
    ["09:19", "Engineer assigned", "Remote diagnostics started"],
    ["10:05", "On site", "PoE injector replaced"],
    ["10:21", "Resolved", "Camera 14 back online · logged to site history"],
  ];
  return (
    <Frame label="Ticket #4821 · Priority" meta="Resolved in 1h 09m">
      <ol className="relative space-y-5 pl-7">
        <span className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
        {log.map(([t, h, d], i) => (
          <motion.li
            key={t}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.18, duration: 0.6, ease }}
            className="relative"
          >
            <span className={cn("absolute -left-7 top-0.5 flex size-[15px] items-center justify-center rounded-full", i === log.length - 1 ? "bg-teal text-white" : "bg-paper ring-1 ring-line")}>
              {i === log.length - 1 && <Check size={10} strokeWidth={2.4} />}
            </span>
            <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[-0.01em]">
              {h} <span className="font-mono text-xs font-normal text-faint">{t}</span>
            </p>
            <p className="text-sm text-muted">{d}</p>
          </motion.li>
        ))}
      </ol>
    </Frame>
  );
}
