import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact, FOUNDED } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a site survey or talk to the Harsh Infotech team about smart home, security, One Fiber or nurse call systems.",
};

export default function ContactPage() {
  return (
    <section className="section pt-[calc(var(--nav-h)+4rem)] md:pt-[calc(var(--nav-h)+6rem)]">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <span className="eyebrow" data-reveal>Contact</span>
          <h1 className="display mt-6 !text-[clamp(2.8rem,6vw,5.2rem)]" data-split data-split-now>
            Let&apos;s look at your <span className="font-serif-italic">building.</span>
          </h1>
          <p className="lede mt-6" data-reveal data-reveal-delay="0.2">
            Tell us what you&apos;re planning. We&apos;ll arrange a site survey and come back with a proposal that matches the building.
          </p>

          <dl className="mt-12 divide-y divide-line border-y border-line" data-reveal data-reveal-delay="0.3">
            <div className="flex items-center justify-between gap-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-[0.1em] text-faint">Call</dt>
              <dd><a href={contact.phoneHref} className="text-lg font-semibold tracking-[-0.02em] hover:text-teal">{contact.phone}</a></dd>
            </div>
            <div className="flex items-center justify-between gap-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-[0.1em] text-faint">Email</dt>
              <dd><a href={`mailto:${contact.email}`} className="text-lg font-semibold tracking-[-0.02em] hover:text-teal">{contact.email}</a></dd>
            </div>
            <div className="flex items-center justify-between gap-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-[0.1em] text-faint">Since</dt>
              <dd className="text-lg font-semibold tracking-[-0.02em]">{FOUNDED}</dd>
            </div>
          </dl>
        </div>

        <div data-reveal data-reveal-delay="0.15">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
