import React, {Component} from 'react';

//a mail will be a table row
export default class Mail extends Component {
    render() {
        let activeClassName = '';

        if (this.props.displayStatus === 'block') {
            activeClassName = 'div-table-row';
        }

        return (
            <div className="div-table-row" onClick={this.props.onClick}>
                <div className="div-table-col">{this.props.mailNumber}</div>
                <div className="div-table-col">{this.props.from}</div>
                <div className="div-table-col">{this.props.to}</div>
                <div className="div-table-col">{this.props.date}</div>
                <div className={activeClassName + " active-mail"}
                     style={{display: `${this.props.displayStatus}`}}>{this.props.text}</div>
            </div>
        );
    }
}