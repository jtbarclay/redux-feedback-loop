import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core/';

class Comments extends Component {
  state = {
    comments: '',
  }

  handleInput = (event) => {
    this.setState({
      comments: event.target.value,
    })
  }

  handleButton = (route) => {
    if (this.state.comments !== '') {
      this.props.dispatch({ type: 'SET_COMMENT', payload: this.state.comments });
    }

    //input validation
    if (route === 'back') {
      this.props.history.push('/supported');
    } else if (this.props.feedback.feelings.value === '') {
      alert('Plase rate how well you are feeling today');
      this.props.history.push('/feeling');
    } else if (this.props.feedback.understanding.value === '') {
      alert('Plase rate how well you are understanding the material today');
      this.props.history.push('/understanding');
    } else if (this.props.feedback.supported.value === '') {
      alert('Plase rate how supported you are feeling today');
      this.props.history.push('/supported');
    } else if (route === 'next') {
      this.props.history.push('/review');
    }
  }

  render() {
    return (
      <>
        <h2>Any comments you want to leave?</h2>
        {/* <input onChange={this.handleInput} defaultValue={this.props.feedback.comments} /> */}
        <TextField
          label="Optional Other Comments"
          multiline
          rows="4"
          onChange={this.handleInput}
          defaultValue={this.props.feedback.comments}
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={() => this.handleButton('back')}>Back</Button>
        <Button variant="contained" color="primary" onClick={() => this.handleButton('next')}>Next</Button>


        {/* <br />
        <br />
        <pre>State:{JSON.stringify(this.state, null, 2)}</pre>
        <br />
        <br />
        <pre>Props:{JSON.stringify(this.props, null, 2)}</pre> */}
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Comments);
