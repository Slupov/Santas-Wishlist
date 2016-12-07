import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../models/user';
import {observer} from '../../models/observer';
import {emailValidation,usernameValidation, passwordValidation} from '../../models/validation';
export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeat: '',
            email: '',
            parentEmail:'',
            type: 'child',
            address: '',
            gender:"boy",
            submitDisabled: false,
            validPassword: false,
            validUsername:false
        };
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
                this.setState({username: event.target.value});
                if(!usernameValidation(event.target.value)){
                    this.setState({validUsername:false});
                    console.log("username must be at least 6 characters long and contains only letters and numbers");
                }
                else{
                    this.setState({validUsername:true});
                    console.log("brao");

                }
                break;
            case 'password':
                this.setState({password: event.target.value});
                if(!passwordValidation(event.target.value)){
                    console.log("the pass must be at least 6 characters long, containing at least :1 lower case, 1 uppercase and 1 digit");
                    this.setState({validPassword:false})
                }
                else {
                    console.log("good");
                    this.setState({validPassword:true})
                }
                break;

            case 'repeat':
                this.setState({repeat: event.target.value});
                break;
            case 'email':

                this.setState({email: event.target.value});
                break;
            case 'parentEmail':

                this.setState({parentEmail: event.target.value});
                break;
            case 'type':
                this.setState({type: event.target.value});
                break;
            case 'gender':
                this.setState({gender: event.target.value});
                break;
            case 'address':
                this.setState({address: event.target.value});
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();

        if ( this.state.password !== this.state.repeat) {
            alert("Passwords don't match ");
            return;
        }
        if (!this.state.validPassword) {
            alert("Password doesn't match the requirements");
            return;
        }
        if (!this.state.validUsername) {
            alert("Username doesn't match the requirements");
            return;
        }
        if (!emailValidation(this.state.email)) {
            alert("Email doesn't match the requirements");

            return;
        }
        if (this.state.type=="child" && !emailValidation(this.state.parentEmail)) {
            alert("Email doesn't match the requirements");

            return;
        }
        register(this.state.username, this.state.password, this.state.email,this.state.parentEmail, this.state.type, this.state.address,this.state.gender, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again

        }
    }

    render() {
        return (
            <div>
                <h1 className="form-header">Register Page</h1>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    repeat={this.state.repeat}
                    parentEmail={this.state.parentEmail}
                    email={this.state.email}
                    type={this.state.type}
                    address={this.state.address}
                    gender={this.state.gender}
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