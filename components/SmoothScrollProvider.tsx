"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, SplitText, prefersReducedMotion } from "@/lib/gsap";

declare global {
  interface Window {
    __lenis?: Lenis;
    __motionReady?: boolean;
  }
}

/**
 * Declarative reveals:
 *   data-reveal            fade + rise (optional value: "fade" | "scale" | "left")
 *   data-reveal-delay="0.2"
 *   data-reveal-stagger    on a parent: children rise in sequence
 *   data-split             headline: lines rise from a mask, word by word
 */
function initReveals(root: ParentNode) {
  const ctx = gsap.context(() => {
    root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
      const split = SplitText.create(el, {
        type: "lines,words",
        mask: "lines",
        linesClass: "split-line",
        autoSplit: true,
        onSplit(self) {
          // background-clip:text doesn't reach transformed child spans — give each word its own gradient
          self.words.forEach((w) => {
            const sheen = w.parentElement?.closest(".text-sheen, .text-sheen-light");
            if (sheen) w.classList.add(sheen.classList.contains("text-sheen") ? "text-sheen" : "text-sheen-light");
          });
          gsap.set(el, { visibility: "visible" });
          return gsap.from(self.words, {
            yPercent: 110,
            duration: 1.25,
            stagger: 0.045,
            delay: Number(el.dataset.revealDelay ?? 0),
            scrollTrigger: el.hasAttribute("data-split-now")
              ? undefined
              : { trigger: el, start: "top 88%", once: true },
          });
        },
      });
      return split;
    });

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const kind = el.dataset.reveal;
      const from: gsap.TweenVars = { opacity: 0 };
      if (kind === "scale") Object.assign(from, { scale: 0.94, y: 30 });
      else if (kind === "left") Object.assign(from, { x: -40 });
      else if (kind !== "fade") Object.assign(from, { y: 44 });

      gsap.fromTo(el, from, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: Number(el.dataset.revealDelay ?? 0),
        clearProps: "transform",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });

    root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
      gsap.from(parent.children, {
        opacity: 0,
        y: 36,
        duration: 1.1,
        stagger: 0.09,
        clearProps: "transform",
        scrollTrigger: { trigger: parent, start: "top 88%", once: true },
      });
    });
  });
  return ctx;
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Lenis + GSAP share one ticker so ScrollTrigger never lags the scroll.
  useEffect(() => {
    if (prefersReducedMotion()) {
      window.__motionReady = true;
      return;
    }
    const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute("href")!);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -80 });
      }
    };
    document.addEventListener("click", onAnchor);

    return () => {
      document.removeEventListener("click", onAnchor);
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  // Re-scan reveal targets on every route change.
  useEffect(() => {
    window.__lenis?.scrollTo(0, { immediate: true });
    if (prefersReducedMotion()) {
      document.documentElement.classList.remove("js-motion");
      return;
    }
    const ctx = initReveals(document);
    window.__motionReady = true;
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      clearTimeout(refresh);
      ctx.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
