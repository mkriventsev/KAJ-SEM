import React, { Component } from "react";
import "./styles.scss";
import GameSquare from "../GameSquare";
import GameSolverNumbers from "../GameSolverNumbers";
import { solver } from "../../../../data/solvers";
import { FinishedGameModal } from "../FinishedGameModal";
import ButtonsLine from "../ButtonsLine";
import Clock from "../../../../components/Clock";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    const { size } = this.props;
    this.state = {
      squares: [...Array(size)].map(() => Array(size).fill(null)),
      fillModeOn: true,
      gameFinished: false,
      isModalOpen: false,
      resetTime: false,
      solveTime: 0,
    };
    this.initBoard();
  }
  selectedSolver = null;
  solverCertificate = null;
  countsForSolver = null;

  initBoard = () => {
    console.log("init Board");
    this.selectedSolver = solver[`s${this.props.size}`][`l${this.props.level}`];
    this.solverCertificate = this.createCertificate(this.selectedSolver);
    let trSolver = this.selectedSolver[0].map((_, colIndex) =>
      this.selectedSolver.map((row) => row[colIndex])
    );

    this.countsForSolver = {
      rows: this.calculateSolverCounts(this.selectedSolver),
      columns: this.calculateSolverCounts(trSolver),
    };

    this.setState({
      squares: [...Array(this.props.size)].map(() =>
        Array(this.props.size).fill(null)
      ),
      resetTime: true,
      gameFinished: false,
    });
    console.log("nazvanie" + this.selectedSolver);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.size !== state.squares.length) {
      return {
        squares: [...Array(props.size)].map(() => Array(props.size).fill(null)),
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  saveSolveTime = (time) => {
    this.setState({ solveTime: time });
    let levelstat = JSON.parse(localStorage.getItem("levelstat"));
    if (levelstat[`s${this.props.size}`][`l${this.props.level}`]) {
      levelstat[`s${this.props.size}`][`l${this.props.level}`].push(time);
    } else {
      levelstat[`s${this.props.size}`][`l${this.props.level}`] = [time];
    }

    localStorage.setItem("levelstat", JSON.stringify(levelstat));
    // users = JSON.parse(localStorage.getItem("users") || "[]");
  };

  renderSquares() {
    return this.state.squares.map((line, lineIndex) => (
      <div key={lineIndex + line} className="game-row">
        {line.map((_, index) => (
          <GameSquare
            key={index}
            gameFinished={this.state.gameFinished}
            onClick={() => {this.handleClick(lineIndex, index)}}
            value={this.state.squares[lineIndex][index]}
          />
        ))}
      </div>
    ));
  }

  handleClick(row, col) {
    const squares = this.state.squares.slice();
    if (!this.state.gameFinished) {
      if (
        (squares[row][col] == "1" && this.state.fillModeOn) ||
        (squares[row][col] == "0" && !this.state.fillModeOn)
      ) {
        squares[row][col] = null;
      } else {
        squares[row][col] = this.state.fillModeOn ? "1" : "0";
      }
      this.setState({
        squares: squares,
      });
      this.checkSolver();
    }
  }

  calculateSolverCounts(solver) {
    let rows = [];
    solver.forEach((row) => {
      let rowCounts = [];
      let counter = 0;
      row.forEach((rowElement, index) => {
        if (rowElement === 1) {
          counter++;
        } else {
          if (counter !== 0) {
            rowCounts.push(counter);
            counter = 0;
          }
        }
        if (index === solver[0].length - 1 && counter !== 0) {
          rowCounts.push(counter);
        }
      });
      rows.push(rowCounts);
    });
    return rows;
  }

  checkSolver() {
    const board = this.state.squares;
    const boardCertificate = this.createCertificate(board);
    if (boardCertificate === this.solverCertificate) {
      console.log("KONEC, CHVATIT IGRAT");
      this.setState({ gameFinished: true, isModalOpen: true });
      localStorage.setItem("myData", "data");
    }
  }

  createCertificate(array) {
    let certificate = "";
    array.forEach((i) => {
      i.forEach((j) => {
        if (j == null) {
          j = 0;
        }
        certificate += j.toString();
      });
    });
    console.log(certificate);
    return certificate;
  }

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  resetBoard = () => {
    return this.state.board;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, this.props, "hhhh");
    if (prevProps.level != this.props.level) {
      this.initBoard();
    }
  }
  render() {
    console.log(this.selectedSolver, "render Game Board");

    return (
      <div>
        <FinishedGameModal
          onChangeLevel={() => {
            this.props.onChangeNextLevel();
            // this.initBoard();
          }}
          onCloseModal={this.onCloseModal}
          isOpen={this.state.isModalOpen}
          solveTime={this.state.solveTime}
          isLastLevel = {this.props.level === Object.keys(solver[`s${this.props.size}`]).length}
          onBackToSelectLevel={this.props.onBackToSelectLevel}

        />
        <Clock
          onStartOver={() => {
            this.setState({ resetTime: false, gameFinished: false });
          }}
          resetTime={this.state.resetTime}
          gameFinished={this.state.gameFinished}
          saveSolveTime={this.saveSolveTime}
        />
        <div className="board-flex-wrapper">
          <div className="solver-number-container-rows">
            {this.countsForSolver.rows.map((rowNumbers, index) => (
              <GameSolverNumbers
                key={`row-${index}`}
                numbers={rowNumbers}
                isRows={true}
              />
            ))}
          </div>
          <div>
            <div className="solver-number-container-cols">
              {this.countsForSolver.columns.map((colNumbers, index) => (
                <GameSolverNumbers key={`col-${index}`} numbers={colNumbers} />
              ))}
            </div>
            <div className="board-container">{this.renderSquares()}</div>
          </div>
        </div>
        <ButtonsLine
          onStartOver={() => {
            const { size } = this.props;
            // this.forceUpdate();
            this.setState({
              ...this.state,
              squares: [...Array(size)].map(() => Array(size).fill(null)),
              resetTime: true,
            });
          }}
          onBackToSelectLevel={this.props.onBackToSelectLevel}
          
          onChangeMode={() => {
            this.setState({
              fillModeOn: !this.state.fillModeOn,
            });
          }}
        />
      </div>
    );
  }
}
