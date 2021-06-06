import React, { Component } from "react";
import "./styles.scss";
import soundfile from '../../../../audio/effects/click.mp3'; 

export default class GameSquare extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // settings:this.props.settings
      settings: JSON.parse(localStorage.getItem("settings")),
    };
  }
  audio = new Audio(soundfile)
  
  componentDidMount(){
    this.audio.volume = this.state.settings.sound.enabled? this.state.settings.sound.volume / 100 : 0;
  }
  clickHandle = () => {
    this.props.onClick();
    this.audio.play();
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
