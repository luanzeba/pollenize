import { MemoryRouter, Route } from "react-router-dom"

import App from '../src/components/App'
import HomePage from '../src/components/HomePage'
import MentorProfile from '../src/components/MentorProfile'
import NotFound from '../src/components/NotFound'
import SearchResults from '../src/components/SearchResults'

const mountAppWithRouter = mountPath => {
  let historyObj, locationObj
  return (
    [mount(
      <MemoryRouter initialEntries={[mountPath]}>
        <Route
          path="*"
          render={({ history, location }) => {
            historyObj = history
            locationObj = location
            return <App />
          }}
        />
      </MemoryRouter>
    ), historyObj, locationObj]
  )
}

describe("App", () => {
  let wrapper, historyObj, locationObj

  describe("routes", () => {
    it("renders the home page for the root", () => {
      [wrapper, historyObj, locationObj] = mountAppWithRouter("/")

      expect(wrapper.find(HomePage)).toHaveProp({
        history: historyObj,
        location: locationObj
      })
    })

    it("renders the expected component for '/search", () => {
      [wrapper, historyObj, locationObj] = mountAppWithRouter("/search")

      expect(wrapper.find(SearchResults)).toHaveProp({
        history: historyObj,
        location: locationObj
      })
    })

    it("renders mentor page", () => {
      [wrapper, historyObj, locationObj] = mountAppWithRouter("/mentor/mentor1")

      expect(wrapper.find(MentorProfile)).toHaveProp({
        match: {
          "path": "/mentor/:id",
          "url": "/mentor/mentor1",
          "isExact": true,
          "params": { "id": "mentor1" }
        },
        history: historyObj,
        location: locationObj
      })
    })

    it("defaults to not found", () => {
      [wrapper] = mountAppWithRouter("/bogus")

      expect(wrapper.find(NotFound)).toExist()
    })
  })
})
