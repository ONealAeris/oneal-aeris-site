"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Brand";

const LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-base/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-[68px] items-center justify-between">
        <a href="#top" aria-label="ONeal Aeris — home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Make contact
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-base/95 backdrop-blur-md md:hidden">
          <div className="shell flex flex-col py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 font-mono text-[13px] uppercase tracking-[0.16em] text-muted"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Make contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
