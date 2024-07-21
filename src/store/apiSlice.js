import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3030"

export const resumeApi = createApi({
  reducerPath: "resumeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json")
      headers.set("Accept", "application/json")
      return headers
    }
  }),
  endpoints: (build) => ({
    getResumes: build.query({
      query: () => "resumes"
    }),

    getResume: build.query({
      query: (id) => `resumes/${id}`
    })
  })
})

export const {useGetResumesQuery, useGetResumeQuery} = resumeApi