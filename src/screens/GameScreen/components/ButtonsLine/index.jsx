import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class ButtonsLine extends Component {
  onClickChangeMode = (e) => {
    this.props.onChangeMode();
    if (e.target.classList.contains('fill')){
       e.target.classList.remove('fill');
     }
     else{
       e.target.classList.add('fill');
     }
  }
  render() {
    return (
      <footer>
        <button id="start-over" className="buttons-line" onClick={this.props.onStartOver}> START OVER</button>
        <button id="change-mode" className="buttons-line" onClick={this.onClickChangeMode}>CHANGE MODE</button>
        <button id="select-level" className="buttons-line" onClick = {this.props.onBackToSelectLevel}>SELECT LEVEL</button>
        {/* <button onClick = {this.props.onBackToSelectLevel} >SHOW CORRECT LINES</button> */}
      </footer>
    );
  }
}
