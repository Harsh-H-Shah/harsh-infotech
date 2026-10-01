"use client";

import Image from "next/image";
import Link from "next/link";
import { createRef, forwardRef, useRef, useState } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { ArrowRight, divisionGlyph } from "@/components/icons";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

const left = [
  { label: "CCTV", sub: "32 cameras", glyph: divisionGlyph.security },
  { label: "Fire safety", sub: "8 zones", glyph: divisionGlyph.security },
  { label: "Intercom & TV", sub: "120 units", glyph: divisionGlyph["one-fiber"] },
];
const right = [
  { label: "Smart home", sub: "Locks · switches", glyph: divisionGlyph["smart-home"] },
  { label: "Nurse call", sub: "48 beds", glyph: divisionGlyph["nurse-call"] },
  { label: "Internet", sub: "Every floor", glyph: divisionGlyph["one-fiber"] },
];

export default function OneFiber() {
  const section = useRef<HTMLElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);
  const [nodes] = useState(() => Array.from({ length: 6 }, () => createRef<HTMLDivElement>()));

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ".fiber-film",
        { clipPath: "inset(12% 18% 12% 18% round 2rem)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 1.75rem)",
          ease: "none",
          scrollTrigger: { trigger: ".fiber-film", start: "top 92%", end: "center 55%", scrub: 0.6 },
        }
      );
      gsap.from(".fiber-node", {
        opacity: 0,
        scale: 0.85,
        stagger: 0.07,
        duration: 1,
        scrollTrigger: { trigger: container.current, start: "top 80%", once: true },
      });
    },
    { scope: section }
  );

  return (
    <section id="one-fiber" ref={section} className="scroll-mt-20 px-3 md:px-5">
      <div className="on-dark relative overflow-hidden rounded-[2rem] bg-night py-20 text-white md:py-32">
        <div aria-hidden className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
        <div aria-hidden className="absolute left-1/2 top-24 size-[40rem] -translate-x-1/2 rounded-full bg-teal/20 blur-[160px]" />

        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center" data-reveal>One Fiber · Flagship platform</span>
            <h2 className="headline mt-5" data-split>
              One cable. <span className="text-sheen">Every system.</span>
            </h2>
            <p className="lede mx-auto mt-6" data-reveal data-reveal-delay="0.1">
              Most buildings run a separate cable for every system. One Fiber replaces the tangle with a single backbone that carries security, fire, intercom, nurse call and internet.
            </p>
          </div>

          {/* Beam diagram */}
          <div ref={container} className="relative mx-auto mt-16 grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-10 md:mt-24 md:gap-20">
            <div className="flex flex-col gap-5 md:gap-8">
              {left.map((n, i) => (
                <Node key={n.label} {...n} ref={nodes[i]} />
              ))}
            </div>

            <div ref={hub} className="fiber-node relative z-10 flex size-24 flex-col items-center justify-center rounded-[1.75rem] bg-white shadow-[0_0_0_8px_rgb(92_199_209/0.12),0_0_80px_rgb(92_199_209/0.45)] md:size-36 md:rounded-[2.25rem]">
              <Image src={asset("/brand/mark.svg")} alt="" width={64} height={59} className="w-10 md:w-16" />
              <span className="mt-1.5 font-mono text-[0.55rem] font-medium uppercase tracking-[0.12em] text-night md:text-[0.65rem]">One Fiber</span>
            </div>

            <div className="flex flex-col gap-5 md:gap-8">
              {right.map((n, i) => (
                <Node key={n.label} {...n} align="right" ref={nodes[i + 3]} />
              ))}
            </div>

            {nodes.map((node, i) => (
              <AnimatedBeam
                key={i}
                containerRef={container}
                fromRef={node}
                toRef={hub}
                curvature={[40, 0, -40, 40, 0, -40][i]}
                reverse={i > 2}
                duration={4.5}
                delay={i * 0.35}
                pathColor="#ffffff"
                pathOpacity={0.12}
                pathWidth={1.5}
                gradientStartColor="#5cc7d1"
                gradientStopColor="#bdf1f5"
              />
            ))}
          </div>

          {/* Film */}
          <figure className="mt-20 md:mt-28">
            <div className="fiber-film relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-night-2">
              <video
                src={asset("/videos/One_Fiber.mp4")}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Animation: a tower's tangled cabling for CCTV, TV, fire safety, intercom and parking consolidating into a single One Fiber backbone"
                className="absolute inset-0 size-full origin-top-left scale-[1.08] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/80 to-transparent" />
            </div>
            <figcaption className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <p className="max-w-lg text-white/65">
                From a dozen separate cable runs to one fibre riser — fewer failure points, faster fault finding and room to add systems later.
              </p>
              <Link href="/one-fiber" className="btn btn-light w-fit">
                Explore One Fiber <ArrowRight size={17} />
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

type NodeProps = { label: string; sub: string; glyph: (typeof divisionGlyph)[keyof typeof divisionGlyph]; align?: "left" | "right" };

const Node = forwardRef<HTMLDivElement, NodeProps>(function Node({ label, sub, glyph: Glyph, align = "left" }, ref) {
  return (
    <div className={cn("fiber-node flex", align === "right" ? "justify-start" : "justify-end")}>
      <div
        ref={ref}
        className={cn(
          "relative z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-night-2/90 p-2.5 backdrop-blur md:pr-5",
          align === "right" && "flex-row-reverse md:pl-5 md:pr-2.5"
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-bright/12 text-teal-bright">
          <Glyph size={18} />
        </span>
        <span className={cn("hidden sm:block", align === "right" && "text-right")}>
          <span className="block text-sm font-semibold tracking-[-0.01em]">{label}</span>
          <span className="block font-mono text-[0.65rem] uppercase tracking-[0.08em] text-white/45">{sub}</span>
        </span>
      </div>
    </div>
  );
});
