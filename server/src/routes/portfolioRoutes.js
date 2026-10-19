import { Router } from "express";
import {
  getProfile,
  getProjects,
  getSkills,
  getAchievements,
  getCertifications,
} from "../controllers/portfolioController.js";

const router = Router();

router.get("/profile", getProfile);
router.get("/projects", getProjects);
router.get("/skills", getSkills);
router.get("/achievements", getAchievements);
router.get("/certifications", getCertifications);

export default router;
