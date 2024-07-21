import { addEducation, updateEducation } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"

const EducationForm = () => {

  const emptyEducation = {
    school: "",
    startYear: "",
    endYear: "",
    descriptions: ""
  }


  const dispatch = useDispatch()
  const {education} = useSelector(state => state.tempResume, shallowEqual)

  const handleChange = (evt, index) => {
    evt.preventDefault()
    const {name, value} = evt.target
    const updatedEducation = education.map((edu, i) => i === index ? {...edu, [name]: value} : edu)
    dispatch(updateEducation(updatedEducation))
  }

  const capFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="education-form">
      <h3>Education</h3>
      <button onClick={() => dispatch(addEducation(emptyEducation))}>+</button>
      {education 
        ? education.map((item, index) => 
          Object.keys(item).map(key => ( key !== "id" &&
            <Input
              key={key}
              type={
                key.includes("Year") ? "month"
                : "text"
              }
              name={key}
              label={capFirstLetter(key)}
              value={item[key]}
              onChangeHandler={(evt) => handleChange(evt, index)}
            />
          ))
        )
        : <p>Loading...</p>
      }
    </div>
  )
}

export default EducationForm