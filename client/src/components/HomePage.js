import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Header from './Header'
import SearchBar from './SearchBar'
import '../css/App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

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
