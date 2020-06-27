import React, { Component } from 'react'
import './styles.scss'
import GameSquare from '../GameSquare';

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [...Array(10)].map(() => Array(10).fill(null)),
            xIsNext: true,
        };
    }
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    renderSquares() {
        return this.state.squares.map(line => <div className='game-row'>
            {line.map(() =>
                <GameSquare onClick={() => this.handleClick(1)} value={null} />)}
        </div>)
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        // let winner = calculateWinner(this.state.squares)
        console.log(this.state.squares);
        return (
            <div>
                {this.renderSquares()}
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
