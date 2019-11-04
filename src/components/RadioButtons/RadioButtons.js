import React, { Component } from 'react'
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

export class RadioButtons extends Component {

    state = {
        value: '',
    }

    handleChange = (event) => {
        this.props.dispatch({ type: this.props.reduxActionType, payload: event.target.value });
        //set state to re-render and show correct checked input
        this.setState({
            value: event.target.value,
        })
    }

    render() {

        const buttons = [];

        for (let i = 0; i < 10; i++) {
            // if(i === 0){
            //     buttons.push(<span>{this.props.lowText}</span>)
            // }
            // if(i === 5){
            //     buttons.push(<span>{this.props.midText}</span>)
            // }

            // typescript would be helpful here
            // console.log('in button loops checkedValue: ', this.props.checkedValue);
            // console.log('in button loops (i +1): ', (i +1));

            buttons.push(
                <Radio
                    key={i}
                    checked={this.props.checkedValue == (i + 1)}
                    onChange={this.handleChange}
                    value={i + 1}
                    color="default"
                    icon={<RadioButtonUncheckedIcon fontSize="large" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="large" />}
                />
            )
            // if(i === 9){
            //     buttons.push(<span>{this.props.highText}</span>)
            // }
        }
        buttons.push(
            <div>
                <span id='lowText'>{this.props.lowText}</span>
                <span id='midText'>{this.props.midText}</span>
                <span id='highText'>{this.props.highText}</span>
            </div>
        )

        return (
            <div>
                {buttons}
                {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(RadioButtons);
