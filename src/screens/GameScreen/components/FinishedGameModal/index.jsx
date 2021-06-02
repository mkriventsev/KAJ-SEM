import React, { Component } from "react";
import { formatSecondsToHumanTime } from "../../../../utils/timeformatter";
import "./styles.scss";

export class FinishedGameModal extends Component {
  handleClickNextLevel = () => {
    this.props.onChangeLevel();
    this.props.onCloseModal();
  };

  render() {
    const classN = this.props.isOpen ? "modal fade show display" : "modal fade";
    return (
      <div class={classN} role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Congratulations!</h5>
            </div>
            <div class="modal-body">
              <p>You solved this level!</p>
              <span>
                Your time is{" "}
                {formatSecondsToHumanTime(this.props.solveTime)}
              </span>
            </div>
            <div class="modal-footer">
              <button
                onClick={this.handleClickNextLevel}
                type="button"
                class="btn btn-success"
              >
                Next Level
              </button>
              <button
                onClick={this.props.onCloseModal}
                type="button"
                class="btn btn-outline-secondary"
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
