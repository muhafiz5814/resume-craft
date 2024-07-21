import { createSlice } from "@reduxjs/toolkit";

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
        id: "",
        school: "",
        startYear: "",
        endYear: "",
        descriptions: ""
      }
    ],
  experience: [
      {
        id: "",
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
      id: "",
      title: "",
      startOn: "",
      endOn: "",
      url: "",
      description: ""
    }
  ],
  skills: [
    {
      id: "",
      skill: "",
      rating: 0
    }
  ]
}

const tempResumeSlice = createSlice({
  name: "tempResume",
  initialState: initialData,
  reducers: {
    updateBasicInfo: (state, action) => {state.basicInfo = {...state.basicInfo, ...action.payload}}
  }
})

export const {updateBasicInfo} =tempResumeSlice.actions

export const tempResumeReducer = tempResumeSlice.reducer