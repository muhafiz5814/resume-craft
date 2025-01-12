import { addEducation, updateEducation } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"
import TextArea from "./TextArea"

const EducationForm = () => {

  // Use this empty object to initialize a new education item in education section.
  const emptyEducation = {
    school: "",
    startYear: "",
    endYear: "",
    description: ""
  }


  const dispatch = useDispatch()
  // Get the education section data from local store state and fill values in input fields of component
  const {education} = useSelector(state => state.tempResume, shallowEqual)

  // To update the input, value of index is needed as there can be multiple instances of education in the form element and to keep track of respective input fields, index and key pair is used.
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
        {/* When the + button is clicked, a new empty item object is created in education section. */}
        <button className="more-btn" onClick={() => dispatch(addEducation(emptyEducation))}>+</button>
      </div>
      <div className="input-fields">
        {education 
          ? education.map((item, index) => 
            <div key={index} className="section-item">  
              {Object.keys(item).map(key => ( key !== "id" &&
                (key === "description" 
                  ?
                    <TextArea 
                      key={key} 
                      name={key} 
                      label={capFirstLetter(key)}
                      value={item[key]} 
                      onChangeHandler={(evt) => handleChange(evt, index)}/>
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