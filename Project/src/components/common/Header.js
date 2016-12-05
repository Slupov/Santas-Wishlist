import React, {Component} from 'react';
import Navbar from '../common/Navbar';
import Greeting from '../common/Greeting';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title">Santa's Wishlist</div>
                <Greeting/>
                <Navbar/>
                {this.props.children}
            </div>
        );
    }
}