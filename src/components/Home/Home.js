import "./Home.css";
import Layout from "../Layout";
import ResumeCard from "./ResumeCard";
import { useDeleteResumeMutation, useGetResumesQuery } from "../../store/apiSlice";
import { Link } from "react-router-dom";
import { clearTempResume } from "../../store/tempResumeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearTempResume())
  },[])

  const { data: resumes, isLoading, error } = useGetResumesQuery();
  console.log(resumes);
  const [deleteResume] = useDeleteResumeMutation()

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
        {isLoading 
          ? <h2>Please wait...</h2> 
          : resumes.map(resume => <ResumeCard key={resume.id} id={resume.id} name={resume.basicInfo.name} onDelete={() => deleteHandler(resume.id)} />)          
        }
      </div>
    </Layout>
  );
};

export default Home;
