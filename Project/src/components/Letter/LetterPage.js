import React, {Component} from 'react';
import LetterForm from './LetterForm';
import {send} from '../../models/letter';

export default class LetterPage extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', title: '', text: '', data: '', submitDisabled: false };
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
            case 'title':
                this.setState({ title: event.target.value });
                break;
            case 'text':
                this.setState({ text: event.target.value });
                break;
            default:
                break;
        }
    }

    getCurrentDate(){
        let current = new Date();
        return current.toDateString();
    }

    getCurrentUsername(){
        return sessionStorage.getItem('username');
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitDisabled: true });

        send(this.getCurrentUsername(), this.state.title, this.state.text, this.getCurrentDate(), this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <div>
                <h1>Create Letter</h1>
                {/*Give the Letter Form some props*/}
                <LetterForm
                    title={this.state.title}
                    text={this.state.text}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

LetterPage.contextTypes = {
    router: React.PropTypes.object
};