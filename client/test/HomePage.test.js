import { MemoryRouter, Route } from "react-router-dom"

import BackgroundVideo from "../src/components/BackgroundVideo"
import Header from "../src/components/Header"
import HomePage from '../src/components/HomePage'
import SearchBar from "../src/components/SearchBar"

const mountAppWithRouter = () => {
  let historyObj
  return (
    [mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path="*"
          render={({ history }) => {
            historyObj = history
            return <HomePage history={historyObj} />
          }}
        />
      </MemoryRouter>
    ), historyObj]
  )
}

describe("HomePage", () => {
  let wrapper, historyObj

  describe("child components", () => {
    it("renders the background video", () => {
      [wrapper] = mountAppWithRouter()

      expect(wrapper.find(BackgroundVideo)).toExist()
    })

    it("renders the header", () => {
      [wrapper] = mountAppWithRouter()

      expect(wrapper.find(Header)).toExist()
    })

    it("renders the search bar", () => {
      [wrapper, historyObj] = mountAppWithRouter()

      expect(wrapper.find(SearchBar)).toHaveProp("history", historyObj)
    })
  })
})
