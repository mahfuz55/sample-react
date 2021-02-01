import React, { Component } from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
class Table extends Component {
  render() {
    const { table_data } = this.props;
    const { handleRemove } = this.props;
    return (
      <table className="table">
        <TableHeader />
        <TableBody handleRemove={handleRemove} table_data={table_data} />
      </table>
    );
  }
}
export default Table;
