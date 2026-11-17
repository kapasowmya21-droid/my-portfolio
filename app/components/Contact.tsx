"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "kapasowmya21@gmail.com";
  const githubUrl = "https://github.com/kapasowmya21-droid";
  const linkedinUrl = "https://linkedin.com/in/kapasowmya21-droid";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending in UI
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-sky-400 text-lg font-bold">03.</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
          // Get In Touch
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-sky-900/60 to-transparent ml-2" />
      </div>

      <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-12">
        Whether you want to share beginner coding advice, collaborate on a project, or just say hello—my inbox is always open!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Socials (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1220]/80 border border-sky-900/40 backdrop-blur-md shadow-xl hover:border-sky-500/40 transition-all duration-300">
            <h3 className="font-mono text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
              Connect With Me
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              I am eager to learn, listen attentively, and connect with other developers and students.
            </p>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[#070b13] border border-sky-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 group hover:border-sky-800 transition-colors">
                <div className="flex items-center gap-2.5 text-slate-300 truncate w-full sm:w-auto">
                  <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="hover:text-sky-300 transition-colors truncate"
                  >
                    {emailAddress}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs rounded bg-sky-950/70 border border-sky-800/60 text-sky-300 hover:bg-sky-500/20 hover:text-white transition-all flex items-center gap-1 self-end sm:self-auto"
                >
                  {copied ? (
                    <>
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#070b13] border border-sky-950 flex items-center justify-between text-slate-300 hover:border-sky-500/50 hover:text-sky-300 hover:bg-sky-500/5 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>github / kapasowmya21-droid</span>
                </div>
                <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#070b13] border border-sky-950 flex items-center justify-between text-slate-300 hover:border-sky-500/50 hover:text-sky-300 hover:bg-sky-500/5 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>linkedin / kapasowmya21-droid</span>
                </div>
                <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1220]/80 border border-sky-900/40 backdrop-blur-md shadow-xl hover:border-sky-500/40 transition-all duration-300">
            <h3 className="font-mono text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              Send a Message
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Drop a note directly using this form. I will respond to your email as soon as possible.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-sky-950/40 border border-sky-500/50 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-mono font-bold text-sky-300 text-base">
                  Message Sent (UI Demo)!
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out! Since this is the frontend-only demo, please feel free to also email me directly at{" "}
                  <a href={`mailto:${emailAddress}`} className="text-sky-400 underline">
                    {emailAddress}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-mono text-sky-300 hover:text-white underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070b13] border border-sky-950 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070b13] border border-sky-950 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your note or question here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#070b13] border border-sky-950 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-xl font-mono text-sm font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_28px_rgba(56,189,248,0.55)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
