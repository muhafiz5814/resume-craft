// configure the store
import { configureStore } from "@reduxjs/toolkit";
import { resumeApi } from "./apiSlice";
import {localDataReducer} from "./localDataSlice"
import { tempResumeReducer } from "./tempResumeSlice";

export const store = configureStore({
  reducer: {
    [resumeApi.reducerPath]: resumeApi.reducer,
    localResume: localDataReducer,
    tempResume: tempResumeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resumeApi.middleware)
})