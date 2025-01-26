import { deleteResume } from "../../../../controllers/ResumeController.js";

export default async (req, res) => {
    const id = req.params.id;

    try {
        const deletedResume = await deleteResume(id);
        res.json(deletedResume);
    } catch (error) {
        error.status === 400
            ? error.message = "Bad request, resume not found."
            : error.message = "Server Error, unable to delete resume."
        
        res.status(error.status).json(error);
    }
}