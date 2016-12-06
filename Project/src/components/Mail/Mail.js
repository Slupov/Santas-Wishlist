import React, {Component} from 'react';

//a mail will be a table row
export default class Mail extends Component {
     render() {
        return (
            <tbody>
                <tr onClick={this.props.onClick}>
                    <th scope="row">{this.props.mailNumber}</th>
                    <td>{this.props.from}</td>
                    <td>{this.props.to}</td>
                    <td>{this.props.date}</td>
                </tr>
                <tr style={{display: `${this.props.showText}`}} className="message-text-row">
                    <td colSpan="3">{this.props.text}</td>
                </tr>
            </tbody>
        );
    }
}