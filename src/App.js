import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/named, import/namespace
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkred");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1 id="my-brand">Adopt me</h1>
            </Link>
          </header>
          <Switch>
            <Route exact path="/">
              <SearchParams />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="*">
              <p>Error 404: Route not found</p>;
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
