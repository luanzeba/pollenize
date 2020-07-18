import React from "react"

import ProfilePicture from "./ProfilePicture"
import '../css/mentor_details.scss'

const MentorDetails = ({ mentor: { firstName, lastName, image, schooling, work: { title, focus } } }) => (
  <>
    <ProfilePicture imagePath={image} />
    <div className="mentor-result-details" >
      <p><b>{`${firstName} ${lastName}`}</b></p>
      {schooling.map(({ level, field }, index) => (
        <p key={index}>{level} in {field}</p>
      ))}
      <p>{`Works as ${title} with a focus in ${focus}`}</p>
    </div>
  </>
)

export default MentorDetails
