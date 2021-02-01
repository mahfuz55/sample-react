import React, { Component } from "react";
import "./App.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    table_data: [],
    api_data: []
  };

  handleRemove = i => {
    const temp = this.state.table_data;
    const flt = temp.filter((each, index) => {
      return index !== i;
    });
    this.setState({ ...this.state, table_data: flt });
  };

  addData = data => {
    const temp = this.state.table_data;
    temp.push(data);
    this.setState({ ...this.state, table_data: temp });
  };
  render() {
    return (
      <div>
        <Table
          handleRemove={this.handleRemove}
          table_data={this.state.table_data}
        />

        <Form addData={this.addData} />
      </div>
    );
  }
}

export default App;
