import { addSkill, updateSkills } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"

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
    <div className="skills-form">
      <h3>Skills</h3>
      <button onClick={() => dispatch(addSkill(emptySkill))}>+</button>
      {skills 
        ? skills.map((item, index) => 
          Object.keys(item).map(key => ( key !== "id" &&
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
          ))
        )
        : <p>Loading...</p>
      }
    </div>
  )
}

export default SkillsForm