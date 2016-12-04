import React, {Component} from 'react';
import {XmasCounter} from './counter';
export default class HomePage extends Component {
    render(){
        return (
            <div className="HomePage">
                <h1>{XmasCounter()}days left</h1>
                {this.props.children}
            </div>
        );
    }
}