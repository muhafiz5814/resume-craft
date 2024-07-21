import "./Resume.css"
import Layout from "../Layout"
import BasicInfo from "./BasicInfo"
import AboutMe from "./AboutMe"
import EducationDetails from "./EducationDetails"
import ExperienceDetails from "./ExperienceDetails"
import Projects from "./Projects"
import Skills from "./Skills"

const Resume = () => {
  return (
    <Layout>
      <div className="resume-details">
        <BasicInfo />
        <AboutMe />
        <EducationDetails />
        <ExperienceDetails />
        <Projects />
        <Skills />
      </div>
    </Layout>
  )
}

export default Resume