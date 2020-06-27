import React, { Component } from 'react'
import './styles.scss'
import Navigation from '../../components/Navigation'
import GameSettings from './components/GameSettings'
import GameBoard from './components/GameBoard'


export default class GameScreen extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className='game-screen-container'>
                    <GameSettings />
                    <div className='game-container'>
                        <h1>Level Name</h1>
                        <GameBoard />
                    </div>
                </div>
            </div>
        )
    }
}
