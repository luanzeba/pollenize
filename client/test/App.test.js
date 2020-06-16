import App from '../src/components/App'
import { MemoryRouter, Route } from "react-router-dom"
import SearchBar from '../src/components/SearchBar';

const mountAppWithRouter = mountPath => {
  let historyObj, locationObj;
  return (
    [mount(
      <MemoryRouter initialEntries={[mountPath]}>
        <Route
          path="*"
          render={({ history, location }) => {
            historyObj = history;
            locationObj = location;
            return <App />;
          }}
        />
      </MemoryRouter>
    ), historyObj, locationObj]
  );
};

describe("App", () => {
  let wrapper, historyObj, locationObj;

  describe("routes", () => {
    it("renders the home page for the root", () => {
      wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );

      expect(wrapper.find(HomePage)).toHaveProp({
        history: historyObj,
        location: locationObj
      });
    });

    it("renders the expected component for '/search", () => {
      [wrapper, historyObj, locationObj] = mountAppWithRouter("/search");

      expect(wrapper.find(SearchBar)).toHaveProp({
        history: historyObj,
        location: locationObj
      });
    });

    it("renders mentor page", () => {
      [wrapper, historyObj] = mountAppWithRouter("/mentor/1");

      expect(wrapper.find(MentorProfile)).toHaveProp("match", { params: 1 });
    });
  });
})
