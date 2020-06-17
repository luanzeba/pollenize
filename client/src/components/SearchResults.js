import React from 'react'
import Header from './Header'
import ProfilePicture from "./ProfilePicture"
import MentorDetails from "./MentorDetails"
import mentors from '../sampleMentors'
import filterMentors from "../helpers/filterMentors"
import '../css/search_results.scss'

const SearchResults = ({ history, location }) => {
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('filter') || ""
  const filteredMentors = filterMentors(mentors, searchTerm)

  const handleClick = mentorId => {
    history.push(`/mentor/${mentorId}`)
  }

  return (
    <React.Fragment>
      <Header />
      <h1 className="search-term" >Results for "{searchTerm}" </h1>
      <div className="mentor-search-results" >
        {filteredMentors.map(mentor => (
          <div className="mentor-result-container" key={mentor.id} onClick={() => handleClick(mentor.id)} >
            <ProfilePicture
              key={`${mentor.id}-picture`}
              mentor={mentor}
            />
            <MentorDetails
              key={`${mentor.id}-details`}
              mentor={mentor}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default SearchResults
