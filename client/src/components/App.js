import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import NotFound from './NotFound'
import SearchResults from './SearchResults'
import MentorProfile from './MentorProfile'

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/search" component={SearchResults} />
    <Route exact path="/mentor/:id" component={MentorProfile} />
    <Route component={NotFound} />
  </Switch>
)

export default App
