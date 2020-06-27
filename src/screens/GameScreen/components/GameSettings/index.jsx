import React, { Component } from 'react'
import './styles.scss'

export default class GameSettings extends Component {
    renderSizeSelector() {
        return [10, 15, 20].map(item => (
            <div class="form-check disabled">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" value={item} />
                    {item} x {item}
                </label>
            </div>
        ))

    }
    renderLevelSelector() {
        return [1, 2, 3, 4, 5, 15, 20].map(item => (
            <option>{item}</option>
        ))
    }
    render() {
        return (
            <aside>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Board settings</h4>
                        <h6 class="card-subtitle mb-2 text-muted">Select size and level</h6>
                        <div class="form-group">
                            <fieldset class="form-group">
                                <label >Select size</label>
                                {this.renderSizeSelector()}
                            </fieldset>
                            
                            <label for="exampleSelect1">Select level</label>
                            <select class="form-control" id="exampleSelect1">
                                {this.renderLevelSelector()}
                            </select>
                        </div>
                        <button type="button" class="btn btn-primary start-game-button">Start</button>
                    </div>
                </div>
            </aside>
        )
    }
}
