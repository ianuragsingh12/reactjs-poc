import React, { Component } from "react";

class Message extends Component {
  render() {
    var iconImagePath = "../images/";
    iconImagePath =
      iconImagePath + (this.props.isLoved ? "loved.png" : "not-loved.png");
    return (
      <span>
        <img src={iconImagePath} alt="Love status" />
        <span className="message-text">{this.props.text}</span>
      </span>
    );
  }
}

export default Message;
