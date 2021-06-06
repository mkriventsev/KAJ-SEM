import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./styles.scss";
import videofile from "../../video/video.mp4";
import clicksound from "../../audio/effects/click.mp3";
import { themes } from "../../data/music";
import capitalize from "lodash/capitalize";
/**
 * SettingsScreen component is using for changing the game settings.
 * Such as sound effects and music. User can set volume of the music and sound or turn off it.
 * User can change the music theme. Also this component contains game instruction with the video.
 */

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: JSON.parse(localStorage.getItem("settings")),
    };
  }

  onSelectMusicTheme = (e) => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          music: { ...this.state.settings.music, theme: e.target.value },
        },
      },
      () => {
        localStorage.setItem("settings", JSON.stringify(this.state.settings));
      }
    );
  };

  renderMusicThemeSelector = () => {
    return themes.map((item, index) => (
      <option value={item} key={item}>
        {capitalize(item)}
      </option>
    ));
  };
  setMusicVolume = (e) => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          music: { ...this.state.settings.music, volume: +e.target.value },
        },
      },
      () => {
        localStorage.setItem("settings", JSON.stringify(this.state.settings));
      }
    );
  };
  setSoundVolume = (e) => {
    this.setState(
      {
        settings: {
          ...this.state.settings,
          sound: { ...this.state.settings.sound, volume: +e.target.value },
        },
      },
      () => {
        localStorage.setItem("settings", JSON.stringify(this.state.settings));
      }
    );
    let audio = new Audio(clicksound);
    audio.volume = +e.target.value / 100;
    audio.play();
  };

  switchMusic = (e) => {
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
  switchEffects = (e) => {
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
  render() {
    return (
      <div>
        <Navigation />
        <div className="settings-container">
          <h1>Game Settings</h1>
          <section class="musicSettings">
            <fieldset className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="musicEffects"
                onChange={this.switchMusic}
                defaultChecked={this.state.settings.music.enabled}
              />
              <label className="custom-control-label" htmlFor="musicEffects">
                Music
              </label>
            </fieldset>

            <fieldset className="form-group">
              <label>Music volume</label>
              <input
                type="range"
                disabled={!this.state.settings.music.enabled}
                className="custom-range"
                step="10"
                onClick={this.setMusicVolume}
                defaultValue={this.state.settings.music.volume}
              />
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="musicTheme">Select music theme</label>
              <select
                onChange={this.onSelectMusicTheme}
                className="form-control"
                id="musicTheme"
                defaultValue={this.state.settings.music.theme}
              >
                {this.renderMusicThemeSelector()}
              </select>
            </fieldset>
          </section>
          <section class="soundSettings">
            <fieldset className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="soundEffects"
                onChange={this.switchEffects}
                defaultChecked={this.state.settings.sound.enabled}
              />
              <label className="custom-control-label" htmlFor="soundEffects">
                Sound effects
              </label>
            </fieldset>
            <fieldset className="form-group">
              <label>Sound effects volume</label>
              <input
                type="range"
                disabled={!this.state.settings.sound.enabled}
                className="custom-range"
                onChange={this.setSoundVolume}
                step="10"
                defaultValue={this.state.settings.sound.volume}
              />
            </fieldset>
          </section>
          <section>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Game Instruction</h3>
                <p className="card-text">
                Nonogram is a picture logic puzzle in which cells in a grid must be colored or left blank according to numbers at the side of the grid to reveal a hidden picture.
                </p>
                <p className="card-text">
                In this puzzle type, the numbers are a form of discrete tomography that measures how many unbroken lines of filled-in squares there are in any given row or column. For example, a clue of "4 8 3" would mean there are sets of four, eight, and three filled squares, in that order, with at least one blank square between successive sets.
                </p>
                <p className="card-text">
                In this puzzle type, the numbers are a form of discrete tomography that measures how many unbroken lines of filled-in squares there are in any given row or column. For example, a clue of "4 8 3" would mean there are sets of four, eight, and three filled squares, in that order, with at least one blank square between successive sets.
                </p>
                <p className="card-text">
                Below you can find short the video guide how to solve simple nonogram.
                </p>
                <video width="100%" controls>
                  <source src={videofile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
