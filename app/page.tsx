import SystemAccessBadge from "@/components/SystemAccessBadge";
import TechStackGrid from "@/components/TechStackGrid";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import { ThemeToggle } from "@/components/CurtainThemeToggle";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactFooter from "@/components/ContactFooter";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-500 font-[family-name:var(--font-space)] text-slate-900 dark:text-slate-300">
      
      <NavBar />

      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6 p-4 md:p-8 mt-4">
        
        {/* ROW 1: Hero Text (8 col) + System ID Badge (4 col) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* HERO LEFT */}
          <div className="md:col-span-8 border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] p-8 md:p-12 relative overflow-hidden transition-all">
            <div className="absolute top-0 left-0 w-full px-4 py-2 bg-black/5 dark:bg-white/5 border-b-2 border-black dark:border-white/30 flex items-center gap-2 transition-colors">
              <div className="w-3 h-3 border-2 border-black dark:border-white/30 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 border-2 border-black dark:border-white/30 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 border-2 border-black dark:border-white/30 rounded-full bg-green-500"></div>
              <span className="ml-2 font-[family-name:var(--font-mono)] font-bold text-[10px] text-black dark:text-slate-400">user@lrd_d.dev:~</span>
            </div>

            <div className="mt-8 relative z-10">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-8 border-2 border-black dark:border-blue-500 bg-blue-100 dark:bg-blue-900/30 text-black dark:text-blue-400 font-[family-name:var(--font-mono)] font-bold text-xs shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#2563eb] transition-all">
                <span className="w-2 h-2 border border-black dark:border-transparent bg-blue-500 animate-pulse"></span>
                STATUS: AVAILABLE FOR WORK
              </div>

              <div className="mb-8">
                <AnimatedHeroText />
              </div>

              <p className="max-w-lg text-black dark:text-slate-300 font-medium dark:font-light leading-relaxed text-sm md:text-base transition-colors">
                Operations Specialist & Developer building digital experiences that live at the intersection of <span className="text-blue-700 dark:text-white font-bold dark:font-medium border-b-2 border-black dark:border-blue-500 transition-colors">system architecture</span> and creative craft.
              </p>
            </div>
          </div>

          {/* HERO RIGHT: The ID Badge */}
          <div className="md:col-span-4 border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] p-4 relative flex items-center justify-center min-h-[400px] transition-all overflow-hidden">
             <div className="absolute top-0 left-0 w-full px-4 py-2 bg-black/5 dark:bg-white/5 border-b-2 border-black dark:border-white/30 z-20 transition-colors">
               <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-black dark:text-slate-400">~/validate_credentials</span>
             </div>
             <div className="w-full h-full relative z-10 mt-6">
               <SystemAccessBadge />
             </div>
          </div>
        </div>

        {/* ROW 2: Tech Matrix (8 col) + Stats Stack (4 col) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* LEFT WIDGET: Tech Matrix */}
          <div className="md:col-span-8 border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] p-6 transition-all flex flex-col relative overflow-hidden">
             <div className="mb-4">
               <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-black dark:text-slate-400 uppercase">SYS.CORE_DEPENDENCIES</span>
             </div>
             <TechStackGrid />
          </div>

          {/* RIGHT WIDGETS: Locale & Deployment */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] p-6 transition-all flex flex-col justify-between min-h-[120px]">
               <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-black dark:text-slate-400 uppercase">SYS.LOCATION</span>
               <div className="mt-2">
                 <h4 className="text-xl font-black text-black dark:text-white transition-colors">Lagos, NGA</h4>
                 <div className="text-[10px] font-[family-name:var(--font-mono)] font-bold text-blue-700 dark:text-blue-400 mt-2 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full border border-black dark:border-none bg-blue-500 animate-pulse"></span> WAT (UTC+1)
                 </div>
               </div>
            </div>

            <div className="flex-1 border-2 border-black dark:border-white/30 bg-blue-600 dark:bg-blue-900 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] p-6 transition-all flex flex-col justify-between min-h-[120px] text-white">
               <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-blue-200 uppercase">LATEST.DEPLOYMENT</span>
               <div className="mt-2">
                 <h4 className="text-xl font-black text-white">SimTrackr</h4>
                 <p className="text-xs font-[family-name:var(--font-mono)] font-bold text-blue-200 mt-1">v2.1.0 // SECURE</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />

      {/* --- PROJECTS BENTO GRID --- */}
      <div id="projects" className="scroll-mt-24 max-w-7xl mx-auto mt-24 mb-24 px-4 md:px-8 font-[family-name:var(--font-mono)]">
        
        <div className="flex items-center gap-4 mb-8 border-b-2 border-black dark:border-white/30 pb-4 transition-colors">
          <span className="text-blue-600 dark:text-blue-500 font-black text-xl">#</span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
            Deployed_Architecture
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min relative z-10">
          
          {/* BENTO BLOCK 1: Company Tickets (2 Columns, Landscape Image Top) */}
          <div className="md:col-span-2 border-4 border-black dark:border-white/30 bg-white dark:bg-[#050505] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] flex flex-col transition-transform hover:-translate-y-1 overflow-hidden group">
            {/* Edge-to-Edge Image */}
            <div className="w-full h-48 md:h-64 border-b-4 border-black dark:border-white/30 overflow-hidden bg-slate-200 dark:bg-[#0a0a0a]">
              {/* Using standard img tag. Fallback background applied if image fails */}
              <img src="/projects/tickets.png" alt="Company Tickets Dashboard" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            
            <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-4xl font-black uppercase text-black dark:text-white">Company Tickets</h3>
                  <span className="border-2 border-black dark:border-white/30 px-3 py-1 bg-yellow-400 dark:bg-yellow-600 text-black text-[10px] md:text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_#000]">
                    🔒 Internal System
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate-800 dark:text-slate-300 leading-relaxed mb-6 border-l-4 border-blue-500 pl-4 font-sans">
                  A full-stack IT support ticketing system built for Trucksoft Limited. Features a real-time admin portal, role-based access control, and live dashboard metrics for rapid issue resolution.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Next.js', 'TypeScript', 'Supabase', 'Tailwind v4'].map((tech) => (
                  <span key={tech} className="border-2 border-black dark:border-white/30 px-2 py-1 text-xs font-bold bg-slate-100 dark:bg-white/5 text-black dark:text-white uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* BENTO BLOCK 2: SimTrackr (1 Column, Full Image Contained) */}
          <div className="border-4 border-black dark:border-white/30 bg-blue-600 text-white shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#ffffff] flex flex-col transition-transform hover:-translate-y-1 overflow-hidden group">
            
            {/* Object-Contain Image Container (Shows the whole phone) */}
            <div className="w-full h-64 md:h-80 border-b-4 border-black dark:border-white/30 bg-[#050505] p-4 flex justify-center items-center">
               <img 
                 src="/projects/simtrackr.jpg" 
                 alt="SimTrackr Mobile App" 
                 className="max-w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" 
               />
            </div>

            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-black uppercase mb-4">SimTrackr</h3>
                <p className="text-sm leading-relaxed mb-6 font-medium font-sans">
                  A mobile application designed for users to effortlessly manage data subscriptions. Uses on-device Google ML Kit OCR to extract receipt details.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  <span className="border-2 border-white px-2 py-1 text-[10px] font-bold uppercase bg-black/20">Flutter</span>
                  <span className="border-2 border-white px-2 py-1 text-[10px] font-bold uppercase bg-black/20">Riverpod</span>
                  <span className="border-2 border-white px-2 py-1 text-[10px] font-bold uppercase bg-black/20">ML Kit</span>
                </div>
                <a href="https://github.com/AdekolaDavid" target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-white bg-black hover:bg-white hover:text-black transition-colors px-4 py-2 text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_#fff] active:translate-x-1 active:translate-y-1 active:shadow-none">
                  [ View Code ]
                </a>
              </div>
            </div>
          </div>

          {/* BENTO BLOCK 3: StockR (3 Columns - Horizontal Split Desktop) */}
          <div className="md:col-span-3 border-4 border-black dark:border-white/30 bg-slate-50 dark:bg-[#0f0f0f] shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] flex flex-col md:flex-row transition-transform hover:-translate-y-1 overflow-hidden group">
            
            {/* Content Left Side */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-black dark:text-white">StockR</h3>
                  <span className="border-2 border-black dark:border-white/30 px-2 py-1 bg-slate-200 dark:bg-slate-800 text-black dark:text-white text-[10px] font-black uppercase tracking-widest">
                    🔒 Internal System
                  </span>
                </div>
                <p className="text-sm md:text-base text-slate-800 dark:text-slate-300 leading-relaxed font-sans max-w-2xl mb-6">
                  An internal inventory management web app for a logistics and telematics company. Allows the support team to track physical IT devices and SIM cards—managing stock levels, assignments, and history across operations.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vite', 'Supabase', 'Lucide'].map((tech) => (
                  <span key={tech} className="border-2 border-black dark:border-white/30 px-3 py-1.5 text-xs font-bold bg-black dark:bg-white text-white dark:text-black uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Right Side (Desktop) / Bottom Side (Mobile) */}
            <div className="w-full md:w-2/5 lg:w-1/3 h-48 md:h-auto border-t-4 md:border-t-0 md:border-l-4 border-black dark:border-white/30 overflow-hidden bg-slate-200 dark:bg-[#0a0a0a]">
              <img src="/projects/stockr.png" alt="StockR Inventory UI" className="w-full h-full object-cover object-left grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>

          </div>

        </div>
      </div>

      <div className="px-4 md:px-8 relative z-10">
        <ExperienceTimeline />
        <ContactSection />
      </div>

    </main>
  );
}