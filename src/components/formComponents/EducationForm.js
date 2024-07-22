import { addEducation, updateEducation } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"
import TextArea from "./TextArea"

const EducationForm = () => {

  const emptyEducation = {
    school: "",
    startYear: "",
    endYear: "",
    description: ""
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
    <div className="education-form form-block">
      <div className="heading">
        <h3 className="title">Education</h3>
        <button className="more-btn" onClick={() => dispatch(addEducation(emptyEducation))}>+</button>
      </div>
      <div className="input-fields">
        {education 
          ? education.map((item, index) => 
            <div className="section-item">
              {Object.keys(item).map(key => ( key !== "id" &&
                (key === "description" 
                  ?
                    <TextArea key={key} name={key} label={capFirstLetter(key)} value={item[key]} onChangeHandler={(evt) => handleChange(evt, index)}/>
                  : <Input
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
                )
              ))
              }
            </div>
          )
          : <p>Loading...</p>
        }
      </div>
    </div>
  )
}

export default EducationForm