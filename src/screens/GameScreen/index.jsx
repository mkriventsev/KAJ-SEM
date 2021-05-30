import React, { Component } from "react";
import "./styles.scss";
import Navigation from "../../components/Navigation";
import GameSettings from "./components/GameSettings";
import GameBoard from "./components/GameBoard";

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

  onChangeLevel = (levelName) => {
    this.setState({ ...this.state, levelName });
  };

  onChangeSize = (size) => {
    this.setState({ ...this.state, size });
  };

  onChangeSettings = (settings) => {
    this.setState(settings);
    this.setState({displayBoardSettings:false})
  };

  render() {
    console.log(this.state.levelName, this.state.size);
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
                <GameBoard size={this.state.size} level ={this.state.level}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
