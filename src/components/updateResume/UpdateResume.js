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

const UpdateResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id", id);
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.tempResume);
  console.log("resumeData at start ", resumeData);
  let loaded = false;

  const { data, isLoading, error } = useGetResumeQuery(id);
  const [updateResume, { isloading }] = useUpdateResumeMutation();

  console.log("Before useeffect 1 data", data);
  useEffect(() => {
    console.log("inside use effect 1");
    if (data) {
      const resume = {
        basicInfo: data.basicInfo,
        aboutMe: data.aboutMe,
        education: data.education,
        experience: data.experience,
        projects: data.projects,
        skills: data.skills,
      };
      console.log("resume: ", resume);
      dispatch(setTempResume(resume));
      console.log("After the dispatch");
    }
  }, [data, dispatch]);
  console.log("After useeffect 1 data", data);

  console.log("Loaded before use effect2: ", loaded);

  // useEffect(() => {
  //   console.log("inside use effect 2")
  //   console.log("resumeData.aboutMe", resumeData.aboutMe)
  //   if(resumeData.aboutMe){
  //     console.log("inside resemeData useEffect: ", resumeData.aboutMe)
  //     loaded = true;
  //   }
  // }, [resumeData, loaded])

  console.log("Loaded After use effect2: ", loaded);
  const handleSubmit = (evt, id) => {
    evt.preventDefault();
    console.log(resumeData);
    updateResume({ id, updatedResume: { id, ...resumeData } });
    dispatch(clearTempResume());
    navigate("/");
  };

  return (
    <Layout>
      {resumeData.aboutMe ? (
        <form onSubmit={(evt) => handleSubmit(evt, id)}>
          <BasicInfoForm />
          <AboutMeForm />
          <EducationForm />
          <ExperienceForm />
          <ProjectsForm />
          <SkillsForm />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>Loading...</h2>
      )}
    </Layout>
  );
};

export default UpdateResume;
