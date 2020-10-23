import React from "react";
import "../css/Home.css";

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <div className="home">
        <p style={{paddingTop: 200}}>Home</p>
      </div>
    );
  }
};