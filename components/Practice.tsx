import { Reveal } from "./Reveal";
import { Mark } from "./Brand";

export function Practice() {
  return (
    <section id="practice" className="relative border-t border-line py-24 md:py-32">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <span className="eyebrow">04 — The Practice</span>
            <h2 className="mt-4 max-w-[18ch] text-3xl font-medium text-ink md:text-[44px]">
              Built on a career spent where preparation is everything.
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted md:text-[17px]">
              <p>
                ONeal Aeris is the consulting practice of an operator who has
                spent two decades leading in environments where altitude,
                medicine, and split-second decisions intersect — and where the
                only acceptable plan is the one that works.
              </p>
              <p>
                That experience now serves organizations directly. The same
                instinct for readiness, the same intolerance for sloppy systems,
                applied to how a business trains its people, cares for the
                people in its charge, and runs on modern digital rails.
              </p>
              <p className="text-ink">
                The mission is simple: build a stronger, more capable community
                by turning hard-won knowledge into things other people can use.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Human performance",
                "Critical care advisory",
                "Air transport",
                "Digital & AI",
                "Workflow optimization",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-xs border border-line-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* credentials panel */}
          <Reveal delay={120} className="lg:pt-2">
            <div className="ticked border border-line bg-panel/40 p-8 md:p-10">
              <div className="flex items-center justify-between">
                <Mark className="h-10 w-10 text-ink" />
                <span className="label-mono">Profile · OA-01</span>
              </div>

              <dl className="mt-8 divide-y divide-line">
                {[
                  ["Experience", "21 years, operational"],
                  ["Reach", "5 global deployments"],
                  ["Domains", "Performance · Care · Digital"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-3.5">
                    <dt className="label-mono">{k}</dt>
                    <dd className="font-mono text-[12px] tracking-[0.04em] text-ink">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-7 border-t border-line pt-6 text-[13px] leading-relaxed text-muted">
                Engagements are selective and built around fit. If the problem is
                hard and the standard is high, we should talk.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
