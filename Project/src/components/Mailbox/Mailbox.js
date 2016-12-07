import React, {Component} from 'react';
import Mail from './Mail/Mail';
import './Mailbox.css'
import {getCurrentUsername} from '../../utilities'
import {getMailboxes} from '../../models/mailbox';
import $ from 'jquery'

export default class Mailbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mailboxes: []
        };
        this.bindEventHandlers();
        getMailboxes(this.updateState);
    }

    bindEventHandlers() {
        this.updateState = this.updateState.bind(this);
        this.mailOnClickHandler = this.mailOnClickHandler.bind(this);
    }

    updateState(response) {
        // Filter all mailboxes to the current user
        this.setState({mailboxes: response.filter(m => m.to === getCurrentUsername())});
    }

    mailOnClickHandler(m) {
        if (this.state[m._id] === undefined || this.state[m._id] === null || !this.state[m._id]) {
            this.setState({[m._id]: 'block'});
        }
        else if (this.state[m._id] === 'none') {
            this.setState({[m._id]: 'block'});
            // $(".active-mail").slideDown("slow",function () {
            //     console.log("sliiiide");
            // })
        } else {
             this.setState({[m._id]: 'none'});
            // $(".active-mail").slideDown("slow",function () {
            //     console.log("sliiiide");
            // })
        }
    }

    renderMails() {
        return this.state.mailboxes.map((m, i) =>
                <Mail
                    key={i}
                    mailNumber={Number(i) + 1}
                    from={m.from}
                    to={m.to}
                    date={m.date}
                    text={m.text}
                    onClick={() => this.mailOnClickHandler(m)}
                    displayStatus={this.state[m._id] || 'none'}
                />
        )
    }

    render() {
        return (
            <div>
                <h1>{getCurrentUsername()}'s Inbox</h1>
                <div className="div-table">
                    <div className="div-table-row">
                        <div className="div-table-col" style={{align: "center"}}>#</div>
                        <div className="div-table-col">From</div>
                        <div className="div-table-col">To</div>
                        <div className="div-table-col">Date</div>
                    </div>
                    {this.renderMails()}
                </div>
            </div>
        );
    }
}