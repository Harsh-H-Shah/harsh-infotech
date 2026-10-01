import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { contact } from "@/lib/site";
import { asset } from "@/lib/asset";

export default function ClosingCTA() {
  return (
    <section className="section relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 [background-image:radial-gradient(rgb(23_112_122/0.18)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(50%_60%_at_50%_50%,#000,transparent)]" />
      <div className="container relative text-center">
        <Image src={asset("/brand/mark.svg")} alt="" width={72} height={66} className="mx-auto w-16" data-reveal="scale" />
        <h2 className="display mx-auto mt-8 max-w-[14ch] !text-[clamp(2.6rem,6.4vw,5.6rem)]" data-split>
          Ready to connect your building?
        </h2>
        <p className="lede mx-auto mt-6" data-reveal data-reveal-delay="0.1">
          Tell us about the site and we&apos;ll arrange a survey with one of our engineers.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" data-reveal data-reveal-delay="0.2">
          <Link href="/contact" className="btn btn-teal">
            Book a site survey <ArrowRight size={17} />
          </Link>
          <a href={contact.phoneHref} className="btn btn-outline">
            Call {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
