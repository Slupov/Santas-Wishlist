import React, {Component} from 'react';

//a mail will be a table row
export default class Mail extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.key}</th>
                <td>{this.props.from}</td>
                <td>{this.props.to}</td>
                <td>{this.props.date}</td>
            </tr>
        );
    }
}