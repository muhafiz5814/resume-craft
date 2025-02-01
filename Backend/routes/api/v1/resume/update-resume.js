import { updateResume } from "../../../../controllers/ResumeController.js";

export default async (req, res) => {
    const id = req.params.id;
    const resumeDetails = req.body;

    try {
        const { updatedResume } = await updateResume(id, resumeDetails);
        res.json(updatedResume);
    } catch (error) {
        error.status === 400
            ? error.message = "Bad request, resume not found."
            : error.message = "Server Error, unable to update resume."
        
        res.status(error.status).json(error);
    }
}