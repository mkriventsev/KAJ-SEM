import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import logofile from "../../img/logo2.png"

/**
 * Navigation menu component
 */
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
        <img src={logofile}/>
              </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <div>Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/game"
                onClick={() =>
                  this.props.onBackToSelectLevel
                    ? this.props.onBackToSelectLevel()
                    : undefined
                }
              >
                <div>New Game</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/statistics">
                <div>Statistics</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                <div>Settings</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
