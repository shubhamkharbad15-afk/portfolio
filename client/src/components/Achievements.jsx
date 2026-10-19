import React from "react";
import { FiAward, FiMapPin, FiCalendar } from "react-icons/fi";
import ImageWithFallback from "./ImageWithFallback";

const Achievements = ({ achievements }) => {
  return (
    <section id="achievements" className="py-20 border-t border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-accent-600 dark:text-accent-400 mb-2">
            // 04. Recognition
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Achievements & Competitions
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
            Technical hackathons, project presentations, and regional competitive rounds.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(achievements || []).map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  fallbackText={item.title}
                  fallbackTag={item.badge}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-semibold bg-accent-600 text-white">
                    <FiAward className="w-3 h-3" />
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <FiCalendar className="w-3 h-3 text-slate-400" />
                    {item.date} • {item.location}
                  </p>
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-600 dark:text-accent-400 mt-0.5 mb-2.5">
                    {item.event}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-dark-border flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 text-[11px]">
                    <FiMapPin className="w-3 h-3 text-slate-400" />
                    {item.location}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
