import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default class HomeScreen extends Component {
  initLocalStorage = () => {
    if (localStorage.getItem("levelstat") === null) {
      const levelstat = { s10: {}, s15: {}, s20: {} };
      localStorage.setItem("levelstat", JSON.stringify(levelstat));
    }
    if (localStorage.getItem("meta") === null) {
      localStorage.setItem("last_init", Date.now());
    }
  };

  render() {
    this.initLocalStorage()
    return (
      <div className="container">
        <h1 className="header">NoNo Game</h1>
        <nav className="menu-list">
          <div className="menu-item">
            <Link to="/game">
              <button type="button" className="btn btn-primary menu-button">
                New game
              </button>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/statistics">
              <button type="button" className="btn btn-primary menu-button">
                Statistics
              </button>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/settings">
              <button type="button" className="btn btn-primary menu-button">
                Settings
              </button>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/feedback">
              <button type="button" className="btn btn-primary menu-button">
                Feedback
              </button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
