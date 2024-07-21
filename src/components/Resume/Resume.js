import "./Resume.css"
import Layout from "../Layout"
import BasicInfo from "../BasicInfo/BasicInfo"
import AboutMe from "../AboutMe/AboutMe"
import EducationDetails from "../EducationDetails/EducationDetails"
import ExperienceDetails from "../ExperienceDetails/ExperienceDetails"
import Projects from "../Projects/Projects"
import Skills from "../Skills/Skills"

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