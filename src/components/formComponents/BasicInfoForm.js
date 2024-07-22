import { updateBasicInfo } from "../../store/tempResumeSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import Input from "./Input"
const BasicInfoForm = () => {

  const dispatch = useDispatch()
  const {basicInfo} = useSelector(state => state.tempResume, shallowEqual)

  const handleChange = (evt) => {
    evt.preventDefault()
    const propName = evt.target.name
    const value = evt.target.value
    dispatch(updateBasicInfo({[propName]: value}))
  }

  const capFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="basic-info-form">
      <h3>BasicInfo</h3>
      {basicInfo 
        ? Object.keys(basicInfo).map(key => (
          <Input
            key={key}
            type={
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
  )
}

export default BasicInfoForm