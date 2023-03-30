import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} eachItem={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} eachItem={eachItem} />
  }

  return (
    <div className="view-bg-container">
      <div className="responsive-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF
            <br />
            <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
        >
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
