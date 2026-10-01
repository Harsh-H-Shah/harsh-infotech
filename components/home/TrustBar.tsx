"use client";

import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { sectors, stats } from "@/lib/site";

export default function TrustBar() {
  return (
    <section aria-label="Who we work with" className="pt-16 md:pt-20">
      <div className="container">
        <p className="text-center font-mono text-xs uppercase tracking-[0.12em] text-faint">
          Trusted across every kind of building
        </p>
      </div>
      <div className="relative mt-6 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Marquee pauseOnHover className="[--duration:46s] [--gap:3.5rem]">
          {sectors.map((s) => (
            <span key={s} className="flex items-center gap-3.5 whitespace-nowrap text-[1.6rem] font-semibold tracking-[-0.04em] text-ink/80 md:text-[2rem]">
              <span className="size-2 rotate-45 rounded-[2px] bg-teal-bright" aria-hidden />
              {s}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container mt-14 md:mt-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] bg-line shadow-[0_0_0_1px_rgb(18_19_20/0.06)] lg:grid-cols-4" data-reveal>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col justify-between gap-10 bg-paper p-6 md:p-8">
              <dt className="max-w-[16ch] text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="stat-number text-ink">
                <NumberTicker value={s.value} />
                <span className="text-teal">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
