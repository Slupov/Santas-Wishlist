import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
    render() {
        let message = <p>You are currently not logged in. Please, log in or register to send Santa a letter.</p>;
        let isLoggedIn = false;

        function drawContent(isAuthorized){
            if(isAuthorized === true){
                return <div>
                    <h1>Home Page</h1>
                    <Link to="/letter" className="btn btn-default" activeClassName="btn btn-default active">Send Letter</Link>
                    <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
                    <Link to="/logout" className="btn btn-default" activeClassName="btn btn-default active">Logout</Link>
                    <Link to="/presents" className="btn btn-default" activeClassName="btn btn-default active">All presents</Link>
                    {message}
                </div>
            }
            else{
                    return <div>
                        <h1>Home Page</h1>
                        <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
                        <Link to="/register" className="btn btn-default" activeClassName="btn btn-default active">Register</Link>
                        <Link to="/login" className="btn btn-default" activeClassName="btn btn-default active">Login</Link>
                        {message}
                    </div>
                }
            }

        //If logged in
        if (sessionStorage.getItem('username')) {
            message = <p>Heya, {sessionStorage.getItem('username')}. You can send Santa a mail now :)</p>
            isLoggedIn = true;
        }

        return (
            drawContent(isLoggedIn)
        );
    }
}