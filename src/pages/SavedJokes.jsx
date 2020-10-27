import React from "react";
import { Card } from "../components";

class SavedJokes extends React.Component {
  retrieveJokes() {
    const retrievedJokes = localStorage.getItem("jokes");
    if (!retrievedJokes) {
      return [];
    }

    return retrievedJokes.split("<#>").filter((joke) => !!joke);
  }

  deleteJoke(jokes, idx) {
    jokes.splice(idx, 1);
    localStorage.setItem("jokes", jokes.join("<#>"));
    window.location.reload();
  }

  render() {
    const jokes = this.retrieveJokes();
    return (
      <div>
        {!jokes.length && <p>We have no jokes to serve you</p>}

        {jokes.map((joke, idx) => (
          <Card
            key={idx}
            joke={joke}
            button
            action={() => this.deleteJoke(jokes, idx)}
          />
        ))}
      </div>
    );
  }
}
export default SavedJokes;
