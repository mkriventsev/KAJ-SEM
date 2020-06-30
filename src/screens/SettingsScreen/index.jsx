import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import './styles.scss'

export default class SettingsScreen extends Component {
    render() {
        return (
            <div>
                   <Navigation />
                   <div className='settings-container'>
                       <h1>Game Settings</h1>
                       <section>
                        <fieldset class="form-group">
                            <label>Music volume</label>
                            <input type="range" class="custom-range" />
                        </fieldset>
                        <fieldset class="form-group">
                            <label>Sound effects volume</label>
                            <input type="range" class="custom-range"/>
                        </fieldset>
                        </section>
                        <section>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Game Instruction</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </section>
                        <section>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Share your feedback</h4>
                                <form>
                                <div class="form-group">
                                <label for="textarea">Write your opinion or any question</label>
                                <textarea class="form-control" id="textarea" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            </div>
                            </section>
                   </div>
            </div>
        )
    }
}
