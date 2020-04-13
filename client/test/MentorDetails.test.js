import MentorDetails from "../src/components/MentorDetails"

const mentor = {
  name: "John Doe",
  schooling: [{
    level: "Bachelors",
    field: "Engineering"
  }, {
    level: "Masters",
    field: "Engineering"
  }],
  work: {
    title: "Manager",
    focus: "Web design"
  }
}

describe("MentorDetails", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<MentorDetails mentor={mentor} />)
  })

  it("renders the mentor name with last name initial", () => {
    expect(wrapper).toIncludeText("John D.")
  })

  it("renders all schooling", () => {
    expect(wrapper).toIncludeText("Bachelors in Engineering")
    expect(wrapper).toIncludeText("Masters in Engineering")
  })

  it("renders work experience", () => {
    expect(wrapper).toIncludeText("Works as Manager with a focus in Web design")
  })
})
