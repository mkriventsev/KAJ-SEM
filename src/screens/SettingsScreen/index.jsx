import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./styles.scss";
import videofile from "../../video/video.mp4";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: JSON.parse(localStorage.getItem("settings")),
    };
  }
  // localStorage.setItem("levelstat", JSON.stringify(levelstat));
  // users = JSON.parse(localStorage.getItem("users") || "[]");

  saveSettingsToStorage = () => {};

  setMusicVolume = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        music: { ...this.state.settings.music, level: e.target.value },
      },
    });
    localStorage.setItem("settings", JSON.stringify(this.state.settings));
  };
  setSoundVolume = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        sound: { ...this.state.settings.sound, level: e.target.value },
      },
    });
    localStorage.setItem("settings", JSON.stringify(this.state.settings));
  };
  switchMusic(e) {
    console.log(e.target.checked);
  }
  switchEffects(e) {
    console.log(e.target.checked);
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className="settings-container">
          <h1>Game Settings</h1>
          <section>
            <fieldset class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="musicEffects"
                onChange={this.switchMusic}
                value={this.state.settings.music.state}
              />
              <label class="custom-control-label" for="musicEffects">
                Music
              </label>
            </fieldset>
            <fieldset class="form-group">
              <label>Music volume</label>
              <input
                type="range"
                class="custom-range"
                onChange={this.setMusicVolume}
                value={this.state.settings.music.level}
              />
            </fieldset>
            <fieldset class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="soundEffects"
                onChange={this.switchEffects}
                value={this.state.settings.sound.state}
              />
              <label class="custom-control-label" for="soundEffects">
                Sound effects
              </label>
            </fieldset>
            <fieldset class="form-group">
              <label>Sound effects volume</label>
              <input
                type="range"
                class="custom-range"
                onChange={this.setSoundVolume}
                value={this.state.settings.sound.level}
              />
            </fieldset>
          </section>
          <section>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Game Instruction</h4>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <video width="320" height="240" controls>
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
