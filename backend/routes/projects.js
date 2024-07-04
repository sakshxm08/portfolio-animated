import express from "express";
import {
  createProject,
  editProjectById,
  getProjectById,
  getProjects,
} from "../controllers/projects.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.patch("/:id", editProjectById);

export default router;
