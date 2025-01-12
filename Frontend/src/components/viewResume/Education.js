// Component to render the multiple education items on UI
const Education = ({school, startYear, endYear, description}) => {
  return (
    <div className="education-div sub-container">
      <p><strong>{school}</strong></p>
      <p>{`${startYear}-${endYear}`}</p>
      <p>{description}</p>
    </div>
  )
}

export default Education