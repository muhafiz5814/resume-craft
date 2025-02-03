import { addProject, updateProjects } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"
import TextArea from "./TextArea"

// same as Education form
const ProjectsForm = () => {

  const emptyProject = {
    title: "",
    startMonth: "",
    endMonth: "",
    url: "",
    description: ""
  }

  const dispatch = useDispatch()
  const {projects} = useSelector(state => state.tempResume, shallowEqual)

  const handleChange = (evt, index) => {
    evt.preventDefault()
    const {name, value} = evt.target
    const updatedProjects = projects.map((project, i) => i === index ? {...project, [name]: value} : project)
    dispatch(updateProjects(updatedProjects))
  }

  const capFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="projects-form form-block">
      <div className="heading">
        <h3 className="title">Projects</h3>
        <button className="more-btn" onClick={() => dispatch(addProject(emptyProject))}>+</button>
      </div>
      <div className="input-fields">
        {projects 
          ? projects.map((item, index) => 
            <div key={index} className="section-item">
              {
                Object.keys(item).map(key => ( key !== "_id" &&
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
                          key.includes("Month") ? "month"
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

export default ProjectsForm