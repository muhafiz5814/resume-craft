import Layout from "../Layout"
import AboutMeForm from "./AboutMeForm"
import BasicInfoForm from "./BasicInfoForm"
import EducationForm from "./EducationForm"

const CreateResume = () => {
  return (
    <Layout>
      <BasicInfoForm />
      <AboutMeForm />
      <EducationForm />
    </Layout>
  )
}

export default CreateResume