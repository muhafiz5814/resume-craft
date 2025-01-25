import { Router } from "express";

import getAllResumes from "./get-all-resumes.js";

const router = Router();

// Get all resumes.
router.get("/all", getAllResumes);

router.post("/add", (req, res) => {res.send("Add new resume path reached.")});

router.delete("/delete/:id", (req, res) => {res.send(`To delete a resume of id ${req.params.id} path reached.`)});

router.put("/update/:id", (req, res) => {res.send(`To update a resume of id ${req.params.id} path reached.`)});

export default router;