import React from "react";
import { Card } from "../components";

class SavedJokes extends React.Component {
  retrieveJokes() {
    const retrievedJokes = localStorage.getItem("jokes");
    if (!retrievedJokes) {
      return [];
    }
    const jokes = retrievedJokes.split("<#>").filter((joke) => !!joke);
    return jokes;
  }

  render() {
    const jokes = this.retrieveJokes();
    return (
      <div>
        {jokes.map((joke, idx) => (
          <Card key={idx} joke={joke} />
        ))}
      </div>
    );
  }
}
export default SavedJokes;
