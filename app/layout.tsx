import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://onealaeris.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ONeal Aeris — Precision under pressure, engineered into advantage",
    template: "%s · ONeal Aeris",
  },
  description:
    "ONeal Aeris is a consulting practice that turns experience earned in extreme, high-consequence environments into precise, repeatable advantage — across human performance, critical care, digital integration, and AI.",
  keywords: [
    "ONeal Aeris",
    "human performance consulting",
    "critical care advisory",
    "digital integration",
    "AI consulting",
    "workflow optimization",
  ],
  openGraph: {
    title: "ONeal Aeris",
    description:
      "Experience from the edge of human performance, engineered into enterprise advantage.",
    url: SITE_URL,
    siteName: "ONeal Aeris",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONeal Aeris",
    description:
      "Experience from the edge of human performance, engineered into enterprise advantage.",
  },
  icons: {
    icon: [{ url: "/mark.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#070B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
