import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="#">NoNo Game</a> */}
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                <div>Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/game">
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
