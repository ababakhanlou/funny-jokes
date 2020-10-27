import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <h1>Dard JOKE!!!</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/saved-jokes">Saved Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
