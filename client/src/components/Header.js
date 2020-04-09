import React from "react"
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Header = () => (
  <header className="top">
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </header>
)

export default Header
