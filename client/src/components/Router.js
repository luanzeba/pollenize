import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import NotFound from './NotFound'
import SearchResults from './SearchResults'
import MentorProfile from './MentorProfile'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/search" component={SearchResults} />
      <Route exact path="/mentor/:id" component={MentorProfile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;
