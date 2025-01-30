// Component to render the multiple project items on UI
const Project = ({title, startMonth, endMonth, url, description}) => {
  return (
    <div className="project-div sub-container">
      <p><strong>{title}</strong></p>
      <p>{`${startMonth} - ${endMonth}`}</p>
      <p>Website: <a href={url}>{url}</a></p>
      <p>{description}</p>
    </div>
  )
}

export default Project