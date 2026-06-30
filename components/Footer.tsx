import { Wordmark } from "./Brand";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative border-t border-line">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-5 text-[13px] leading-relaxed text-muted">
              A consulting practice turning experience from the edge of human
              performance into precise, repeatable advantage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <span className="label-mono">Navigate</span>
              <ul className="mt-4 space-y-2.5">
                {[
                  ["Capabilities", "#capabilities"],
                  ["Approach", "#approach"],
                  ["Practice", "#practice"],
                  ["Contact", "#contact"],
                ].map(([l, h]) => (
                  <li key={h}>
                    <a
                      href={h}
                      className="font-mono text-[12px] tracking-[0.08em] text-muted transition-colors hover:text-ink"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="label-mono">Registry</span>
              <ul className="mt-4 space-y-2.5 font-mono text-[12px] tracking-[0.04em] text-muted">
                <li>ONeal Aeris</li>
                <li>Consulting S-Corp</li>
                <li className="text-faint">DBA · Krav</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            © {year} ONeal Aeris · All rights reserved
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            Designed for precision · 28.9°N
          </span>
        </div>
      </div>
    </footer>
  );
}
