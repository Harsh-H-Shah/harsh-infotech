"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/** Card whose border and surface catch a soft light that follows the cursor. */
export function SpotlightCard({
  className,
  children,
  color = "92 199 209",
  ...props
}: ComponentPropsWithoutRef<"div"> & { color?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={cn("group/spot relative isolate overflow-hidden", className)}
      style={{ ["--spot" as string]: color }}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: "radial-gradient(420px circle at var(--mx) var(--my), rgb(var(--spot) / 0.16), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          padding: 1,
          background: "radial-gradient(300px circle at var(--mx) var(--my), rgb(var(--spot) / 0.75), transparent 55%)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {children}
    </div>
  );
}
