import React from "react";
import { Button, Card, NavBar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-navbar">
        <NavBar />
      </div>

      <div className="App-card">
        <Card />
      </div>

      <div className="App-jokeButton">
        <Button name="Like <3" />
        <Button name="NEXT>>>>>" />
      </div>
    </div>
  );
}

export default App;
