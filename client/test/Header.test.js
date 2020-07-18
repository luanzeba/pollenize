import { Link, MemoryRouter } from 'react-router-dom'

import Header from "../src/components/Header"
import logo from '../src/logo.svg'

const mountWithRouter = searchTerm => (
  mount(
    <MemoryRouter>
      <Header searchTerm={searchTerm} />
    </MemoryRouter>
  )
)

describe("Header", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithRouter()
  })

  it('render a header', () => {
    expect(wrapper.find('header')).toExist()
  })

  it("does not render a search results title", () => {
    expect(wrapper.find(".search-term")).not.toExist()
  })

  it('renders a logo with a link to home page', () => {
    expect(wrapper.find(Link)).toHaveProp("to", "/")
    expect(wrapper.find('img')).toHaveProp({
      src: logo,
      alt: "logo"
    })
  })

  describe("when search term is defined", () => {
    beforeEach(() => {
      wrapper = mountWithRouter("software")
    })

    it('renders search results title', () => {
      expect(wrapper.find(".search-term")).toHaveText("Results for software")
    })
  })
})
