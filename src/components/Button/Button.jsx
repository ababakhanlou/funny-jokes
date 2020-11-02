import React from "react";
import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button className="Button" onClick={this.props.action}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
