import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

  handleButton = () => {
    axios.post('/api/feedback', this.props.feedback)
      .then((response) => {
        console.log('/api/feedback POST response', response);
      })
      .catch((error) => {
        console.log('/api/feedback POST error', error);
      })
  }

  render() {
    return (
      <>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {this.props.feedback.feelings.value}</p>
      <p>Understanding: {this.props.feedback.understanding.value}</p>
      <p>Support: {this.props.feedback.supported.value}</p>
      <p>Comments: {this.props.feedback.comments}</p>

      <button onClick={this.handleButton}>SUBMIT</button>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
