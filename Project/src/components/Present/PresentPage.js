import React, {Component} from 'react';
import SinglePresent from '../Present/SinglePresent'
import {getPresents} from '../../models/present'
import 'jquery'
import $ from 'jquery'


export default class PresentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presents: [],
            //if false will return only the logged in parent's child presents
            listAll: true
        };
        this.instance = this;
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onLoadSuccess(response) {
        // Display presents
        this.setState({presents: response})
    }


    onChangeHandler(event) {
        switch (event.target.name) {
            case 'myKidsBtn':
                this.setState({ listAll: false });
                $('#allKidsBtn').prop('disabled', false);
                $('#myKidsBtn').prop('disabled', true);
                break;
            case 'allKidsBtn':
                this.setState({ listAll: true });
                $('#allKidsBtn').prop('disabled', true);
                $('#myKidsBtn').prop('disabled', false);
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        // Request list of presents from the server
        getPresents(this.onLoadSuccess);
    }

    getContent() {
        if (this.state.listAll === true) {
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
        } else {
            return this.state.presents.filter(p => p.senderEmail === sessionStorage.email).map((p, i) => {
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
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Children's presents!</h1>
                <input type="button"
                       className="btn btn-default"
                       name="myKidsBtn"
                       id="myKidsBtn"
                       value={
                           sessionStorage.getItem('userType') ==="parent" ?
                            "My Children Letters Only" : "My siblings and mine letters only"
                       }
                       disabled={false}
                       onClick={this.onChangeHandler}
                />
                <input type="button"
                       className="btn btn-default"
                       name="allKidsBtn"
                       id="allKidsBtn"
                       value={"Show All Children Letters"}
                       disabled={false}
                       onClick={this.onChangeHandler}
                />
                <div className="row">
                    {this.getContent()}
                </div>
            </div>
        )
    }
}