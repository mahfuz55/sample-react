import React, { Component } from "react";
import "./Form.css";
export class Form extends Component {
  inState = {
    name: "",
    age: 0
  };

  state = this.inState;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addData(this.state);
    this.setState({ name: "", age: 0 });
  };
  render() {
    const { name, age } = this.state;
    // const { addData } = this.props;
    return (
      <div className="form">
        <form>
          <label htmlFor="name">Your Name </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="age">Your age</label>
          <input
            required
            type="text"
            name="age"
            id="age"
            value={age === 0 ? "" : age}
            onChange={this.handleChange}
          />

          <button onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
