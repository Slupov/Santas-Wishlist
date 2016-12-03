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
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }
    onLoadSuccess(response) {
        // Filter all mailboxes to the current user
        console.log(response);
        this.setState({mailboxes: response.filter(m => m.to === getCurrentUsername())});
    }

    renderMails() {
        return this.state.mailboxes.map((m, i) => {
            return <Mail
                key={Number(i)+1}
                from={m.from}
                to={m.to}
                date={m.date}
                text={m.text}
            />
        })
    }

    render() {
        getMailboxes(this.onLoadSuccess);

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