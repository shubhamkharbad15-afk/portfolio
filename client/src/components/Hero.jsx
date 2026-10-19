import React from "react";
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone } from "react-icons/fi";
import { SiCplusplus, SiReact } from "react-icons/si";
import ImageWithFallback from "./ImageWithFallback";

const Hero = ({ personal }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elPos = el.getBoundingClientRect().top;
      const offsetPos = elPos + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPos, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 border-b border-slate-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 text-xs font-mono font-medium mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for Software Engineering Roles</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                {personal?.name || "Shubham Kharbad"}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 mt-1">
                Computer Science Undergraduate & Full-Stack Developer
              </p>
            </div>

            {/* Profile Summary */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              {personal?.summary}
            </p>

            {/* Contact details list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300 pt-1 font-mono">
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-slate-500 dark:text-slate-400 w-3.5 h-3.5 shrink-0" />
                {personal?.location}
              </span>
              <a
                href={`mailto:${personal?.email}`}
                className="flex items-center gap-1.5 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                <FiMail className="text-slate-500 dark:text-slate-400 w-3.5 h-3.5 shrink-0" />
                {personal?.email}
              </a>
              <a
                href={`tel:${personal?.phone}`}
                className="flex items-center gap-1.5 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                <FiPhone className="text-slate-500 dark:text-slate-400 w-3.5 h-3.5 shrink-0" />
                {personal?.phone}
              </a>
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                B.Tech CGPA: {personal?.stats?.cgpa}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/resume.pdf"
                download="Shubham_Kharbad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <FiDownload className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-dark-card transition-colors shadow-xs"
              >
                <span>View Projects</span>
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-transparent border border-slate-300 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-card hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Contact</span>
              </button>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={personal?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 transition-colors shadow-xs"
                title="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={personal?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white dark:bg-dark-surface border border-slate-300 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] hover:border-slate-400 transition-colors shadow-xs"
                title="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Visual / Profile Card */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[340px]">
              {/* Photo Frame */}
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-dark-card border-2 border-slate-200 dark:border-dark-border p-2.5 shadow-xl">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-slate-900">
                  <ImageWithFallback
                    src={personal?.profileImage}
                    alt={personal?.name || "Shubham Kharbad"}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    fallbackText="Shubham Kharbad"
                    fallbackTag="Photo"
                  />
                  {/* Bottom gradient overlay with clean full text - NO overlapping badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <p className="text-base font-bold tracking-tight">{personal?.name}</p>
                    <p className="text-xs font-mono text-slate-300 mt-0.5">B.Tech CSE • KIT Kolhapur</p>
                  </div>
                </div>
              </div>

              {/* Clean Symmetrical Badges Below Photo (No overlap, no text clipping) */}
              <div className="grid grid-cols-2 gap-2 mt-3 w-full">
                <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-2 rounded-xl flex items-center gap-2 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <SiCplusplus className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono uppercase text-slate-400 truncate">Core Focus</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-white truncate">C++ & DSA</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-2 rounded-xl flex items-center gap-2 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-accent-500/10 text-accent-500 flex items-center justify-center shrink-0">
                    <SiReact className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono uppercase text-slate-400 truncate">Architecture</p>
                    <p className="text-xs font-bold text-slate-800 dark:text-white truncate">Full-Stack Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
