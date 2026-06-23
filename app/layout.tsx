import type { Metadata } from "next";
import { Onest, Source_Serif_4, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Onest — body, badge, button, form (weights 400 / 500 / 700)
const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-onest",
  display: "swap",
});

// Source Serif 4 — the headline (variable, weight 400)
// Keep the font variable (axes incl. optical size) so the headline can use the
// narrower *display* cut at 94px — matching Framer's "Source Serif 4 Variable".
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  display: "swap",
});

// Instrument Serif — the "String" logo in the nav
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MetalLabs — Turn your voice memos into music",
  description:
    "Hum a melody, sing a line, or just talk through an idea. MetalLabs turns recordings into finished songs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${onest.variable} ${sourceSerif.variable} ${instrumentSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
