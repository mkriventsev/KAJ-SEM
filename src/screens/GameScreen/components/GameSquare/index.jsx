import React, { Component } from 'react'
import './styles.scss'

export default class GameSquare extends Component {    
    constructor(props) {
    super(props); 
}

    render() {
        const {onClick, value} = this.props
        return (
            <div>
                <button className="game-square"
                    onClick={onClick}>
                    {value}
                </button>
            </div>
        )
    }
}
