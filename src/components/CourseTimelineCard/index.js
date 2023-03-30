import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList} = eachItem

  return (
    <>
      <div className="heading-days-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="days-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="ul-list-container">
        {tagsList.map(eachList => (
          <li className="course-list-container" key={eachList.id}>
            <p className="course-list-text">{eachList.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
