import React, {Component} from 'react';
import '../Letter/LetterDetails.css'
import {loadLetterDetails} from '../../models/letter';
export default class LetterDetails extends Component {
    constructor(props) {
        super(props);
        this.state ={
            _id: '',
            author: '',
            date: '',
            title:'',
            text:'',

        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadLetterDetails(sessionStorage.getItem('currentLetterId'), this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        let newState = {
            _id: response._id,
            author: response.author,
            date: response.date,
            title:response.title,
            text:response.text

        };
        this.setState(newState);
    }

    render() {
        let title = 'Letter details';
        if (this.state.author !== '') {
            title = this.state.author + ' details';
        }

        return (
            <div className="details-box">
                <span className="titlebar">{title}</span>
                <span className="spanner">Title</span>
                <p>{this.state.title || 'No title'}</p>
                <span className="spanner">Text</span>
                <p>{this.state.text || 'No text'}</p>
                <span className="spanner">Date</span>
                <p>{this.state.date || 'No date'}</p>
            </div>
        )
    }
}

LetterDetails.contextTypes = {
    router: React.PropTypes.object
};