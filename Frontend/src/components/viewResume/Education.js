// Component to render the multiple education items on UI
const Education = ({institute, startYear, endYear, description}) => {
  return (
    <div className="education-div sub-container">
      <p><strong>{institute}</strong></p>
      <p>{`${startYear} - ${endYear}`}</p>
      <p>{description}</p>
    </div>
  )
}

export default Education