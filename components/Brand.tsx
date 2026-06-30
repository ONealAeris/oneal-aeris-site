import { type SVGProps } from "react";

/**
 * Instrument mark — an abstract attitude / azimuth indicator.
 * Evokes flight instruments and "Aeris" (of the air) without literal imagery.
 */
export function Mark({
  className = "h-9 w-9",
  animated = false,
  ...props
}: SVGProps<SVGSVGElement> & { animated?: boolean }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label="ONeal Aeris"
      {...props}
    >
      {/* bezel */}
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      {/* graduated ring */}
      <circle
        cx="32"
        cy="32"
        r="22"
        stroke="#D8A24A"
        strokeWidth="1.3"
        strokeDasharray="1.6 6.4"
        className={animated ? "origin-center animate-sweep" : "origin-center"}
        opacity="0.9"
      />
      {/* horizon */}
      <path d="M11 35 C20 30, 44 30, 53 35" stroke="#7FB0D4" strokeWidth="1.3" opacity="0.85" />
      {/* ascent index */}
      <path d="M32 9 L35.4 16.5 L28.6 16.5 Z" fill="#D8A24A" />
      {/* reticle */}
      <line x1="32" y1="24" x2="32" y2="40" stroke="currentColor" strokeWidth="1.3" />
      <line x1="24" y1="32" x2="40" y2="32" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="32" cy="32" r="2.1" fill="#D8A24A" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  withMark = true,
}: {
  className?: string;
  withMark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {withMark && <Mark className="h-8 w-8 text-ink" />}
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-semibold tracking-[0.12em] text-ink">
          ONEAL<span className="text-signal"> AERIS</span>
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.34em] text-faint">
          Consulting
        </span>
      </span>
    </span>
  );
}
