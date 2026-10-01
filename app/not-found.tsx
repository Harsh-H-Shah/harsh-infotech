import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { divisions } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section pt-[calc(var(--nav-h)+5rem)]">
      <div className="container max-w-3xl">
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-6 !text-[clamp(2.6rem,6vw,4.8rem)]">
          This page isn&apos;t <span className="font-serif-italic">wired up</span> yet.
        </h1>
        <p className="lede mt-6">The link may be old, or the page is still being built. These will get you where you need to go:</p>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {divisions.map((d) => (
            <li key={d.key}>
              <Link href={d.href} className="group flex items-center justify-between py-5">
                <span>
                  <span className="block text-lg font-semibold tracking-[-0.02em]">{d.name}</span>
                  <span className="text-sm text-muted">{d.summary}</span>
                </span>
                <ArrowRight size={18} className="text-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn btn-dark">Back to home</Link>
          <Link href="/contact" className="btn btn-outline">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
