import React, {Component} from 'react';
import SinglePresent from '../Present/SinglePresent'
import {getPresents} from '../../models/present'


export default class PresentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presents: []
        };
    }

    renderContent() {
        //requset -> foreach -> return component (row) containing single presents
        let instance = this;
        let grid = {};

        function getPresentsSuccess(response) {
            instance.setState({presents:response});
            console.log(response);
        }
        //sends get request
        getPresents()
            .then(getPresentsSuccess);

    }

    render() {
        return (
            <div className="container">
                <h1>Children's presents!</h1>
                <div className="row">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}