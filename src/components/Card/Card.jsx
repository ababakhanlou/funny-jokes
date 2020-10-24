import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <p>{this.props.joke}</p>
      </div>
    );
  }
}

export default Card;
