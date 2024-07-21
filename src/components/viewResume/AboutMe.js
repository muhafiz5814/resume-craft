import { shallowEqual, useSelector } from "react-redux"

const AboutMe = () => {

  const { aboutMe }= useSelector(state => state.localResume, shallowEqual)

  return (
    <div className="about-me-div">
      <div className="title"><h2>About Me</h2></div>
      <div className="content">
        {aboutMe
          ? <p>{aboutMe}</p>
          : <h2>Loading...</h2>
        }
      </div>
    </div>
  )
}

export default AboutMe