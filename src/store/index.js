import { configureStore } from "@reduxjs/toolkit";
import { resumeApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [resumeApi.reducerPath]: resumeApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(resumeApi.middleware)
})