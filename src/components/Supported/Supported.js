import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButtons from '../RadioButtons/RadioButtons';

class Supported extends Component {
  state = {
    supported: '',
  }

  handleInput = (event) => {
    this.setState({
      supported: event.target.value,
    })
  }
  
  handleButton = () => {
    if (this.state.supported !== '') {
      this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.supported });
    }
    this.props.history.push('/comments');
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
      <label>Supported?</label>
      <input onChange={this.handleInput} defaultValue={this.props.feedback.supported.comment}/>
      <button onClick={this.handleButton}>Next</button>

      
      <br/>
      <br/>
      <pre>State:{JSON.stringify(this.state, null, 2)}</pre>
      <br/>
      <br/>
      <pre>Props:{JSON.stringify(this.props, null, 2)}</pre>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Supported);
