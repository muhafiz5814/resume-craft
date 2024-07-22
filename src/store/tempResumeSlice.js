import { createSlice} from "@reduxjs/toolkit";

const initialData = {
  basicInfo: {
    name: "",
    designation: "",
    address: "",
    email: "",
    phone: "",
    website: ""
  },
  aboutMe: "",
  education:  [
      {
        school: "",
        startYear: "",
        endYear: "",
        description: ""
      }
    ],
  experience: [
      {
        designation: "",
        organization: "",
        startYear: "",
        endYear: "",
        location: "",
        description: ""
      }
    ],
  projects: [
    {
      title: "",
      startMonth: "",
      endMonth: "",
      url: "",
      description: ""
    }
  ],
  skills: [
    {
      skill: "",
      rating: 0
    }
  ]
}

const tempResumeSlice = createSlice({
  name: "tempResume",
  initialState: initialData,
  reducers: {
    setTempResume: (state, action) => action.payload,
    updateBasicInfo: (state, action) => {state.basicInfo = {...state.basicInfo, ...action.payload}},
    updateAboutMe: (state, action) => {state.aboutMe = action.payload.description},
    addEducation: (state, action) => {state.education = [...state.education, {...action.payload}]},
    updateEducation: (state, action) => {state.education = action.payload},
    addExperience: (state, action) => {state.experience = [...state.experience, {...action.payload}]},
    updateExperience: (state, action) => {state.experience = action.payload},
    addProject: (state, action) => {state.projects = [...state.projects, {...action.payload}]},
    updateProjects: (state, action) => {state.projects = action.payload},
    addSkill: (state, action) => {state.skills = [...state.skills, {...action.payload}]},
    updateSkills: (state, action) => {state.skills = action.payload},
    clearTempResume: (state) => state = initialData
  }
})

export const {setTempResume, updateBasicInfo, updateAboutMe, addEducation, updateEducation, addExperience, updateExperience, addProject, updateProjects, addSkill, updateSkills, clearTempResume} = tempResumeSlice.actions

export const tempResumeReducer = tempResumeSlice.reducer