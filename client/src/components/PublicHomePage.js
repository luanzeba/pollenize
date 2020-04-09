import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/App.css'

class PublicHomePage extends React.Component {
  constructor(props) {
    super(props)
    this.myInput = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const searchTerm = this.myInput.current.value
    this.props.search(searchTerm)
    this.props.history.push(`/search?filter=${searchTerm}`)
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="search-input"
          ref={this.myInput}
          required placeholder="What career are you interested in..."
        />
        <button type='submit' className="search-button"><FontAwesomeIcon icon="search" /></button>
      </form>
    )
  }
}

export default PublicHomePage
