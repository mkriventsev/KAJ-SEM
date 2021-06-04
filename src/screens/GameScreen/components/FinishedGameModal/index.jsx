import React, { Component } from "react";
import { formatSecondsToHumanTime } from "../../../../utils/timeformatter";
import "./styles.scss";
import soundfile from '../../../../audio/effects/fireworks.mp3'; 

    
export class FinishedGameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: JSON.parse(localStorage.getItem("settings")),
    };
  }
  
  audio = new Audio(soundfile);
  handleClickNextLevel = () => {
    this.audio.pause();
    this.props.onChangeLevel();
    this.props.onCloseModal();
  };
  
  handleCloseModal = () => {
    this.audio.pause();
    this.props.onCloseModal()
  }

  handleClickBackToSelectLevel = () => {
    this.audio.pause();
    this.props.onBackToSelectLevel();
  };

  playFireworkAudio(){
    this.audio.volume = this.state.settings.sound.enabled? this.state.settings.sound.volume / 100 : 0;
    this.audio.currentTime = 0;
    this.audio.play();
  }
  render() {
    if (this.props.isOpen){
      this.playFireworkAudio()
    }
    const classN = this.props.isOpen ? "modal fade show display" : "modal fade";
    return (
      <div className={classN} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Congratulations!</h5>
            </div>
            <div className="modal-body">
              <p>You solved this level!</p>
              <span>
                Your time is {formatSecondsToHumanTime(this.props.solveTime)}
              </span>
              <div class="pyro">
                <div class="before"></div>
                <div class="after"></div>
              </div>
            </div>
            <div className="modal-footer">
              {!this.props.isLastLevel ? (
                <button
                  onClick={this.handleClickNextLevel}
                  type="button"
                  className="btn btn-success"
                >
                  Next Level
                </button>
              ) : (
                <button
                  onClick={this.handleClickBackToSelectLevel}
                  type="button"
                  className="btn btn-success"
                >
                  SELECT LEVEL
                </button>
              )}
              <button
                onClick={this.handleCloseModal}
                type="button"
                className="btn btn-outline-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
