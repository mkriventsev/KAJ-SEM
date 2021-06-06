import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./styles.scss";

export default class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackSent: false,
    };
  }

  renderFeedbackForm = (e) =>{
    return <form id = "feedback-form">
    <h4 className="card-title">Share your feedback</h4>
      <div className="form-group">
        <div>
          <input
            id="nameImput"
            placeholder="Your name"
            pattern="[a-zA-Z ]+"
            required
          />
          <input
            id="emailInput"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label for="textarea">
            Write your opinion or any question
          </label>
          <textarea
            name="body"
            placeholder="awesome game ..."
            className="form-control"
            id="textarea"
            rows="5"
            autoFocus
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={this.sendEmail}
      >
        Submit
      </button>
    </form>
  }
  
  clickOk = (e) => {
    this.setState({feedbackSent: false})
  }
  renderFeedbackSent = (e) => {
      return <div>
          <p>Thank you!
          </p>
          <button onClick={this.clickOk}> OK </button>
      </div>
  }
  sendEmail = (e) => {
    console.log(e.target);
    if (e.target.parentNode.checkValidity()) {
      let body = `Hi, Max! ${escape("\r\n")}`;
      body += e.target.parentNode[2].value;
      body += `${escape("\r\n")} ${e.target.parentNode[0].value} <${
        e.target.parentNode[1].value
      }>`;
      let link =
        "mailto:makslits@gmail.com?su  bject=[NoNoGame feedback]&body=" + body;
      window.location.href = link;
      this.setState({feedbackSent: true})}
  };
  render() {
    return (
      <div>
        <Navigation />
        <div className="feedback-container">
          <h1>Feedback</h1>
          <section>
            <div className="card">
              <div className="card-body">
                  {this.state.feedbackSent ?this.renderFeedbackSent():this.renderFeedbackForm()}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
