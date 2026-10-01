"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

// PLACEHOLDER testimonials — the brief requires real, approved client quotes before launch.
const quotes = [
  {
    quote: "Nurse call and CCTV went live across the new wing in one programme. Response times on the ward dropped, and we have one number to call when anything needs attention.",
    name: "Dr. Rakesh Sharma",
    role: "Medical Director",
    org: "City General Hospital",
    metric: "One partner for both systems",
  },
  {
    quote: "Every lock, switch and camera in the house runs over One Fiber. It has been reliable from day one, and the team still picks up the phone.",
    name: "Priya Mehta",
    role: "Homeowner",
    org: "Pune",
    metric: "38 devices on one backbone",
  },
  {
    quote: "They surveyed, installed and documented CCTV across three of our properties without a single schedule slip.",
    name: "Sanjay Patel",
    role: "Property Developer",
    org: "Mumbai",
    metric: "3 sites, delivered on schedule",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Proof() {
  const [i, setI] = useState(0);
  const q = quotes[i];

  return (
    <section className="px-3 md:px-5" aria-label="Client stories">
      <div className="on-dark relative isolate overflow-hidden rounded-[2rem] bg-night text-white">
        <video
          src={asset("/videos/Switch.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="absolute inset-0 -z-10 size-full origin-top-left scale-[1.1] object-cover opacity-45 blur-[2px]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(11_12_13/0.95)_0%,rgb(11_12_13/0.7)_55%,rgb(11_12_13/0.35)_100%)]" />

        <div className="container py-20 md:py-32">
          <div className="max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl md:p-12" data-reveal>
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow">Client stories</span>
              {process.env.NODE_ENV !== "production" && (
                <span className="rounded bg-[#f3b65b]/15 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[#f3b65b]">
                  Sample copy
                </span>
              )}
            </div>
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.7, ease }}
              >
                <blockquote className="mt-7 text-[clamp(1.5rem,2.9vw,2.4rem)] font-medium leading-[1.18] tracking-[-0.035em]">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-9 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="font-semibold tracking-[-0.01em]">{q.name}</p>
                    <p className="text-sm text-white/55">{q.role}, {q.org}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-teal-bright">{q.metric}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex max-w-3xl flex-wrap gap-2" role="tablist" aria-label="Choose a client story">
            {quotes.map((x, j) => (
              <button
                key={x.name}
                role="tab"
                aria-selected={i === j}
                onClick={() => setI(j)}
                className={cn(
                  "flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-300",
                  i === j ? "border-white/25 bg-white/12 text-white" : "border-white/8 bg-white/[0.03] text-white/55 hover:text-white"
                )}
              >
                <span className={cn("flex size-8 items-center justify-center rounded-[0.6rem] text-xs font-semibold", i === j ? "bg-teal-bright text-night" : "bg-white/10")}>
                  {x.name.replace("Dr. ", "").split(" ").map((p) => p[0]).join("")}
                </span>
                <span>
                  <span className="block font-semibold">{x.name}</span>
                  <span className="block text-xs opacity-70">{x.org}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
