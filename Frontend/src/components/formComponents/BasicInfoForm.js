import { updateBasicInfo } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"
const BasicInfoForm = () => {

  const dispatch = useDispatch()
  // Get the basicInfo section data from local store state and fill values in input fields of component
  const {basicInfo} = useSelector(state => state.tempResume, shallowEqual)

  // continuosly change the local store state as the value changes in input field using controlled forms
  const handleChange = (evt) => {
    evt.preventDefault()
    const propName = evt.target.name
    const value = evt.target.value
    dispatch(updateBasicInfo({[propName]: value}))
  }

// capitalize the first letter of label
  const capFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="basic-info-form form-block">
      <div className="heading">
        <h3 className="title">BasicInfo</h3>
      </div>
      <div className="input-fields">
        {basicInfo 
          ? Object.keys(basicInfo).map(key => (
            <Input
              key={key}
              type={  //  Assign the type of input, based on the field type
                key === "website" ? "url"
                : key === "phone" ? "phone"
                : key === "email" ? "email"
                : "text"
              }
              name={key}
              label={capFirstLetter(key)}
              value={basicInfo[key]}
              onChangeHandler={handleChange}
              required={key !== "website"}
            />
          ))
          : <p>Loading...</p>
        }
      </div>
    </div>
  )
}

export default BasicInfoForm