import React, { Component } from 'react';

class forms extends Component {
  state = {
    formElements: {},
    errors: {}
  };
  
  submitHandler = e => {
    const errors = this.validate();
    e.preventDefault();
    console.log('errors', errors);
    this.setState({ errors });
    console.log('form state', this.state);
  };

  onChangeHandler = ({ target: input }) => {
    const formElements = { ...this.state.formElements };
    formElements[input.name] = input.value;
    const errors = this.checkValidity(input.name, input.value);
    this.setState({ formElements, errors });
    console.log('ERRORS', errors);
  };

  checkValidity = (name, value) => {
    let error = {};
    if (name === 'username' && value.trim() === '') {
      error[name] = 'username is required';
      return error;
    }
    if (name === 'password' && value.trim() === '') {
      error[name] = 'password is required';
      return error;
    }
    return error;
  };

  validate = () => {
    let error = {};
    const { formElements } = this.state;
    if (formElements.username.trim() === '')
      error.username = 'Username is required';
    if (formElements.password.trim() === '')
      error.password = 'Password is required';
    return Object.keys(error).length === 0 ? null : error;
  };
}

export default forms;
