import React, { useEffect } from "react";
import { FiX, FiGithub, FiExternalLink, FiCheckCircle, FiClock, FiLayers, FiCpu } from "react-icons/fi";
import ImageWithFallback from "./ImageWithFallback";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-xl shadow-2xl z-10">
        {/* Header Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-dark-border">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            fallbackText={project.title}
            fallbackTag={project.category}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close Project Modal"
            className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>

          {/* Badges in image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/70 text-white border border-white/10">
              {project.category}
            </span>

            {project.inProgress ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-amber-500 text-slate-950">
                <FiClock className="w-3 h-3" />
                In Progress
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-emerald-600 text-white">
                <FiCheckCircle className="w-3 h-3" />
                Completed
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <FiLayers className="w-3.5 h-3.5 text-accent-500" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <FiCpu className="w-3.5 h-3.5 text-accent-500" />
                Technical Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div key={key} className="p-2 rounded bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border">
                    <p className="text-[10px] font-mono uppercase text-slate-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bullet Points */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Key Implementation Details
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-dark-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-100 dark:bg-dark-surface rounded-lg border border-slate-200 dark:border-dark-border">
                  Live Demo: In Development
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-dark-surface transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
