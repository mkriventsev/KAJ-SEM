import React, { Component } from 'react'
import './styles.scss'
import GameSquare from '../GameSquare';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [...Array(10)].map(() => Array(10).fill(null)),
            isFill: true,
            xIsNext: true,
        };
        console.log(this.state.isFill)
    }
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
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

    checkSolver() {
        let solver = [
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]

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
                {this.renderSquares()}
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

function Square(props) {
    return (
        <button className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}
