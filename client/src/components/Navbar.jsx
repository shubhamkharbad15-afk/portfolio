import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Education", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ activeSection }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b backdrop-blur-md ${
        scrolled
          ? "bg-white/95 dark:bg-[#090A0D]/95 border-slate-200 dark:border-dark-border shadow-sm py-2.5 sm:py-3"
          : "bg-white/85 dark:bg-[#090A0D]/85 border-slate-200/80 dark:border-dark-border/80 py-3.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 border border-slate-800 dark:border-white flex items-center justify-center font-bold text-xs sm:text-sm tracking-tight transition-transform group-hover:scale-105 shadow-sm shrink-0">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors whitespace-nowrap leading-tight">
              Shubham Kharbad
            </span>
            <span className="text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 hidden xs:block leading-tight">
              Computer Science & Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border p-1 rounded-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  isActive
                    ? "bg-white dark:bg-dark-card text-accent-600 dark:text-accent-400 shadow-sm border border-slate-200/60 dark:border-dark-border"
                    : "text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/resume.pdf"
            download="Shubham_Kharbad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-accent-600 hover:bg-accent-700 text-white transition-colors"
            title="Download Resume"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-card transition-colors"
          >
            {isDark ? <FiSun className="w-4 h-4 text-amber-400" /> : <FiMoon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-200 dark:border-dark-border bg-white dark:bg-dark-bg px-4 pt-2 pb-5 shadow-lg"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-slate-100 dark:bg-dark-surface text-accent-600 dark:text-accent-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-surface"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 mt-2 border-t border-slate-200 dark:border-dark-border">
                <a
                  href="/resume.pdf"
                  download="Shubham_Kharbad_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold bg-accent-600 text-white"
                >
                  <FiDownload className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
