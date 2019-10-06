import React from 'react';
import Form from './form';

class CreateTeamMember extends Form {
  constructor(props) {
    super(props);
    this.state = {
      formElements: {
        title: {
          value: '',
          id: ''
        },
        competency: {
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
        skills: [{ skill: { value: '', label: 'Skill' } }],
        prevExperience: [
          {
            companyName: { value: '', label: 'Company Name' },
            expInYears: { value: '', label: 'Years' }
          }
        ]
      }
    };
  }

  addDynamicFields = (e, fieldName) => {
    // e.preventDefault();
    const formElements = { ...this.state.formElements };
    const controls = [...formElements[fieldName]];
    const controlsObj = controls[0];
    controls.push(controlsObj);
    formElements[fieldName] = controls;
    console.log('formElements', formElements);
    this.setState({ formElements });
  };

  removeDynamicFields = (index, fieldName) => {
    const formElements = { ...this.state.formElements };
    const controls = [...formElements[fieldName]];
    const _controls = controls.filter((item, i) => i !== index);
    formElements[fieldName] = _controls;
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
                  <label htmlFor="skill">competency</label>
                  <select
                    className="form-control"
                    name="competency"
                    id="competency"
                    onChange={this.onChangeHandler}
                    value={formElements.competency.value}
                  >
                    <option value="Mr" data-uuid="01">
                      FrontEnd Dev
                    </option>
                    <option value="Mrs" data-uuid="02">
                      Backend Dev
                    </option>
                    <option value="Miss" data-uuid="03">
                      Devops
                    </option>
                    <option value="Miss" data-uuid="03">
                      Solution Architect
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
              <h4>Skills</h4>
              <hr />
              <button
                className="btn btn-primary"
                type="button"
                onClick={e => this.addDynamicFields(e, 'skills')}
              >
                ADD
              </button>
              {this.fieldGenerator('skills')}
            </div>
            <div>
              <h4>Experience</h4>
              <hr />
              <button
                className="btn btn-primary"
                type="button"
                onClick={e => this.addDynamicFields(e, 'prevExperience')}
              >
                ADD
              </button>
              {this.fieldGenerator('prevExperience')}
            </div>
            <hr />
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

  fieldGenerator = field => {
    const _field = [...this.state.formElements[field]];
    return _field.map((_field, i) => (
      <div key={i}>{this.controlGenerator(field, i)}</div>
    ));
  };

  controlGenerator = (fieldName, i) => {
    if (fieldName === 'skills') {
      return (
        <div className="row">
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="firstName">Skill {i + 1}</label>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="skill"
                value={this.state.formElements.skills[i].value}
                onChange={e => this.onChangeHandler(e, 'skills', i)}
              />
            </div>
          </div>
          <div className="col-2">
            <button
              style={{ position: 'absolute', top: '2rem' }}
              className="btn btn-danger"
              type="button"
              onClick={() => this.removeDynamicFields(i, 'skills')}
            >
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                name="companyName"
                value={
                  this.state.formElements.prevExperience[i].companyName.value
                }
                onChange={e => this.onChangeHandler(e, 'prevExperience', i)}
              />
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
              <label htmlFor="expInYears">Exp in years</label>
              <input
                type="text"
                className="form-control"
                name="expInYears"
                value={this.state.formElements.prevExperience[i].expInYears.value}
                onChange={e => this.onChangeHandler(e, 'prevExperience', i)}
              />
            </div>
          </div>
          <div className="col-2">
            <button
              style={{ position: 'absolute', top: '2rem' }}
              className="btn btn-danger"
              type="button"
              onClick={() => this.removeDynamicFields(i, 'prevExperience')}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
  };
}

export default CreateTeamMember;
