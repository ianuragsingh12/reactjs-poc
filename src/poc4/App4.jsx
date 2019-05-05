import React, { Component } from "react";
import List from "./List.jsx";

class App4 extends Component {
  state = {
    arrname: []
  };

  componentDidMount() {
    console.log("App4 componentDidMount");
    this.callAPI();
  }

  callAPI() {
    console.log("App4 callAPI");
    fetch("http://localhost:8088/f3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          arrname: res.arr0
        });
      });
  }

  start() {
    console.log("App4 start");
    let t = [];
    for (let i = 0; i < this.state.arrname.length; i++) {
      t.push(
        <List
          key={i}
          btnclicked={this.btnclickhadle}
          name={this.state.arrname[i]}
          loopI={i}
        />
      );
    }
    return t;
  }

  btnclickhadle = () => {
    console.log("App4 btnclickhadle");
  };

  render() {
    console.log("App4 render");
    return <div>{this.start()}</div>;
  }
}

export default App4;
