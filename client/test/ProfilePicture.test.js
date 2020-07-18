import ProfilePicture from "../src/components/ProfilePicture"
import { mentor } from "./helpers/sampleMentor"

describe("ProfilePicture", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ProfilePicture imagePath={mentor.image} />)
  })

  it("renders the profile picture", () => {
    expect(wrapper.find("img")).toHaveProp({
      className: "avatar-picture",
      alt: "Avatar",
      src: { "default": "" }
    })
  })
})
