import React, {Component} from 'react';
import '../Present/SinglePresent.css'
import {Link} from 'react-router';

export default class SinglePresent extends Component {
    constructor(props){
        super(props);
        this.bindEventHandlers();
    }
    onChangeHandler(event) {
        switch (event.target.name) {
            case "letterDetail":
                sessionStorage.setItem('currentLetterId', this.props.letter_id);
                break;
            default:
                break;
        }
    }
    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);

    }

    render() {

        return (
            <div className="col-sm-2">
                <img
                    src={require('../../../images/gift.png')}
                    alt="Present Box"
                    style={{width: 70, height: 70}}
                />
                <div className="presentProperty">
                    From:
                    {this.props.username}
                </div>
                <div className="presentProperty">
                    Email:
                    {this.props.senderEmail}
                </div>
                <div className="presentProperty">
                    Present:
                    {this.props.name}
                </div>

                <div className="presentProperty">
                    Letter:
                    <Link to={"/letters/" + this.props.letter_id} name="letterDetail" onClick={this.onChangeHandler}>
                        see
                    </Link>

                </div>
                <div className="presentProperty">
                    Status:
                    {this.props.status}
                </div>
            </div>
        );
    }
}