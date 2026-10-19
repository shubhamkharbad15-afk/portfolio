import React from "react";
import { FiCheck } from "react-icons/fi";

const About = ({ education, personal }) => {
  return (
    <section id="about" className="py-16 border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
            Education
          </h2>
          <div className="h-0.5 w-12 bg-slate-900 dark:bg-white mt-1.5" />
        </div>

        {/* Education Entries */}
        <div className="space-y-6">
          {(education || []).map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.institution}
                </h3>
                <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400">
                  {item.period}
                </span>
              </div>

              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 flex flex-wrap items-center gap-2">
                <span>{item.degree}</span>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  {item.grade}
                </span>
              </div>

              {item.details && (
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.details}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Spoken Languages */}
        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
            Languages Known:
          </span>
          <div className="flex items-center gap-3 text-xs font-medium text-slate-800 dark:text-slate-200">
            {(personal?.languages || ["Hindi", "English", "Marathi"]).map((lang, idx) => (
              <span key={lang} className="flex items-center gap-1 font-semibold">
                <FiCheck className="w-3.5 h-3.5 text-accent-600 dark:text-accent-400" />
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
