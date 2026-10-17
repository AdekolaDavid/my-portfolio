"use client";

import { useState } from "react";
import { ThemeToggle } from "./CurtainThemeToggle";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-colors duration-500">
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative">

        {/* Logo */}
        <a
          href="#top"
          className="font-[family-name:var(--font-mono)] font-black tracking-tighter text-2xl text-black dark:text-white transition-colors cursor-pointer"
        >
          <span className="text-blue-600 dark:text-blue-500">&lt;</span>
          lrd_david.dev
          <span className="text-blue-600 dark:text-blue-500"> /&gt;</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-mono)] text-xs font-bold text-black dark:text-slate-400 uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/adekola-david-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative z-[99999]">
            <ThemeToggle variant="icon" defaultTheme="dark" duration={700} buttonSize={36} />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-black/20 dark:border-white/20 bg-slate-100 dark:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-5 h-0.5 bg-black dark:bg-white mt-1 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block w-5 h-0.5 bg-black dark:bg-white mt-1 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#050505]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 transition-[transform,opacity] duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0"
        }`}
      >
        <div className="flex flex-col font-[family-name:var(--font-mono)] text-sm font-bold text-black dark:text-white uppercase tracking-widest p-4 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-4 border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/5 active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/adekola-david-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 text-center transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
