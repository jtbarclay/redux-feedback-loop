import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: '',
  }

  handleInput = (event) => {
    this.setState({
      comments: event.target.value,
    })
  }
  
  handleButton = () => {
    if (this.state.comments !== '') {
      this.props.dispatch({ type: 'SET_COMMENT', payload: this.state.comments });
    }
    this.props.history.push('/review');
  }

  render() {
    return (
      <>
      <h2>Any comments you want to leave?</h2>
      <label>Comments?</label>
      <input onChange={this.handleInput} defaultValue={this.props.feedback.comments}/>
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

export default connect(mapReduxStateToProps)(Comments);
