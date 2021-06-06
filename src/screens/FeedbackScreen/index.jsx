
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import "./styles.scss";

/**
 * FeedbackScreen component is using for rendering feedback page, where user can fill the feedback form
 */
export default class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackSent: false,
    };
  }
   /**
 * Feedback HTML form
 */
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
  
  /**
 * clickOk is the function which turning on back feedback form by changing feedbackSent state
 */
  clickOk = (e) => {
    this.setState({feedbackSent: false})
  }
   /**
 * renderFeedbackSent is the renderer for thank element after the Submit button was pressed 

 */
  renderFeedbackSent = (e) => {
      return <div>
          <p>Thank you for your feedback. Press OK to display feedback form again!
          </p>
          <button onClick={this.clickOk}> OK </button>
      </div>
  }
  /**
 * sendEmail function collecting form imputs' values and generating mailto string for 
 *  opening email client for sending a feedback email. Redirect works as changing windos.location.href addres to genereted new.
 */
  sendEmail = (e) => {
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
   /**
 * main renderer of feedback page.
 * Depends on feedbackSent value the different page is shown
 */
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
