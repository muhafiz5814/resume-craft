// A local store state of resume to be used by components to show on UI
import { createSlice } from "@reduxjs/toolkit";

const localDataSlice = createSlice({
  name: "localResume",
  initialState: [],
  reducers: {
    setResume: (state, action) => action.payload
  }
})

export const {setResume} = localDataSlice.actions

export const localDataReducer = localDataSlice.reducer