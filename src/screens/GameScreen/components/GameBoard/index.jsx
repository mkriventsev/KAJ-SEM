import React, { Component } from "react";
import "./styles.scss";
import GameSquare from "../GameSquare";
import GameSolverNumbers from "../GameSolverNumbers";
import {solver} from '../../../../data/solvers'
import { FinishedGameModal } from "../FinishedGameModal";

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    const { size } = this.props;
    this.state = {
      squares: [...Array(size)].map(() => Array(size).fill(null)),
      isFill: true,
      xIsNext: true,
      gameFinished: false,
      isModalOpen: false
    };
  }

  selectedSolver = solver[`s${this.props.size}`][`l${this.props.level}`]
  solverCertificate = this.createCertificate(this.selectedSolver);

  static getDerivedStateFromProps(props, state) {
    if (props.size !== state.squares.length) {
      return {
        squares: [...Array(props.size)].map(() => Array(props.size).fill(null)),
      };
    }

    // Return null if the state hasn't changed
    return null;
  }

  renderSquares() {
    return this.state.squares.map((line, lineIndex) => (
      <div key={lineIndex + line} className="game-row">
        {line.map((_, index) => (
          <GameSquare
            key={index}
            onClick={() => this.handleClick(lineIndex, index)}
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
        (squares[row][col] == "1" && this.state.isFill) ||
        (squares[row][col] == "0" && !this.state.isFill)
      ) {
        squares[row][col] = null;
      } else {
        squares[row][col] = this.state.isFill ? "1" : "0";
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
  }

  render() {
    console.log(this.selectedSolver, "render");
    console.log(this.state.squares);
    let trSolver = this.selectedSolver[0].map((_, colIndex) =>
      this.selectedSolver.map((row) => row[colIndex])
    );
    console.log(trSolver);

    const countsForSolver = {
      rows: this.calculateSolverCounts(this.selectedSolver),
      columns: this.calculateSolverCounts(trSolver),
    };

    return (
      <div>
        <FinishedGameModal onChangeLevel={this.props.onChangeNextLevel} onCloseModal={this.onCloseModal} isOpen={this.state.isModalOpen} />

      <div className="board-flex-wrapper">
        
        <div className="solver-number-container-rows">
          {countsForSolver.rows.map((rowNumbers, index) => (
            <GameSolverNumbers
              key={`row-${index}`}
              numbers={rowNumbers}
              isRows={true}
            />
          ))}
        </div>
        <div>
          <div className="solver-number-container-cols">
            {countsForSolver.columns.map((colNumbers, index) => (
              <GameSolverNumbers key={`col-${index}`} numbers={colNumbers} />
            ))}
          </div>
          <div className="board-container">{this.renderSquares()}</div>
        </div>
        <button
          onClick={() => {
            this.setState({
              isFill: !this.state.isFill,
            });
            console.log(this.state.isFill);
          }}
        >
          CHANGE
        </button>
      </div>
      </div>
    );
  }
}
