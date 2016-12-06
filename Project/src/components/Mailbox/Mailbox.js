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

    mailOnClickHandler(m) {
        if (this.state[m._id] === undefined || this.state[m._id] === null || !this.state[m._id]) {
            this.setState({[m._id]: 'none'});
        }
        else if (this.state[m._id] === 'none') {
            this.setState({[m._id]: 'inline-block'});
        } else {
            this.setState({[m._id]: 'none'});
        }
    }

    renderMails() {
        return this.state.mailboxes.map((m, i) => {
            if (!this.state[m._id] || this.state[m._id] === undefined || this.state[m._id] === null) {
                this.setState({[m._id]: 'none'});
            }
            return <Mail
                key={i}
                mailNumber={Number(i) + 1}
                from={m.from}
                to={m.to}
                date={m.date}
                text={m.text}
                onClick={() => this.mailOnClickHandler(m)}
                showText={this.state[m._id]}
            />
        })
    }


    // mailOnClickHandler(m) {
    //     console.log(m.text);
    //     if (!sessionStorage.getItem(m._id) || sessionStorage.getItem(m._id) === undefined) {
    //         sessionStorage.setItem(m._id, 'none');
    //     }
    //     else if (sessionStorage.getItem(m._id) === 'none') {
    //         sessionStorage.setItem(m._id, 'inline-block');
    //     } else {
    //         sessionStorage.setItem(m._id, 'none');
    //     }
    // }

    // renderMails() {
    //     return this.state.mailboxes.map((m, i) => {
    //         if (!sessionStorage.getItem(m._id) || sessionStorage.getItem(m._id) === undefined) {
    //             sessionStorage.setItem(m._id, 'none')
    //         }
    //         return <Mail
    //             key={i}
    //             mailNumber={Number(i) + 1}
    //             from={m.from}
    //             to={m.to}
    //             date={m.date}
    //             text={m.text}
    //             onClick={() => this.mailOnClickHandler(m)}
    //             showText={sessionStorage.getItem(m._id)}
    //         />
    //
    //     })
    // }

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
                                {this.renderMails()}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}