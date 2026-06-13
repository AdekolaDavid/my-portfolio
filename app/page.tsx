import SystemAccessBadge from "@/components/SystemAccessBadge";
import TechStackGrid from "@/components/TechStackGrid";
import AnimatedHeroText from "@/components/AnimatedHeroText";
import { ThemeToggle } from "@/components/CurtainThemeToggle";
import GlassCard from "@/components/GlassCard";
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

      {/* --- TRUE BENTO GRID --- */}
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

          {/* HERO RIGHT: The ID Badge is Back! */}
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
          
          {/* LEFT WIDGET: The Ultra-Wide Tech Matrix */}
          <div className="md:col-span-8 border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] p-6 transition-all flex flex-col relative overflow-hidden">
             <div className="mb-4">
               <span className="font-[family-name:var(--font-mono)] font-bold text-[10px] text-black dark:text-slate-400 uppercase">SYS.CORE_DEPENDENCIES</span>
             </div>
             <TechStackGrid />
          </div>

          {/* RIGHT WIDGETS: Stacked Locale & Deployment */}
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
                 <h4 className="text-xl font-black text-white">Company Tickets</h4>
                 <p className="text-xs font-[family-name:var(--font-mono)] font-bold text-blue-200 mt-1">v2.1.0 // SECURE</p>
               </div>
            </div>

          </div>
        </div>
      </div>

      <AboutSection />

      <div className="max-w-7xl mx-auto mt-24 px-4 md:px-8">
        <div className="flex items-center gap-4 mb-8 border-b-2 border-black dark:border-white/30 pb-4 transition-colors">
          
        </div>
        
        {/* --- PROJECTS BENTO GRID --- */}
        <div id="projects" className="scroll-mt-24 max-w-7xl mx-auto mt-24 px-4 md:px-8">
        <div className="flex items-center gap-4 mb-8 border-b-2 border-black dark:border-white/30 pb-4 transition-colors">
          <span className="text-blue-600 dark:text-blue-500 font-[family-name:var(--font-mono)] font-black text-xl">#</span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
            Deployed_Projects
          </h2>
        </div>
        
        {/* Changed to an auto-flowing grid for 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          
          {/* PROJECT 1: SimTrackr */}
              <GlassCard 
                title="SimTrackr" 
                description="A mobile application designed for users to effortlessly manage data subscriptions. Uses on-device Google ML Kit OCR to extract receipt details, sorting active plans in a custom glassmorphic dashboard by urgency."
                techStack={["Flutter", "Riverpod", "ML Kit", "Material 3"]}
                imagePath="/projects/simtrackr.jpg"
                delay={0.1}
              />

          {/* PROJECT 2: Company Tickets */}
              <GlassCard 
                title="Company Tickets" 
                description="A full-stack IT support ticketing system built for Trucksoft Limited. Features a real-time admin portal, role-based access control, and live dashboard metrics for rapid issue resolution."
                techStack={["Next.js", "TypeScript", "Supabase", "Tailwind v4"]}
                imagePath="/projects/tickets.png"
                delay={0.2}
              />

          {/* PROJECT 3: StockR (Spans both columns on desktop for a balanced grid) */}
            <div className="md:col-span-2 md:w-1/2 md:pr-4">
             <GlassCard 
                title="StockR" 
                description="An internal inventory management web app for a logistics and telematics company. Allows the support team to track physical IT devices and SIM cards—managing stock levels, assignments, and history across operations."
                techStack={["React", "Vite", "Supabase", "Lucide"]}
                imagePath="/projects/stockr.png"
                delay={0.3}
              />
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