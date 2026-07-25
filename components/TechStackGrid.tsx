"use client";

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
  { name: "Next.js", icon: <SiNextdotjs size={20} /> },
  { name: "React", icon: <SiReact size={20} /> },
  { name: "Flutter", icon: <SiFlutter size={20} /> },
  { name: "TypeScript", icon: <SiTypescript size={20} /> },
  { name: "Supabase", icon: <SiSupabase size={20} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={20} /> },
];

const stackRow2 = [
  { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
  { name: "Vite", icon: <SiVite size={20} /> },
  { name: "Vercel", icon: <SiVercel size={20} /> },
  { name: "GitHub", icon: <SiGithub size={20} /> },
  { name: "WordPress", icon: <SiWordpress size={20} /> },
  { name: "Figma", icon: <SiFigma size={20} /> },
  { name: "Dart", icon: <SiDart size={20} /> },
];

type Tech = { name: string; icon: React.ReactNode };

function Chip({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#2563eb] shrink-0">
      <div className="text-black dark:text-slate-400">{tech.icon}</div>
      <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] uppercase tracking-widest text-black dark:text-slate-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Tech[];
  reverse?: boolean;
}) {
  // Duplicated once so the loop can reset invisibly at the -50% mark.
  const doubled = [...items, ...items];

  return (
    <div className="marquee-row relative w-full overflow-hidden">
      {/* Edge fade so chips don't hard-clip at the container boundary */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent" />

      <div
        className={`flex w-max gap-3 py-1 ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
      >
        {doubled.map((tech, index) => (
          <Chip key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackGrid() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-4 mt-2">
      {/* Static sentence for screen readers — the two tracks below are decorative/aria-hidden */}
      <p className="sr-only">
        Technologies: {[...stack, ...stackRow2].map((t) => t.name).join(", ")}.
      </p>

      <div aria-hidden="true">
        <MarqueeRow items={stack} />
      </div>
      <div aria-hidden="true">
        <MarqueeRow items={stackRow2} reverse />
      </div>
    </div>
  );
}
