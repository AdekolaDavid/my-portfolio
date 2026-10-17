"use client";

import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

export default function ContactSection() {
  return (
    <div id="contact" className="w-full max-w-7xl mx-auto py-24 px-4 md:px-8 font-[family-name:var(--font-space)] border-t border-black/10 dark:border-white/10 mt-16 transition-colors">
      
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black dark:text-white uppercase mb-2 transition-colors">
          Get in Touch
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">
          Have a project in mind, or just want to say hello? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-between">
        <div className="flex-1 w-full">
          <ContactForm />
        </div>
        <div className="w-full lg:w-auto">
          <ContactFooter />
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
        <div className="text-[10px] tracking-widest text-slate-400 uppercase font-bold font-[family-name:var(--font-mono)] flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          David Adekola · {new Date().getFullYear()}
        </div>
        <div className="text-[10px] tracking-widest text-slate-400 uppercase font-bold font-[family-name:var(--font-mono)]">
          Built with Next.js & Tailwind
        </div>
      </div>

    </div>
  );
}
