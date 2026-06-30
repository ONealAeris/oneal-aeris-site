import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy instrumentation ground
        base: "#070B14",
        "base-2": "#0A0F1C",
        panel: "#0D1424",
        "panel-2": "#111A2D",
        line: "rgba(176,198,232,0.09)",
        "line-strong": "rgba(176,198,232,0.16)",
        ink: "#E8ECF5",
        muted: "#9AA6BE",
        faint: "#5A6884",
        // Signal — warm brass/amber (avionics, precision instruments)
        signal: "#D8A24A",
        "signal-soft": "#E8C07E",
        "signal-dim": "#7A5E2C",
        // Cool technical tint, used sparingly
        steel: "#7FB0D4",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.32em",
      },
      maxWidth: {
        shell: "1240px",
      },
      borderRadius: {
        xs: "3px",
      },
      keyframes: {
        "rise": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "scan": {
          "0%,100%": { opacity: "0.25" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        sweep: "sweep 14s linear infinite",
        scan: "scan 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
