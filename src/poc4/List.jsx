import React, { Component } from "react";

class List extends Component {
  state = {
    arr: [],
    isLoading: true
  };

  componentDidMount() {
    console.log("List componentDidMount");
    this.callAPI();
  }

  callAPI() {
    console.log("List callAPI");
    fetch("http://localhost:8088/f3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("res:", res);
        this.setState({
          isLoading: false,
          arr: res[this.props.name]
        });
      });
  }

  btnClicked = () => {
    console.log("----List btnClicked----");
    console.log(this.props.name);

    fetch("http://localhost:8088/f3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("res reload:", res);
        for (let i = 0; i < res.arr0.length; i++) {
          console.log("name in loop:", this.props.name);
          console.log(res.arr0[i]);
          console.log("putting in arr state", res[res.arr0[i]]);
          this.setState({
            arr: res[res.arr0[i]]
          });
        }
      });
  };

  showData() {
    console.log("List showData");
    let data;
    if (this.state.isLoading) {
      data = "Loading..";
    } else {
      console.log("else", this.state.arr);
      const li = this.state.arr.map((ii, k) => <li key={k}>{ii}</li>);
      data = li;
    }
    return data;
  }

  render() {
    console.log("List render");
    console.log(this.props.loopI);
    return (
      <div>
        <div>
          <ul>{this.showData()}</ul>
        </div>
        <div>
          <button type="button" onClick={this.btnClicked}>
            {this.props.name}
          </button>
        </div>
      </div>
    );
  }
}

export default List;
