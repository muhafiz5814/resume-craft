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
        descriptions: ""
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
    updateEducation: (state, action) => {state.education = action.payload}
  }
})

export const {updateBasicInfo, updateAboutMe, addEducation, updateEducation} =tempResumeSlice.actions

export const tempResumeReducer = tempResumeSlice.reducer