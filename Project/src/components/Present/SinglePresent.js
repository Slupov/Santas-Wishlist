import React, {Component} from 'react';


export default class SinglePresent extends Component {
    render() {
        return (
            <div className="col-sm-2">
                {/*<Image*/}
                    {/*source={require('../../../images/gift.png')}*/}
                    {/*style={{width: 50, height: 50}}*/}
                {/*/>*/}
                <div>{this.props.key}</div>
                <div>{this.props.username}</div>
                <div>{this.props.name}</div>
                <div>{this.props.id}</div>
                <div>{this.props.status}</div>
            </div>
        );
    }
}