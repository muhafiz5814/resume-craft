import { deleteResume } from "../../../../controllers/ResumeController.js";

/**
 * If no error, sends success status with no-content in response.
 * If any error, sends error in response.
 */
export default async (req, res) => {
    const id = req.params.id;

    try {
        await deleteResume(id);
        res.sendStatus(204);
        
    } catch (error) {
        error.status === 400
            ? error.message = "Bad request, resume not found."
            : error.message = "Server Error, unable to delete resume."
        
        res.status(error.status).json(error);
    }
}