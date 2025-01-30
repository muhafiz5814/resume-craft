import { addSkill, updateSkills } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"

// same as education form
const SkillsForm = () => {

  const emptySkill = {
    skill: "",
    rating: 0
  }

  const dispatch = useDispatch()
  const {skills} = useSelector(state => state.tempResume, shallowEqual)

  const handleChange = (evt, index) => {
    evt.preventDefault()
    const {name, value} = evt.target
    const updatedSkills = skills.map((skill, i) => i === index ? {...skill, [name]: value} : skill)
    dispatch(updateSkills(updatedSkills))
  }

  const capFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="skills-form form-block">
      <div className="heading">
        <h3 className="title">Skills</h3>
        <button className="more-btn" onClick={() => dispatch(addSkill(emptySkill))}>+</button>
      </div>
      <div className="input-fields">
        {skills 
          ? skills.map((item, index) => 
            <div key={index} className="section-item">
              {Object.keys(item).map(key => ( key !== "_id" &&
                <Input
                  key={key}
                  type={
                    key === "skill" ? "text"
                    : "number"
                  }
                  name={key}
                  label={capFirstLetter(key)}
                  value={item[key]}
                  onChangeHandler={(evt) => handleChange(evt, index)}
                />
              ))}
            </div>
          )
          : <p>Loading...</p>
        }
      </div>
      
    </div>
  )
}

export default SkillsForm