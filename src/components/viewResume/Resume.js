import { useEffect, useState } from "react"
import "./Resume.css"
import Layout from "../Layout"
import BasicInfo from "./BasicInfo"
import AboutMe from "./AboutMe"
import EducationDetails from "./EducationDetails"
import ExperienceDetails from "./ExperienceDetails"
import Projects from "./Projects"
import Skills from "./Skills"
import { useParams } from "react-router-dom"
import { useGetResumeQuery } from "../../store/apiSlice"
import { setResume } from "../../store/localDataSlice"
import { useDispatch, useSelector } from "react-redux"

const Resume = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  
  const {data, isLoading, error} = useGetResumeQuery(id)

  useEffect(() => {
    if (data) {
      dispatch(setResume(data));
    }
  }, [data, dispatch]);

  return (
    <Layout>
      {isLoading
        ? <h2>Loading...</h2>
        : <div className="resume-details">
            <BasicInfo />
            <AboutMe />
            <EducationDetails />
            <ExperienceDetails />
            <Projects />
            <Skills />
          </div>
      }
      
    </Layout>
  )
}

export default Resume