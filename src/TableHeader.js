import React, { Component } from "react";
import "./TableHeader.css";

export class TableHeader extends Component {
  render() {
    return (
      <thead className="tableHeader">
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
