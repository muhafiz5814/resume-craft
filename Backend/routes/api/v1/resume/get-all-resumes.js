import { getAllResumes } from "../../../../controllers/ResumeController.js";

/**
 * If no error, sends all resumes in response.
 * If any error, sends error in response.
 */
export default async (req, res) => {
    try {
        const { resumes } = await getAllResumes();
        res.json({resumes});
    } catch (error) {
        res.status(error.status).json({message: "Server Error", ...error});
    }
}