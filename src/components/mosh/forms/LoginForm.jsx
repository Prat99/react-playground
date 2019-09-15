import React, { Component } from 'react';
import Form from './form';

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = { formElements: { username: '', password: '' }, errors: {} };
  }

 
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <h1>Login Form</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              onChange={this.onChangeHandler}
              type="text"
              className="form-control"
            />
            {errors && <p className="alert-danger">{errors.username}</p>}
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              name="password"
              onChange={this.onChangeHandler}
              className="form-control"
            />
            {errors && <p className=" alert-danger">{errors.password}</p>}
          </div>
          <button className="btn btn-primary" onClick={this.submitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
