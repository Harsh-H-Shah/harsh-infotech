"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { FOUNDED } from "@/lib/site";
import { cn } from "@/lib/utils";

// PLACEHOLDER milestones carried over from the first build — confirm dates and wording.
const milestones = [
  { year: "2008", title: "Founded", body: "Harsh Infotech opens with a small team wiring offices and homes." },
  { year: "2010", title: "Security division", body: "CCTV and fire safety become a dedicated practice with compliance-ready installs." },
  { year: "2013", title: "Smart Home", body: "Locks, switches and automation for homeowners as connected living arrives in India." },
  { year: "2016", title: "Nurse Call", body: "First hospital wards go live on our bedside-to-station calling system." },
  { year: "2019", title: "One Fiber", body: "A single fibre backbone ties every division together in one building network." },
  { year: "Today", title: "One team, four divisions", body: "Homes, towers and hospitals designed, installed and supported end to end." },
];

export default function Story() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => track.current!.scrollWidth - window.innerWidth + 80;
        const tween = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: ".story-pin",
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });
        gsap.fromTo(".story-progress", { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: ".story-pin", start: "top top", end: () => `+=${distance()}`, scrub: 0.8, invalidateOnRefresh: true },
        });
        gsap.utils.toArray<HTMLElement>(".story-card").forEach((card) => {
          gsap.from(card.querySelector(".story-year"), {
            opacity: 0.15,
            ease: "none",
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left 85%", end: "left 45%", scrub: true },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-canvas-2/60">
      <div className="story-pin flex min-h-[100dvh] flex-col justify-center overflow-hidden py-24 lg:py-0">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="eyebrow" data-reveal>Since {FOUNDED}</span>
              <h2 className="headline mt-5 max-w-3xl" data-split>
                Years of wiring buildings <span className="font-serif-italic">properly.</span>
              </h2>
            </div>
            <div className="hidden h-px w-72 overflow-hidden bg-line lg:block" aria-hidden>
              <div className="story-progress h-full origin-left bg-teal" />
            </div>
          </div>
        </div>

        <div ref={track} className="mt-14 flex flex-col gap-4 px-5 md:px-10 lg:mt-20 lg:w-max lg:flex-row lg:gap-5 lg:pl-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]">
          {milestones.map((m, i) => (
            <article
              key={m.year}
              className={cn(
                "story-card relative flex shrink-0 flex-col justify-between gap-12 rounded-[1.75rem] p-7 md:p-9 lg:h-[24rem] lg:w-[24rem]",
                i === milestones.length - 1 ? "on-dark bg-night text-white" : "bg-paper shadow-[0_0_0_1px_rgb(18_19_20/0.05)]"
              )}
            >
              <span
                className={cn(
                  "story-year text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.06em] tabular-nums",
                  i === milestones.length - 1 ? "text-sheen" : "text-ink"
                )}
              >
                {m.year}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{m.title}</h3>
                <p className={cn("mt-2 text-[0.95rem]", i === milestones.length - 1 ? "text-white/65" : "text-muted")}>{m.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
