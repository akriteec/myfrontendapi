import React, { Component } from 'react'
import axios from 'axios';
import { Container, Button, Form, Input } from 'reactstrap';
export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {},
            tasks: [],
            name: '',
            config: {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
            }
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/users/me', this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    user: response.data
                })
            }).catch((err) => console.log(err.response))
        axios.get('http://localhost:3001/tasks', this.state.config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    tasks: response.data
                })
            }).catch((err) => console.log(err.response))
    }
    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/tasks', { name: this.state.name }, this.state.config)
            .then((response) => {
                console.log(response.data)
                this.state.tasks.push(response.data);
                this.setState({
                    name: ''
                })
            }).catch((err) => console.log(err.response))
    }
    render() {
        return (
            <Container>
                Welcome, {this.state.user.username} <Button color='link' onClick={this.handleLogout}>Logout</Button>
                <Form onSubmit={this.handleSubmit}>
                    <Input type='text' name='name'
                        value={this.state.name}
                        onChange={this.handleChange} />
                </Form>
                <ul>
                    {
                        this.state.tasks.map((task) => {
                            return <li key={task._id}>{task.name}</li>
                        })
                    }
                </ul>
            </Container>
        )
    }
}
