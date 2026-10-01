"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/icons";
import { contact, divisions } from "@/lib/site";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const field =
  "w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-faint transition-[border-color,box-shadow,background-color] duration-200 hover:border-ink/20 focus:border-teal focus:bg-paper focus:outline-none focus:ring-4 focus:ring-teal/12";

/**
 * No backend yet: on submit we validate, then hand the enquiry to the visitor's
 * email client addressed to the company inbox. Swap `send` for an API route later.
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2) e.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Enter a valid email address, like name@company.com.";
    if (phone && !/^[+\d][\d\s-]{7,}$/.test(phone)) e.phone = "Enter a valid phone number, or leave it blank.";
    if (message.length < 10) e.message = "Tell us a little about the site (at least 10 characters).";
    return e;
  };

  const send = (data: FormData) => {
    const division = divisions.find((d) => d.key === data.get("division"))?.name ?? "Not sure yet";
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("phone") ? `Phone: ${data.get("phone")}` : null,
      `Interested in: ${division}`,
      "",
      String(data.get("message")),
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Site survey enquiry — ${division}`)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) {
      ev.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)?.focus();
      return;
    }
    send(data);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card flex flex-col items-start gap-5 p-8 md:p-10" role="status">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-teal-mist text-teal">
          <Check size={22} />
        </span>
        <h2 className="text-2xl font-semibold tracking-[-0.03em]">Your email is ready to send.</h2>
        <p className="text-muted">
          We opened your email app with the details filled in. Press send there and we&apos;ll reply to arrange a survey. If nothing opened, email{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-teal underline underline-offset-4">{contact.email}</a> or call{" "}
          <a href={contact.phoneHref} className="font-medium text-teal underline underline-offset-4">{contact.phone}</a>.
        </p>
        <button type="button" onClick={() => setSent(false)} className="link-arrow text-ink">
          Edit enquiry <ArrowRight size={15} />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-5 p-6 sm:grid-cols-2 md:p-10">
      <Field id="name" label="Full name" error={errors.name}>
        <input id="name" name="name" autoComplete="name" className={cn(field, errors.name && "border-[#c2410c]")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
      </Field>
      <Field id="email" label="Work email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" className={cn(field, errors.email && "border-[#c2410c]")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
      </Field>
      <Field id="phone" label="Phone" optional error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" className={cn(field, errors.phone && "border-[#c2410c]")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
      </Field>
      <Field id="division" label="Interested in">
        <select id="division" name="division" defaultValue="not-sure" className={cn(field, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235f6266%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10")}>
          {divisions.map((d) => (
            <option key={d.key} value={d.key}>{d.name}</option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
      </Field>
      <Field id="message" label="About the site" error={errors.message} className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Building type, size, and what you'd like to install or upgrade."
          className={cn(field, "resize-y", errors.message && "border-[#c2410c]")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">We use your details only to reply to this enquiry.</p>
        <button type="submit" className="btn btn-dark">
          Send enquiry <ArrowRight size={17} />
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-ink-2">
        {label}
        {optional && <span className="text-xs font-normal text-faint">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#c2410c]">
          {error}
        </p>
      )}
    </div>
  );
}
