"use client";

import { useState } from "react";

type Tab = {
  filename: string;
  lines: { content: React.ReactNode }[];
};

const tabs: Tab[] = [
  {
    filename: "whoami.ts",
    lines: [
      { content: <><span className="text-purple-500 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">dev</span> = {"{"}</> },
      { content: <>&nbsp;&nbsp;name: <span className="text-green-600 dark:text-green-400">&quot;Adekola David&quot;</span>,</> },
      { content: <>&nbsp;&nbsp;role: <span className="text-green-600 dark:text-green-400">&quot;Full Stack Developer&quot;</span>,</> },
      { content: <>&nbsp;&nbsp;based_in: <span className="text-green-600 dark:text-green-400">&quot;Lagos, NGA&quot;</span>,</> },
      { content: <>&nbsp;&nbsp;focus: [<span className="text-green-600 dark:text-green-400">&quot;Next.js&quot;</span>, <span className="text-green-600 dark:text-green-400">&quot;React&quot;</span>, <span className="text-green-600 dark:text-green-400">&quot;Flutter&quot;</span>],</> },
      { content: <>&nbsp;&nbsp;<span className="text-slate-400 dark:text-slate-600">// bridges operations thinking with clean code</span></> },
      { content: <>{"}"}</> },
    ],
  },
  {
    filename: "now.sh",
    lines: [
      { content: <><span className="text-purple-500 dark:text-purple-400">#!/bin/bash</span></> },
      { content: <><span className="text-blue-600 dark:text-blue-400">echo</span> <span className="text-green-600 dark:text-green-400">&quot;Currently: open to full-time roles&quot;</span></> },
      { content: <><span className="text-blue-600 dark:text-blue-400">echo</span> <span className="text-green-600 dark:text-green-400">&quot;Shipping: internal tools that handle real load&quot;</span></> },
      { content: <><span className="text-blue-600 dark:text-blue-400">echo</span> <span className="text-green-600 dark:text-green-400">&quot;Learning: whatever breaks in production next&quot;</span></> },
      { content: <><span className="text-slate-400 dark:text-slate-600"># status: online</span></> },
    ],
  },
  {
    filename: "contact.json",
    lines: [
      { content: <>{"{"}</> },
      { content: <>&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">&quot;email&quot;</span>: <span className="text-green-600 dark:text-green-400">&quot;adekoladavi2401@gmail.com&quot;</span>,</> },
      { content: <>&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">&quot;github&quot;</span>: <span className="text-green-600 dark:text-green-400">&quot;github.com/AdekolaDavid&quot;</span>,</> },
      { content: <>&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">&quot;response_time&quot;</span>: <span className="text-green-600 dark:text-green-400">&quot;~24h&quot;</span></> },
      { content: <>{"}"}</> },
    ],
  },
];

export default function TerminalWindow() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 -mt-2 mb-4">
      <div className="border-2 border-black dark:border-white/30 bg-white dark:bg-[#0a0a0a] shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#2563eb]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/5 border-b-2 border-black dark:border-white/30">
          <div className="w-3 h-3 border-2 border-black dark:border-white/30 rounded-full bg-red-500" />
          <div className="w-3 h-3 border-2 border-black dark:border-white/30 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 border-2 border-black dark:border-white/30 rounded-full bg-green-500" />
        </div>

        {/* Tab strip */}
        <div
          role="tablist"
          aria-label="Terminal file tabs"
          className="flex border-b-2 border-black dark:border-white/30 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.filename}
              role="tab"
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] font-bold uppercase tracking-widest whitespace-nowrap border-r-2 border-black dark:border-white/30 transition-colors ${
                activeTab === index
                  ? "bg-blue-100 dark:bg-blue-900/30 text-black dark:text-blue-400"
                  : "text-slate-500 dark:text-slate-500 hover:text-black dark:hover:text-slate-300"
              }`}
            >
              {tab.filename}
            </button>
          ))}
        </div>

        {/* Content pane */}
        {tabs.map((tab, index) => (
          <div
            key={tab.filename}
            role="tabpanel"
            hidden={activeTab !== index}
            className="p-5 md:p-6 font-[family-name:var(--font-mono)] text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-800 dark:text-slate-300"
          >
            {tab.lines.map((line, lineIndex) => (
              <div key={lineIndex} className="whitespace-pre">
                <span className="select-none text-slate-300 dark:text-slate-700 mr-4">
                  {String(lineIndex + 1).padStart(2, "0")}
                </span>
                {line.content}
                {lineIndex === tab.lines.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="terminal-cursor inline-block w-[7px] h-[14px] bg-black dark:bg-white ml-1 translate-y-[2px]"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
