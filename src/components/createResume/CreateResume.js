import Layout from "../Layout"
import AboutMeForm from "./AboutMeForm"
import BasicInfoForm from "./BasicInfoForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"
import Form from "./ProjectsForm"
import SkillsForm from "./SkillsForm"
import { useAddResumeMutation } from "../../store/apiSlice"
import { useDispatch, useSelector } from "react-redux"
import { clearTempResume } from "../../store/tempResumeSlice"


const CreateResume = () => {

  const resume = useSelector(state => state.tempResume)
  const [addResume, {isLoading}] = useAddResumeMutation()
  const dispatch = useDispatch()

  const handleSubmit = () => {
    addResume(resume)
    dispatch(clearTempResume())
  }

  return (
    <Layout>
      <BasicInfoForm />
      <AboutMeForm />
      <EducationForm />
      <ExperienceForm />
      <Form />
      <SkillsForm />
      <button onClick={handleSubmit}>Submit</button>
    </Layout>
  )
}

export default CreateResume