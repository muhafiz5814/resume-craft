import { Router } from "express";

const router = Router();

router.get("/all", (req, res) => {res.send("Get all resumes path reached.")});

router.post("/add", (req, res) => {res.send("Add new resume path reached.")});

router.delete("/delete/:id", (req, res) => {res.send(`To delete a resume of id ${req.params.id} path reached.`)});

router.put("/update/:id", (req, res) => {res.send(`To update a resume of id ${req.params.id} path reached.`)});

export default router;