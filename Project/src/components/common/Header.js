import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Santa's Wishlist</h1>
                {this.props.children}
            </div>
        );
    }
}