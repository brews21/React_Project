import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";
import { Link } from "react-router-dom";
import validateEmail from "../../utils/validateEmails";
// const thats never going to change
const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    noValueError: "Please provide a Survey Title"
  },
  {
    label: "Subject Line",
    name: "subject",
    noValueError: "Please provide a Subject for the survey"
  },
  {
    label: "Email Body",
    name: "body",
    noValueError: "Please provide a body to the survey"
  },
  {
    label: "Recipient List",
    name: "emails",
    noValueError: "Please provide a list of recipients"
  }
];

//when creating any list jsx need the unique key, using the name as this will be unique to any render function
class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // if errors is empty then everything is valid
  const errors = {};

  errors.emails = validateEmail(values.emails || "");

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
