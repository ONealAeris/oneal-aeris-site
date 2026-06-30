import { Mark } from "./Brand";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* instrument grid field */}
      <div
        className="grid-field pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_90%_at_50%_0%,black,transparent_78%)]"
        aria-hidden
      />
      {/* faint horizon line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[58%] h-px bg-line-strong"
        aria-hidden
      />

      <div className="shell relative pt-36 pb-24 md:pt-44 md:pb-32">
        {/* telemetry strip */}
        <div className="mb-12 flex flex-wrap items-center gap-x-8 gap-y-2 animate-rise">
          <span className="eyebrow">ONeal Aeris · Consulting</span>
          <span className="hidden h-3 w-px bg-line-strong md:block" />
          <span className="label-mono">EST · Global Operations</span>
          <span className="hidden h-3 w-px bg-line-strong md:block" />
          <span className="label-mono text-steel">N 28.9°  ·  ALT — VARIABLE</span>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.55fr_1fr]">
          {/* headline column */}
          <div>
            <h1
              className="max-w-[16ch] text-[40px] font-medium leading-[1.04] text-ink sm:text-[54px] md:text-[68px] animate-rise"
              style={{ animationDelay: "60ms" }}
            >
              Precision earned where the margin for error is{" "}
              <span className="text-signal">zero.</span>
            </h1>

            <p
              className="mt-8 max-w-[54ch] text-[17px] leading-relaxed text-muted md:text-[18px] animate-rise"
              style={{ animationDelay: "140ms" }}
            >
              ONeal Aeris turns two decades of operating in extreme,
              high-consequence environments into precise, repeatable advantage —
              across human performance, critical care, and the digital systems
              that carry a business forward.
            </p>

            <div
              className="mt-11 flex flex-wrap items-center gap-4 animate-rise"
              style={{ animationDelay: "220ms" }}
            >
              <a href="#capabilities" className="btn-primary">
                View capabilities
              </a>
              <a href="#contact" className="btn-ghost">
                Make contact
              </a>
            </div>
          </div>

          {/* instrument column */}
          <div
            className="relative hidden justify-self-center lg:flex animate-rise"
            style={{ animationDelay: "180ms" }}
          >
            <div className="ticked relative grid h-[320px] w-[320px] place-items-center border border-line">
              <div className="absolute inset-6 rounded-full border border-line" aria-hidden />
              <div
                className="absolute inset-12 rounded-full border border-dashed border-signal/25 animate-sweep [animation-duration:26s]"
                aria-hidden
              />
              <Mark className="h-40 w-40 text-ink" animated />
              <span className="absolute left-3 top-3 label-mono">ATT · IND</span>
              <span className="absolute bottom-3 right-3 label-mono text-steel">FIX · 04</span>
            </div>
          </div>
        </div>

        {/* baseline readout */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xs border border-line bg-line md:grid-cols-4">
          {[
            ["21 yrs", "Operating experience"],
            ["5×", "Global deployments"],
            ["4", "Practice domains"],
            ["0", "Acceptable failure rate"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-base px-6 py-7">
              <div className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {stat}
              </div>
              <div className="mt-2 label-mono">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
