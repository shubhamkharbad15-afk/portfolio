import { portfolioData } from "../data/portfolioData.js";

// GET /api/profile
export const getProfile = (req, res) => {
  res.status(200).json({
    success: true,
    personal: portfolioData.personal,
    education: portfolioData.education,
  });
};

// GET /api/projects
export const getProjects = (req, res) => {
  const { category } = req.query;
  let projects = portfolioData.projects;

  if (category && category !== "all") {
    projects = projects.filter((p) => p.categoryFilter === category);
  }

  res.status(200).json(projects);
};

// GET /api/skills
export const getSkills = (req, res) => {
  res.status(200).json(portfolioData.technicalSkills || portfolioData.skills);
};

// GET /api/achievements
export const getAchievements = (req, res) => {
  res.status(200).json(portfolioData.certificationsAndParticipations || portfolioData.achievements);
};

// GET /api/certifications
export const getCertifications = (req, res) => {
  res.status(200).json(portfolioData.certificationsAndParticipations || portfolioData.certifications);
};
