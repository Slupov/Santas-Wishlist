import React, {Component} from 'react';

//a mail will be a table row
export default class Mail extends Component {
    render() {
        let activeClassName = '';

        if (this.props.displayStatus === 'inline-block') {
            activeClassName = 'active-mail';
        }

        return (
            <tbody className={activeClassName}>
            <tr onClick={this.props.onClick}>
                <th scope="row">{this.props.mailNumber}</th>
                <td>{this.props.from}</td>
                <td>{this.props.to}</td>
                <td>{this.props.date}</td>
            </tr>
            <tr style={{display: `${this.props.displayStatus}`}} className="message-text-row">
                <td>{this.props.text}</td>
            </tr>
            </tbody>
        );
    }
}