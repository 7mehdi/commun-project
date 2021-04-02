import Principal from "./Components/Principal.js";
import Detaile from "./Components/Detaile.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <nav className="nav-bar">
          <h1 className="logo">Where in the world?</h1>
          <div className="darkMode">
            <i className="far fa-moon"></i>
            <p>dark mode</p>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Principal />
          </Route>
          <Route path="/:name">
            <Detaile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
