import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import './styles.scss'

export default class FeedbackScreen extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className='feedback-container'>
                    <h1>Feedback</h1>
                    <section>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Share your feedback</h4>
                                <form>
                                    <div class="form-group">
                                        <div>
                                            <input placeholder="Your name" pattern="[a-zA-Z ]+"/>
                                            <input type="email"  placeholder="Your email" />
                                        </div>
                                        <div>
                                            <label for="textarea">Write your opinion or any question</label>
                                            <textarea placeholder="awesome game ..." class="form-control" id="textarea" rows="5" autoFocus></textarea>
                                        </div>
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