import BackgroundVideo from "../src/components/BackgroundVideo"
import backgroundVideoMP4 from '../src/videos/Bee/Bee.mp4'
import backgroundVideoWEBM from '../src/videos/Bee/Bee.webm'

describe("BackgroundVideo", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<BackgroundVideo />)
  })

  it('renders a video component', () => {
    expect(wrapper.find("video")).toHaveProp({
      id: "background-video",
      loop: true,
      autoPlay: true
    })

    expect(wrapper.find('source').first()).toHaveProp({
      src: backgroundVideoMP4,
      type: "video/mp4"
    })

    expect(wrapper.find('source').last()).toHaveProp({
      src: backgroundVideoWEBM,
      type: "video/webm"
    })
  })
})
