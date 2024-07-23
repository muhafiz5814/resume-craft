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
  // When come creating or updating resume page, ensure to clear the tempResume.
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearTempResume())
  },[])

  // fetch data from server using query hook
  const { data: resumes, isLoading, error } = useGetResumesQuery();

  // get deleteResume method from mutation hook
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
        {/* Show error if the application is not connecting to the server properly */}
        <div className="resume-cards">
          {isLoading 
            ? <h2>Please wait...</h2>
            : error 
              ? <p>Unable to fetch data, please ensure to use <span style={{color: "green"}}>"resumes"</span> as database name in json server instead of <span style={{color: "red"}}>"api"</span></p>
              : resumes.map(resume => <ResumeCard key={resume.id} id={resume.id} name={resume.basicInfo.name} onDelete={() => deleteHandler(resume.id)} />)          
          }
        </div>
      </div>
    </Layout>
  );
};

export default Home;
