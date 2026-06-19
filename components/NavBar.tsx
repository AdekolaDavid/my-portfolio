"use client";

import { useState } from "react";
import Link from "next/link"; 
import { ThemeToggle } from "./CurtainThemeToggle"; 

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#050505] border-b-2 border-black dark:border-white/30 transition-colors duration-500 shadow-[0_4px_0_#000] dark:shadow-[0_4px_0_#2563eb]">
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative">
        
        {/* Logo - Now a Clickable Home Link */}
        <a href="#top" className="font-[family-name:var(--font-mono)] font-black tracking-tighter text-2xl text-black dark:text-white transition-colors cursor-pointer">
          <span className="text-blue-600 dark:text-blue-500">&lt;</span>lrd_david.dev<span className="text-blue-600 dark:text-blue-500"> /&gt;</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-[family-name:var(--font-mono)] text-xs font-bold text-black dark:text-slate-400 uppercase tracking-widest">
          <a href="#top" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">/home</a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">/about</a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">/projects</a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">/contact</a>
          {/* Direct PDF Link */}
          <a 
            href="/adekola-david-cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            /resume
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative z-[99999]">
            <ThemeToggle variant="icon" defaultTheme="dark" duration={700} buttonSize={36} />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-2 border-black dark:border-white/30 bg-slate-100 dark:bg-white/5 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-5 h-0.5 bg-black dark:bg-white mt-1 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-5 h-0.5 bg-black dark:bg-white mt-1 transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>
        </div>

      </nav>

      {/* Mobile Dropdown Menu (Brutalist Style) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#050505] border-b-2 border-black dark:border-white/30 transition-all duration-300 origin-top overflow-hidden shadow-[0_8px_0_#000] dark:shadow-[0_8px_0_#2563eb] ${isMobileMenuOpen ? "scale-y-100 opacity-100 border-t-2" : "scale-y-0 opacity-0 h-0"}`}
      >
        <div className="flex flex-col font-[family-name:var(--font-mono)] text-sm font-bold text-black dark:text-white uppercase tracking-widest p-4 gap-4">
          <a 
            href="#top" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 border-2 border-black dark:border-white/30 bg-slate-50 dark:bg-white/5 active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors"
          >
            /home
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 border-2 border-black dark:border-white/30 bg-slate-50 dark:bg-white/5 active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors"
          >
            /about
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 border-2 border-black dark:border-white/30 bg-slate-50 dark:bg-white/5 active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors"
          >
            /projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 border-2 border-black dark:border-white/30 bg-slate-50 dark:bg-white/5 active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors"
          >
            /contact
          </a>
          {/* Direct Mobile PDF Link */}
          <a 
            href="/adekola-david-cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-4 border-2 border-black dark:border-white/30 bg-slate-50 dark:bg-white/5 active:bg-blue-100 dark:active:bg-blue-900/30 transition-colors text-blue-600 dark:text-blue-400"
          >
            /resume
          </a>
        </div>
      </div>
    </header>
  );
}