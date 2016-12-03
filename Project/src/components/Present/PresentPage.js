import React, {Component} from 'react';
import SinglePresent from '../Present/SinglePresent'
import {getPresents} from '../../models/present'


export default class PresentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presents: [],
            //if false will return only the logged in parent's child presents
            listAll: true
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

    getContent(){
        if(this.state.listAll === true){
            return this.state.presents.map((p, i) => {
                return <SinglePresent
                    key={i}
                    username={p.username}
                    senderEmail={p.senderEmail}
                    name={p.name}
                    present_id={p._id}
                    letter_id={p.letter_id}
                    status={p.status}
                />
            })
        }else{
            return this.state.presents.select(p=>p.username === "cunt")
        }

    }

    render() {
        return (
            <div className="container">
                <h1>Children's presents!</h1>
                <div className="row">
                    {this.getContent()}
                </div>
            </div>
        )
    }
}