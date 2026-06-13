"use client";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // NEW: State to track our custom terminal message
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; msg: string }>({ type: "idle", msg: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", msg: "" }); // Reset status on new submission

    // Extract data from the form
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Send the payload to your custom backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // CHANGED: Render UI status instead of native alert
        setStatus({ type: "success", msg: "SYS.MSG: Transmission successful. Awaiting reply." });
        (e.target as HTMLFormElement).reset(); // Clear the form
        
        // Clear the success message after 5 seconds
        setTimeout(() => setStatus({ type: "idle", msg: "" }), 5000);
      } else {
        setStatus({ type: "error", msg: "SYS.ERR: Transmission failed. Payload rejected." });
      }
    } catch (error) {
      setStatus({ type: "error", msg: "SYS.ERR: Network offline. Check connection." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto font-[family-name:var(--font-space)] bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white/30 shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] p-6 md:p-10 transition-colors">
      
      <div className="mb-8 border-b-2 border-black dark:border-white/30 pb-4">
        <h3 className="text-2xl font-black uppercase text-black dark:text-white tracking-tighter">
          Direct_Message
        </h3>
        <p className="text-xs font-bold font-[family-name:var(--font-mono)] text-slate-500 uppercase tracking-widest mt-2">
          // Awaiting user input
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-bold font-[family-name:var(--font-mono)] text-black dark:text-slate-300 uppercase tracking-widest">
            Name
          </label>
          <input 
            type="text" 
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full p-3 bg-slate-50 dark:bg-[#050505] border-2 border-black dark:border-white/20 text-black dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:shadow-[4px_4px_0px_#2563eb] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-[family-name:var(--font-mono)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-bold font-[family-name:var(--font-mono)] text-black dark:text-slate-300 uppercase tracking-widest">
            Email
          </label>
          <input 
            type="email" 
            id="email"
            name="email"
            required
            placeholder="you@protocol.com"
            className="w-full p-3 bg-slate-50 dark:bg-[#050505] border-2 border-black dark:border-white/20 text-black dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:shadow-[4px_4px_0px_#2563eb] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-[family-name:var(--font-mono)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-bold font-[family-name:var(--font-mono)] text-black dark:text-slate-300 uppercase tracking-widest">
            Message
          </label>
          <textarea 
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Initialize transmission..."
            className="w-full p-3 bg-slate-50 dark:bg-[#050505] border-2 border-black dark:border-white/20 text-black dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:shadow-[4px_4px_0px_#2563eb] transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-[family-name:var(--font-mono)] resize-none"
          />
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest border-2 border-black dark:border-transparent shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#fff] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Transmitting..." : "Send_Message"}
        </button>

        {/* NEW: Inline Terminal Status Output */}
        {status.type !== "idle" && (
          <div className={`mt-2 p-4 border-2 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-widest animate-pulse ${
            status.type === "success" 
              ? "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400" 
              : "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400"
          }`}>
            {'>'} {status.msg}
          </div>
        )}

      </form>
    </div>
  );
}