import React, { Component } from 'react';

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

    this.props.history.push('/review');
  }

  render() {
    return (
      <>
      <h2>Any comments you want to leave?</h2>
      <label>Comments?</label>
      <input onChange={this.handleInput} value={this.state.comments}/>
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

export default Comments;
