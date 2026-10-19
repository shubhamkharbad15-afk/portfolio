import React from "react";

const Skills = ({ technicalSkills }) => {
  const defaultSkills = [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "JavaScript", "Java"]
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "React.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "FastAPI"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Docker", "VS Code", "Postman", "CI/CD (GitHub Actions)"]
    },
    {
      category: "Core Concepts",
      items: ["Data Structures & Algorithms (DSA)", "OOP", "DBMS", "Operating Systems (OS)", "Computer Networks (CN)"]
    }
  ];

  const skillGroups = technicalSkills || defaultSkills;

  return (
    <section id="skills" className="py-16 border-b border-slate-200 dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
            Technical Skills
          </h2>
          <div className="h-0.5 w-12 bg-slate-900 dark:bg-white mt-1.5" />
        </div>

        {/* Clean Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-dark-card border border-slate-300 dark:border-dark-border shadow-xs"
            >
              <h3 className="text-xs font-mono uppercase font-bold text-slate-700 dark:text-slate-300 tracking-wider mb-3 pb-2 border-b border-slate-200 dark:border-dark-border">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-dark-border font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
