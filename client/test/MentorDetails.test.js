import MentorDetails from "../src/components/MentorDetails"
import { mentor } from "./helpers/sampleMentor"

describe("MentorDetails", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MentorDetails mentor={mentor} />)
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
