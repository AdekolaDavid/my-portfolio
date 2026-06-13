import type { Metadata } from "next";
// 1. Import the font from Google Fonts
import { Space_Mono } from "next/font/google"; 
import "./globals.css";

// 2. Configure the font and define the CSS variable
const spaceMono = Space_Mono({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "700"], // Bringing in regular and bold weights
});

export const metadata: Metadata = {
  title: "Adekola David | Full Stack Developer",
  description: "Adekola David's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. Added "dark" to the className
    // 2. Added style={{ colorScheme: "dark" }} to force the browser's native scrollbars/UI into dark mode instantly
    <html lang="en" className="scroll-smooth dark" style={{ colorScheme: "dark" }}>
      <body className={`${spaceMono.variable} antialiased bg-[#050505]`}>
        {children}
      </body>
    </html>
  );
}