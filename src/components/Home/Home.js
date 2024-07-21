import "./Home.css";
import Layout from "../Layout";
import ResumeCard from "./ResumeCard";
import { useGetResumesQuery } from "../../store/apiSlice";

const Home = () => {
  const { data: resumes, isLoading, error } = useGetResumesQuery();
  console.log(resumes);

  return (
    <Layout>
      <div className="home">
        <div className="create-resume">
          <button className="create-resume-btn">Create a Resume</button>
        </div>
        {isLoading ? <h2>Please wait...</h2> : <ResumeCard />}
      </div>
    </Layout>
  );
};

export default Home;
