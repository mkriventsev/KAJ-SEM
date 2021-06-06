import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

   /**
 * ButtonsLine component is using for rendering line of buttons which located below the play board.
 * Contains of 3 buttons. START OVER, CHANGE MODE, SELECT LEVEL
 */
export default class ButtonsLine extends Component {
  /**
 * Depends on containing of class 'fill' the different images will be displayes inside CHANGE MODE button. Square or X.
 */
  onClickChangeMode = (e) => {
    this.props.onChangeMode();
    if (e.target.classList.contains('fill')){
       e.target.classList.remove('fill');
     }
     else{
       e.target.classList.add('fill');
     }
  }
  /**
 * main render function of buttons
 */
  render() {
    return (
      <footer>
        <button id="start-over" className="buttons-line" onClick={this.props.onStartOver}> START OVER</button>
        <button id="change-mode" className="buttons-line" onClick={this.onClickChangeMode}>CHANGE MODE</button>
        <button id="select-level" className="buttons-line" onClick = {this.props.onBackToSelectLevel}>SELECT LEVEL</button>
      </footer>
    );
  }
}
