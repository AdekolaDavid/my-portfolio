"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div id="about" className="scroll-mt-24 w-full max-w-7xl mx-auto mt-24 px-4 md:px-8 relative z-10">
      
      {/* Brutalist Section Header */}
      <div className="flex items-center gap-4 mb-8 border-b-2 border-black dark:border-white/30 pb-4 transition-colors">
        <span className="text-blue-600 dark:text-blue-500 font-[family-name:var(--font-mono)] font-black text-xl">#</span>
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
          Author_Profile
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* PHOTO COLUMN (5 Columns) */}
        <div className="md:col-span-5 h-[400px] md:h-auto min-h-[500px] relative border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] overflow-hidden group">
          
          <div className="absolute top-0 left-0 w-full px-4 py-2 bg-black/5 dark:bg-white/5 border-b-2 border-black dark:border-white/30 z-20 flex justify-between items-center transition-colors">
            <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-black dark:text-slate-400">./view_avatar.sh</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-blue-600 dark:text-blue-500">LIVE</span>
            </div>
          </div>
          
          <div className="w-full h-full relative mt-8 bg-black">
            <Image
              
              src="/about-photo.jpg" 
              alt="Author Profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover filter grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Corner Crosshairs */}
          <div className="absolute top-12 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50 z-20 mix-blend-difference"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50 z-20 mix-blend-difference"></div>
        </div>

        {/* WRITE-UP COLUMN (7 Columns) */}
        <div className="md:col-span-7 border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] dark:hover:shadow-[12px_12px_0px_#2563eb] duration-300">
           
           {/* Faded Background Watermark */}
           <div className="absolute top-4 right-4 font-[family-name:var(--font-mono)] text-black/[0.03] dark:text-white/[0.02] text-8xl font-black pointer-events-none select-none">
             whoami
           </div>

           <div className="relative z-10 space-y-6 text-black dark:text-slate-300 font-medium dark:font-light leading-relaxed text-sm md:text-base transition-colors">
             <p>
               I'm a software developer with <span className="font-bold text-black dark:text-white bg-blue-200 dark:bg-blue-900/40 px-1.5 border-2 border-black dark:border-blue-500 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb]">4+ years of experience</span> building web applications and tools that solve real problems. I work across the stack — from crafting intuitive, responsive frontends to wiring up backends, integrating third-party APIs, and embedding AI-powered features into products people actually use.
             </p>
             <p>
               Currently, I'm building <span className="font-black text-blue-700 dark:text-blue-400 tracking-tight">SimTrackr</span>, a mobile app that uses AI vision to automatically extract and track mobile subscription details from uploaded images. It's a good snapshot of how I approach problems — find the friction, cut it, and build something clean in its place.
             </p>
             <p>
               I'm comfortable working with modern web technologies, RESTful APIs, and AI/ML integrations. I enjoy the full arc of a project — from the first rough idea to a polished, working product. I care about clean code, thoughtful UX, and building things that hold up beyond the demo.
             </p>

             {/* Terminal Call-to-Action Block */}
             <div className="mt-10 pt-6 border-t-2 border-dashed border-black dark:border-white/30 transition-colors">
                <div className="flex items-start gap-3 bg-black/5 dark:bg-white/5 p-4 border-l-4 border-blue-600 dark:border-blue-500">
                  <div className="mt-0.5 font-[family-name:var(--font-mono)] font-black text-blue-600 dark:text-blue-500">
                    {">"}
                  </div>
                  <p className="font-[family-name:var(--font-mono)] font-bold text-xs uppercase tracking-wider text-black dark:text-slate-400 leading-relaxed transition-colors">
                    I'm open to new opportunities, freelance projects, and collaborations where I can contribute meaningfully and keep growing.
                  </p>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}