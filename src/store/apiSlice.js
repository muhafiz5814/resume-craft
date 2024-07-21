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
      query: () => "resumes",
      providesTags: ["Resumes"]
    }),

    getResume: build.query({
      query: (id) => `resumes/${id}`,
      providesTags: ["Resume"]
    }),

    deleteResume: build.mutation({
      query: (id) => ({
        url: `resumes/${id}`,
        method: `DELETE`
      }),
      invalidatesTags: ["Resumes", "Resume"]
    })
  })
})

export const {useGetResumesQuery, useGetResumeQuery, useDeleteResumeMutation} = resumeApi