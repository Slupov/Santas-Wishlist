import React, {Component} from 'react';
import SinglePresent from '../Present/SinglePresent'
import {getPresents} from '../../models/present'


export default class PresentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presents: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display presents
        this.setState({presents: response})
    }

    componentDidMount() {
        // Request list of presents from the server
        getPresents(this.onLoadSuccess);
    }

    render() {
        return (
            <div className="container">
                <h1>Children's presents!</h1>
                <div className="row">
                    {this.state.presents.map((e, i) => {
                        return <SinglePresent
                            key={i}
                            username={e.username}
                            name={e.name}
                            present_id={e._id}
                            letter_id={e.letter_id}
                            status={e.status}
                        />
                    })}
                </div>
            </div>
        )
    }
}