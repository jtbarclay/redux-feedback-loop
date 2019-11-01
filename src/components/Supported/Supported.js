import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <label>Supported?</label>
      <input onChange={this.handleInput} defaultValue={this.props.feedback.supported}/>
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
