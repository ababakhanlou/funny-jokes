import React from "react";
import { Button, Card } from "../components";
import getJoke from "../api/joke";

class JokeFinder extends React.Component {
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
      <div>
        <div>
          <Card joke={this.state.joke} />
        </div>

        <div>
          <Button name="Like <3" />
          <Button action={this.getNewJoke} name="NEXT>>>>>" />
        </div>
      </div>
    );
  }
}

export default JokeFinder;
