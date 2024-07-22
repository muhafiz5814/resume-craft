const Experience = ({designation, organization, startYear, endYear, location, description}) => {
  return (
    <div className="experience-div sub-container">
      <p><strong>{designation}</strong></p>
      <p>{`${organization}, ${startYear}-${endYear}`}</p>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  )
}

export default Experience