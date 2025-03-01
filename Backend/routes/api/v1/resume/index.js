import { Router } from "express";

import getAllResumes from "./get-all-resumes.js";
import addResume from "./add-resume.js";
import deleteResume from "./delete-resume.js";
import updateResume from "./update-resume.js";
import getResume from "./get-resume.js";

const router = Router();

// Use route method to use different http methods on same path endpoint.
// Use respective handlers in different http methods.

router.route("/")
    .get(getAllResumes) // Get all resumes.
    .post(addResume);   // Add a new resume to database.

router.route("/:id")
    .get(getResume) // Get a single resume of provided id.
    .put(updateResume)  // Update resume of provided id.
    .delete(deleteResume);  // Delete resume of provided id.

export default router;