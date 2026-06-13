"use client";

import { useRef, useState, useEffect } from "react";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiSupabase, 
  SiTailwindcss, 
  SiPostgresql, 
  SiReact, 
  SiFigma, 
  SiGithub,
  SiVercel,
  SiWordpress,
  SiFlutter,
  SiVite,
  SiDart,
} from "react-icons/si";

// Synchronized to match the exact technologies in your Deployed Assets
const stack = [
  { name: "Next.js", icon: <SiNextdotjs size={24} /> },
  { name: "React", icon: <SiReact size={24} /> },
  { name: "Flutter", icon: <SiFlutter size={24} /> },
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "Supabase", icon: <SiSupabase size={24} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
  { name: "Vite", icon: <SiVite size={24} /> },
  { name: "Vercel", icon: <SiVercel size={24} /> },
  { name: "GitHub", icon: <SiGithub size={24} /> },
  { name: "WordPress", icon: <SiWordpress size={24} /> },
  { name: "Figma", icon: <SiFigma size={24} /> },
  { name: "Dart", icon: <SiDart size={24} /> },
];

export default function TechStackGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 240, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -240, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full flex flex-col relative mt-2 overflow-hidden group">
      
      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="w-full overflow-x-auto overflow-y-hidden pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
      >
        <div className="grid grid-rows-2 grid-flow-col gap-4 w-max px-2">
          {stack.map((tech, index) => (
            <div 
              key={index}
              className="w-[140px] md:w-[160px] relative flex items-center gap-3 p-3 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white/30 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#2563eb] hover:-translate-y-1 hover:translate-x-1 hover:shadow-none dark:hover:shadow-none transition-all cursor-crosshair shrink-0"
            >
              <div className="text-black dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tech.icon}
              </div>
              
              <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] uppercase tracking-widest text-black dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                {tech.name}
              </span>

              <div className="absolute top-0 right-0 w-2 h-2 border-b-2 border-l-2 border-black dark:border-white/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      {canScrollLeft && (
        <div className="absolute left-0 top-0 h-[calc(100%-16px)] flex items-center pointer-events-none pl-2 bg-gradient-to-r from-white via-white/90 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/90 to-transparent pr-12 transition-colors z-20">
          <button 
            onClick={scrollLeft}
            className="pointer-events-auto bg-blue-100 dark:bg-blue-900/60 border-2 border-black dark:border-blue-500 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb] hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#2563eb] active:shadow-[0px_0px_0px_#000] dark:active:shadow-[0px_0px_0px_#2563eb] active:translate-x-[2px] active:translate-y-[2px] px-3 py-2 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll left"
          >
            <span className="font-[family-name:var(--font-mono)] font-black text-sm text-black dark:text-blue-300">
              ←
            </span>
          </button>
        </div>
      )}

      {canScrollRight && (
        <div className="absolute right-0 top-0 h-[calc(100%-16px)] flex items-center pointer-events-none pr-2 bg-gradient-to-l from-white via-white/90 dark:from-[#0a0a0a] dark:via-[#0a0a0a]/90 to-transparent pl-12 transition-colors z-20">
          <button 
            onClick={scrollRight}
            className="pointer-events-auto bg-blue-100 dark:bg-blue-900/60 border-2 border-black dark:border-blue-500 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb] hover:shadow-[4px_4px_0px_#000] dark:hover:shadow-[4px_4px_0px_#2563eb] active:shadow-[0px_0px_0px_#000] dark:active:shadow-[0px_0px_0px_#2563eb] active:translate-x-[2px] active:translate-y-[2px] px-3 py-2 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100 animate-pulse hover:animate-none"
            aria-label="Scroll right"
          >
            <span className="font-[family-name:var(--font-mono)] font-black text-sm text-black dark:text-blue-300">
              →
            </span>
          </button>
        </div>
      )}

    </div>
  );
}