import App from '../src/components/App';

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it("renders the App", () => {
    expect(wrapper.find(App)).toExist()
  })
})
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
