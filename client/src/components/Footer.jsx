import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs">
              SK
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                {personal?.name || "Shubham Kharbad"}
              </p>
              <p className="text-[10px] font-medium text-slate-600 dark:text-slate-400">
                CSE @ KIT's College of Engineering
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personal?.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-surface border border-slate-300 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white shadow-xs transition-colors"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href={personal?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-surface border border-slate-300 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] shadow-xs transition-colors"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal?.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-dark-surface border border-slate-300 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-red-500 shadow-xs transition-colors"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-dark-card transition-colors shadow-xs"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-dark-border flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-2 font-medium">
          <p>
            &copy; {new Date().getFullYear()} Shubham Kharbad. Built with React & Node.js.
          </p>
          <p className="font-mono text-[11px]">
            Kolhapur, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
