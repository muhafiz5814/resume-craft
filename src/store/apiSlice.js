// Using RTK query to fetch and post data to server

import { nanoid } from "@reduxjs/toolkit"
import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3030"

// providesTags and invalidatTags are used to invalidate the cache stored by rtk query, whenever we update the server data.
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

    addResume: build.mutation({
      query: (newResume) => ({
        url: `/resumes`,
        method: `POST`,
        body: JSON.stringify({id:nanoid() ,...newResume})
      }),
      invalidatesTags: ["Resumes"]
    }),

    updateResume: build.mutation({
      query: ({ id, updatedResume }) => ({
        url: `/resumes/${id}`,
        method: 'PUT',
        body: updatedResume
      }), 
      invalidatesTags: ["Resumes", "Resume"]
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

export const {useGetResumesQuery, useGetResumeQuery, useDeleteResumeMutation, useAddResumeMutation, useUpdateResumeMutation} = resumeApi