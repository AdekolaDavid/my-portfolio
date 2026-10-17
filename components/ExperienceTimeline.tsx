"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Operations Specialist & Developer",
    company: "Trucksoft",
    date: "2023 — Present",
    description:
      "Built internal tools that replaced scattered WhatsApp-based workflows — a ticketing system with real-time updates and admin controls (Company Tickets), and a full inventory and maintenance tracker for SIM cards, tracking devices, and fleet jobs (StockR). Also handle IT support across the company.",
  },
  {
    role: "Full Stack Developer",
    company: "Freelance / Projects",
    date: "2022 — Present",
    description:
      "Ship client and personal projects end-to-end. Recent work includes Funmisax (a gospel saxophonist's portfolio and booking site), SimTrackr (AI-powered receipt scanning for subscription tracking), and The Vault (a growing UI component library).",
  },
  {
    role: "Digital Strategy Intern",
    company: "Africa Hyperscalers Media",
    date: "2025",
    description:
      "Managed digital content strategy and community growth for a media brand in the African tech infrastructure space.",
  },
  {
    role: "System Administrator",
    company: "TIC LMS",
    date: "2022 — 2023",
    description:
      "Co-managed the Tic LMS platform — ensured uptime, handled user access, and supported a smooth learning experience for students.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ExperienceTimeline() {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-24 px-4 md:px-8 font-[family-name:var(--font-space)]">
      <div className="flex items-center gap-4 mb-12 border-b-2 border-black dark:border-white/30 pb-4 transition-colors">
        <span className="text-blue-600 dark:text-blue-500 font-[family-name:var(--font-mono)] font-black text-xl">
          #
        </span>
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase transition-colors">
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-black/15 dark:bg-white/10" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="relative pl-10 group"
            >
              {/* Dot */}
              <div className="absolute left-0 top-[10px] w-4 h-4 bg-blue-500 border-2 border-black dark:border-white/30 shadow-[2px_2px_0px_#000] dark:shadow-[2px_2px_0px_#2563eb] group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white/15 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#2563eb] p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] dark:hover:shadow-[6px_6px_0px_#2563eb]">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-black dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 font-[family-name:var(--font-mono)] uppercase tracking-wider mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold font-[family-name:var(--font-mono)] tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 border border-blue-500/30 uppercase shrink-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
