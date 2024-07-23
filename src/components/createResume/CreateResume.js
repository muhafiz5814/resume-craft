import "../../forms.css"
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

// use an extra local state in store to first get data in the local store from form, and then send the data to server
const CreateResume = () => {
  const navigate = useNavigate();
  // get resume from local store state to send to server
  const resume = useSelector((state) => state.tempResume);

  const [addResume, { isLoading }] = useAddResumeMutation();
  const dispatch = useDispatch();

  // First send the data to server from local state then clear the local state to be available for next input and also navigate to the home page after sumbmitting.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addResume(resume);
    dispatch(clearTempResume());
    navigate("/");
  };

  return (
    <Layout>
      <div className="resume-form-container">
        <form onSubmit={handleSubmit}>
          <BasicInfoForm />
          <AboutMeForm />
          <EducationForm />
          <ExperienceForm />
          <Form />
          <SkillsForm />
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </Layout>
  );
};

export default CreateResume;
