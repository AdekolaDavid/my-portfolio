"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="about" className="scroll-mt-24 w-full max-w-7xl mx-auto mt-24 px-4 md:px-8 relative z-10">
      
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8 border-b-2 border-black dark:border-white/30 pb-4 transition-colors">
        <span className="text-blue-600 dark:text-blue-500 font-[family-name:var(--font-mono)] font-black text-xl">#</span>
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
          About
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* PHOTO COLUMN */}
        <div className="md:col-span-5 h-[400px] md:h-auto min-h-[500px] relative border-2 border-black dark:border-white/15 bg-white dark:bg-[#0a0a0a] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] overflow-hidden group">
          <div className="w-full h-full relative bg-black">
            <Image
              src="/about-photo.jpg" 
              alt="David — Developer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover filter grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-[opacity,filter] duration-500"
            />
          </div>
          
          {/* Corner Crosshairs */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50 z-20 mix-blend-difference"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50 z-20 mix-blend-difference"></div>
        </div>

        {/* WRITE-UP COLUMN */}
        <div className="md:col-span-7 border-2 border-black dark:border-white/15 bg-white dark:bg-[#0a0a0a] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] dark:hover:shadow-[10px_10px_0px_#2563eb]">
           
           {/* Faded Background Watermark */}
           <div className="absolute top-4 right-4 font-[family-name:var(--font-mono)] text-black/[0.03] dark:text-white/[0.02] text-8xl font-black pointer-events-none select-none">
             whoami
           </div>

           <div className="relative z-10 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-[15px] transition-colors">
             <p className="font-sans">
               I&apos;m a software developer with <span className="font-bold text-black dark:text-white bg-blue-100 dark:bg-blue-900/40 px-1.5 py-0.5 border border-black/15 dark:border-blue-500/40">4+ years of experience</span> building web applications and tools that solve real problems. I work across the stack — from crafting intuitive, responsive frontends to wiring up backends, integrating third-party APIs, and embedding AI-powered features into products people actually use.
             </p>
             <p className="font-sans">
               Recent work includes <span className="font-black text-blue-700 dark:text-blue-400 tracking-tight">SimTrackr</span>, a mobile app that uses AI vision to extract and track subscription details from receipt images, and <span className="font-black text-blue-700 dark:text-blue-400 tracking-tight">Funmisax</span>, a client portfolio and booking site for a Lagos-based gospel saxophonist — designed and shipped end-to-end.
             </p>
             <p className="font-sans">
               I&apos;m comfortable working with modern web technologies, RESTful APIs, and AI/ML integrations. I enjoy the full arc of a project — from the first rough idea to a polished, working product. I care about clean code, thoughtful UX, and building things that hold up beyond the demo.
             </p>

             {/* CTA Block */}
             <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10">
                <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-950/30 p-4 border-l-4 border-blue-600 dark:border-blue-500">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 font-sans leading-relaxed">
                    I&apos;m open to new opportunities, freelance projects, and collaborations where I can contribute meaningfully and keep growing.
                  </p>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
