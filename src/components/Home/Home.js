import "./Home.css"
import ResumeCard from "../ResumeCard/ResumeCard"


const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h2>ResumeCraft</h2>
        <button>Create a Resume</button>
      </div>
      <ResumeCard />
      <ResumeCard />
    </div>
  )
}

export default Home