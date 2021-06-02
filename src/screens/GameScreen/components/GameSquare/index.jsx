import React, { Component } from "react";
import "./styles.scss";
import soundfile from '../../../../audio/effects/click.mp3'; 

export default class GameSquare extends Component {
  constructor(props) {
    super(props);
  }

  clickHandle = () => {
    this.props.onClick();
    var audio = new Audio(soundfile);
    audio.play();
  };
  render() {
    const { onClick, value, gameFinished } = this.props;
    const className = `game-square ${value == "1" ? "btn-secondary" : ""}`;
    const valueToShow = value == "0" && "X";
    return (
      <button
        className={className}
        disabled={gameFinished}
        onClick={this.clickHandle}
      >
        {valueToShow}
      </button>
    );
  }
}
