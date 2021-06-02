import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class ButtonsLine extends Component {
  render() {
    return (
      <div className="buttons-line">
        <button onClick={this.props.onStartOver}>START OVER</button>
        <button onClick={this.props.onChangeMode}>CHANGE MODE</button>
        <button onClick = {this.props.onBackToSelectLevel} >SELECT LEVEL</button>
        <button onClick = {this.props.onBackToSelectLevel} >SHOW CORRECT LINES</button>
      </div>
    );
  }
}
