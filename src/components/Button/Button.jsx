import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return <button>{this.props.name}</button>;
  }
}

export default Button;
