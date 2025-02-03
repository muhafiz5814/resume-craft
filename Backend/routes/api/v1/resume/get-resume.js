import { getResume } from "../../../../controllers/ResumeController.js";

/**
 * If no error, sends resume in response.
 * If any error, sends error in response.
 */
export default async (req, res) => {
    const id = req.params.id

    try {
        const { resume } = await getResume(id);
        res.json(resume);
    } catch (error) {
        error.status === 400
            ? error.message = "Bad request, resume not found."
            : error.message = "Server Error, unable to get resume."
        res.status(error.status).json(error);
    }
}