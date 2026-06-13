"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GlassCard({ title, description, techStack, delay = 0, imagePath }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="group relative border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] dark:hover:shadow-[12px_12px_0px_#2563eb] transition-all duration-300 overflow-hidden flex flex-col h-full rounded-none"
    >
      <div className="w-full px-4 py-2 bg-black/5 dark:bg-white/5 border-b-2 border-black dark:border-white/30 flex items-center justify-between transition-colors">
         <div className="flex items-center gap-2">
           <div className="w-3 h-3 border-2 border-black dark:border-white/30 bg-white dark:bg-transparent rounded-full"></div>
           <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-black dark:text-slate-400 uppercase tracking-widest">
             ~/projects/{title.toLowerCase().replace(" ", "_")}
           </span>
         </div>
      </div>

      {imagePath && (
        <div className="relative w-full h-56 border-b-2 border-black dark:border-white/30 overflow-hidden bg-black transition-colors">
          <Image 
            src={imagePath} 
            alt={title} 
            fill 
            className="object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
        <h3 className="text-2xl font-black mb-3 text-black dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-slate-700 dark:text-slate-400 font-medium dark:font-light leading-relaxed mb-8 flex-grow text-sm transition-colors">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {techStack.map((tech: string) => (
            <span key={tech} className="px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border-2 border-black dark:border-blue-500 font-[family-name:var(--font-mono)] shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb] transition-all">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}