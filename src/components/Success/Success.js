import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


export class Success extends Component {
    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <Button variant="contained" color="primary" onClick={() => { this.props.history.push('/'); }}>Leave New Feedback</Button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(Success);
