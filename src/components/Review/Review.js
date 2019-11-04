import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Review extends Component {

  handleButton = (route) => {
    if (route === 'back') {
      this.props.history.push('/comments');
    } else if (route === 'submit') {
      axios.post('/api/feedback', this.props.feedback)
        .then((response) => {
          console.log('/api/feedback POST response', response);
          this.props.dispatch({type: 'RESET_FEEDBACK'});
          this.props.history.push('/success');
        })
        .catch((error) => {
          console.log('/api/feedback POST error', error);
        })
    }
  }

  render() {
    return (
      <>
        <h2>Review Your Feedback</h2>
        <p>Feelings: {this.props.feedback.feelings.value}</p>
        <p>Understanding: {this.props.feedback.understanding.value}</p>
        <p>Support: {this.props.feedback.supported.value}</p>
        <p>Comments: {this.props.feedback.comments}</p>
        <Button variant="contained" color="primary" onClick={() => this.handleButton('back')}>Back</Button>
        <Button variant="contained" color="primary" onClick={() => this.handleButton('submit')}>SUBMIT</Button>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Review);
