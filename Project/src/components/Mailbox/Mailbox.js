import React, {Component} from 'react';
import Mail from '../Mail/Mail';
import './Mailbox.css'
import {getCurrentUsername} from '../../utilities'
import {getMailboxes} from '../../models/mailbox';

//get data from models/inbox
//an InboxPage will be a table containing Mails(rows)
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

    mailOnClickHandler(m){
        console.log(m.text)
        let textRow =
            <tr className="mail-text-row">
                <td colspan="3">{m.text}</td>
            </tr>;
                
        //inser logic for drop down text info about current Mail
    }

    renderMails() {
        return this.state.mailboxes.map((m, i) => {
            return <Mail
                key={i}
                mailNumber={Number(i)+1}
                from={m.from}
                to={m.to}
                date={m.date}
                text={m.text}
                onClick={() => this.mailOnClickHandler(m)}
            />
        })
    }

    render() {
        return (
            <div>
                <h1>{getCurrentUsername()}'s Inbox</h1>
                <div className="mailbox col-md-10">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <table className="table table-inverse">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Date</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderMails()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}