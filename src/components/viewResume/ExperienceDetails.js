import Experience from "./Experience"
import { shallowEqual, useSelector } from "react-redux"

const ExperienceDetails = () => {

  const { experience }= useSelector(state => state.localResume, shallowEqual)

  return (
    <div className="experience-details-div">
      <div className="title"><h2>Experience</h2></div>
      <div className="content">
        {experience
          ? experience.map((item, i) => <Experience key={i} {...item}/>)
          : <h2>Loading...</h2>
        }
      </div>
    </div>
  )
}

export default ExperienceDetails