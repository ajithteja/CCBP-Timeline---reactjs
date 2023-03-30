import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props

  const {description, duration, imageUrl, projectTitle, projectUrl} = eachItem

  return (
    <>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-heading-time">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="icon-time-container">
          <AiFillCalendar className="date-icon" />
          <p className="project-duration-text">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </>
  )
}

export default ProjectTimelineCard
