import React, { Component } from "react";
import "./styles.scss";
import Navigation from "../../components/Navigation";
import GameSettings from "./components/GameSettings";
import GameBoard from "./components/GameBoard";
import { FinishedGameModal } from "./components/FinishedGameModal";

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBoardSettings: true,
      levelName: "Level 1",
      level: null,
      size: null,
    };
  }

  onChangeNextLevel = () => {
    this.setState({
      ...this.state,
      level: this.state.level + 1,
      levelName: `Level ${this.state.level + 1}`,
    });
    this.forceUpdate();
  };

  onChangeSize = (size) => {
    this.setState({ ...this.state, size });
  };

  onChangeSettings = (settings) => {
    this.setState(settings);
    this.setState({ displayBoardSettings: false });
  };

  onBackToSelectLevel = () => {
    this.setState({
      ...this.state,
      displayBoardSettings: true,
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.level !== this.state.level
  // }

  render() {
    console.log(this.state.level, this.state.size);
    return (
      <div>
        <Navigation />
        <div className="game-screen-container">
          <div className="game-container">
            {this.state.displayBoardSettings ? (
              <GameSettings onChangeSettings={this.onChangeSettings} />
            ) : (
              <div>
                <h1>{this.state.levelName}</h1>
                <GameBoard
                  onBackToSelectLevel={this.onBackToSelectLevel}
                  onChangeNextLevel={this.onChangeNextLevel}
                  size={this.state.size}
                  level={this.state.level}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
