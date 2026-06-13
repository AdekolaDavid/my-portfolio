"use client";

import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiSupabase, SiPostgresql, SiNodedotjs, SiVercel,
  SiTailwindcss, SiVite, SiGithub, SiEslint
} from "react-icons/si";

export default function SkillOrbit() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
      
      {/* Center Node (You) */}
      <div className="absolute w-24 h-24 bg-white dark:bg-[#050505] border border-cyan-500/20 dark:border-cyan-500/40 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.15)] z-10 backdrop-blur-xl transition-colors duration-500">
        <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest text-xs uppercase">dk.dev</span>
      </div>

      {/* RING 1: Core Frontend (Spins Clockwise) */}
      <div className="absolute w-[45%] h-[45%] border border-slate-200 dark:border-white/10 rounded-full animate-[spin_20s_linear_infinite] transition-colors duration-500">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center shadow-md dark:shadow-lg transform -rotate-0 text-cyan-500 dark:text-cyan-400 transition-colors duration-500">
          <SiReact size={20} />
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center shadow-md dark:shadow-lg text-slate-900 dark:text-white transition-colors duration-500">
          <SiNextdotjs size={20} />
        </div>
        <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center shadow-md dark:shadow-lg text-blue-500 dark:text-blue-400 transition-colors duration-500">
          <SiTypescript size={18} />
        </div>
        <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center shadow-md dark:shadow-lg text-yellow-500 dark:text-yellow-400 transition-colors duration-500">
          <SiJavascript size={18} />
        </div>
      </div>

      {/* RING 2: Backend & Infrastructure (Spins Counter-Clockwise) */}
      <div className="absolute w-[70%] h-[70%] border border-slate-200 dark:border-white/5 rounded-full animate-[spin_35s_linear_infinite_reverse] transition-colors duration-500">
        <div className="absolute top-[10%] left-[10%] w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-green-500/20 dark:border-green-500/30 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-green-600 dark:text-green-500 transition-colors duration-500">
          <SiSupabase size={24} />
        </div>
        <div className="absolute bottom-[10%] right-[10%] w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-blue-600 dark:text-blue-300 transition-colors duration-500">
          <SiPostgresql size={24} />
        </div>
        <div className="absolute top-[10%] right-[10%] w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-green-700 dark:text-green-600 transition-colors duration-500">
          <SiNodedotjs size={24} />
        </div>
        <div className="absolute bottom-[10%] left-[10%] w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-slate-900 dark:text-white transition-colors duration-500">
          <SiVercel size={22} />
        </div>
      </div>

      {/* RING 3: Styling & Tooling (Spins Clockwise) */}
      <div className="absolute w-[100%] h-[100%] border border-slate-200 dark:border-white/[0.03] rounded-full animate-[spin_50s_linear_infinite] transition-colors duration-500">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-cyan-500/20 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-cyan-500 dark:text-cyan-400 transition-colors duration-500">
          <SiTailwindcss size={24} />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-purple-500 dark:text-purple-400 transition-colors duration-500">
          <SiVite size={24} />
        </div>
        <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-slate-900 dark:text-white transition-colors duration-500">
          <SiGithub size={24} />
        </div>
        <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center shadow-md dark:shadow-lg text-indigo-600 dark:text-indigo-400 transition-colors duration-500">
          <SiEslint size={24} />
        </div>
      </div>

    </div>
  );
}