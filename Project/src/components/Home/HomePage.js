import React, {Component} from 'react';
import XmasCounter from './XmasCounter';

export default class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <XmasCounter/>
                {this.props.children}
            </div>
        );
    }
}