const Skill = ({skill, rating}) => {
  return (
    <div className="skill-div sub-container">
      <div>{skill}</div>
      <div>{rating}</div>
    </div>
  )
}

export default Skill