import React, { useState } from 'react'
import { Button, Form, Input, InputGroup, InputGroupAddon } from "reactstrap"
import { Search } from 'react-bootstrap-icons'
import '../css/search_bar.scss'

const SearchBar = ({ history }) => {
  const [input, setInput] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    history.push(`/search?filter=${input}`)
  }

  return (
    <Form className="search-form" onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          id="search-input"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="What career are you interested in..."
        />
        <InputGroupAddon addonType="append">
          <Button type='submit' color="primary" id="search-button">
            <Search transform="scale(-1, 1)" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  )
}

export default SearchBar
