import { updateAboutMe } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import TextArea from "./TextArea"

const AboutMeForm = () => {

  const dispatch = useDispatch()
  // Get the aboutMe section data from local store state and fill values in input fields of component
  const {aboutMe} = useSelector(state => state.tempResume, shallowEqual)

  // Changes the value in local store state as the input field value changes
  const handleChange = (evt) => {
    evt.preventDefault()
    const value = evt.target.value
    dispatch(updateAboutMe({description: value}))
  }

  return (
    <div className="about-me-form form-block">
      <div className="heading">
        <h3 className="title">AboutMe</h3>
      </div>
      <div className="input-fields">
        <TextArea label="AboutMe" name="about" value={aboutMe} onChangeHandler={handleChange} />
      </div>
    </div>
  )
}

export default AboutMeForm