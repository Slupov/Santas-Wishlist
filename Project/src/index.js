import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import HomePage from './components/Home/HomePage';
import About from './components/About/AboutPage';
import Register from './components/Register/RegisterPage';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
        </Route>
        <Route path="about" component={About}/>
        <Route path="register" component={Register}/>
    </Router>,
    document.getElementById('root')
);
