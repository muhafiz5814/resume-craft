import { Router } from "express";

import getAllResumes from "./get-all-resumes.js";
import addResume from "./add-resume.js";
import deleteResume from "./delete-resume.js";
import updateResume from "./update-resume.js";
import getResume from "./get-resume.js";

const router = Router();

// Get all resumes.
router.get("/all", getAllResumes);

router.post("/add", addResume);

router.route("/:id")
    .get(getResume)
    .put(updateResume)
    .delete(deleteResume);

export default router;