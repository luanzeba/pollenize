import { MemoryRouter, Route} from "react-router-dom"
import { Search, JustifyLeft } from 'react-bootstrap-icons'

import SearchBar from "../src/components/SearchBar"

describe('SearchBar', () => {
  let wrapper, historyObj
  beforeEach(() => {
    wrapper = mount(
      < MemoryRouter initialEntries = { ["/"]} >
        <Route
          path="*"
          render={({ history }) => {
            historyObj = history
            return <SearchBar history={history} />
          }}
        />
      </MemoryRouter >
    )
  })

  it('renders an input', () => {
    expect(wrapper.find("input")).toHaveProp({
      type: "text",
      value: "",
      placeholder: "What career are you interested in...",
      className: "search-input form-control"
    })

    expect(wrapper.find(Search)).toHaveProp("transform", "scale(-1, 1)")
  })

  describe('callbacks', () => {
    beforeEach(() => {
      wrapper.find("input").invoke("onChange")({
        target: { value: "new value" }
      })
    })

    it('updates the value onChange', () => {
      expect(wrapper.find("input")).toHaveProp("value", "new value")
    })

    it('updates the query string on submit', () => {
      wrapper.find("form").invoke("onSubmit")({
        preventDefault: jest.fn()
      })

      expect(historyObj.location.search).toEqual("?filter=new value")
    })
  })
})
