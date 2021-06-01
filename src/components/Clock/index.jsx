import React, { Component } from "react";
import ButtonsLine from "../../screens/GameScreen/components/ButtonsLine";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    };
  }

  componentDidMount() {
    this.start();
  }

  start = () => {
    // this.setState({
    //   ...this.state,
    //   running: true,
    // });
    this.clock = setInterval(() => this.pace(), 10);
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
    this.setState({ currentTimeMs: this.state.currentTimeMs + 10 });
    if (this.state.currentTimeMs >= 1000) {
      this.setState({ currentTimeSec: this.state.currentTimeSec + 1 });
      this.setState({ currentTimeMs: 0 });
    }
    if (this.state.currentTimeSec >= 60) {
      this.setState({ currentTimeMin: this.state.currentTimeMin + 1 });
      this.setState({ currentTimeSec: 0 });
    }
  };

  reset = () => {
    this.setState({
      currentTimeMs: 0,
      currentTimeSec: 0,
      currentTimeMin: 0,
    });
  };

  formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    if (rest[0] === "ms" && value.length < 3) {
      value = "0" + value;
    }
    return value;
  };

  // componentWillReceiveProps(props) {
  
  // }

  render() {
    if (this.props.resetTime){
      console.log('da')
      this.props.onStartOver()
      this.reset()
    }
    return (
      <div className="clock">
        <span>
          {/* #TODO hours */}

          {this.formatTime(this.state.currentTimeMin)}:
          {this.formatTime(this.state.currentTimeSec)}
        </span>
      </div>
    );
  }
}

// #TODO calculate
// https://reactjs.org/docs/state-and-lifecycle.html
// https://stackoverflow.com/questions/39041710/react-js-change-child-components-state-from-parent-component
