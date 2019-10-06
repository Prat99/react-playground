import React, { Component } from 'react';

class forms extends Component {
  submitHandler = e => {
    e.preventDefault();
   // const errors = this.validate();
    //console.log('errors', errors);
  //  this.setState({ errors });
    console.log('form state', this.state);
  };

  onChangeHandler = (e, obj, index) => {
    // debugger;
    const { target: input } = e
    console.log('e', e);
    // console.log('e', e.attributes);
  //  console.log(input.getAttribute('data-uuid'));
    const formElements = { ...this.state.formElements };
    if(obj) {
      formElements[obj][index][input.name] = { value: input.value };
    } else formElements[input.name] = { value: input.value };
    
    if (input.dataset.uuid) {
      formElements[input.name] = { id: input.dataset.uuid };
    }
   // const errors = this.checkValidity(input.name, input.value);
    this.setState({ formElements });
   // console.log('ERRORS', errors);
    console.log('formState', formElements);
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
