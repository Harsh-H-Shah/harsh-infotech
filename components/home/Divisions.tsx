"use client";

import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ArrowUpRight } from "@/components/icons";
import { divisions, type Division } from "@/lib/site";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

const byKey = Object.fromEntries(divisions.map((d) => [d.key, d])) as Record<Division["key"], Division>;

export default function Divisions() {
  return (
    <section id="divisions" className="section scroll-mt-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow" data-reveal>Four divisions</span>
            <h2 className="headline mt-5" data-split>
              Everything a building needs. Working as one.
            </h2>
          </div>
          <p className="lede lg:justify-self-end lg:pb-2" data-reveal data-reveal-delay="0.15">
            Each division stands on its own. Put them together on One Fiber and your building runs on one backbone, with one team accountable for it.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:mt-20 lg:grid-cols-12 lg:gap-5" data-reveal-stagger>
          <DivisionCard d={byKey["smart-home"]} className="lg:col-span-7 lg:row-span-1" media={<VideoMedia src={asset("/videos/Switch.mp4")} />} />
          <DivisionCard d={byKey["one-fiber"]} className="lg:col-span-5" media={<VideoMedia src={asset("/videos/One_Fiber.mp4")} position="center 30%" />} badge="Flagship" />
          <DivisionCard d={byKey.security} className="lg:col-span-5" media={<SecurityMock />} />
          <DivisionCard d={byKey["nurse-call"]} className="lg:col-span-7" media={<NurseCallMock />} />
        </div>
      </div>
    </section>
  );
}

function DivisionCard({ d, media, className, badge }: { d: Division; media: React.ReactNode; className?: string; badge?: string }) {
  return (
    <SpotlightCard className={cn("rounded-[1.75rem] bg-[linear-gradient(165deg,#163f46_0%,#0d2a2f_55%,#0a1f23_100%)] shadow-[inset_0_1px_0_rgb(255_255_255/0.08),0_30px_60px_-40px_rgb(14_74_82/0.7)]", className)}>
      <Link href={d.href} className="on-dark group flex h-full min-h-[26rem] flex-col text-white md:min-h-[30rem]">
        <div className="relative flex-1 overflow-hidden">{media}</div>
        <div className="relative z-20 flex items-end justify-between gap-6 p-6 md:p-8">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-[1.6rem] font-semibold tracking-[-0.035em] md:text-[1.9rem]">{d.name}</h3>
              {badge && (
                <span className="rounded-md bg-teal-bright/15 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-teal-bright">
                  {badge}
                </span>
              )}
            </div>
            <p className="mt-1.5 max-w-[36ch] text-[0.95rem] text-white/65">{d.tagline}</p>
          </div>
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 group-hover:bg-white group-hover:text-night">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </SpotlightCard>
  );
}

function VideoMedia({ src, position = "center" }: { src: string; position?: string }) {
  return (
    <>
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-hidden
        style={{ objectPosition: position }}
        className="absolute inset-0 size-full origin-top-left scale-[1.12] object-cover opacity-85 transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2125] via-[#0b2125]/30 to-transparent" />
    </>
  );
}

/* Illustrative product UI — no photography exists yet for these divisions */
function SecurityMock() {
  const cams = ["Lobby", "Car park B1", "North gate", "Server room"];
  return (
    <div className="absolute inset-0 p-6 md:p-8" aria-hidden>
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
        <div className="mb-3 flex items-center justify-between px-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-white/50">
          <span>Live · 4 of 32 cameras</span>
          <span className="flex items-center gap-1.5 text-[#ff8a7a]">
            <span className="size-1.5 rounded-full bg-[#ff6b5a] [animation:pulse-dot_1.6s_infinite]" /> Rec
          </span>
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-2 gap-2">
          {cams.map((c, i) => (
            <div key={c} className="relative overflow-hidden rounded-lg bg-[radial-gradient(120%_90%_at_30%_20%,#2a4a50_0%,#13262a_60%,#0c1a1d_100%)]">
              <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,transparent_0_3px,rgb(255_255_255/0.04)_3px_4px)]" />
              <div
                className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-teal-bright/20 to-transparent"
                style={{ animation: `scan 3.${i + 2}s linear infinite`, animationDelay: `${i * 0.4}s` }}
              />
              <span className="absolute bottom-1.5 left-2 font-mono text-[0.6rem] uppercase tracking-[0.08em] text-white/70">
                Cam {String(i + 1).padStart(2, "0")} · {c}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/10 bg-night/80 px-3 py-1.5 text-[0.7rem] text-white/80 backdrop-blur">
          <span className="size-1.5 rounded-full bg-[#7ee2a8]" /> Fire panel · all zones normal
        </div>
      </div>
      <style>{`@keyframes scan{0%{top:-20%}100%{top:110%}}`}</style>
    </div>
  );
}

function NurseCallMock() {
  const calls = [
    { where: "ICU · Bed 04", what: "Emergency call", state: "Acknowledged", time: "0:18", tone: "bg-[#ff6b5a]" },
    { where: "Ward 3 · Bed 12", what: "Patient call", state: "Nurse en route", time: "0:42", tone: "bg-[#f3b65b]" },
    { where: "Ward 1 · Bath 2", what: "Assistance", state: "Resolved in 1m 12s", time: "", tone: "bg-[#7ee2a8]" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8" aria-hidden>
      <div className="w-full max-w-md space-y-2.5 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
        <div className="mb-4 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.1em] text-white/50">
          <span>Nurse station · Floor 2</span>
          <span>3 active</span>
        </div>
        {calls.map((c, i) => (
          <div
            key={c.where}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 backdrop-blur"
            style={{ transform: `translateX(${i * 14}px)`, opacity: 1 - i * 0.12 }}
          >
            <span className={cn("size-2.5 shrink-0 rounded-full", c.tone, i === 0 && "[animation:pulse-dot_1.4s_infinite]")} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold tracking-[-0.01em]">{c.where}</p>
              <p className="truncate text-xs text-white/55">{c.what} · {c.state}</p>
            </div>
            {c.time && <span className="font-mono text-xs tabular-nums text-white/70">{c.time}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
