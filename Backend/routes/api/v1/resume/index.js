import { Router } from "express";

import getAllResumes from "./get-all-resumes.js";
import addResume from "./add-resume.js";
import deleteResume from "./delete-resume.js";

const router = Router();

// Get all resumes.
router.get("/all", getAllResumes);

router.post("/add", addResume);

router.delete("/:id", deleteResume);

router.put("/update/:id", (req, res) => {res.send(`To update a resume of id ${req.params.id} path reached.`)});

export default router;