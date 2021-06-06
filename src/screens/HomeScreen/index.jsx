import React, { Component } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

/** 
* HomeScreen Component is used for rendering the main screen of application. It consists of the logo and navigation buttons
*/

export default class HomeScreen extends Component {

  // onClick event on logo SVG that change the background of the tile by passing 'filled' class.

  onLogoTileClick(e){

    // e.target.classList.toggle('filled')
    if (e.target.classList.contains('filled')){
      e.target.classList.remove('filled');
    }
    else{
      e.target.classList.add('filled');
    }

  }
  // function that draws the logo as interactive nonogram game  using SVG
  drawLogoBoardSquares = () => {
    const scale = 20
    const initTiles = ["00","01","02","03","04","05","06","07",
    "11","12","13","14","15","16","17",
    "11","22","33","44","55","66","77",
    "12","23","34","45","56","67",
    "60","61","62","63","64","65","66","67",
    "70","71","72","73","74","75","76","77"]

    const items = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const id = `tile${i}${j}`;
        const x = i * scale;
        const y = j * scale;
        let className = "logoTile"
        className += initTiles.includes(`${i}${j}`) ? " filled" : ""
        items.push(
          <rect id={id} className={className} x={x} y={y} width={scale} height={scale}>
            <animate attributeType="CSS" attributeName="opacity" 
           from="0" to="1" dur="1s"  begin={Math.random(7)}s repeatCount="3" />
          </rect>
        );
      }
    }
    return <>
    {items}</>;
  };
 
  render() {
    return (
      <div className="container">
        <div className="logo-container">
          <svg id="svg" onClick={this.onLogoTileClick}>
            <rect id="board" x="0" y="0" width="160" height="160" fill="#e0e0e0" stroke="#545454"/>
            {this.drawLogoBoardSquares()}
          </svg>
        </div>
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
