import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';

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
    if (route == 'next') {
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
        <label>Understanding?</label>
        <input onChange={this.handleInput} defaultValue={this.props.feedback.understanding.comment} />
        <button onClick={() => this.handleButton('back')}>Back</button>
        <button onClick={() => this.handleButton('next')}>Next</button>

        <br />
        <br />
        <pre>State:{JSON.stringify(this.state, null, 2)}</pre>
        <br />
        <br />
        <pre>Props:{JSON.stringify(this.props, null, 2)}</pre>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Understanding);
