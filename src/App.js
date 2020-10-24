import React from "react";
import { Button, Card, NavBar } from "./components";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { theJoke: "" };
  }

  async getNewJoke() {
    const jokeData = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const theJoke = await jokeData.json();
    this.setState({ theJoke: theJoke.joke });
    //console.log(theJoke.joke);
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
          <Card joke={this.state.theJoke} />
        </div>

        <div className="App-jokeButton">
          <Button name="Like <3" />
          <Button action={() => this.getNewJoke()} name="NEXT>>>>>" />
        </div>
      </div>
    );
  }
}

export default App;
