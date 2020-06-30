import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    {/* <a class="navbar-brand" href="#">NoNo Game</a> */}
                    <div>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                            <Link class="nav-link" to="/">
                                <div>Home</div>
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/settings">
                                <div>Settings</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
