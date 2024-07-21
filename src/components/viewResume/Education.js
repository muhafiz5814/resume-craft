const Education = ({school, startYear, endYear, description}) => {
  return (
    <div className="education-div">
      <p><strong>{school}</strong></p>
      <p>{`${startYear}-${endYear}`}</p>
      <p>{description}</p>
    </div>
  )
}

export default Education