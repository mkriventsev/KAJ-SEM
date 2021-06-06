import React, { Component } from "react";
import "./styles.scss";
import Navigation from "../../components/Navigation";
import GameSettings from "./components/GameSettings";
import GameBoard from "./components/GameBoard";
import SettingsButtons from "./components/SettingsButtons";
import { initLocalStorage } from "../../utils/init";
import africamusicfile from "../../audio/music/africa.mp3";
import asiamusicfile from "../../audio/music/asia.mp3";
import japanmusicfile from "../../audio/music/japan.mp3";
import forestmusicfile from "../../audio/music/forest.mp3";
import watermusicfile from "../../audio/music/water.mp3";

/**
 * GameScreen is assuming, main game component which handles rendering the both stages of the game based on the this.state.displayBoardSettings state's variable
 * GameSettings - first stage for setting the game
 * GameBoardmusic - second stage with play board
 * and also renders Navigation component
 */
export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBoardSettings: true,
      levelName: "Level 1",
      level: null,
      size: null,
      settings: JSON.parse(localStorage.getItem("settings")),
    };

    this.musictheme = {
      africa: africamusicfile,
      asia: asiamusicfile,
      japan: japanmusicfile,
      forest: forestmusicfile,
      water: watermusicfile,
    }[this.state.settings.music.theme];

    this.audio = new Audio(this.musictheme);
  }

  onCLickOnMusic = (e) => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          music: { ...this.state.settings.music, enabled: e.target.checked },
        },
      },
      () => {
        localStorage.setItem("settings", JSON.stringify(this.state.settings));
      }
    );
  };
  onCLickOnSound = (e) => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          sound: { ...this.state.settings.sound, enabled: e.target.checked },
        },
      },
      () => {
        localStorage.setItem("settings", JSON.stringify(this.state.settings));
      }
    );
  };

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

  componentDidMount() {
    initLocalStorage();
    this.playAudio();
  }
  playAudio(){
    this.audio.volume = this.state.settings.music.enabled
      ? this.state.settings.music.volume / 100
      : 0;
    this.audio.loop = true;
    this.audio.play()
  }
  stopAudio(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  componentWillUnmount() {
    this.stopAudio()
  }
  switchMusic = (value) => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          music: { ...this.state.settings.music, enabled: value },
        },
      },
      () => {
        localStorage.setItem("settings", JSON.stringify(this.state.settings));
        value ? this.playAudio(): this.stopAudio()
      }
    );
  };
  switchSound = (value) => {
  
    this.setState(
      {
        settings: {
          ...this.state.settings,
          sound: { ...this.state.settings.sound, enabled: value },
        },
      },
      () => {
        localStorage.setItem("settings", JSON.stringify(this.state.settings));
      }
    );
  };
  render() {
    return (
      <div>
        <Navigation onBackToSelectLevel={this.onBackToSelectLevel} />
        <SettingsButtons
          settings={this.state.settings}
          onSwitchSound={this.switchSound}
          onSwitchMusic={this.switchMusic}
        />
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
