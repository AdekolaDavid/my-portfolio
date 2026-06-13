"use client";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    icon: <FaInstagram size={28} />,
    hoverStyle: "hover:border-pink-500 hover:shadow-[4px_4px_0px_#ec4899] dark:hover:shadow-[4px_4px_0px_#ec4899] hover:text-pink-500",
    link: "https://instagram.com/adekola2401"
  },
  {
    name: "Github",
    icon: <FaGithub size={28} />,
    hoverStyle: "hover:border-slate-800 hover:shadow-[4px_4px_0px_#1e293b] dark:hover:border-white dark:hover:shadow-[4px_4px_0px_#fff] hover:text-slate-800 dark:hover:text-white",
    link: "https://github.com/AdekolaDavid"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    hoverStyle: "hover:border-blue-500 hover:shadow-[4px_4px_0px_#3b82f6] dark:hover:shadow-[4px_4px_0px_#3b82f6] hover:text-blue-500",
    link: "https://www.linkedin.com/in/adekola-david-123abc/"
  },
  {
    name: "Email",
    icon: <FaEnvelope size={28} />,
    hoverStyle: "hover:border-red-500 hover:shadow-[4px_4px_0px_#ef4444] dark:hover:shadow-[4px_4px_0px_#ef4444] hover:text-red-500",
    link: "mailto:adekoladavi2401@gmail.com"
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={28} />,
    hoverStyle: "hover:border-green-500 hover:shadow-[4px_4px_0px_#22c55e] dark:hover:shadow-[4px_4px_0px_#22c55e] hover:text-green-500",
    link: "https://wa.me/2349013303272"
  }
];

export default function ContactFooter() {
  return (
    
    <div className="flex flex-col font-[family-name:var(--font-space)] w-full lg:w-[300px] h-full gap-4">
      {socials.map((social, index) => (
        <a 
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          
          className={`group flex items-center flex-1 w-full lg:w-[80px] lg:hover:w-full min-h-[72px] bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white/30 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#2563eb] transition-all duration-300 ease-out overflow-hidden px-6 gap-6 text-slate-600 dark:text-slate-400 ${social.hoverStyle}`}
        >
          <div className="shrink-0 flex items-center justify-center">
            {social.icon}
          </div>
          <span className="font-black uppercase tracking-widest text-black dark:text-white lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}