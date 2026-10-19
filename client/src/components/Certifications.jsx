import React from "react";
import { FiAward, FiCheckCircle } from "react-icons/fi";

const Certifications = ({ certificationsAndParticipations }) => {
  const defaultItems = [
    {
      title: "Data Structures and Algorithms in Java",
      organization: "NPTEL",
      type: "Certification",
    },
    {
      title: "Complete Web Development Bootcamp",
      organization: "Udemy",
      type: "Certification",
    },
    {
      title: "Secured Second Runner-Up position",
      organization: "BGMIT, Mudhol",
      type: "Honor",
    },
    {
      title: "Qualified for Zonal Finals held in Mumbai",
      organization: "Zonal Finals",
      type: "Honor",
    },
    {
      title: "Participated in INVENTRA 2025 Hackathon",
      organization: "KLE College of Engineering",
      type: "Participation",
    }
  ];

  const list = certificationsAndParticipations || defaultItems;

  return (
    <section id="certifications" className="py-16 border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
            Certifications & Participations
          </h2>
          <div className="h-0.5 w-12 bg-slate-900 dark:bg-white mt-1.5" />
        </div>

        {/* Clean Minimalist List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs flex items-start gap-3 hover:border-slate-400 dark:hover:border-slate-700 transition-colors"
            >
              <div className="mt-0.5 text-accent-600 dark:text-accent-400 shrink-0">
                {item.type === "Honor" ? (
                  <FiAward className="w-4 h-4 text-amber-500" />
                ) : (
                  <FiCheckCircle className="w-4 h-4" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                  {item.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
