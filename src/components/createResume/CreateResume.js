import Layout from "../Layout";
import AboutMeForm from "../formComponents/AboutMeForm";
import BasicInfoForm from "../formComponents/BasicInfoForm";
import EducationForm from "../formComponents/EducationForm";
import ExperienceForm from "../formComponents/ExperienceForm";
import Form from "../formComponents/ProjectsForm";
import SkillsForm from "../formComponents/SkillsForm";
import { useAddResumeMutation } from "../../store/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearTempResume } from "../../store/tempResumeSlice";
import { useNavigate } from "react-router-dom";

const CreateResume = () => {
  const navigate = useNavigate();
  const resume = useSelector((state) => state.tempResume);
  const [addResume, { isLoading }] = useAddResumeMutation();
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addResume(resume);
    dispatch(clearTempResume());
    navigate("/");
  };

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
  );
};

export default CreateResume;
