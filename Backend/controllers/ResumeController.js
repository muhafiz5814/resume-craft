import Resume from "../models/Resume.js";

/**
 * Gets all Resumes from database server and return a promise.
 * 
 * @returns Resolved promise containing all resumes objects.
 * @returns Rejected promise containing rejection causing error.
 */
export const getAllResumes = async () => {
    try {
        // Get all resumes from database but exclude auto generated field `__v` from returned documents.
        const resumes = await Resume.find({}, { __v: 0 });
        
        // Retrun found resumes as a resolved promise.
        return Promise.resolve({ resumes });

    } catch (error) {
        // If error occures in getting the resumes from database.
        // Return a rejected promise with error and status: 500, showing it's a server error.
        return Promise.reject({ status: 500, ...error });
    }
}

/**
 * Gets a single resume document from database and returns a promise.
 * 
 * @param {string} id Id of the resume to get from database
 * @returns Resolved promise containing found resume object.
 * @returns Rejected promise containing rejection causing error.
 */
export const getResume = async (id) => {
    try {
        // Get a single resume of provided id but exclude auto generated field `__v` from returned document.
        const resume = await Resume.findById(id, { __v: 0 });

        // If no resume of provide id found, return a rejected promise with status 400, showing it's a client error.
        if (!resume) return Promise.reject({ status: 400 });

        // If resume with id found, return resume as resolved promise.
        return Promise.resolve({ resume });
        
    } catch (error) {
        // If error occures in getting the resume document from database.
        // Return a rejected promise with error and status 500, showing it's a server error.
        return Promise.reject({ status: 500, ...error });
    }
}

/**
 * Adds a new resume document in database collection and returns the newly inserted document as a promise.
 * 
 * @param {object} resumeDetails resume object to insert in database.
 * @returns Resolved promise containing newly created resume document.
 * @returns Rejected promise containing rejection causing error.
 */
export const addResume = async (resumeDetails) => {
    try {

        // Add a new resume in database.
        const resume = await Resume.create(resumeDetails);

        // Return a resolved promise containing newly inserted resume document.
        return Promise.resolve({ resume });

    } catch (error) {
        // If error occures in adding the resume document in database.
        // Return a rejected promise with error and status 500, showing it's a server error.
        return Promise.reject({ status: 500, ...error });
    }
}

/**
 * Deletes a resume from the database of provided `id` and returns a promise.
 * 
 * @param {string} id Id of the resume to delete.
 * @returns Resolved promise containing deleted resume document.
 * @returns Rejected promise containing rejection causing error.
 */
export const deleteResume = async (id) => {
    try {
        // Delete resume of provided id and store returned document in a variable.
        const deletedResume = await Resume.findByIdAndDelete(id);

        // If no deleted resume document is returned, it means there does not exists a resume of provided id.
        // Return a rejected promise with status 400, showing it's a client error.
        if (!deletedResume) return Promise.reject({ status: 400 });

        // Return resolved promise containing deleted resume, if resume deleted successfully.
        return Promise.resolve({ deletedResume });
        
    } catch (error) {
        // If error occures in deleting the resume document from database.
        // Return a rejected promise with error and status 500, showing it's a server error.
        return Promise.reject({status: 500, ...error})
    }
}

/**
 * Updates a resume of provided id and returns the updated resume document as a promise.
 * 
 * @param {string} id Id of the resume document to be updated.
 * @param {object} resumeDetails updated resume details object.
 * @returns Resolved promise containing updated resume document.
 * @returns Rejected promise containing rejection causing error.
 */
export const updateResume = async (id, resumeDetails) => {
    try {
        // Update the resume of provided id with provide details.
        // Return updated resume document from query instead of existing document.
        const resume = await Resume.findByIdAndUpdate(id, resumeDetails, { new: true });

        // If no updated resume is returned from the query, it means there does not exists a resume of provided id.
        // Return a rejected promise with status 400, showing it's a client error.
        if (!resume) return Promise.reject({ status: 400 });

        // Return resolved promise containing updated resume document, if resume document updated successfully.
        return Promise.resolve({ resume });

    } catch (error) {
        // If error occures in updating the resume document in database.
        // Return a rejected promise with error and status 500, showing it's a server error.
        return Promise.reject({ status: 500, ...error });
    }
}