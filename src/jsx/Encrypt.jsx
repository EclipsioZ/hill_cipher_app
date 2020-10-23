import React from "react";
import "../css/Encrypt.css";

var createTable = (length) => {
  let rows = [];
  for(let i = 0; i < length; i++) {
    let cells = [];
    for(let j=0; j< length; j++) {
      cells.push(<td key={j}>{j}</td>);
    }
    rows.push(<tr key={i}>{cells}</tr>);
  };
  return rows;
}

export default class Encrypt extends React.Component {
  state = {
    table: [createTable(sessionStorage.getItem('rowNumber') == null ? 2 : sessionStorage.getItem('rowNumber'))],
    rowNumber: sessionStorage.getItem('rowNumber') == null ? 2 : sessionStorage.getItem('rowNumber')
  };

  updateTable = (length) => {
    let rows = [];
    for(let i = 0; i < length; i++) {
      let cells = [];
      for(let j=0; j< length; j++) {
        cells.push(<td key={j}>{j}</td>);
      }
      rows.push(<tr key={i}>{cells}</tr>);
    };
    this.setState({table: rows});
  }

  buildOptions = (length) => {
    let options = [];
    for(let i=2; i < length; i++) {
      options.push(<option key={i} value={i} >{i}</option>);
    }
    return options;

  }

  handleUpdateTable = (e) => {
    sessionStorage.setItem('rowNumber', e.target.value);
    this.setState({rowNumber: e.target.value});
    this.updateTable(e.target.value);
  }

  render() {

    return (
      <div className="encrypt">
        <table className="matrix" style={{color: "white"}}>
          <tbody>
            {this.state.table}
          </tbody>
        </table>
        <select defaultValue={this.state.rowNumber} onChange={e => this.handleUpdateTable(e)}>
          {this.buildOptions(17)}
        </select>
        <p style={{paddingTop: 200}}>Encrypt</p>
      </div>
    );
  }
};