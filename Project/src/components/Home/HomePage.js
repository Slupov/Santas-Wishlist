import React, {Component} from 'react';

export default class HomePage extends Component {
    render(){
        return (
            <div className="HomePage">
                <h1>Home page</h1>
                {this.props.children}
            </div>
        );
    }
}