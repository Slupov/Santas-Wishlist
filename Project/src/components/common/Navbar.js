import React, {Component} from 'react';
import {Link} from 'react-router';
import observer from '../../models/observer';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, userType: ''};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({loggedIn: true, userType: sessionStorage.getItem("userType")});
        } else {
            this.setState({loggedIn: false, userType: ''});
        }
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                <div className="navBar">
                    <Link to="/" className="btn nav-btn-default" activeClassName="btn nav-btn-default active"
                          onlyActiveOnIndex={true}>Home</Link>
                    <Link to="/about" className="btn nav-btn-default" activeClassName="btn nav-btn-default active">About</Link>
                    <Link to="/login" className="btn nav-btn-default" activeClassName="btn nav-btn-default active">Login</Link>
                    <Link to="/register" className="btn nav-btn-default"
                          activeClassName="btn nav-btn-default active">Register</Link>
                </div>
            );
        } else {
            return (
                <div className="navBar">
                    <Link to="/" className="btn nav-btn-default" activeClassName="btn nav-btn-default active"
                          onlyActiveOnIndex={true}>Home</Link>
                    {sessionStorage.getItem('userType') === "child" &&
                    <Link to="/letter" className="btn nav-btn-default" activeClassName="btn nav-btn-default active">Send
                        Letter</Link>
                    }
                    <Link to="/presents" className="btn nav-btn-default" activeClassName="btn nav-btn-default active">All
                        presents</Link>
                    <Link to="/inbox" className="btn nav-btn-default" activeClassName="btn nav-btn-default active">My
                        Inbox</Link>
                    <Link to="/about" className="btn nav-btn-default" activeClassName="btn nav-btn-default active">About</Link>
                    <Link to="/logout" className="btn nav-btn-default"
                          activeClassName="btn nav-btn-default active">Logout</Link>
                </div>
            );
        }
    }
}