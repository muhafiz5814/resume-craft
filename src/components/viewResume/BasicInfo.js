import { shallowEqual, useSelector } from "react-redux"

// same ia aboutMe
const BasicInfo = () => {

  const { basicInfo }= useSelector(state => state.localResume, shallowEqual)

  return (
    <div className="basic-info-div container">
      <div className="title"><h2>Basic Info</h2></div>
      <div className="content">
        {basicInfo
          ? <>
              <h1>{basicInfo.name}</h1>
              <h3>{basicInfo.designation}</h3>
              <p>{basicInfo.address} | {basicInfo.email} | {basicInfo.phone}</p>
              <p>Website: <a href={basicInfo.website} target="_blank">{basicInfo.website}</a></p>
            </>
          : <h2>Waiting...</h2>
        }
      </div>
    </div>
  )
}

export default BasicInfo