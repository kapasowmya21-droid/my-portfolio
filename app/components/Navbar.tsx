"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#080c14]/85 border-b border-sky-900/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-100 hover:text-sky-400 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] group-hover:scale-125 transition-transform" />
            <span className="font-mono text-lg font-bold tracking-tight">
              &lt;<span className="text-sky-400">Sowmya</span> /&gt;
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-sm text-slate-300 hover:text-sky-400 transition-colors relative py-1 group"
              >
                <span className="text-sky-400/60 mr-1 group-hover:text-sky-400">#</span>
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg text-xs font-mono font-medium text-sky-300 border border-sky-500/40 hover:border-sky-400 hover:bg-sky-400/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-200"
            >
              Get in touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-sky-400 hover:bg-slate-800/60 focus:outline-none border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                // Close Icon (X)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-sky-900/40 bg-[#0b1220]/95 backdrop-blur-lg px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-base px-3 py-2 rounded-md text-slate-200 hover:text-sky-400 hover:bg-sky-500/10 transition-colors"
            >
              <span className="text-sky-400 mr-2">#</span>
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center font-mono text-sm py-2 px-4 rounded-lg bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
