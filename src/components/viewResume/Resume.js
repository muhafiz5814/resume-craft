import { useEffect } from "react"
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
import { useDispatch} from "react-redux"

// First get the data from the server.
// Once got, store it in local store state.
// Use this local store state to access individual section data from perticular section component.
const Resume = () => {

  // get id value from url parameters using useParams hook
  const {id} = useParams()
  const dispatch = useDispatch()
  
  // Get a single resume from server with id
  const {data, isLoading} = useGetResumeQuery(id)

  // Set the local store state with recieved data
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