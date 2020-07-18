import React from "react"
import Calendar from 'react-calendar'
import ReactPlayer from 'react-player'

import MentorDetails from "./MentorDetails"
import mentors from "../sampleMentors"
import Header from "./Header"
import '../css/mentor_profile.scss'
import '../css/calendar.scss'

const MentorProfile = ({ match: { params } }) => {
  const mentor = mentors.filter(mentor => mentor.id === params.id)[0]

  return (
    <>
      <Header />
      <div className="mentor-search-results" >
        <div className="mentor-profile-container" >
          <MentorDetails mentor={mentor} />
        </div>
        <h1 className="mentor-profile-section mb-5">
          <span role="img" aria-label="video">📹</span>
          <strong> Learn more about {mentor.firstName}</strong>
        </h1>
        <ReactPlayer className="video-player" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        <h1 className="mentor-profile-section mb-5 mt-5">
          <span role="img" aria-label="calendar">🗓</span>
          <strong> Schedule a mentoring session with {mentor.firstName}</strong>
        </h1>
        <Calendar
          className="mentor-calendar mt-5"
          // TODO: Needs to be implemented
          value={new Date()}
          onChange={(input) => { console.log(input) }}
        />
      </div>
    </>
  )
}

export default MentorProfile
