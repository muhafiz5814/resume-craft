import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialData = {
  id: nanoid(),
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
        id: nanoid(),
        school: "",
        startYear: "",
        endYear: "",
        description: ""
      }
    ],
  experience: [
      {
        id: nanoid(),
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
      id: nanoid(),
      title: "",
      startOn: "",
      endOn: "",
      url: "",
      description: ""
    }
  ],
  skills: [
    {
      id: nanoid(),
      skill: "",
      rating: 0
    }
  ]
}

const tempResumeSlice = createSlice({
  name: "tempResume",
  initialState: initialData,
  reducers: {
    updateBasicInfo: (state, action) => {state.basicInfo = {...state.basicInfo, ...action.payload}},
    updateAboutMe: (state, action) => {state.aboutMe = action.payload.description},
    addEducation: (state, action) => {state.education = [...state.education, {id: nanoid(), ...action.payload}]},
    updateEducation: (state, action) => {state.education = action.payload},
    addExperience: (state, action) => {state.experience = [...state.experience, {id: nanoid(), ...action.payload}]},
    updateExperience: (state, action) => {state.experience = action.payload}
  }
})

export const {updateBasicInfo, updateAboutMe, addEducation, updateEducation, addExperience, updateExperience} =tempResumeSlice.actions

export const tempResumeReducer = tempResumeSlice.reducer