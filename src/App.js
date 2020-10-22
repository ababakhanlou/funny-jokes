import React from "react";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
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
        <Button butName="Like <3" />
        <Button butName="NEXT>>>>>" />
      </div>
    </div>
  );
}

export default App;
