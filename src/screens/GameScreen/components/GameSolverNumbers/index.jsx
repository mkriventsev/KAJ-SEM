import React, { Component } from 'react'
import './styles.scss'
export default class GameSolverNumbers extends Component {
    render() {
        const containerClass = `solver-numbers${this.props.isRows ? ' rows' : ''}`
        return (
            <div className={containerClass}>
                {this.props.numbers.map(number => (
                    <div className='number'>
                        {number}
                    </div>
                ))}
            </div>
        )
    }
}
