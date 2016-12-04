import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import {Link} from 'react-router';

class App extends Component {

  render() {
      let message = <p>You are currently not logged in. Please, log in or register to send Santa a letter.</p>;
      let isLoggedIn = false;

      function drawHeader(isAuthorized) {
          if (isAuthorized === true) {
              return <Header>
                  {sessionStorage.getItem('userType') === "child" &&
                  <Link to="/letter" className="btn btn-default" activeClassName="btn btn-default active">Send
                      Letter</Link>
                  }
                  <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
                  <Link to="/logout" className="btn btn-default"
                        activeClassName="btn btn-default active">Logout</Link>
                  <Link to="/presents" className="btn btn-default" activeClassName="btn btn-default active">All
                      presents</Link>
                  <Link to="/inbox" className="btn btn-default" activeClassName="btn btn-default active">My Inbox</Link>
                  {message}
              </Header>
          }
          else {
              return <Header>
                  <Link to="/about" className="btn btn-default" activeClassName="btn btn-default active">About</Link>
                  <Link to="/register" className="btn btn-default"
                        activeClassName="btn btn-default active">Register</Link>
                  <Link to="/login" className="btn btn-default" activeClassName="btn btn-default active">Login</Link>
                  {message}
              </Header>
          }
      }

      //If logged in
      if (sessionStorage.getItem('username')) {
          message = <p>Heya, <b>{sessionStorage.getItem('username')}</b>. You can send Santa a mail now :)</p>
          isLoggedIn = true;
      }

    return (
      <div className="App">
          {drawHeader(isLoggedIn)}
          {this.props.children}
      </div>
    );
  }
}

export default App;
