import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';

class BaiscForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    console.log('handle submit forms values', values);
    setSubmitting(false);
    return;
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          }}
          validate={values => {
            console.log('values', values);
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              values.email &&
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            } else if (!values.firstName) {
              errors.firstName = 'Required';
            } else if (!values.lastName) {
              errors.lastName = 'Required';
            } else if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={this.handleSubmit}
          render={formProps => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <Form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>First Name</label>
                            <Field
                              type="text"
                              name="firstName"
                              placeholder="First name"
                              className="form-control"
                            />
                            <ErrorMessage name="firstName"></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Last Name</label>
                            <Field
                              type="text"
                              name="lastName"
                              placeholder="Last name"
                              className="form-control"
                            />
                            <ErrorMessage name="lastName"></ErrorMessage>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <Field
                              type="email"
                              name="email"
                              placeholder="Email"
                              className="form-control"
                            />
                            <ErrorMessage name='email'></ErrorMessage>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Password</label>
                            <Field
                              type="password"
                              name="password"
                              placeholder="Password"
                              className="form-control"
                            />
                            <ErrorMessage name='password'></ErrorMessage>
                          </div>
                        </div>
                      </div>

                      <button type="submit">Submit</button>
                    </Form>
                  </div>
                </div>
              </div>
            );
          }}
        ></Formik>
      </div>
    );
  }
}

export default BaiscForm;
