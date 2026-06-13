"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Operations Specialist & UI/UX Designer",
    company: "Trucksoft",
    date: "Present",
    description: "Designing and managing operational systems, support ticketing interfaces, and automated data tracking workflows to bridge complex logistics with intuitive user experiences."
  },
  {
    role: "Digital Strategy Intern",
    company: "Africa Hyperscalers Media",
    date: "2025",
    description: "Managed end-to-end digital content strategy and community growth for Africa Hyperscalers Media within the tech infrastructure ecosystem as an intern."
  },
  {
    role: "Full Stack Developer",
    company: "Freelance / Projects",
    date: "2022 - Present",
    description: "Architecting end-to-end solutions like Stockr and Company Tickets using Next.js, Supabase, and Tailwind CSS. Focused on secure authentication, real-time databases, and responsive design."
  },
  {
    role: "System Administrator",
    company: "TIC LMS",
    date: "2022 - 2023",
    description: "Co-managed and maintained the Tic LMS platform, ensuring seamless access to educational content and supporting a smooth user experience for students."
  }
];

export default function ExperienceTimeline() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-24 font-[family-name:var(--font-space)]">
      
      <div className="flex items-center gap-4 mb-16 border-b-2 border-black dark:border-white/30 pb-4 transition-colors">
        <span className="text-blue-600 dark:text-blue-500 font-[family-name:var(--font-mono)] font-black text-xl">#</span>
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
          Experience_Timeline
        </h2>
      </div>

      <div className="absolute left-8 md:left-1/2 top-48 bottom-0 w-[2px] bg-black dark:bg-white/20 -translate-x-1/2 transition-colors"></div>

      <div className="flex flex-col gap-12 relative z-10">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 border-2 border-black dark:border-white -translate-x-1/2 mt-6 md:mt-0 z-20 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#fff]"></div>

            <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
              <div className="p-6 md:p-8 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white/30 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] dark:hover:shadow-[10px_10px_0px_#2563eb] group relative">
                
                <span className="text-[10px] font-bold font-[family-name:var(--font-mono)] tracking-widest text-black dark:text-blue-400 mb-4 inline-block bg-blue-100 dark:bg-blue-900/30 px-2 py-1 border-2 border-black dark:border-blue-500 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb] uppercase transition-all">
                  [{exp.date}]
                </span>
                <h3 className="text-xl font-black text-black dark:text-white mb-2 transition-colors">{exp.role}</h3>
                <p className="text-xs font-bold text-slate-500 mb-4 font-[family-name:var(--font-mono)] uppercase tracking-wider">{exp.company}</p>
                <p className="text-sm text-slate-700 dark:text-slate-400 font-medium dark:font-light leading-relaxed transition-colors">
                  {exp.description}
                </p>
              </div>
            </div>
            
            <div className="hidden md:block w-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}