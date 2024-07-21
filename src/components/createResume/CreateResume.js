import Layout from "../Layout"
import AboutMeForm from "./AboutMeForm"
import BasicInfoForm from "./BasicInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"

const CreateResume = () => {
  return (
    <Layout>
      <BasicInfoForm />
      <AboutMeForm />
      <EducationForm />
      <ExperienceForm />
    </Layout>
  )
}

export default CreateResume