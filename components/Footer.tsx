import Link from "next/link";
import Logo from "@/components/Logo";
import { ArrowUpRight } from "@/components/icons";
import { contact, divisions, FOUNDED, liveLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-3 pb-3 pt-4 md:px-5 md:pb-5">
      <div className="card overflow-hidden !rounded-[2rem]">
        <div className="container grid gap-12 py-14 md:py-16 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Harsh Infotech home" className="inline-block rounded-lg">
              <Logo />
            </Link>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
              Smart home, security, One Fiber and nurse call systems — designed, installed and supported by one team since {FOUNDED}.
            </p>
            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-faint pt-0.5">Call</dt>
                <dd><a href={contact.phoneHref} className="font-medium text-ink hover:text-teal">{contact.phone}</a></dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-14 shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-faint pt-0.5">Email</dt>
                <dd><a href={`mailto:${contact.email}`} className="font-medium text-ink hover:text-teal">{contact.email}</a></dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {divisions.map((d) => (
              <div key={d.key}>
                <p className="text-sm font-semibold tracking-[-0.01em] text-ink">
                  <Link href={d.href} className="hover:text-teal">{d.name}</Link>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {liveLinks(d).map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="footer-link">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-sm font-semibold tracking-[-0.01em] text-ink">Company</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/about" className="footer-link">About us</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
                <li>
                  <Link href="/contact" className="footer-link inline-flex items-center gap-1">
                    Site survey <ArrowUpRight size={13} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col gap-3 border-t border-line py-6 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Harsh Infotech Pvt. Ltd.</p>
            <p className="font-mono uppercase tracking-[0.08em] text-faint">Est. {FOUNDED} · India</p>
          </div>
        </div>

        <div aria-hidden className="pointer-events-none select-none overflow-hidden px-4">
          <p
            className="translate-y-[22%] whitespace-nowrap text-center font-bold leading-[0.8] tracking-[-0.06em] text-transparent"
            style={{ fontSize: "clamp(3.5rem, 13.2vw, 13rem)", WebkitTextStroke: "1px rgb(23 112 122 / 0.22)" }}
          >
            Harsh Infotech
          </p>
        </div>
      </div>
    </footer>
  );
}
