import Layout from "../Layout"
import AboutMeForm from "./AboutMeForm"
import BasicInfoForm from "./BasicInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import ProjectsForm from "./ProjectsForm"

const CreateResume = () => {
  return (
    <Layout>
      <BasicInfoForm />
      <AboutMeForm />
      <EducationForm />
      <ExperienceForm />
      <ProjectsForm />
    </Layout>
  )
}

export default CreateResume