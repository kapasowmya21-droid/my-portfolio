import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

export default function Projects() {
  const projectsData: Project[] = [
    {
      title: "Personal Portfolio Website",
      category: "Web Development",
      description:
        "A responsive, dark-and-techy portfolio built with Next.js App Router, TypeScript, and Tailwind CSS featuring smooth navigation, reusable components, and interactive UI states.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/kapasowmya21-droid/portfolio",
    },
    {
      title: "Student Record Management System",
      category: "Core C++",
      description:
        "A console-based application designed to manage student details, calculate GPA averages, and organize data using fundamental data structures and file I/O operations.",
      tags: ["C++", "Data Structures", "File Handling", "CLI"],
      githubUrl: "https://github.com/kapasowmya21-droid/student-record-system",
    },
    {
      title: "Python Utilities & Mini Games",
      category: "Python Basics",
      description:
        "A collection of exploratory Python scripts including interactive quiz games, text utilities, and algorithm exercises developed while learning object-oriented basics.",
      tags: ["Python", "CLI", "Algorithms", "Problem Solving"],
      githubUrl: "https://github.com/kapasowmya21-droid/python-utilities",
    },
    {
      title: "Algorithm & Logic Sandbox",
      category: "Computer Science",
      description:
        "Hands-on implementations of essential sorting routines, binary search, and data structure experiments created to build a solid foundational understanding of CS fundamentals.",
      tags: ["C", "C++", "Algorithms", "DSA"],
      githubUrl: "https://github.com/kapasowmya21-droid/dsa-sandbox",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-sky-400 text-lg font-bold">02.</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono">
          // Featured Projects
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-sky-900/60 to-transparent ml-2" />
      </div>

      <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-12 font-normal">
        A showcase of projects and code experiments I have built as I learn, experiment, and dive deeper into computer science.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-12 text-center p-6 rounded-2xl bg-[#0b1220]/50 border border-sky-950 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="font-mono text-sm text-slate-200 font-semibold">
            Want to see more code repositories and ongoing experiments?
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Check out all public repositories on my GitHub profile.
          </p>
        </div>

        <a
          href="https://github.com/kapasowmya21-droid"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-semibold px-4 py-2.5 rounded-xl bg-sky-500/10 text-sky-300 border border-sky-500/40 hover:bg-sky-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap"
        >
          <span>@kapasowmya21-droid</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
