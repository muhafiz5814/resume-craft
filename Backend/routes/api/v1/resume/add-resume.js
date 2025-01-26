import { addResume } from "../../../../controllers/ResumeController.js";

export default async (req, res) => {
    const resumeDetails = req.body;
    try {
        const { resume } = await addResume(resumeDetails);
        res.json(resume);
    } catch (error) {
        res.status(error.status).json({ message: "Server Error, unable to add new resume.", ...error });
    }
}