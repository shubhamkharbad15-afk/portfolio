import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-16 border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
            Projects
          </h2>
          <div className="h-0.5 w-12 bg-slate-900 dark:bg-white mt-1.5" />
        </div>

        {/* Projects List without placeholder images */}
        <div className="space-y-6">
          {(projects || []).map((project) => (
            <article
              key={project.id}
              className="p-6 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-slate-200 dark:border-dark-border">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.inProgress ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30 font-semibold">
                        In Progress
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-300 font-medium mt-1">
                    {project.stackString}
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-3 pt-1 sm:pt-0 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <>
                      <span className="text-slate-300 dark:text-slate-700">|</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 dark:text-accent-400 hover:underline transition-colors"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    </>
                  )}
                </div>
              </div>

              {/* Resume bullet points */}
              <div className="pt-4">
                <ul className="space-y-2.5">
                  {(project.bullets || []).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-3.5 border-t border-slate-200 dark:border-dark-border">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-dark-border font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
