import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./styles.scss";
import videofile from "../../video/video.mp4";
import clicksound from "../../audio/effects/click.mp3";
import { themes } from "../../data/music";
import capitalize from "lodash/capitalize";

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
          <section>
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
              defaultValue = {this.state.settings.music.theme}
            >
              {this.renderMusicThemeSelector()}
            </select>
            </fieldset>
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
                <h4 className="card-title">Game Instruction</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
