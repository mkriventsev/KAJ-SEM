import React, { Component } from 'react'
import './styles.scss'
import GameSquare from '../GameSquare';
import GameSolverNumbers from '../GameSolverNumbers';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        const { size } = this.props
        this.state = {
           squares: [...Array(size)].map(() => Array(size).fill(null)),
            isFill: true,
            xIsNext: true,
        };
    }


    static getDerivedStateFromProps(props, state) {
        if (props.size !== state.squares.length) {
          return {
            squares: [...Array(props.size)].map(() => Array(props.size).fill(null))
          };
        }
    
        // Return null if the state hasn't changed
        return null;
      }


    renderSquares() {
        return this.state.squares.map((line, lineIndex) => <div className='game-row'>
            {line.map((_, index) =>
                <GameSquare onClick={() => this.handleClick(lineIndex, index)} value={this.state.squares[lineIndex][index]} />)}
        </div>)
    }
    handleClick(row, col) {
        const squares = this.state.squares.slice();
        console.log(squares[row][col]);
        if (!this.checkSolver()) {
            if ((squares[row][col] == '1' && this.state.isFill) || (squares[row][col] == '0' && !this.state.isFill)) {
                squares[row][col] = null
            } else {
                squares[row][col] = this.state.isFill ? '1' : '0';
            }
            this.setState({
                squares: squares
            });
        }
    }

    calculateSolverCounts(solver) {
        let rows = []
        solver.forEach(row => {
            let rowCounts = []
            let counter = 0
            row.forEach((rowElement, index) => {
                if (rowElement === 1) {
                    counter++
                }
                else {
                    if (counter !== 0) {
                        rowCounts.push(counter);
                        counter = 0
                    }
                }
                if (index === solver[0].length - 1 && counter !== 0) { rowCounts.push(counter); }
            });
            rows.push(rowCounts)
        });
        console.log(rows);
        return rows
    }

    solver = [
        //6, 2 2, 1 1 1 2, 1 1 4, 9, 2 1 2, 2 1 2, 4 4, 1 1 1 2, 1 1,
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1], //9
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0], // 1 4
        [0, 0, 1, 0, 1, 0, 0, 1, 1, 0], // 1 1 2
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0], // 1 2 1
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0], //1 1 1 1 1
        [1, 0, 0, 1, 1, 1, 0, 1, 0, 0], // 1 3 1
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0], // 1 2 1
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 10
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], //9
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //0
    ]

    checkSolver(solver) {

        //transpone Matrix

        let board = this.state.squares
        if (this.createCertificate(board) == this.createCertificate(solver)) {
            console.log('KONEC, CHVATIT IGRAT');
            return true
        }
        return false
    }

    createCertificate(array) {
        let certificate = ''
        array.forEach(i => {
            i.forEach(j => {
                if (j == null) {
                    j = 0
                }
                certificate += j.toString()
            });
        });
        console.log(certificate);
        return certificate
    }

    render() {
        console.log(this.state.squares);
        let trSolver = this.solver[0].map((_, colIndex) => this.solver.map(row => row[colIndex]));
        console.log(trSolver);


        const countsForSolver = {
            rows: this.calculateSolverCounts(this.solver),
            columns: this.calculateSolverCounts(trSolver)
        }

        return (
            <div className='board-flex-wrapper'>
                <div className='solver-number-container-rows'>
                    {countsForSolver.rows.map(rowNumbers => <GameSolverNumbers numbers={rowNumbers} isRows={true} />)}
                </div>
                <div>
                    <div className='solver-number-container-cols'>
                        {countsForSolver.columns.map(colNumbers => <GameSolverNumbers numbers={colNumbers} />)}
                    </div>
                    <div className='board-container'>
                        
                        {this.renderSquares()}
                    </div>
                </div>
                <button onClick={() => {
                        this.setState({
                            isFill: !this.state.isFill
                        })
                        console.log(this.state.isFill)
                    }}>CHANGE</button>
            </div>
        );
    }
}


