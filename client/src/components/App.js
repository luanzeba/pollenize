import React, { useState } from 'react'
import Header from './Header'
import BackgroundVideo from './BackgroundVideo'
import PublicHomePage from './PublicHomePage'
import '../css/App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

const App = ({ history, location }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="home-page-background" >
      <BackgroundVideo />
      <Header />
      <PublicHomePage
        search={setSearchTerm}
        history={history}
        location={location}
      />
    </div>
  )
}

export default App
