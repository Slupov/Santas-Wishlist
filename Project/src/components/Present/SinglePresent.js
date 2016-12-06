import React, {Component} from 'react';
import '../Present/SinglePresent.css'
import {Link} from 'react-router';
import {updatePresentStatus, checkStatus,deletePresent} from '../../models/present';
import {sendMailbox} from '../../models/mailbox'
import {getCurrentDate} from '../../utilities'


export default class SinglePresent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showActions: checkStatus(this.props),
            status: this.props.status,
            displayStatus: ''
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.approve = this.approve.bind(this);
        this.reject = this.reject.bind(this);
        this.maybe = this.maybe.bind(this);
        this.remove = this.remove.bind(this);
    }

    approve() {
        updatePresentStatus(this.props.present_id, "approved");
        this.setState({status: "approved"});
        this.setState({showActions: false});

        let mailText = `Hohoho,\nDear ${this.props.username}, I heard you've been a good child this year`+
                        `so I definately think you deserve that present: ${this.props.name}`

        let data = {
            to: this.props.username,
            from: "Santa Claus",
            text: mailText,
            date: getCurrentDate()
        }

        sendMailbox(data)
    }

    reject(){
        updatePresentStatus(this.props.present_id, "rejected");
        this.setState({showActions: false});
        this.setState({status: "rejected"});

        let mailText = `Hohoho,\nDear ${this.props.username}, I don't think my poor elfs can cope with all that hard work and craft your ${this.props.name}.I'm really sorry my child, try to wish for something else that we may have in stock here at the North Pole.`

        let data = {
            to: this.props.username,
            from: "Santa Claus",
            text: mailText,
            date: getCurrentDate()
        }

        sendMailbox(data)
    }

    maybe(){
        updatePresentStatus(this.props.present_id, "maybe");
        this.setState({showActions: false});
        this.setState({status: "maybe"});

        let mailText = `Hohoho,\nDear ${this.props.username}, I'm not very certain that i can get you the ${this.props.name} that you wished for. I suggest you try to wish for something else that I can surely get for you.`

        let data = {
            to: this.props.username,
            from: "Santa Claus",
            text: mailText,
            date: getCurrentDate()
        };

        sendMailbox(data)
    }

    remove(){
        deletePresent(this.props.present_id);
        this.setState({displayStatus: 'none'});

        let mailText = `Yo, ${this.props.username},your  ${this.props.name} present was deleted from our database.
Just sayin if you wanted to send another letter ;)`;

        let data = {
            to: this.props.username,
            from: "Elves Support",
            text: mailText,
            date: getCurrentDate()
        };

        sendMailbox(data)
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case "letterDetail":
                sessionStorage.setItem('currentLetterId', this.props.letter_id);
                break;
            case "approve":
                this.approve();
                break;
            case "reject":
                this.reject();
                break;
            case "maybe":
                this.maybe();
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <div className="col-sm-2" style={{display:this.state.displayStatus}}>
                <div className="presentImage">
                    <img
                        src={require('../../../images/gift.png')}
                        alt="Present Box"
                        style={{width: 90, height: 90}}
                    />
                </div>
                <div className="presentProperty">
                    <h2 className="presentTitle">{this.props.name}</h2>
                </div>
                <div className="presentProperty">
                    From:
                    {this.props.username}
                </div>
                <div className="presentProperty">
                    Letter:
                    <Link to={"/letters/" + this.props.letter_id} name="letterDetail" onClick={this.onChangeHandler}>
                        See it
                    </Link>
                </div>
                <div className="presentProperty">
                    Status:
                    {this.state.status}
                </div>
                <div style={{display: this.state.showActions ? 'block' : 'none'}} className="presentActions">
                    <img
                        name="approve"
                        onClick={this.onChangeHandler}
                        src={require('../../../images/approve.png')}
                        alt="Green approve tick"
                        style={{width: 30, height: 30}}
                    />
                    <img
                        name="reject"
                        onClick={this.onChangeHandler}
                        src={require('../../../images/reject.png')}
                        alt="Red reject X"
                        style={{width: 30, height: 30}}
                    />
                    <img
                        name="maybe"
                        onClick={this.onChangeHandler}
                        src={require('../../../images/unknown.png')}
                        alt="Yellow question mark"
                        style={{width: 26, height: 26}}
                    />
                </div>
                {/*Replace actions div with a action component*/}
                <input
                    type="button"
                    className="btn btn-default"
                    style={{display: this.props.senderEmail === sessionStorage.getItem('email') ? 'block' : 'none'}}
                    value={"Delete"}
                    onClick={this.remove}
                />
            </div>
        );
    }
}