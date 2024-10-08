import Skill from "./Skill"
import { shallowEqual, useSelector } from "react-redux"

// same as aboutMe
const Skills = () => {

  const { skills }= useSelector(state => state.localResume, shallowEqual)

  return (
    <div className="skills-div container">
      <div className="title"><h2>Skills</h2></div>
      <div className="content">
        {skills
          ? skills.map((item, i) => <Skill key={i} {...item} />)
          : <h2>Loading...</h2>
        }
      </div>
    </div>
  )
}

export default Skills