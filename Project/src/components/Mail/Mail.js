import React, {Component} from 'react';

//a mail will be a table row
export default class Mail extends Component {
    constructor(props){
        super(props);
        this.state={
            showText: this.props.showText
        }
    }
    render() {
        return (
            <tbody>
                <tr onClick={this.props.onClick}>
                    <th scope="row">{this.props.mailNumber}</th>
                    <td>{this.props.from}</td>
                    <td>{this.props.to}</td>
                    <td>{this.props.date}</td>
                </tr>
                <tr style={{display: `${this.state.showText}`}} className="message-text-row">{this.props.text}</tr>
            </tbody>
        );
    }
}