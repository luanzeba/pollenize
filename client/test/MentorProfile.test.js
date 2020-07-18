import ReactPlayer from 'react-player'
import { MemoryRouter, Route } from "react-router-dom"

import MentorProfile from "../src/components/MentorProfile"
import ProfilePicture from "../src/components/ProfilePicture"
import MentorDetails from "../src/components/MentorDetails"
import Header from "../src/components/Header"

describe("MentorProfile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/mentor/mentor1"]}>
        <Route
          path="/mentor/:id"
          render={({ match }) => (
            <MentorProfile match={match} />
          )}
        />
      </MemoryRouter>
      )
  })

  it('displays a header ', () => {
    expect(wrapper.find(Header)).toExist();
  })

  it('renders a mentor details', () => {
    expect(wrapper.find(MentorDetails)).toHaveProp('mentor', expect.any(Object))
    expect(wrapper.find(ReactPlayer)).toHaveProp('className', 'video-player')

    const h1Titles = wrapper.find(".mentor-profile-section")
    expect(h1Titles.at(0)).toHaveText("📹 Learn more about Joana")
    expect(h1Titles.at(1)).toHaveText("🗓 Schedule a mentoring session with Joana")
  })
})
