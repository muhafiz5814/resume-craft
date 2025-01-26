import Resume from "../models/Resume.js";

/**
 * Gets all Resumes from database server and return as a promise.
 * 
 * @returns Resolved promise containing all resumes objects.
 * @returns Rejected promise containing reject causing error.
 */
export const getAllResumes = async () => {
    try {
        const resumes = await Resume.find({}, {__v: 0});
        return Promise.resolve({ resumes });
    } catch (error) {
        return Promise.reject({ status: 500, ...error });
    }
}

export const addResume = async (resumeDetails) => {
    try {
        const resume = await Resume.create(resumeDetails);
        return Promise.resolve({ resume });
    } catch (error) {
        return Promise.reject({ status: 500, ...error });
    }
}