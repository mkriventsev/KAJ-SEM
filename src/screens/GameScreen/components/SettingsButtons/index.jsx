import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class SettingsButtons extends Component {
  onChangeMusic = (e) =>{
    let value = e.target.checked
    this.props.onSwitchMusic(value)
  }
  onChangeSound = (e) =>{
    let value = e.target.checked
    this.props.onSwitchSound(value)
  }
  render() {
    return (
      <aside className="settings-buttons">
        <div id="music-set">
          <input
            id="music-custom-checkbox-input"
            type="checkbox"
            defaultChecked={this.props.settings.music.enabled}
            onChange={this.onChangeMusic}
          />
          <label
            className="custom-checkbox"
            id="music-custom-checkbox"
            htmlFor="music-custom-checkbox-input"
          >
            MUSIC
          </label>
        </div>
        <div id="sound-set">
          <input
            id="sound-custom-checkbox-input"
            type="checkbox"
            defaultChecked={this.props.settings.sound.enabled}
            onChange={this.onChangeSound}
          />
          <label
            className="custom-checkbox"
            id="sound-custom-checkbox"
            htmlFor="sound-custom-checkbox-input"
          >
            SOUND
          </label>
        </div>
      </aside>
    );
  }
}
