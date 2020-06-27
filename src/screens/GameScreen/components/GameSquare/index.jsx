import React, { Component } from 'react'
import './styles.scss'

export default class GameSquare extends Component {    
    constructor(props) {
    super(props); 
}


    render() {
        const {onClick, value} = this.props
        const className = `game-square ${value== '1' && 'btn-secondary' }` 
        const valueToShow = value == '0' && 'X'
        return (
                <button className={className}
                    onClick={onClick}>
                    {valueToShow}
                </button>
        )
    }
}
