import { Reveal } from "./Reveal";

const DOMAINS = [
  {
    id: "01",
    title: "Human Performance",
    lede: "Operational at the limit.",
    body: "Training systems, coaching frameworks, and readiness models proven where conditions are unforgiving and the body and mind are the equipment.",
    tags: ["Readiness", "Coaching systems", "Risk"],
  },
  {
    id: "02",
    title: "Critical Care & Response",
    lede: "Medicine in motion.",
    body: "Advisory grounded in austere, time-critical care and the safe movement of patients through demanding transport environments.",
    tags: ["Austere care", "Transport", "Protocols"],
  },
  {
    id: "03",
    title: "Digital Integration & AI",
    lede: "Systems that compound.",
    body: "Modern web, data, and applied AI woven into how an organization actually runs — built to remove friction, not add dashboards.",
    tags: ["Web & data", "Applied AI", "Automation"],
  },
  {
    id: "04",
    title: "Experience into Enterprise",
    lede: "Mastery, made marketable.",
    body: "Turning hard-earned domain expertise into products, platforms, and revenue — the bridge from knowing the work to selling the outcome.",
    tags: ["Productization", "Go-to-market", "Workflow"],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-line py-24 md:py-32">
      <div className="shell">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">02 — Capabilities</span>
            <h2 className="mt-4 max-w-[20ch] text-3xl font-medium text-ink md:text-[44px]">
              Four domains, one standard of precision.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[15px] leading-relaxed text-muted">
            The work spans the physical and the digital — but every engagement
            shares the same discipline: rehearse the hard parts, remove the
            guesswork, and build a system that holds when it matters.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xs border border-line bg-line sm:grid-cols-2">
          {DOMAINS.map((d, i) => (
            <Reveal
              key={d.id}
              delay={i * 80}
              className="group relative bg-base p-8 transition-colors duration-500 hover:bg-panel md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] tracking-[0.2em] text-signal">
                  {d.id}
                </span>
                <span className="label-mono opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Active
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-medium text-ink md:text-[26px]">
                {d.title}
              </h3>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.16em] text-steel">
                {d.lede}
              </p>
              <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-muted">
                {d.body}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-xs border border-line-strong px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* baseline tick that grows on hover */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-signal/70 transition-all duration-500 group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
