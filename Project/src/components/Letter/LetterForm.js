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

                <div class="presents">
                    <div className="form-group">
                        <label>Present 1:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="present1"
                            value={this.props.present1}
                            disabled={this.props.submitDisabled}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Present 2:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="present2"
                            value={this.props.present2}
                            disabled={this.props.submitDisabled}
                            onChange={this.onChangeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <label>Present 3:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="present3"
                            value={this.props.present3}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                </div>

                <input className="btn btn-default" type="submit" value="Send" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}