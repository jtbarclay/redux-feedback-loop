import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';
import { TextField, Button } from '@material-ui/core/';

class Supported extends Component {
  state = {
    supported: '',
  }

  handleInput = (event) => {
    this.setState({
      supported: event.target.value,
    })
  }

  handleButton = (route) => {
    if (this.state.supported !== '') {
      this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.supported });
    }

    if (route === 'next') {
      this.props.history.push('/comments');
    } else {
      this.props.history.push('/understanding');
    }
  }

  render() {
    return (
      <>
        <h2>How well are you being supported?</h2>
        <RadioButtons
          checkedValue={this.props.feedback.supported.value}
          lowText='Is this codecademy?'
          midText='meh'
          highText='Prime is the best!'
          reduxActionType='SET_SUPPORTED_VALUE'
        />
        {/* <input onChange={this.handleInput} defaultValue={this.props.feedback.supported.comment} /> */}
        <TextField
          label="Optional Additional Comments "
          multiline
          rows="4"
          onChange={this.handleInput}
          defaultValue={this.props.feedback.supported.comment}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={() => this.handleButton('back')}>Back</Button>
        <Button variant="contained" color="primary" onClick={() => this.handleButton('next')}>Next</Button>

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

export default connect(mapReduxStateToProps)(Supported);
