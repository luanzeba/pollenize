import { Link, MemoryRouter } from 'react-router-dom'

import Header from "../src/components/Header"
import logo from '../src/logo.svg'

describe("Header", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  })

  it('render a header', () => {
    expect(wrapper.find('header')).toHaveClassName("top")
  })

  it('renders a logo with a link to home page', () => {
    expect(wrapper.find(Link)).toHaveProp("to", "/")
    expect(wrapper.find('img')).toHaveProp({
      src: logo,
      alt: "logo"
    })
  })
})
