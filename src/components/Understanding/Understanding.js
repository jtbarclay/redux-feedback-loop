import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: '',
  }

  handleInput = (event) => {
    this.setState({
      understanding: event.target.value,
    })
  }

  handleButton = () => {
    if (this.state.understanding !== '') {
      this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding });
    }
    this.props.history.push('/supported');
  }

  render() {
    return (
      <>
        <h2>How well are you understanding the content?</h2>
        <label>Understanding?</label>
        <input onChange={this.handleInput} defaultValue={this.props.feedback.understanding.comment} />
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

export default connect(mapReduxStateToProps)(Understanding);
