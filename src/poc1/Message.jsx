import React, { Component } from "react";
// import iconImagePath from "../images/";

class Message extends Component {
  render() {
    // var iconImagePath = "../images/";
    // iconImagePath =
    //   iconImagePath + (this.props.isLoved ? "loved.png" : "not-loved.png");

    let path = {
      l: require("../images/loved.png"),
      nl: require("../images/not-loved.png")
    };
    let iconImagePath = this.props.isLoved ? path.l : path.nl;
    return (
      <span>
        <img src={iconImagePath} alt="Love status" />
        <span className="message-text">{this.props.text}</span>
      </span>
    );
  }
}

export default Message;
