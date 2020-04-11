import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/App.css'

const SearchBar = ({ history }) => {
  const searchInput = useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    const searchTerm = searchInput.current.value
    history.push(`/search?filter=${searchTerm}`)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        ref={searchInput}
        required placeholder="What career are you interested in..."
      />
      <button type='submit' className="search-button"><FontAwesomeIcon icon="search" /></button>
    </form>
  )
}

export default SearchBar
