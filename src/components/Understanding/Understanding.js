import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';
import TextField from '@material-ui/core/TextField';

class Understanding extends Component {
  state = {
    understanding: '',
  }

  handleInput = (event) => {
    this.setState({
      understanding: event.target.value,
    })
  }

  handleButton = (route) => {
    if (this.state.understanding !== '') {
      this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding });
    }
    if (route === 'next') {
      this.props.history.push('/supported');
    } else {
      this.props.history.push('/feeling');
    }
  }

  render() {
    return (
      <>
        <h2>How well are you understanding the content?</h2>
        <RadioButtons
          checkedValue={this.props.feedback.understanding.value}
          lowText='Which way is up?'
          midText='meh'
          highText='I could teach this'
          reduxActionType='SET_UNDERSTANDING_VALUE'
        />
        {/* <input onChange={this.handleInput} defaultValue={this.props.feedback.understanding.comment} /> */}
        <TextField
          label="Optional Additional Comments "
          multiline
          rows="4"
          onChange={this.handleInput}
          defaultValue={this.props.feedback.understanding.comment}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <button onClick={() => this.handleButton('back')}>Back</button>
        <button onClick={() => this.handleButton('next')}>Next</button>

        {/* <br />
        <br />
        <pre>State:{JSON.stringify(this.state, null, 2)}</pre>
        <br />
        <br />
        <pre>Props:{JSON.stringify(this.props, null, 2)}</pre> */}
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Understanding);
