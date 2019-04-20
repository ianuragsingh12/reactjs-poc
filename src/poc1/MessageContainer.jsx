import React, { Component } from "react";
import Message from "./Message.jsx";
import Button from "./Button.jsx";
import Text from "./Text.jsx";

class MessageContainer extends Component {
  state = {
    isLoved: false
  };

  toggleLove = () => {
    this.setState({
      isLoved: !this.state.isLoved
    });
  };

  render() {
    var messageText =
      "Now you know how React.js components communicate with each other.";
    var buttonText = this.state.isLoved ? "Unlove" : "Love";

    var text = this.state.isLoved ? <Text /> : "";

    return (
      <div className="message">
        <Message text={messageText} isLoved={this.state.isLoved} />
        <Button text={buttonText} onClick={this.toggleLove} />
        {text}
      </div>
    );
  }
}

export default MessageContainer;
