import React from 'react'

import Header from './Header'
import MentorDetails from "./MentorDetails"
import mentors from '../sampleMentors'
import filterMentors from "../helpers/filterMentors"
import '../css/search_results.scss'

const SearchResults = ({ history, location }) => {
  const searchParams = new URLSearchParams(location.search)
  const searchTerm = searchParams.get('filter') || ""
  const filteredMentors = filterMentors(mentors, searchTerm)

  const onClick = mentorId => {
    history.push(`/mentor/${mentorId}`)
  }

  return (
    <>
      <Header searchTerm={searchTerm} />
      <div className="mentor-search-results" >
        {filteredMentors.map(mentor => (
          <div className="mentor-result-container" key={mentor.id} onClick={() => onClick(mentor.id)} >
            <MentorDetails
              key={`${mentor.id}-details`}
              mentor={mentor}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default SearchResults
