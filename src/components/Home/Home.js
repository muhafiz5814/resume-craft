import "./Home.css";
import Layout from "../Layout";
import ResumeCard from "./ResumeCard";
import { useDeleteResumeMutation, useGetResumesQuery } from "../../store/apiSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: resumes, isLoading, error } = useGetResumesQuery();
  console.log(resumes);
  const [deleteResume] = useDeleteResumeMutation()

  const deleteHandler = (id) => {
    deleteResume(id)
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
