import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./styles.scss";
import mean from "lodash/mean";
import min from "lodash/min";
import max from "lodash/max";
import { formatSecondsToHumanTime } from "../../utils/timeformatter";


export default class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelstat: JSON.parse(localStorage.getItem("levelstat")),
    };
  }

  renderSizeStatistics = (size, value) => {
    return (
      <>
        <tr class="table-primary">
          <th scope="row" colspan="5">
            {size}x{size}
          </th>
        </tr>
        { Object.keys(value).length ?
        Object.entries(value).map(([item, val]) => (
          <tr className="table-active">
            <th scope="row">ч {item.slice(1)}</th>
            <td>{formatSecondsToHumanTime(min(val))}</td>
            <td>{formatSecondsToHumanTime(max(val))}</td>
            <td>{formatSecondsToHumanTime(Math.floor(mean(val)))}</td>
            <td>{(val.length)}x</td>
          </tr>
        )):
        <tr className="table-active">
            <td colSpan="5">no stat yet</td>
          </tr>
        }
      </>
    );
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className="feedback-container">
          <h1>NoNo Game statistics</h1>
          <section>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Level</th>
                  <th scope="col">Best time</th>
                  <th scope="col">Worst time</th>
                  <th scope="col">Average time</th>
                  <th scope="col">Tries</th>
                </tr>
              </thead>
              <tbody>{
              Object.entries(this.state.levelstat).map(([size, value]) => (
                this.renderSizeStatistics(size, value)))
              }</tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}
