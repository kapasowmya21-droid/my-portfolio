import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-sky-950/80 bg-[#060a12] py-10 px-4 sm:px-6 lg:px-8 mt-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Brand / Copyright */}
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="font-mono text-sm font-bold text-slate-200">
              Sowmya
            </span>
          </div>
          <p className="font-mono text-xs text-slate-500">
            &copy; 2026 Sowmya. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Quick Links / Back to Top */}
        <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
          <a
            href="https://github.com/kapasowmya21-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kapasowmya21-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kapasowmya21@gmail.com"
            className="hover:text-sky-400 transition-colors"
          >
            Email
          </a>
          <a
            href="#"
            className="px-3 py-1 rounded-md bg-sky-950/40 border border-sky-900/40 text-sky-400 hover:text-white hover:border-sky-500 hover:bg-sky-500/20 transition-all flex items-center gap-1"
          >
            <span>Top</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
