import React, { Component } from "react";
import ButtonsLine from "../../screens/GameScreen/components/ButtonsLine";
import { formatSecondsToHumanTime } from "../../utils/timeformatter";

/**
 * Clock component is using for rendering and controling the stopwatch in the game.
 */

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      isTimeSaved: false,
      currentTime: 0,
    };
  }

  componentDidMount() {
    this.start();
  }

  start = () => {
    this.setState({
      ...this.state,
      running: true,
    });
    this.clock = setInterval(() => this.pace(), 1000);
  };

  componentWillUnmount() {
    this.stop();
  }

  stop = () => {
    this.setState({
      ...this.state,
      running: false,
    });
    clearInterval(this.clock);
  };

  pace = () => {
    this.setState({ currentTime: this.state.currentTime + 1 });
  };

  reset = () => {
    this.setState({
      currentTime: 0,
    });
  };

  componentDidUpdate() {
    if (this.props.gameFinished && !this.state.isTimeSaved) {
      this.props.saveSolveTime(this.state.currentTime);
      this.stop();
      this.setState({isTimeSaved: true });
    }
    if (this.props.resetTime) { 
      this.props.onStartOver();
      
      if (this.state.isTimeSaved){
        this.start()
      }
      this.reset();
      this.setState({isTimeSaved: false });
    }
  }

  render() {
    return (
      <div className="clock">
        <span>{formatSecondsToHumanTime(this.state.currentTime)}</span>
      </div>
    );
  }
}

// https://reactjs.org/docs/state-and-lifecycle.html
// https://stackoverflow.com/questions/39041710/react-js-change-child-components-state-from-parent-component
