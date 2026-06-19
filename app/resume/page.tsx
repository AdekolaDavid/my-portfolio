import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] p-6 md:p-12 font-[family-name:var(--font-mono)] text-black dark:text-white transition-colors duration-500 selection:bg-blue-500 selection:text-white">
      
      <div className="max-w-4xl mx-auto border-4 border-black dark:border-white/20 p-8 shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#2563eb] bg-slate-50 dark:bg-[#0f0f0f]">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2">Adekola David</h1>
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-4">
            Full Stack Developer & Operations Specialist
          </h2>
          
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-slate-600 dark:text-slate-400">
            <span>📍 Lagos, Nigeria</span>
            <span className="hidden md:inline">|</span>
            <span>📱 09013303272</span>
            <span className="hidden md:inline">|</span>
            <a href="mailto:adekoladavi2401@gmail.com" className="hover:text-blue-500 transition-colors">✉️ adekoladavi2401@gmail.com</a>
            <span className="hidden md:inline">|</span>
            <a href="https://adekola-david.vercel.app" className="hover:text-blue-500 transition-colors">💻 adekola-david.vercel.app</a>
          </div>
        </header>

        <hr className="border-t-2 border-black dark:border-white/20 mb-8" />

        {/* Profile Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-black uppercase mb-4 tracking-wider flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-500 block"></span> Profile
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-300">
            Full stack developer and operations specialist with experience spanning IT systems administration, automated workflow architecture, and end-to-end web application development. Skilled at bridging operational and technical demands designing ticketing systems, telematics interfaces, and inventory platforms that combine reliable backend architecture with intuitive UI/UX. Comfortable working across the stack: from RESTful and GraphQL API integration and state management to interface design, with a growing specialization in Go, Dart/Flutter, and C# for API consumption and architecture navigation.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-black uppercase mb-6 tracking-wider flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-500 block"></span> Experience
          </h3>

          <div className="space-y-8">
            {/* Trucksoft */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-bold">Operations Specialist & UI/UX Designer <span className="text-blue-600 dark:text-blue-400">@ Trucksoft</span></h4>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">2025 - Present</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-800 dark:text-slate-300">
                <li>Design and manage operational systems, support ticketing interfaces, and automated data tracking workflows to bridge complex logistics operations with intuitive user experiences.</li>
                <li><strong>Automated Ticketing & Workflow Architecture:</strong> Built a centralized, automated ticketing dashboard using Next.js to replace manual operational tracking, wiring the frontend client to consume custom API endpoints for real-time ticket status updates and telemetry.</li>
                <li><strong>Telematics Data Interface:</strong> Developed a dynamic UI to visualize localized telematics and geographic data points, utilizing strictly typed data structures to handle large, complex JSON payloads without UI latency.</li>
                <li>Built an internal inventory management web app for a logistics and telematics company, allowing the support team to track physical IT devices and SIM cards managing stock levels, assignments, and history across operations.</li>
              </ul>
            </div>

            {/* Africa Hyperscalers Media */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-bold">Digital Strategy Intern <span className="text-blue-600 dark:text-blue-400">@ Africa Hyperscalers Media</span></h4>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">2023</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-800 dark:text-slate-300">
                <li>Managed end-to-end digital content strategy and community growth for Africa Hyperscalers Media within the tech infrastructure ecosystem, as an intern.</li>
              </ul>
            </div>

            {/* TIC LMS */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h4 className="text-lg font-bold">System Administrator <span className="text-blue-600 dark:text-blue-400">@ TIC LMS</span></h4>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">2022 - 2023</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-slate-800 dark:text-slate-300">
                <li>Co-managed and maintained the TIC LMS platform, ensuring seamless access to educational content and supporting a smooth user experience for students.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-black uppercase mb-6 tracking-wider flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-500 block"></span> Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-black dark:border-white/20 p-4">
              <h4 className="text-lg font-bold uppercase">Stockr</h4>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">Next.js, Supabase, Tailwind CSS</p>
              <p className="text-sm text-slate-800 dark:text-slate-300">Architected an end-to-end inventory and operations solution with secure authentication, real-time databases, and responsive, mobile-friendly design.</p>
            </div>

            <div className="border-2 border-black dark:border-white/20 p-4">
              <h4 className="text-lg font-bold uppercase">Company Tickets</h4>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">Next.js, Supabase, Tailwind CSS</p>
              <p className="text-sm text-slate-800 dark:text-slate-300">Architected an end-to-end automated ticketing and workflow management solution, focused on secure authentication, real-time databases, and responsive design.</p>
            </div>

            <div className="border-2 border-black dark:border-white/20 p-4 md:col-span-2">
              <h4 className="text-lg font-bold uppercase">Sim Tracker</h4>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-2">Flutter, OCR</p>
              <p className="text-sm text-slate-800 dark:text-slate-300">Built a Flutter mobile app for Nigerian users to scan data purchase receipts, extract information via OCR, and manage data subscriptions.</p>
            </div>
          </div>
        </section>

        {/* Education & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-4 tracking-wider flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-500 block"></span> Education
            </h3>
            <div className="text-sm text-slate-800 dark:text-slate-300">
              <p className="font-bold text-base text-black dark:text-white">Bachelor of Science in Software Engineering</p>
              <p>National Institute of Information Technology</p>
              <p className="text-slate-500 mt-1">Feb 2022 - Jul 2026</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h3 className="text-2xl font-black uppercase mb-4 tracking-wider flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-500 block"></span> Skills
            </h3>
            <ul className="text-sm text-slate-800 dark:text-slate-300 space-y-2">
              <li><strong className="text-black dark:text-white">Core Languages:</strong> TypeScript, JavaScript, HTML, CSS</li>
              <li><strong className="text-black dark:text-white">Expanding Stack:</strong> Go, Dart, Flutter, C#</li>
              <li><strong className="text-black dark:text-white">Frameworks/Libraries:</strong> React.js, Next.js, Tailwind CSS</li>
              <li><strong className="text-black dark:text-white">Infrastructure/Tools:</strong> Git, GitHub, Vercel, VS Code, Supabase</li>
              <li><strong className="text-black dark:text-white">Specialties:</strong> UI/UX Architecture, Automated Ticketing, Telematics Mapping, API Integration</li>
            </ul>
          </section>
        </div>

        {/* Footer actions */}
        <div className="mt-12 pt-6 border-t-2 border-black dark:border-white/20 flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Download PDF Action */}
          <a 
            href="/adekola-david-cv.pdf" 
            download="Adekola_David_CV.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 font-bold uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#ffffff] active:translate-y-1 active:translate-x-1 active:shadow-none"
          >
            Download PDF
          </a>

          {/* Return Action */}
          <Link 
            href="/" 
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-6 py-2 font-bold uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-[4px_4px_0px_#3b82f6] active:translate-y-1 active:translate-x-1 active:shadow-none"
          >
            Return to System Root
          </Link>
          
        </div>

      </div>
    </main>
  );
}