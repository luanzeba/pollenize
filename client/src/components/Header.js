import React from "react";
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

class Header extends React.Component {

  render() {
    return (
      <header className="top">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
    )
  }
};

export default Header;