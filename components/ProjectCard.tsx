import Image from "next/image";
import type { Project } from "@/data/projects";

const LOCKED_BADGE = "🔒 Internal System";

// Tailwind's compiler only picks up literal class strings, not runtime
// template-literal interpolation — so object-position needs an explicit map.
const OBJECT_POSITION: Record<string, string> = {
  top: "object-top",
  left: "object-left",
  center: "object-center",
  bottom: "object-bottom",
  right: "object-right",
};

function objectPositionClass(position?: string) {
  return OBJECT_POSITION[position ?? "center"] ?? "object-center";
}

function StatusBadge({ variant = "light" }: { variant?: "light" | "dark" }) {
  if (variant === "dark") {
    return (
      <span className="inline-flex items-center gap-1.5 border-2 border-white px-2 py-1 bg-black/20 text-white text-[10px] font-black uppercase tracking-widest shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-200 animate-pulse" />
        In Progress
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border-2 border-black dark:border-blue-500 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-black dark:text-blue-400 text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb] shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      In Progress
    </span>
  );
}

function WideCard({ project }: { project: Project }) {
  return (
    <div className="md:col-span-2 border-4 border-black dark:border-white/30 bg-white dark:bg-[#050505] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] flex flex-col transition-transform hover:-translate-y-1 overflow-hidden group">
      <div className="relative w-full h-48 md:h-64 border-b-4 border-black dark:border-white/30 overflow-hidden bg-slate-200 dark:bg-[#0a0a0a]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className={`object-cover ${objectPositionClass(project.image.position)} grayscale group-hover:grayscale-0 transition-[filter] duration-500`}
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl md:text-4xl font-black uppercase text-black dark:text-white">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-end">
              {project.status === "in-progress" && <StatusBadge />}
              {project.locked && (
                <span className="border-2 border-black dark:border-white/30 px-3 py-1 bg-yellow-400 dark:bg-yellow-600 text-black text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_#000]">
                  {LOCKED_BADGE}
                </span>
              )}
            </div>
          </div>
          <p className="text-sm md:text-base text-slate-800 dark:text-slate-300 leading-relaxed mb-6 border-l-4 border-blue-500 pl-4 font-sans">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tech) => (
            <span
              key={tech}
              className="border-2 border-black dark:border-white/30 px-2 py-1 text-xs font-bold bg-slate-100 dark:bg-white/5 text-black dark:text-white uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TallCard({ project }: { project: Project }) {
  return (
    <div className="border-4 border-black dark:border-white/30 bg-blue-600 text-white shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#ffffff] flex flex-col transition-transform hover:-translate-y-1 overflow-hidden group">
      <div className="relative w-full h-64 md:h-80 border-b-4 border-black dark:border-white/30 bg-[#050505] p-4">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain grayscale group-hover:grayscale-0 transition-[filter] duration-500"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="text-2xl font-black uppercase">{project.title}</h3>
            {project.status === "in-progress" && <StatusBadge variant="dark" />}
          </div>
          <p className="text-sm leading-relaxed mb-6 font-medium font-sans">
            {project.description}
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tech) => (
              <span
                key={tech}
                className="border-2 border-white px-2 py-1 text-[10px] font-bold uppercase bg-black/20"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border-2 border-white bg-black hover:bg-white hover:text-black transition-colors px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              [ View Code ]
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function SplitCard({ project }: { project: Project }) {
  return (
    <div className="md:col-span-3 border-4 border-black dark:border-white/30 bg-slate-50 dark:bg-[#0f0f0f] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] flex flex-col md:flex-row transition-transform hover:-translate-y-1 overflow-hidden group">
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-black dark:text-white">
              {project.title}
            </h3>
            {project.status === "in-progress" && <StatusBadge />}
            {project.locked && (
              <span className="border-2 border-black dark:border-white/30 px-2 py-1 bg-slate-200 dark:bg-slate-800 text-black dark:text-white text-[10px] font-black uppercase tracking-widest">
                {LOCKED_BADGE}
              </span>
            )}
          </div>
          <p className="text-sm md:text-base text-slate-800 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mb-6">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tech) => (
            <span
              key={tech}
              className="border-2 border-black dark:border-white/30 px-3 py-1.5 text-xs font-bold bg-black dark:bg-white text-white dark:text-black uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full md:w-2/5 lg:w-1/3 h-48 md:h-auto border-t-4 md:border-t-0 md:border-l-4 border-black dark:border-white/30 overflow-hidden bg-slate-200 dark:bg-[#0a0a0a]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 35vw"
          className={`object-cover ${objectPositionClass(project.image.position)} grayscale group-hover:grayscale-0 transition-[filter] duration-500`}
        />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  switch (project.layout) {
    case "wide":
      return <WideCard project={project} />;
    case "tall":
      return <TallCard project={project} />;
    case "split":
      return <SplitCard project={project} />;
  }
}
