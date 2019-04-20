import React, { Component } from "react";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label);
  };

  render() {
    const { label } = this.props;
    // const { onCheckboxChange } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="form-check">
        <label>
          <input
            type="checkbox"
            name={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
            className="form-check-input"
          />
          {label}
        </label>
      </div>
    );
  }
}

// const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
//   <div className="form-check">
//     <label>
//       <input
//         type="checkbox"
//         name={label}
//         checked={isSelected}
//         onChange={onCheckboxChange}
//         className="form-check-input"
//       />
//       {label}
//     </label>
//   </div>
// );

export default Checkbox;
