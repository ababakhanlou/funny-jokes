import React from "react";
import { Button, Card, NavBar } from "./components";
import getJoke from "./api/joke";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { joke: "" };
    this.getNewJoke = this.getNewJoke.bind(this);
  }

  async getNewJoke() {
    const joke = await getJoke();
    this.setState({ joke });
  }

  async componentDidMount() {
    this.getNewJoke();
  }

  render() {
    return (
      <div className="App">
        <div className="App-navbar">
          <NavBar />
        </div>

        <div className="App-card">
          <Card joke={this.state.joke} />
        </div>

        <div className="App-jokeButton">
          <Button name="Like <3" />
          <Button action={this.getNewJoke} name="NEXT>>>>>" />
        </div>
      </div>
    );
  }
}

export default App;
