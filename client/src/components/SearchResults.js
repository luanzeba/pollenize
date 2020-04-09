import React from 'react'
import sampleMentors from '../sampleMentors'
import Header from './Header'
import ProfilePicture from "./ProfilePicture"
import MentorDetails from "./MentorDetails"
import '../css/App.css'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mentors: {} }
  }

  findMatch = (searchRegex, target) => {
    switch (target && target.constructor) {
      case String:
        return searchRegex.test(target)

      case Array:
        return target.some(value => this.findMatch(searchRegex, value)) // calls findMatch again because the array might contain strings or an Object

      case Object:
        return Object.values(target).some(value => searchRegex.test(value))

      default:
        console.log(`Now that's a prahblem:`)
        console.log(target)
    }
  }

  matchSearchTerm = (mentor) => {
    const searchTerm = this.searchTerm()
    const searchRegex = new RegExp(searchTerm, 'i')
    const { schooling, work, name } = mentor
    return [schooling, work, name].some(mentorAttribute => this.findMatch(searchRegex, mentorAttribute))
  }

  filterObject = (obj, predicate) => {
    let result = {}, key

    for (key in obj) {
      if (obj.hasOwnProperty(key) && predicate(obj[key])) {
        result[key] = obj[key]
      }
    }

    return result
  }

  searchTerm = () => {
    const queryString = this.props.location.search

    if (queryString) {
      const searchTermWithQueryString = queryString.split('filter=')[1]
      return searchTermWithQueryString.split('&')[0]
    } else {
      return ""
    }
  }

  componentDidMount() {
    const filteredMentors = this.filterObject(sampleMentors, this.matchSearchTerm)
    this.setState({ mentors: filteredMentors })
  }

  handleClick = (mentorId) => {
    this.props.history.push(`/mentor/${mentorId}`)
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <h1 className="search-term" >Results for "{this.searchTerm()}" </h1>
        <div className="mentor-search-results" >
          {Object.keys(this.state.mentors).map(key => (
            <div className="mentor-result-container" key={key} onClick={() => this.handleClick(key)} >
              <ProfilePicture
                key={`${key}-picture`}
                mentor={this.state.mentors[key]}
              />
              <MentorDetails
                key={`${key}-details`}
                mentor={this.state.mentors[key]}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default SearchResults
