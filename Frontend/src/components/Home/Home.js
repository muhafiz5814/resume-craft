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
            ? <div>
                <h2>Loading...</h2>
                <p className="delay-message">It may take longer than usual for first time load due to free hosting plan. Sorry for delay and Thanks for patience.</p>
              </div>
            : error 
              ? <p>Unable to fetch data, <span style={{color: "red"}}>internal server error!</span> Reload or please try later.</p>
              : resumes.map(resume => <ResumeCard key={resume._id} id={resume._id} name={resume.basicInfo.name} onDelete={() => deleteHandler(resume._id)} />)          
          }
        </div>
      </div>
    </Layout>
  );
};

export default Home;
