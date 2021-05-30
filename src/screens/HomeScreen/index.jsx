import React, { Component } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

export default class HomeScreen extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='header'>NoNo Game</h1>
                <nav className='menu-list'>
                    <div className='menu-item'>
                        <Link to="/game">
                            <button type="button" className="btn btn-primary menu-button">New game</button>
                        </Link>
                    </div>
                    <div className='menu-item'>
                        <Link to="/statistics">
                            <button type="button" className="btn btn-primary menu-button">Statistics</button>
                        </Link>
                    </div>
                    <div className='menu-item'>
                        <Link to="/settings">
                            <button type="button" className="btn btn-primary menu-button">Settings</button>
                        </Link>
                    </div>
                    <div className='menu-item'>
                        <Link to="/feedback">
                            <button type="button" className="btn btn-primary menu-button">Feedback</button>
                        </Link>
                    </div>
                </nav>

            </div>
        )
    }
}
