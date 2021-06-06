import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./styles.scss";
import mean from "lodash/mean";
import min from "lodash/min";
import max from "lodash/max";
import { formatSecondsToHumanTime } from "../../utils/timeformatter";
import { DeleteStatModal } from "./DeleteStatModal";

export default class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelstat: JSON.parse(localStorage.getItem("levelstat")),
      isModalOpen: false,
      size: null,
      level:null
    };
  }
  openModal=()=>{
    this.setState({isModalOpen: true });
  }
  deleteLevelStat =(size,level) =>{
    console.log(size,level)
    const levelstat =  this.state.levelstat
    delete levelstat[`s${size}`][`l${level}`]
    localStorage.setItem("levelstat", JSON.stringify(levelstat));
    this.onCloseModal()
    this.render()
  }
  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  onClickDeleteHandler = (e) =>{
    this.setState({size:e.target.dataset.size,level:e.target.dataset.level})
    console.log(this.state)
    this.openModal()
  }
  renderSizeStatistics = (size, value) => {
    return (
      <>
        <DeleteStatModal
          onDeleteLevelStat={this.deleteLevelStat}
          onCloseModal={this.onCloseModal}
          isOpen={this.state.isModalOpen}
          size={this.state.size}
          level={this.state.level}
          onBackToSelectLevel={this.props.onBackToSelectLevel}
        />
        <tr class="table-primary">
          <th scope="row" colspan="6">
            Size {size.slice(1)}x{size.slice(1)}
          </th>
        </tr>
        {Object.keys(value).length ? (
          Object.entries(value).map(([item, val]) => (
            <tr className="table-active">
              <th scope="row">Level {item.slice(1)}</th>
              <td>{formatSecondsToHumanTime(min(val))}</td>
              <td>{formatSecondsToHumanTime(max(val))}</td>
              <td>{formatSecondsToHumanTime(Math.floor(mean(val)))}</td>
              <td>{val.length}x</td>
              <td><button className="btn btn-outline-secondary" 
              data-level={item.slice(1)} data-size={size.slice(1)}
              onClick={this.onClickDeleteHandler}
              ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                Clear</button>
                
              </td>
            </tr>
          ))
        ) : (
          <tr className="table-active">
            <td colSpan="5">
              You haven't solve any nonogram in size of {size.slice(1)}x
              {size.slice(1)}{" "}
            </td>
          </tr>
        )}
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
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(this.state.levelstat).map(([size, value]) =>
                  this.renderSizeStatistics(size, value)
                )}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    );
  }
}
