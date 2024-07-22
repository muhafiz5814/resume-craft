import { addExperience, updateExperience } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"
import TextArea from "./TextArea"

// same as Education form
const ExperienceForm = () => {

  const emptyExperience = {
    designation: "",
    organization: "",
    startYear: "",
    endYear: "",
    location: "",
    description: ""
  }


  const dispatch = useDispatch()
  const {experience} = useSelector(state => state.tempResume, shallowEqual)

  const handleChange = (evt, index) => {
    evt.preventDefault()
    const {name, value} = evt.target
    const updatedExperience = experience.map((exp, i) => i === index ? {...exp, [name]: value} : exp)
    dispatch(updateExperience(updatedExperience))
  }

  const capFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="experience-form form-block">
      <div className="heading">
        <h3 className="title">Experience</h3>
        <button className="more-btn" onClick={() => dispatch(addExperience(emptyExperience))}>+</button>
      </div>
      <div className="input-fields">
        {experience 
          ? experience.map((item, index) => 
            <div className="section-item">
              {
                Object.keys(item).map(key => ( key !== "id" &&
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

export default ExperienceForm