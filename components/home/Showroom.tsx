"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { ArrowUpRight, Check } from "@/components/icons";
import { asset } from "@/lib/asset";

export default function Showroom() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: Number(el.dataset.parallax) },
          {
            yPercent: -Number(el.dataset.parallax),
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="section">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow" data-reveal>Featured products</span>
            <h2 className="headline mt-5" data-split>Hardware made to be touched every day.</h2>
          </div>
          <Link href="/smart-home" className="link-arrow text-teal" data-reveal>
            All smart home products <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-2">
          {/* Smart lock */}
          <Link href="/smart-home/locks" className="group card relative flex min-h-[36rem] flex-col overflow-hidden p-7 md:p-10" data-reveal>
            <div className="relative z-10 flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-teal">Smart Home · Locks</p>
                <h3 className="mt-3 text-[clamp(1.7rem,2.6vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                  Face, fingerprint, PIN or phone.
                </h3>
              </div>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-canvas transition-all duration-500 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <div className="relative -mx-4 mt-4 flex flex-1 items-center justify-center overflow-hidden">
              <div aria-hidden className="absolute size-[22rem] rounded-full bg-[radial-gradient(circle,#dff1f2_0%,transparent_70%)]" />
              <Image
                src={asset("/images/smart-lock-hero.png")}
                alt="Harsh Infotech smart lock with camera, keypad and fingerprint reader, front and side view"
                width={250}
                height={440}
                data-parallax="8"
                className="relative h-[22rem] w-auto mix-blend-multiply transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </div>
            <ul className="relative z-10 mt-2 flex flex-wrap gap-2">
              {["Video doorbell", "Tamper alerts", "Works with One Fiber"].map((f) => (
                <li key={f} className="flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1.5 text-[0.8rem] font-medium text-ink-2">
                  <Check size={13} className="text-teal" /> {f}
                </li>
              ))}
            </ul>
          </Link>

          {/* Smart switches */}
          <Link href="/smart-home/switches" className="group on-dark relative flex min-h-[36rem] flex-col overflow-hidden rounded-[1.75rem] bg-night p-7 text-white md:p-10" data-reveal data-reveal-delay="0.1">
            <div className="absolute inset-0 overflow-hidden">
              <video
                src={asset("/videos/Switch Assembly.mp4")}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
                data-parallax="5"
                className="absolute inset-0 size-full origin-top-left scale-[1.18] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-night/85 via-night/10 to-night/85" />
            </div>
            <div className="relative z-10 flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-teal-bright">Smart Home · Switches</p>
                <h3 className="mt-3 text-[clamp(1.7rem,2.6vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                  Glass, metal and a screen that knows the time.
                </h3>
              </div>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-night">
                <ArrowUpRight size={18} />
              </span>
            </div>
            <ul className="relative z-10 mt-auto flex flex-wrap gap-2">
              {["Scene control", "Energy monitoring", "Modular frames"].map((f) => (
                <li key={f} className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.8rem] font-medium backdrop-blur">
                  <Check size={13} className="text-teal-bright" /> {f}
                </li>
              ))}
            </ul>
          </Link>
        </div>
      </div>
    </section>
  );
}
