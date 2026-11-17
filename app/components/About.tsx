import React from "react";

export default function About() {
  const skillCategories = [
    {
      category: "Languages & Core",
      skills: ["C", "C++", "Python", "JavaScript", "Data Structures Basics"],
    },
    {
      category: "Web & Technologies",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Next.js Basics", "Responsive Web Design"],
    },
    {
      category: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Command Line / Bash", "Markdown"],
    },
    {
      category: "Personal Strengths",
      skills: ["Attentive", "Honest", "Curious Learner", "Problem Solving", "Adaptability"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-sky-400 text-lg font-bold">01.</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
          // About Me
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-sky-900/60 to-transparent ml-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1220]/80 border border-sky-900/40 backdrop-blur-md shadow-xl hover:border-sky-500/40 transition-all duration-300">
            <h3 className="text-lg font-mono text-sky-300 font-semibold mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-sm bg-sky-400" />
              My Journey &amp; Philosophy
            </h3>

            {/* Short Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              I am not so good in coding but would love to learn it. I consider myself to be attentive and honest.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              As a Computer Science student, every day is an opportunity to discover how technology works under the hood. 
              Even when concepts feel challenging, my genuine curiosity and dedication keep me pushing forward to explore new tools, build projects, and grow step-by-step.
            </p>

            {/* Trait highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-sky-950">
              <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-900/30">
                <span className="text-sky-400 font-mono text-xs uppercase tracking-wider block mb-1">
                  ✓ Trait 01
                </span>
                <p className="font-semibold text-slate-100 text-sm">Attentive Mindset</p>
                <p className="text-slate-400 text-xs mt-1">
                  Carefully absorbing lectures, reading documentation, and debugging code with patience.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-900/30">
                <span className="text-sky-400 font-mono text-xs uppercase tracking-wider block mb-1">
                  ✓ Trait 02
                </span>
                <p className="font-semibold text-slate-100 text-sm">Honest &amp; Sincere</p>
                <p className="text-slate-400 text-xs mt-1">
                  Clear about what I know and what I still need to learn, always eager for constructive guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section with Tags / Chips */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0b1220]/80 border border-sky-900/40 backdrop-blur-md shadow-xl hover:border-sky-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-mono text-sky-300 font-semibold flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-sm bg-sky-400" />
                Skills &amp; Toolkit
              </h3>
              <span className="text-xs font-mono text-slate-500">tags_view.json</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Technologies, concepts, and skills I am actively learning, using, and exploring:
            </p>

            <div className="space-y-5">
              {skillCategories.map((group) => (
                <div key={group.category} className="space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#0f172a] text-slate-200 border border-sky-900/60 hover:border-sky-400 hover:text-sky-300 hover:bg-sky-500/10 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70 mr-1.5" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
