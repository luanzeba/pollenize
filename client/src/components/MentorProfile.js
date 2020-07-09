import React from "react"
import Calendar from 'react-calendar'
import ReactPlayer from 'react-player'

import ProfilePicture from "./ProfilePicture"
import MentorDetails from "./MentorDetails"
import mentors from "../sampleMentors"
import Header from "./Header"
import '../css/mentor_profile.scss'

const MentorProfile = ({ match: { params } }) => {
  const mentor = mentors.filter(mentor => mentor.id === params.id)[0]

  return (
    <React.Fragment>
      <Header />
      <div className="mentor-search-results" >
        <div className="mentor-profile-container" >
          <ProfilePicture mentor={mentor} />
          <MentorDetails mentor={mentor} />
        </div>
        <h3 className="mentor-profile-title mb-5"><strong>Learn more about {mentor.name}</strong></h3>
        <ReactPlayer className="video-player" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        <h3 className="mentor-profile-title mb-5 mt-5"><strong>Schedule a mentoring session with {mentor.name}</strong></h3>
        <Calendar
          className={"mentor-calendar mt-5"}
          value={new Date()}
          onChange={(input) => { console.log(input) }}
        />
      </div>
    </React.Fragment>
  )
}

export default MentorProfile
