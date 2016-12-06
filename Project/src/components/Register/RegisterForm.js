import React, {Component} from 'react';
import '../Register/RegisterForm.css'

export default class RegisterForm extends Component {

    render() {
        return (
            <div className="border">
                <form className="box" onSubmit={this.props.onSubmitHandler}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={this.props.username}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            value={this.props.password}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Repeat Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            name="repeat"
                            value={this.props.repeat}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>I am:</label>
                        <select
                            className="form-control "
                            name="type"
                            value={this.props.type}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        >
                            <option defaultValue="child">Child</option>
                            <option value="parent">Parent</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={this.props.email}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}

                        />
                    </div>
                    <div style={{
                        display: this.props.type === 'child' ? 'block' : 'none',
                        display: this.props.type === 'parent' ? 'none' : 'block'
                    }} className="form-group">
                        <label>Parent email:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="parentEmail"
                            value={this.props.parentEmail}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="address"
                            placeholder="Kaji na dqdo kude jiveesh kotence {P}"
                            value={this.props.address}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div style={{
                        display: this.props.type === 'child' ? 'block' : 'none',
                        display: this.props.type === 'parent' ? 'none' : 'block'
                    }} className="form-group">
                        <label>I am:</label>
                        <select
                            className="form-control "
                            name="gender"
                            value={this.props.gender}
                            disabled={this.props.submitDisabled}
                            onChange={this.props.onChangeHandler}
                        >
                            <option defaultValue="boy">Boy</option>
                            <option value="girl">Girl</option>
                            <option value="undefined">Special Snowflake</option>


                        </select>
                    </div>
                    <input className="btn btn-default" type="submit" value="Register"
                           disabled={this.props.submitDisabled}/>
                </form>
            </div>
        );
    }
}