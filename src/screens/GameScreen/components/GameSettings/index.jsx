import React, { Component } from "react";
import { solver } from "../../../../data/solvers";
import "./styles.scss";

/**
 * GameSettings component is using for choosing parametrs of a new game, such as board size and level and start a new game
 */

export default class GameSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelName: "Level 1",
      level: 1,
      size: 10,
    };
  }

  renderSizeSelector() {
    return [10, 15, 20].map((item, index) => (
      <div key={index} className="form-check disabled">
        <label className="form-check-label">
          <input
            onClick={this.onSelectSize}
            defaultChecked={index === 0}
            type="radio"
            className="form-check-input"
            name="optionsRadios"
            value={item}
          />
          {item} x {item}
        </label>
      </div>
    ));
  }
  renderLevelSelector() {
    const countlevel = solver[`s${this.state.size}`]
    return Object.keys(countlevel).map((item, index) => (
      <option value={index + 1} key={item}>Level {index + 1}</option>
    ));
  }

  onSelectLevel = (e) => {
    this.setState({ ...this.state, level: parseInt(e.target.value), levelName: 'Level ' + e.target.value });
  };

  onSelectSize = (e) => {
    this.setState({ ...this.state, size: parseInt(e.target.value) });
  };

  startGame = () => {
    this.props.onChangeSettings(this.state);
  };

  render() {
    return (
      <aside>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Board settings</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              Select size and level
            </h6>
            <div className="form-group">
              <fieldset className="form-group">
                <label>Select size</label>
                {this.renderSizeSelector()}
              </fieldset>

              <label htmlFor="exampleSelect1">Select level</label>
              <select
                onChange={this.onSelectLevel}
                className="form-control"
                id="exampleSelect1"
              >
                {this.renderLevelSelector()}
              </select>
            </div>
            <button
              onClick={this.startGame}
              type="button"
              className="btn btn-primary start-game-button"
            >
              Start
            </button>
          </div>
        </div>
      </aside>
    );
  }
}
