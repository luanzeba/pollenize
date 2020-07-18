import React from "react"
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import '../css/header.scss'

const Header = ({ searchTerm }) => (
  <header>
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
    { searchTerm && <h1 className="search-term">Results for <em>{searchTerm}</em></h1> }
  </header>
)

export default Header
