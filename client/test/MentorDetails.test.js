import MentorDetails from "../src/components/MentorDetails"
import ProfilePicture from "../src/components/ProfilePicture"
import { mentor } from "./helpers/sampleMentor"

describe("MentorDetails", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MentorDetails mentor={mentor} />)
  })

  it("renders a ProfilePicture", () => {
    expect(wrapper.find(ProfilePicture)).toHaveProp("imagePath", "./jon-doe.jpg")
  })

  it("renders the mentor name with last name initial", () => {
    expect(wrapper).toIncludeText("Jon D.")
  })

  it("renders all schooling", () => {
    expect(wrapper).toIncludeText("Bachelors in Engineering")
    expect(wrapper).toIncludeText("Masters in Engineering")
  })

  it("renders work experience", () => {
    expect(wrapper).toIncludeText("Works as Manager with a focus in Web design")
  })
})
