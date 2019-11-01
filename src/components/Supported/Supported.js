import React, { Component } from 'react';

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

    this.props.history.push('/comments');
  }

  render() {
    return (
      <>
      <h2>How well are you being supported?</h2>
      <label>Supported?</label>
      <input onChange={this.handleInput} value={this.state.supported}/>
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

export default Supported;
