import "./Home.css"
import Layout from "../Layout"
import ResumeCard from "../ResumeCard/ResumeCard"


const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="create-resume">
          <button className="create-resume-btn">Create a Resume</button>
        </div>
        <ResumeCard />
        <ResumeCard />
      </div>
    </Layout>
  )
}

export default Home