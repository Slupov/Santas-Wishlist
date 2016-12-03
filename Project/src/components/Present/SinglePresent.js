import React, {Component} from 'react';
import '../Present/SinglePresent.css'

export default class SinglePresent extends Component {
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
                    LetterID:
                    {this.props.letter_id}
                </div>
                <div className="presentProperty">
                    Status:
                    {this.props.status}
                </div>
            </div>
        );
    }
}