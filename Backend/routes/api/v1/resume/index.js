import { Router } from "express";

import getAllResumes from "./get-all-resumes.js";
import addResume from "./add-resume.js";
import deleteResume from "./delete-resume.js";
import updateResume from "./update-resume.js";
import getResume from "./get-resume.js";

const router = Router();

// Get all resumes.
router.get("/all", getAllResumes);

// Add a new resume to database.
router.post("/add", addResume);

// Use route method to use different http methods on same path endpoint.
// Use respective handlers in different http methods.
router.route("/:id")
    .get(getResume)
    .put(updateResume)
    .delete(deleteResume);

export default router;