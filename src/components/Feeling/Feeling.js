import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';

class Feeling extends Component {
  state = {
    feeling: '',
  }

  handleInput = (event) => {
    this.setState({
      feeling: event.target.value,
    })
  }

  handleButton = () => {
    if (this.state.feeling !== '') {
      this.props.dispatch({ type: 'SET_FEELINGS', payload: this.state.feeling });
    }
    this.props.history.push('/understanding');
  }

  render() {
    return (
      <>
        <h2>How are you feeling today?</h2>
        <RadioButtons
          checkedValue={this.props.feedback.feelings.value}
          lowText='Could be better'
          midText='meh'
          highText='Could be worse'
          reduxActionType='SET_FEELINGS_VALUE'
        />
        <label>Feeling?</label>
        <input onChange={this.handleInput} defaultValue={this.props.feedback.feelings.comment} />
        <button onClick={this.handleButton}>Next</button>


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

export default connect(mapReduxStateToProps)(Feeling);
