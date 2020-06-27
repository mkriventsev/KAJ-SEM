import React, { Component } from 'react'
import './styles.scss'

export default class HomeScreen extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='header'>NoNo Game</h1>
                <nav className='menu-list'>
                    <button type="button" class="btn btn-primary menu-button">New game</button>
                    <button type="button" class="btn btn-primary menu-button">Statistics</button>
                    <button type="button" class="btn btn-primary menu-button">Settings</button>
                </nav>

            </div>
        )
    }
}
