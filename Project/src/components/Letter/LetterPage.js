import React, {Component} from 'react';
import LetterForm from './LetterForm';
import {sendLetter} from '../../models/letter';
import {sendPresent} from '../../models/present'
import {getCurrentDate,getCurrentUsername,getCurrentParentEmail,getCurrentLetterId,getCurrentEmail} from '../../utilities'
import observer from '../../models/observer';

export default class LetterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            title: '',
            text: '',
            date: '',
            present1: '',
            present2: '',
            present3: '',
            submitDisabled: false
        };
        this.bindEventHandlers();
        sessionStorage.removeItem('letter_id');
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.sendPresents = this.sendPresents.bind(this);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'title':
                this.setState({title: event.target.value});
                break;
            case 'text':
                this.setState({text: event.target.value});
                break;
            case 'present1':
                this.setState({present1: event.target.value});
                break;
            case 'present2':
                this.setState({present2: event.target.value});
                break;
            case 'present3':
                this.setState({present3: event.target.value});
                break;
            default:
                break;
        }
    }

    sendPresents() {
        sendPresent(getCurrentLetterId(), this.state.present1, getCurrentUsername(),getCurrentEmail(),getCurrentParentEmail());
        sendPresent(getCurrentLetterId(), this.state.present2, getCurrentUsername(),getCurrentEmail(),getCurrentParentEmail());
        sendPresent(getCurrentLetterId(), this.state.present3, getCurrentUsername(),getCurrentEmail(),getCurrentParentEmail());
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        sendLetter(getCurrentUsername(), this.state.title, this.state.text, getCurrentDate(), this.sendPresents);

        observer.showInfo("Letter successfully sent!");


        this.context.router.push('/');

    }

    render() {
        return (
            <div>
                <h1>Create Letter</h1>
                <LetterForm
                    title={this.state.title}
                    text={this.state.text}
                    present1={this.state.present1}
                    present2={this.state.present2}
                    present3={this.state.present3}
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