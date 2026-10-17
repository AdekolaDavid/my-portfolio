"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group"
    >
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } border-2 border-black dark:border-white/15 bg-white dark:bg-[#0a0a0a] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] dark:hover:shadow-[10px_10px_0px_#2563eb]`}
      >
        {/* Image */}
        <div className="relative w-full md:w-[45%] h-56 md:h-auto md:min-h-[340px] bg-slate-100 dark:bg-[#111] overflow-hidden shrink-0">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className={`object-cover ${
              project.image.position === "top"
                ? "object-top"
                : project.image.position === "left"
                ? "object-left"
                : "object-center"
            } grayscale group-hover:grayscale-0 transition-[filter] duration-500`}
          />
          {/* Index label */}
          <div
            className={`absolute top-4 ${
              isEven ? "left-4" : "right-4"
            } font-[family-name:var(--font-mono)] text-[11px] font-black text-white bg-black/60 dark:bg-blue-600/80 backdrop-blur-sm px-2.5 py-1 tracking-widest`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between gap-6">
          <div className="space-y-4">
            {/* Title row */}
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-black dark:text-white tracking-tight">
                {project.title}
              </h3>
              <div className="flex gap-2 shrink-0">
                {project.status === "in-progress" && (
                  <span className="inline-flex items-center gap-1.5 border border-blue-500/40 px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    In Progress
                  </span>
                )}
                {project.locked && (
                  <span className="border border-amber-500/40 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest">
                    🔒 Internal
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/15 dark:border-white/15 px-2.5 py-1 text-[11px] font-bold bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          {(project.codeUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black dark:border-blue-500 bg-blue-600 hover:bg-blue-700 text-white transition-colors px-5 py-2.5 text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#2563eb] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  View Live ↗
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black dark:border-white/20 bg-white dark:bg-[#111] hover:bg-slate-50 dark:hover:bg-white/10 text-black dark:text-white transition-colors px-5 py-2.5 text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#2563eb] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
