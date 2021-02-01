import React, { Component } from "react";
import "./TableBody.css";

export class TableBody extends Component {
  render() {
    const all_items = this.props.table_data.map((each, index) => {
      const { handleRemove } = this.props;
      return (
        <tr className="tableBody" key={index}>
          <td>{each.name}</td>
          <td>{each.age}</td>
          <td>
            <button onClick={() => handleRemove(index)}>remove</button>
          </td>
        </tr>
      );
    });
    console.log(all_items);
    return <tbody className="tableBody">{all_items}</tbody>;
  }
}

export default TableBody;
