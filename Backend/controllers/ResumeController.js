import Resume from "../models/Resume.js";

/**
 * Gets all Resumes from database server and return as a promise.
 * 
 * @returns Resolved promise containing all resumes objects.
 * @returns Rejected promise containing reject causing error.
 */
export const getAllResumes = async () => {
    try {
        const resumes = await Resume.find({});
        return Promise.resolve({resumes})
    } catch (error) {
        return Promise.reject({status: 500, ...error});
    }
}