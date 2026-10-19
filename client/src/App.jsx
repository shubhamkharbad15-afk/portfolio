import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GitHubStats from "./components/GitHubStats";
import NetworkBackground from "./components/NetworkBackground";
import { portfolioData as localData } from "./data/portfolioData";

function App() {
  const [data, setData] = useState(localData);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || "";
        const [profileRes, projectsRes, skillsRes, certsRes] =
          await Promise.allSettled([
            fetch(`${apiBase}/api/profile`),
            fetch(`${apiBase}/api/projects`),
            fetch(`${apiBase}/api/skills`),
            fetch(`${apiBase}/api/certifications`),
          ]);

        const merged = { ...localData };

        if (profileRes.status === "fulfilled" && profileRes.value.ok) {
          const profileJson = await profileRes.value.json();
          if (profileJson.personal) {
            merged.personal = {
              ...merged.personal,
              ...profileJson.personal,
              profileImage: localData.personal.profileImage,
            };
          }
          if (profileJson.education) {
            merged.education = profileJson.education;
          }
        }

        if (projectsRes.status === "fulfilled" && projectsRes.value.ok) {
          const projectsJson = await projectsRes.value.json();
          if (Array.isArray(projectsJson) && projectsJson.length > 0) {
            merged.projects = projectsJson.map((p, idx) => ({
              ...p,
              image: localData.projects[idx]?.image || p.image,
            }));
          }
        }

        if (skillsRes.status === "fulfilled" && skillsRes.value.ok) {
          const skillsJson = await skillsRes.value.json();
          if (Array.isArray(skillsJson)) {
            merged.technicalSkills = skillsJson;
          }
        }

        if (certsRes.status === "fulfilled" && certsRes.value.ok) {
          const certsJson = await certsRes.value.json();
          if (Array.isArray(certsJson) && certsJson.length > 0) {
            merged.certificationsAndParticipations = certsJson.map((c, idx) => ({
              ...c,
              image: localData.certificationsAndParticipations[idx]?.image || c.image,
            }));
          }
        }

        setData(merged);
      } catch (err) {
        console.warn("Using local resume data fallback:", err);
      } finally {
        setTimeout(() => setLoading(false), 200);
      }
    };

    fetchApiData();
  }, []);

  // IntersectionObserver for active section highlighting in Navbar
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "projects",
      "skills",
      "certifications",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-dark-bg flex flex-col items-center justify-center z-50">
        <div className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-sm tracking-tight mb-3">
          SK
        </div>
        <div className="w-6 h-6 border-2 border-slate-300 dark:border-dark-border border-t-accent-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-accent-500/20 selection:text-accent-600 dark:selection:text-accent-400 font-sans">
      <NetworkBackground />
      <Navbar activeSection={activeSection} />

      <main>
        <Hero personal={data.personal} />
        <About personal={data.personal} education={data.education} />
        <Projects projects={data.projects} />
        <Skills technicalSkills={data.technicalSkills} />
        <Certifications certificationsAndParticipations={data.certificationsAndParticipations} />
        <GitHubStats githubUsername="shubhamkharbad15-afk" />
        <Contact personal={data.personal} />
      </main>

      <Footer personal={data.personal} />
      <ScrollToTop />
    </div>
  );
}

export default App;
