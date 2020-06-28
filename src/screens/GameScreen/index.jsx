import React, { Component } from 'react'
import './styles.scss'
import Navigation from '../../components/Navigation'
import GameSettings from './components/GameSettings'
import GameBoard from './components/GameBoard'


export default class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelName: 'Level 1',
            size: 10,
        };
    }

    onChangeLevel = (levelName) => {
        this.setState({...this.state, levelName})
        console.log(this.state, 'dds')
    }

    onChangeSize = (size) => {
        this.setState({...this.state, size})
    }

    onChangeSettings = (settings) => {
        this.setState(settings)
    }

    render() {
        console.log(this.state.levelName, this.state.size, 'd')
        return (
            <div>
                <Navigation />
                <div className='game-screen-container'>
                    <GameSettings onChangeSettings={this.onChangeSettings} />
                    <div className='game-container'>
        <h1>{this.state.levelName}</h1>
                        <GameBoard size={this.state.size} />
                    </div>
                </div>
            </div>
        )
    }
}
