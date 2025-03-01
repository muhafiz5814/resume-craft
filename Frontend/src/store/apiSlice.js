// Using RTK query to fetch and post data to server

import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// base url of the server from where to fetch data
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
    // Gets all the resumes from the server
    getResumes: build.query({
      query: () => "resumes",
      providesTags: ["Resumes"]
    }),

    // Gets only one resume of the provided id
    getResume: build.query({
      query: (id) => `resumes/${id}`,
      providesTags: ["Resume"]
    }),

    // Adds new resume to the server, It adds id property and value to the object before sending it to the server
    // As it updates the database, cache stored by RTK query needs to be invalidated, to get updated data from server
    addResume: build.mutation({
      query: (newResume) => ({
        url: "resumes",
        method: `POST`,
        body: newResume
      }),
      invalidatesTags: ["Resumes"]
    }),

    // Updates a resume with provided id and invalidates the cache, here "Resume" tagged cache will also be invalidated as the resume has updated.
    updateResume: build.mutation({
      query: ({ id, updatedResume }) => ({
        url: `resumes/${id}`,
        method: 'PUT',
        body: updatedResume
      }), 
      invalidatesTags: ["Resumes", "Resume"]
    }),

    // Deletes a perticular resume with provided id, also invalidates the cache
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