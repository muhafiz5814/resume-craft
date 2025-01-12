// Component to render the multiple project items on UI
const Project = ({title, startOn, endOn, url, description}) => {
  return (
    <div className="project-div sub-container">
      <p><strong>{title}</strong></p>
      <p>{`${startOn}-${endOn}`}</p>
      <p>Website: <a href={url}>{url}</a></p>
      <p>{description}</p>
    </div>
  )
}

export default Project