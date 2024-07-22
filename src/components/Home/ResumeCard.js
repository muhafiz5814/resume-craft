import { Link } from "react-router-dom"

const ResumeCard = ({id, name, onDelete}) => {
  return (
    <div className="resume-card">
      <div className="name-resume-card card-item">{name}</div>
      <div className="card-item">
        <Link to={`/resume/${id}`}>
          View
        </Link>
      </div>
      <div className="card-item"><Link to={`/update/${id}`}>
          Edit
        </Link>
      </div>
      <div className="delete-resume-div card-item" onClick={onDelete}><span>Delete</span></div>
    </div>
  )
}

export default ResumeCard