import { Reveal } from "./Reveal";

const PRINCIPLES = [
  {
    k: "P-01",
    title: "Rehearsal over improvisation",
    body: "The performance is decided long before the moment arrives. We engineer the preparation so the execution is almost boring.",
  },
  {
    k: "P-02",
    title: "Calm under load",
    body: "Complexity is normal; panic is optional. Systems and judgment are built to stay legible when the pressure is highest.",
  },
  {
    k: "P-03",
    title: "Build the system, not the heroics",
    body: "Anything that depends on one person being exceptional will eventually fail. We design for repeatable outcomes, not luck.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="relative border-t border-line py-24 md:py-32"
    >
      {/* faint scan line */}
      <div
        className="grid-field pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"
        aria-hidden
      />
      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="eyebrow">03 — Approach</span>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-[44px]">
              A method carried over from places where mistakes are expensive.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[15px] leading-relaxed text-muted">
              The instruments change — a drop zone, a patient, a product
              roadmap — but the discipline does not. This is how we work,
              regardless of the domain.
            </p>
            <div className="mt-10 ticked inline-flex items-center gap-3 border border-line px-5 py-4">
              <span className="h-2 w-2 animate-scan rounded-full bg-signal" />
              <span className="label-mono">Standard maintained · all engagements</span>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {PRINCIPLES.map((p, i) => (
              <Reveal
                key={p.k}
                delay={i * 90}
                className="group flex gap-6 border-t border-line py-8 first:border-t-0 md:gap-10"
              >
                <span className="mt-1 font-mono text-[12px] tracking-[0.2em] text-signal">
                  {p.k}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-ink md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
