import Image from "next/image";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

/** Harsh Infotech mark (vector redraw of the original diamonds + orbit) with wordmark. */
export default function Logo({
  className,
  tone = "dark",
  compact = false,
}: {
  className?: string;
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src={asset("/brand/mark.svg")} alt="" width={40} height={37} priority className="h-9 w-auto shrink-0" />
      {!compact && (
        <span
          className={cn(
            "text-[1.3rem] font-bold leading-none tracking-[-0.045em]",
            tone === "dark" ? "text-ink" : "text-white"
          )}
        >
          Harsh
          <span className={cn("font-medium", tone === "dark" ? "text-teal" : "text-teal-bright")}> Infotech</span>
        </span>
      )}
      <span className="sr-only">Harsh Infotech home</span>
    </span>
  );
}
