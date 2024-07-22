import Education from "./Education"
import { shallowEqual, useSelector } from "react-redux"

const EducationDetails = () => {

  const { education }= useSelector(state => state.localResume, shallowEqual)

  return (
    <div className="education-details-div container">
      <div className="title"><h2>Education</h2></div>
      <div className="content">
        {education
          ? education.map((item, i) => <Education key={i} {...item}/>)
          : <h2>Loading</h2>
        }
      </div>
    </div>
  )
}

export default EducationDetails