import React, { Component } from 'react'
import axios from 'axios';
import './Admin.css';

export class Admin extends Component {

    state = {
        feedback: [],
    }

    componentDidMount(){
        this.getFeedback()
    }

    getFeedback = () => {
        axios.get('/api/feedback')
            .then((response) => {
                console.log('/api/feedback response', response);
                this.setState({
                    feedback: response.data,
                })
            })
            .catch((error) => {
                console.log('/api/feedback error', error);
            })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th></th>
                            <th>Comprehension</th>
                            <th></th>
                            <th>Support</th>
                            <th></th>
                            <th>Comments</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map((row) => (
                            <tr key={row.id}>
                                <td>{row.feeling}</td>
                                <td>{row.feeling_comment}</td>
                                <td>{row.understanding}</td>
                                <td>{row.understanding_comment}</td>
                                <td>{row.support}</td>
                                <td>{row.support_comment}</td>
                                <td>{row.comments}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Admin;
