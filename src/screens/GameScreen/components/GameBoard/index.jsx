import React, { Component } from 'react'
import './styles.scss'
import GameSquare from '../GameSquare';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        const { size } = this.props
        console.log(size)
        this.state = {
            squares: [...Array(size)].map(() => Array(size).fill(null)),
            isFill: true,
            xIsNext: true,
        };
        console.log(this.state.isFill)
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

    checkSolver() {
        let solver = [
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

        //transpone Matrix
        let trSolver = solver[0].map((_, colIndex) => solver.map(row => row[colIndex]));
        console.log(trSolver);

        const countsForSolver = {
            rows: this.calculateSolverCounts(solver),
            columns: this.calculateSolverCounts(trSolver)
        }

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
        return (
            <div>
                <div className='board-container'>
                    {this.renderSquares()}
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


