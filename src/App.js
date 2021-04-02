import Principal from "./Components/Principal.js";
import Detaile from "./Components/Detaile.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <h1 className="logo">Where in the world?</h1>
        <div className="darkMode">
          <i className="far fa-moon"></i>
          <p>dark mode</p>
        </div>
      </nav>
      <Principal />
      <Detaile />
    </div>
  );
}

export default App;
