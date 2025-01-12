import { shallowEqual, useSelector } from "react-redux"

const AboutMe = () => {
// Before showing the UI get the aboutMe section from local store.
  const { aboutMe }= useSelector(state => state.localResume, shallowEqual)

  // before rendering the content, first check if content is available or not, otherwise it will throw error due to accessing the value without its availability.
  return (
    <div className="about-me-div container">
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