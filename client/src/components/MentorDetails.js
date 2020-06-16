import React from "react"
import '../css/mentor_details.scss'

const MentorDetails = ({ mentor: { name, schooling, work: { title, focus } } }) => {
  const nameWithLastInitial = mentorName => {
    const nameArray = mentorName.split(" ")
    if (nameArray.length > 1) {
      const lastInitial = nameArray[nameArray.length - 1].charAt(0).toUpperCase()
      return `${nameArray[0]} ${lastInitial}.`
    } else {
      return nameArray[0]
    }
  }

  return (
    <div className="mentor-result-details" >
      <p><b>{nameWithLastInitial(name)}</b></p>
      {schooling.map(({ level, field }, index) => (
        <p key={index}>{level} in {field}</p>
      ))}
      <p>{`Works as ${title} with a focus in ${focus}`}</p>
    </div>
  )
}

export default MentorDetails
