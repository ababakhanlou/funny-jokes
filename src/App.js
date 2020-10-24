import React from "react";
import { NavBar } from "./components";
import JokeFinder from "./pages/JokeFinder";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-navbar">
          <NavBar />
        </div>

        <div className="App-card">
          <JokeFinder />
        </div>
      </div>
    );
  }
}

export default App;
