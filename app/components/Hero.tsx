import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      {/* Background ambient light blue glow */}
      <div className="ambient-glow bg-sky-500 w-72 sm:w-96 h-72 sm:h-96 -top-10 -left-10" />
      <div className="ambient-glow bg-cyan-400 w-80 sm:w-[30rem] h-80 sm:h-[30rem] -bottom-20 -right-20 opacity-10" />

      <div className="relative max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Tech status badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 font-mono text-xs sm:text-sm mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>init portfolio.sys --status active</span>
        </div>

        {/* Large Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            Sowmya
          </span>
        </h1>

        {/* One-line intro */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          CS student who likes to explore new things and coding but doesn&apos;t have much knowledge about it
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          {/* View my work button */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-sm font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_28px_rgba(56,189,248,0.55)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>View my work</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Contact me button */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-mono text-sm font-medium text-sky-300 border border-sky-400/50 hover:border-sky-300 hover:bg-sky-500/10 hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] flex items-center justify-center gap-2"
          >
            <span>Contact me</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Techy mini code card */}
        <div className="w-full max-w-md mx-auto text-left rounded-xl border border-sky-900/50 bg-[#0a1120]/80 backdrop-blur-md p-4 shadow-xl font-mono text-xs sm:text-sm text-slate-300">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-sky-900/40">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-slate-500 text-xs">sowmya@terminal ~</span>
          </div>
          <div className="space-y-1">
            <p className="text-slate-400">
              <span className="text-sky-400">&gt;</span> const profile = &#123;
            </p>
            <p className="pl-4 text-slate-300">
              role: <span className="text-cyan-300">&quot;CS Student&quot;</span>,
            </p>
            <p className="pl-4 text-slate-300">
              focus: <span className="text-cyan-300">&quot;Learning to Code &amp; Exploring&quot;</span>,
            </p>
            <p className="pl-4 text-slate-300">
              curiosity: <span className="text-sky-400">Infinity</span>,
            </p>
            <p className="pl-4 text-slate-300">
              values: [<span className="text-cyan-300">&quot;Attentive&quot;</span>, <span className="text-cyan-300">&quot;Honest&quot;</span>]
            </p>
            <p className="text-slate-400">&#125;;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
