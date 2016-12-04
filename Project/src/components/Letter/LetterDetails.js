import React, {Component} from 'react';
import '../Letter/LetterDetails.css'
import {loadLetterDetails} from '../../models/letter';
export default class LetterDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            author: '',
            date: '',
            title: '',
            text: '',
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
            title: response.title,
            text: response.text

        };
        this.setState(newState);
    }

    render() {
        return (
            <div className="border">
                <div className="details-box">
                    <div>
                        <div className="spanName">Title</div>
                        <div className="spanValue">{this.state.title || 'No title'}</div>
                    </div>
                    <div>
                        <div className="spanName">From</div>
                        <div className="spanValue">{this.state.author || 'No author'}</div>
                    </div>
                    <div>
                        <div className="spanName">Text</div>
                        <div className="spanValue">{this.state.text || 'No text'}</div>
                    </div>
                    <div>
                        <div className="spanName">Date</div>
                        <div className="spanValue">{this.state.date || 'No date'}</div>
                    </div>
                </div>
            </div>
        )
    }
}

LetterDetails.contextTypes = {
    router: React.PropTypes.object
};