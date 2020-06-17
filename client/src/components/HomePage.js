import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Header from './Header'
import SearchBar from './SearchBar'
import '../css/homepage.scss'

const HomePage = ({ history }) => {
  return (
    <div className="home-page-background" >
      <BackgroundVideo />
      <Header />
      <SearchBar history={history} />
    </div>
  )
}

export default HomePage
