import { MemoryRouter, Route } from "react-router-dom"

import SearchResults from "../src/components/SearchResults"
import ProfilePicture from "../src/components/ProfilePicture"
import MentorDetails from "../src/components/MentorDetails"
import Header from "../src/components/Header"

describe("SearchResults", () => {
  let wrapper, historyObj, locationObj

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/search?filter=software"]}>
        <Route
          path="*"
          render={({ history, location }) => {
            historyObj  = history
            locationObj = location
            return <SearchResults history={historyObj} location={locationObj} />
          }}
        />
      </MemoryRouter>
    )
  })

  it('displays a header', () => {
    expect(wrapper.find(Header)).toHaveProp("searchTerm", "software");
  })

  it('renders a list of mentors', () => {
    expect(wrapper).toContainMatchingElements(4, MentorDetails)
  })

  describe("onClick", () => {
    beforeEach(() => {
      wrapper.find(".mentor-result-container").first().simulate("click")
    })

    it('updates the history object', () => {
      expect(locationObj.pathname).toEqual("/mentor/mentor1")
    })
  })
})
