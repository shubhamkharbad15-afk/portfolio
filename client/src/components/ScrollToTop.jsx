import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
    >
      <FiArrowUp className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTop;
