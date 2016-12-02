import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
    render() {
        let message = <p>You are currently not logged in. Please, log in or register to view team options.</p>;

        if (sessionStorage.getItem('username')) {
            if (sessionStorage.getItem('teamId')) {
            } else {
                message = <p>You are currently not a member of a team.</p>;
            }
        }
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
                <Link to="/register" className="btn btn-default" activeClassName="btn btn-default active">Register</Link>
                <Link to="/login" className="btn btn-default" activeClassName="btn btn-default active">Login</Link>
                <Link to="/logout" className="btn btn-default" activeClassName="btn btn-default active">Logout</Link>
                {message}
            </div>
        );
    }
}