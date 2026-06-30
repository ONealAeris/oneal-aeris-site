"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const CONTACT_EMAIL = "hello@onealaeris.com";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // honeypot
    if (data.company) {
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="relative border-t border-line py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* left — invite */}
          <Reveal>
            <span className="eyebrow">05 — Contact</span>
            <h2 className="mt-4 max-w-[16ch] text-3xl font-medium text-ink md:text-[44px]">
              Start a conversation.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-muted">
              Tell us what you&apos;re building or the problem you&apos;re facing.
              If it&apos;s a fit, you&apos;ll hear back directly — not from a
              funnel.
            </p>

            <div className="mt-10 space-y-px overflow-hidden rounded-xs border border-line bg-line">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center justify-between bg-base px-5 py-4 transition-colors hover:bg-panel"
              >
                <span className="label-mono">Direct</span>
                <span className="font-mono text-[13px] text-ink">{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-center justify-between bg-base px-5 py-4">
                <span className="label-mono">Response</span>
                <span className="font-mono text-[13px] text-steel">Within 2 business days</span>
              </div>
              <div className="flex items-center justify-between bg-base px-5 py-4">
                <span className="label-mono">Engagements</span>
                <span className="font-mono text-[13px] text-ink">Selective · by fit</span>
              </div>
            </div>
          </Reveal>

          {/* right — form */}
          <Reveal delay={120}>
            {status === "sent" ? (
              <div className="ticked grid h-full min-h-[320px] place-items-center border border-signal/30 bg-panel/30 p-10 text-center">
                <div>
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-signal/50">
                    <span className="text-signal">✓</span>
                  </div>
                  <h3 className="text-xl font-medium text-ink">Transmission received.</h3>
                  <p className="mt-3 text-[14px] text-muted">
                    Thank you — your message is in. Expect a direct reply shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="ticked border border-line bg-panel/30 p-7 md:p-9">
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px]"
                  aria-hidden
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="mt-5">
                  <Field label="Organization" name="org" />
                </div>
                <div className="mt-5">
                  <label className="label-mono mb-2 block">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you working on?"
                    className="w-full resize-none rounded-xs border border-line-strong bg-base px-4 py-3 text-[15px] text-ink placeholder:text-faint focus:border-signal/60 focus:outline-none focus:ring-1 focus:ring-signal/30"
                  />
                </div>

                {status === "error" && (
                  <p className="mt-4 font-mono text-[12px] text-signal-soft">
                    ⚠ {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? "Transmitting…" : "Send message"}
                </button>
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  Encrypted in transit · no lists, no spam
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label-mono mb-2 block">
        {label}
        {required && <span className="text-signal"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xs border border-line-strong bg-base px-4 py-3 text-[15px] text-ink placeholder:text-faint focus:border-signal/60 focus:outline-none focus:ring-1 focus:ring-signal/30"
      />
    </div>
  );
}
