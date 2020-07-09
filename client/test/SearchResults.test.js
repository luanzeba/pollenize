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

  it('displays a header ', () => {
    expect(wrapper.find(Header)).toExist();
    expect(wrapper.find(".search-term")).toHaveText('Results for "software"')
  })

  it('renders a list of mentors', () => {
    expect(wrapper).toContainMatchingElements(3, ProfilePicture)
    expect(wrapper).toContainMatchingElements(3, MentorDetails)
  })
})
