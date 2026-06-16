"use client";

import Image from "next/image";
// 1. Import both theme variants
import moshedDark from "@/public/moshed-glitch.gif";
import moshedLight from "@/public/glitch-white.gif";

export default function SystemAccessBadge() {
  return (
    <div className="w-full flex flex-col items-center gap-6 mt-12 mb-8 relative z-10">
      
      {/* The main plastic badge body */}
      <div className="w-full max-w-[340px] aspect-[1/1.4] border-4 border-black dark:border-white bg-white dark:bg-[#0f0f0f] shadow-[12px_12px_0px_#000] dark:shadow-[12px_12px_0px_#2563eb] p-6 relative overflow-hidden transition-all duration-500">
        
        {/* Terminal Header Bar */}
        <div className="absolute top-0 left-0 w-full px-4 py-1.5 bg-black/5 dark:bg-white/5 border-b-2 border-black dark:border-white/30 flex items-center justify-between z-20 transition-colors">
          <span className="font-[family-name:var(--font-mono)] font-bold text-[9px] text-slate-700 dark:text-slate-400">ID_VALIDATE.SH</span>
          <div className="w-2.5 h-2.5 border-2 border-black dark:border-white rounded-full bg-blue-500"></div>
        </div>

        {/* Content starts below header */}
        <div className="mt-7 flex flex-col items-center h-full relative z-10">
          
          {/* Top Section: Photo and Biometric */}
          <div className="grid grid-cols-2 gap-4 items-center mb-6 w-full">
            
            {/* 1. PHOTO Implementation with dual-theme glitch */}
            <div className="relative aspect-square border-2 border-black dark:border-white bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff]">
              
              {/* LIGHT THEME GIF (Visible by default, hidden in dark mode) */}
              <Image 
                src={moshedLight}
                alt="Adekola David Profile Glitch Light"
                className="object-cover w-full h-full block dark:hidden" 
                unoptimized
              />

              {/* DARK THEME GIF (Hidden by default, visible in dark mode) */}
              <Image 
                src={moshedDark}
                alt="Adekola David Profile Glitch Dark"
                className="object-cover w-full h-full hidden dark:block" 
                unoptimized
              />
              
            </div>

            <div className="flex flex-col items-center gap-3">
              {/* Fingerprint Icon Placeholder */}
              <div className="w-14 h-14 text-slate-300 dark:text-slate-700 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 1.1-.9 2-2 2a2 2 0 0 0-2-2 2 2 0 0 1-2 2H8a6 6 0 0 1-6-6 10 10 0 0 1 10-10zm0 4a6 6 0 0 1 6 6M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                  <path d="M12 18v2M12 14v-2M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/>
                </svg>
              </div>
              {/* UPDATED LOGO: AD */}
              <div className="font-[family-name:var(--font-mono)] font-black text-3xl tracking-tighter text-blue-600 dark:text-blue-500 transition-colors">
                A.D
              </div>
            </div>
          </div>

          {/* Bottom Section: Clearance and Name */}
          <div className="w-full text-center space-y-1.5 border-t-2 border-black dark:border-white/30 pt-6 transition-colors">
            {/* LARGE TITLE: Adekola David */}
            <h3 className="text-3xl font-black tracking-tighter text-black dark:text-white transition-colors">Adekola David</h3>
            
            {/* PITCH TEXT: Action-Oriented and Professional */}
            <p className="text-sm font-black font-[family-name:var(--font-mono)] text-blue-700 dark:text-blue-400 tracking-wider uppercase transition-colors">
              RESOLVING COMPLEX WORKFLOWS
            </p>
            
            <div className="space-y-0.5 pt-2 text-[10px] font-bold font-[family-name:var(--font-mono)] text-black dark:text-slate-400 uppercase tracking-widest transition-colors">
              <p>Clearance Level: 5</p>
              <p> Ops & Design Dev</p>
            </div>
          </div>

          {/* Barcode Accent */}
          <div className="absolute bottom-1 -left-2 scale-y-150 text-slate-300 dark:text-slate-800 font-[family-name:var(--font-mono)] text-[9px] tracking-tight transition-colors z-0">
            |||| || | |||| ||||| || | ||| ||
          </div>

        </div>
      </div>
      
      {/* Visual representation of a lanyard/clip connection */}
      <div className="w-16 h-24 border-r-2 border-b-2 border-black dark:border-white -mt-10 rounded-br-2xl z-0 transition-colors"></div>
    </div>
  );
}