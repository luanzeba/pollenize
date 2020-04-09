import React from "react"
import ReactPlayer from 'react-player'
import ProfilePicture from "./ProfilePicture"
import MentorDetails from "./MentorDetails"
import mentors from "../sampleMentors"
import Header from "./Header"

const MentorProfile = ({ match: { params } }) => (
  <React.Fragment>
    <Header />
    <div className="mentor-search-results" >
      <div className="mentor-profile-container" >
        <ProfilePicture mentor={mentors[params.id]} />
        <MentorDetails mentor={mentors[params.id]} />
      </div>
      <ReactPlayer className="video-player" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <button className="get-contact" >Get Contact</button>
    </div>
  </React.Fragment>
)

export default MentorProfile
