import React, {Component} from 'react';
import Navbar from '../common/Navbar';
import Greeting from '../common/Greeting';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="header-title">Santa's Wishlist</h2>
                <Greeting/>
                <Navbar/>
                {this.props.children}
            </div>
        );
    }
}