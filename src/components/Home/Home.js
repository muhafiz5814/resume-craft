import "./Home.css";
import Layout from "../Layout";
import ResumeCard from "./ResumeCard";
import { useDeleteResumeMutation, useGetResumesQuery } from "../../store/apiSlice";
import { Link } from "react-router-dom";
import { clearTempResume } from "../../store/tempResumeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// first get the data from server and then show on UI
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearTempResume())
  },[])

  const { data: resumes, isLoading, error } = useGetResumesQuery();

  const [deleteResume] = useDeleteResumeMutation()

  // Before deleting the item, ask for confirmation from user.
  const deleteHandler = (id) => {
    const confirm = window.confirm("Do you want to delete item?")
    if(confirm) deleteResume(id)
  }
  return (
    <Layout>
      <div className="home">
        <div className="create-resume">
          <Link to={`/create`}>
            Create Resume
          </Link>
        </div>
        <div className="resume-cards">
          {isLoading 
            ? <h2>Please wait...</h2> 
            : resumes.map(resume => <ResumeCard key={resume.id} id={resume.id} name={resume.basicInfo.name} onDelete={() => deleteHandler(resume.id)} />)          
          }
        </div>
      </div>
    </Layout>
  );
};

export default Home;
