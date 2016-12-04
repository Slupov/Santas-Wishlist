import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import HomePage from './components/Home/HomePage';
import About from './components/About/AboutPage';
import Register from './components/Register/RegisterPage';
import Login from './components/Login/LoginPage';
import Logout from './components/Logout/LogoutPage';
import Letter from './components/Letter/LetterPage';
import Presents from './components/Present/PresentPage';
import LetterDetails from './components/Letter/LetterDetails';
import InboxPage from './components/Mailbox/Mailbox';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="letters">
                <Route path=":letterId" component={LetterDetails}/>
            </Route>
            <Route path="about" component={About}/>
            <Route path="register" component={Register}/>
            <Route path="login" component={Login}/>
            <Route path="logout" component={Logout}/>
            <Route path="letter" component={Letter}/>
            <Route path="presents" component={Presents}/>
            <Route path="inbox" component={InboxPage}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
