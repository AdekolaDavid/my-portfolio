import type { Metadata, Viewport } from "next";
import { Space_Mono, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Terminal-style UI text (nav links, labels, tags, badges) — small sizes
// need a mono built for readability at 10-12px, not a display face.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Italic serif accent word in the hero ("Operations", "Systems", ...) —
// the one deliberate contrast note against all the mono/grotesk everywhere else.
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic", "normal"],
});

const siteUrl = "https://adekola-david.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adekola David | Full Stack Developer",
    template: "%s | Adekola David",
  },
  description:
    "Full stack developer with 4+ years building web and mobile products — Next.js, React, Flutter, Supabase, and AI-powered features that solve real workflow problems.",
  keywords: [
    "Adekola David",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Flutter Developer",
    "Lagos Nigeria Developer",
  ],
  authors: [{ name: "Adekola David" }],
  creator: "Adekola David",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Adekola David | Full Stack Developer",
    title: "Adekola David | Full Stack Developer",
    description:
      "Full stack developer with 4+ years building web and mobile products — Next.js, React, Flutter, Supabase, and AI-powered features that solve real workflow problems.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adekola David | Full Stack Developer",
    description:
      "Full stack developer with 4+ years building web and mobile products — Next.js, React, Flutter, Supabase, and AI-powered features that solve real workflow problems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // "dark" is hardcoded here as the initial class; CurtainThemeToggle flips it client-side.
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${spaceMono.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} antialiased bg-[#050505]`}
      >
        {children}
      </body>
    </html>
  );
}