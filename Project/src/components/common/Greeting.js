import React, {Component} from 'react';

export default class Greeting extends Component {
    render() {
        if (sessionStorage.username === '' || sessionStorage.username === undefined) {
            return null;
        } else {
            return (
                <span>Welcome, {sessionStorage.username}</span>
            );
        }
    }
}