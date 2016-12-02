import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../models/user';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', repeat: '', email:'',type:'child', address:'', submitDisabled: false };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            case 'repeat':
                this.setState({ repeat: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'type':
                this.setState({ type: event.target.value });
                break;
            case 'address':
                this.setState({ address: event.target.value });
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.password !== this.state.repeat) {
            alert("Passwords don't match");
            return;
        }
        this.setState({ submitDisabled: true });
        register(this.state.username, this.state.password, this.state.email, this.state.type,this.state.address, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <div>
                <h1>Register Page</h1>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    repeat={this.state.repeat}
                    email={this.state.email}
                    type={this.state.type}
                    address={this.state.address}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

RegisterPage.contextTypes = {
    router: React.PropTypes.object
};