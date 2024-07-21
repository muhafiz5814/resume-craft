import { Link } from "react-router-dom"

const ResumeCard = ({id, name, onDelete}) => {
  return (
    <div className="resume-card">
      <div className="name-resume-card">{name}</div>
      <div>
        <Link to={`/resume/${id}`}>
          View
        </Link>
      </div>
      <div><Link to={`/update/${id}`}>
          Edit
        </Link>
      </div>
      <div className="delete-resume-div"><span onClick={onDelete}>Delete</span></div>
    </div>
  )
}

export default ResumeCard