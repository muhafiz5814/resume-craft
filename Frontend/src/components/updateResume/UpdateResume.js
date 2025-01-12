import "../../forms.css"
import { useEffect } from "react";
import Layout from "../Layout";
import AboutMeForm from "../formComponents/AboutMeForm";
import BasicInfoForm from "../formComponents/BasicInfoForm";
import EducationForm from "../formComponents/EducationForm";
import ExperienceForm from "../formComponents/ExperienceForm";
import ProjectsForm from "../formComponents/ProjectsForm";
import SkillsForm from "../formComponents/SkillsForm";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetResumeQuery,
  useUpdateResumeMutation,
} from "../../store/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setTempResume, clearTempResume } from "../../store/tempResumeSlice";

// To update the resume, use same steps as in creating the resume
// First initialize the local state with the resume to update
// Get the data form local store state and pre fill the form components to update.
// Do all the mutation in local state available in store
// Once done get the state value from local store, send the state value to server.
// Navigate back to the home page.
const UpdateResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.tempResume);

  const { data, isLoading, error } = useGetResumeQuery(id);
  const [updateResume, { isloading }] = useUpdateResumeMutation();

// This useEffect will be used to initialize the local store state with the server recieved data.
  useEffect(() => {

    if (data) {
      // Do not want to send the id field as the local store state does not have that field.
      const resume = {
        basicInfo: data.basicInfo,
        aboutMe: data.aboutMe,
        education: data.education,
        experience: data.experience,
        projects: data.projects,
        skills: data.skills,
      };

      dispatch(setTempResume(resume));

    }
  }, [data, dispatch]);

  // send data to server and then clear the local store state and navigate to home page.
  const handleSubmit = (evt, id) => {
    evt.preventDefault();
    updateResume({ id, updatedResume: { id, ...resumeData } });
    dispatch(clearTempResume());
    navigate("/");
  };

  return (
    <Layout>
      {resumeData.aboutMe ? (
        <div className="resume-form-container">
          <form onSubmit={(evt) => handleSubmit(evt, id)}>
            <BasicInfoForm />
            <AboutMeForm />
            <EducationForm />
            <ExperienceForm />
            <ProjectsForm />
            <SkillsForm />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </Layout>
  );
};

export default UpdateResume;
