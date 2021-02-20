import React from "react"

import ProfilePicture from "./ProfilePicture"
import '../css/mentor_details.scss'

const MentorDetails = ({ mentor: { firstName, lastName, image, schooling, work: { title, focus } } }) => (
  <>
    <ProfilePicture imagePath={image} />
    <div className="mentor-result-details" >
      <p><b>{`${firstName} ${lastName}`}</b></p>
      {schooling.map(({ level, field }, index) => (
        <section>
          <span role="img" aria-label="graduation cap">🎓 </span>
          <p className="d-inline" key={index}>{level} in {field}</p>
        </section>
      ))}
      <section className="mt-3">
        <span role="img" aria-label="wrench">🔧 </span>
        <p className="d-inline">{`Works as ${title} with a focus in ${focus}`}</p>
      </section>
    </div>
  </>
)

export default MentorDetails
