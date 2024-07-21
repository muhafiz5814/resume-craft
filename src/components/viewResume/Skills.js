import Skill from "./Skill"
import { shallowEqual, useSelector } from "react-redux"

const Skills = () => {

  const { skills }= useSelector(state => state.localResume, shallowEqual)

  return (
    <div className="skills-div">
      <div className="title"><h2>Skills</h2></div>
      <div className="content">
        {skills
          ? skills.map(item => <Skill key={item.id} {...item} />)
          : <h2>Loading...</h2>
        }
      </div>
    </div>
  )
}

export default Skills