import React from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  category?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#0b1220]/90 border border-sky-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/80 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]">
      {/* Top row with icon & category */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:border-sky-400 transition-all duration-200">
            {/* Folder / Code Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>

          {project.category && (
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-sky-950/40 text-sky-300 border border-sky-800/40">
              {project.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-mono text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>
      </div>

      {/* Bottom section: Tags and GitHub link */}
      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#080d17] text-sky-300/90 border border-sky-900/50 group-hover:border-sky-800 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View on GitHub Button */}
        <div className="pt-4 border-t border-sky-950/70 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 hover:text-white px-3 py-1.5 rounded-lg border border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/20 transition-all duration-200 group/btn"
          >
            {/* GitHub SVG Icon */}
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>View on GitHub</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>

          <span className="text-[11px] font-mono text-slate-500">repo.view</span>
        </div>
      </div>
    </div>
  );
}
