import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import JokeFinder from "./pages/JokeFinder";
import SavedJokes from "./pages/SavedJokes";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-navbar">
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/">
              <div className="App-card">
                <JokeFinder />
              </div>
            </Route>
            <Route path="/saved-jokes">
              <div className="App-savedJokes">
                <SavedJokes />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
