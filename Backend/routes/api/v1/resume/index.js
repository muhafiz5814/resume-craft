import { Router } from "express";

import getAllResumes from "./get-all-resumes.js";
import addResume from "./add-resume.js";
import deleteResume from "./delete-resume.js";
import updateResume from "./update-resume.js";

const router = Router();

// Get all resumes.
router.get("/all", getAllResumes);

router.post("/add", addResume);

router.delete("/:id", deleteResume);

router.put("/:id", updateResume);

export default router;