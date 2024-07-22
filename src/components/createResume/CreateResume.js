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
import { useNavigate } from "react-router-dom"


const CreateResume = () => {

  const navigate = useNavigate()
  const resume = useSelector(state => state.tempResume)
  const [addResume, {isLoading}] = useAddResumeMutation()
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addResume(resume)
    dispatch(clearTempResume())
    navigate("/")
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <BasicInfoForm />
        <AboutMeForm />
        <EducationForm />
        <ExperienceForm />
        <Form />
        <SkillsForm />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default CreateResume