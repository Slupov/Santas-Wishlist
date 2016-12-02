import React, {Component} from 'react';

export default class LetterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={this.props.title}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Text:</label>
                    <textarea
                        className="form-control"
                        type="text"
                        name="text"
                        value={this.props.text}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>

                <div>PRESENT 1 </div>
                <div>PRESENT 2 </div>
                <div>PRESENT 3 </div>
                <input className="btn btn-default" type="submit" value="Send" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}