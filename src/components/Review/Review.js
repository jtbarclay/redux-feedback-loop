import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    return (
      <>
      <h2>Review Your Feedback</h2>
      <p>Feelings: {this.props.feedback.feelings.value}</p>
      <p>Understanding: {this.props.feedback.understanding.value}</p>
      <p>Support: {this.props.feedback.supported.value}</p>
      <p>Comments: {this.props.feedback.comments}</p>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
