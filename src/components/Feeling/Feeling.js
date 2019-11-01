import React, { Component } from 'react';

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

    this.props.history.push('/understanding');
  }

  render() {
    return (
      <>
      <h2>How are you feeling today?</h2>
      <label>Feeling?</label>
      <input onChange={this.handleInput} value={this.state.feeling}/>
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

export default Feeling;
