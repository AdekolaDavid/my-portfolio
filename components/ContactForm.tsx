"use client";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; msg: string }>({ type: "idle", msg: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", msg: "" });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus({ type: "success", msg: "Message sent — I'll get back to you soon." });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus({ type: "idle", msg: "" }), 5000);
      } else {
        setStatus({ type: "error", msg: "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error — check your connection and try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white/15 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb] p-6 md:p-10 transition-colors">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-bold font-[family-name:var(--font-mono)] text-black dark:text-slate-300 uppercase tracking-widest"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="w-full p-3 bg-slate-50 dark:bg-[#050505] border-2 border-black/20 dark:border-white/15 text-black dark:text-white focus:outline-none focus:border-blue-500 focus:shadow-[3px_3px_0px_#2563eb] transition-[border-color,box-shadow] placeholder:text-slate-400 dark:placeholder:text-slate-600 font-sans text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-bold font-[family-name:var(--font-mono)] text-black dark:text-slate-300 uppercase tracking-widest"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full p-3 bg-slate-50 dark:bg-[#050505] border-2 border-black/20 dark:border-white/15 text-black dark:text-white focus:outline-none focus:border-blue-500 focus:shadow-[3px_3px_0px_#2563eb] transition-[border-color,box-shadow] placeholder:text-slate-400 dark:placeholder:text-slate-600 font-sans text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xs font-bold font-[family-name:var(--font-mono)] text-black dark:text-slate-300 uppercase tracking-widest"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full p-3 bg-slate-50 dark:bg-[#050505] border-2 border-black/20 dark:border-white/15 text-black dark:text-white focus:outline-none focus:border-blue-500 focus:shadow-[3px_3px_0px_#2563eb] transition-[border-color,box-shadow] placeholder:text-slate-400 dark:placeholder:text-slate-600 font-sans text-sm resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-sm border-2 border-black dark:border-transparent shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#2563eb] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {status.type !== "idle" && (
          <div
            className={`mt-1 p-4 border text-sm font-medium font-sans ${
              status.type === "success"
                ? "bg-green-50 dark:bg-green-950/30 border-green-500/40 text-green-700 dark:text-green-400"
                : "bg-red-50 dark:bg-red-950/30 border-red-500/40 text-red-700 dark:text-red-400"
            }`}
          >
            {status.msg}
          </div>
        )}
      </form>
    </div>
  );
}
