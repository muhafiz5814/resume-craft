import { configureStore } from "@reduxjs/toolkit";
import { resumeApi } from "./apiSlice";
import {localDataReducer} from "./localDataSlice"

export const store = configureStore({
  reducer: {
    [resumeApi.reducerPath]: resumeApi.reducer,
    localResume: localDataReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resumeApi.middleware)
})