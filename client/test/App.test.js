import App from '../src/components/App'

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it("renders the App", () => {
    expect(wrapper.find(App)).toExist()
  })
})
