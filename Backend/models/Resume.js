import { Schema, model } from "mongoose";

// Create smaller schemas for every different small section of the resume document.
// Combine all these shcemas in one single schema to create a resume schema.


const basicInfoSchema = new Schema(
    {
        name: {type: String, required: true},
        designation: {type: String, required: true},
        address: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true},
        website: {type: String}
    },
    {_id: false}
);

const educationSchema = new Schema({
        institute: {type: String, required: true},
        startYear: {type: String, required: true},
        endYear: {type: String, required: true},
        description: {type: String}
});

const experienceSchema = new Schema ({
        designation: { type: String, required: true },
        organization: { type: String, required: true },
        startYear: { type: String, required: true },
        endYear: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true }
});

const projectSchema = new Schema({
    title: { type: String, required: true },
    startMonth: { type: String, required: true },
    endMonth: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
});

const skillSchema = new Schema({
    skill: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
});


// Complete Resume schema, consisting of different smaller schemas.
const resumeSchema = new Schema({
    basicInfo: {type: basicInfoSchema, required: true},
    aboutMe: {type: String, required: true},
    education: { type: [educationSchema], required: true },
    experience: { type: [experienceSchema], required: true },
    projects: { type: [projectSchema], required: true },
    skills: { type: [skillSchema], required: true }
});

// Create a model from resumeSchema.
const Resume = model("Resume", resumeSchema);

export default Resume;