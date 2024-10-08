import Project from "./Project"
import { shallowEqual, useSelector } from "react-redux"

// same as aboutMe
const Projects = () => {

  const { projects }= useSelector(state => state.localResume, shallowEqual)

  return (
    <div className="projects-div container">
      <div className="title"><h2>Projects</h2></div>
      <div className="content">
        {projects
          ? projects.map((item, i) => <Project key={i} {...item} />)
          : <h2>Loading...</h2>
        }
      </div>
    </div>
  )
}

export default Projects