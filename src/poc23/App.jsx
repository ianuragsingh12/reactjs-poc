import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = ["One", "Two", "Three"];

class App extends Component {
  state = {
    // checkboxes: OPTIONS.reduce(
    //   (options, option) => ({
    //     ...options,
    //     [option]: false
    //   }),
    //   {}
    // ),
    // temp: []
  };

  // componentDidMount() {
  // console.log(this.state.temp);
  // this.fetchData();
  // var data = ["d1", "d2", "d3"];
  // this.postData(`http://localhost:8088/f2`, { data })
  //   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  //   .catch(error => console.error(error));
  // }

  // selectAllCheckboxes = isSelected => {
  //   Object.keys(this.state.checkboxes).forEach(checkbox => {
  //     // BONUS: Can you explain why we pass updater function to setState instead of an object?
  //     this.setState(prevState => ({
  //       checkboxes: {
  //         ...prevState.checkboxes,
  //         [checkbox]: isSelected
  //       }
  //     }));
  //   });
  // };

  // selectAll = () => this.selectAllCheckboxes(true);

  // deselectAll = () => this.selectAllCheckboxes(false);

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  // handleCheckboxChange = changeEvent => {
  //   const { name } = changeEvent.target;

  //   this.setState(prevState => ({
  //     checkboxes: {
  //       ...prevState.checkboxes,
  //       [name]: !prevState.checkboxes[name]
  //     }
  //   }));
  // };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
    }

    // Object.keys(this.state.checkboxes)
    //   .filter(checkbox => this.state.checkboxes[checkbox])
    //   .forEach(checkbox => {
    //     console.log(checkbox, "is selected.");
    //   });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      // isSelected={this.state.checkboxes[option]}
      handleCheckboxChange={this.toggleCheckbox}
      key={option}
    />
  );

  // createCheckboxes = () => this.state.temp.map(this.createCheckbox);
  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                {/* <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button> */}
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
