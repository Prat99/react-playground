import React from 'react';
import Form from './form';

class CreatePerson extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formElements: {
        title: {
          value: '',
          id: ''
        },
        skill: {
          value: '',
          id: ''
        },
        firstname: {
          value: ''
        },
        lastname: {
          value: ''
        },
        email: {
          value: ''
        },
        addresses: [{ line1: { value: '' }, line2: { value: '' } }]
      }
    };
  }

  addAddresses = () => {
    // e.preventDefault();
    const formElements = { ...this.state.formElements };
    const addresses = [...formElements.addresses];
    addresses.push({ line1: { value: '' }, line2: { value: '' } });
    formElements.addresses = addresses;
    console.log('formElements', formElements);
    this.setState({ formElements });
  };

  removeAddresses = index => {
    const formElements = { ...this.state.formElements };
    const addresses = [...formElements.addresses];
    const _addresses = addresses.filter((addr, i) => i !== index);
    formElements.addresses = _addresses;
    console.log('!!formElements', formElements);
    this.setState({ formElements });
  };

  render() {
    const { formElements } = this.state;
    return (
      <>
        <div className="container">
          <br />
          <br />
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <select
                    className="form-control"
                    name="title"
                    id="title"
                    onChange={this.onChangeHandler}
                    value={formElements.title.value}
                  >
                    <option value="Mr" data-uuid="01">
                      Mr
                    </option>
                    <option value="Mrs" data-uuid="02">
                      Mrs
                    </option>
                    <option value="Miss" data-uuid="03">
                      Miss
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="skill">skill</label>
                  <select
                    className="form-control"
                    name="skill"
                    id="skill"
                    onChange={this.onChangeHandler}
                    value={formElements.skill.value}
                  >
                    <option value="Mr" data-uuid="01">
                      Nodejs
                    </option>
                    <option value="Mrs" data-uuid="02">
                      Reactjs
                    </option>
                    <option value="Miss" data-uuid="03">
                      Angularjs
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="firstName">FirstName</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={formElements.firstname.value}
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="firstName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={formElements.lastname.value}
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="firstName">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={formElements.email.value}
                    onChange={this.onChangeHandler}
                  />
                </div>
              </div>
            </div>
            <div>
              <h4>Add Addresses</h4>
              <hr />
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.addAddresses}
              >
                ADD
              </button>
              {this.returnAddresses()}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }

  returnAddresses = () => {
    return this.state.formElements.addresses.map((addr, i) => (
      <div key={i}>
        <div className="row">
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="firstName">Line 1</label>
              <input
                type="text"
                autoComplete='off'
                className="form-control"
                name="line1"
                value={this.state.formElements.addresses[i].line1.value}
                onChange={e => this.onChangeHandler(e, 'addresses', i)}
              />
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="firstName">Line 2</label>
              <input
                type="text"
                className="form-control"
                name="line2"
                value={this.state.formElements.addresses[i].line2.value}
                onChange={e => this.onChangeHandler(e, 'addresses', i)}
              />
            </div>
          </div>
          <div className="col-2">
            <button
              style={{position: 'absolute',
                top: '2rem'}}
              className="btn btn-danger"
              type="button"
              onClick={() => this.removeAddresses(i)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  };
}

export default CreatePerson;
