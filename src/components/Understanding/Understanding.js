import React, { Component } from 'react';

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

    this.props.history.push('/supported');
  }

  render() {
    return (
      <>
      <h2>How well are you understanding the content?</h2>
      <label>Understanding?</label>
      <input onChange={this.handleInput} value={this.state.understanding}/>
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

export default Understanding;
