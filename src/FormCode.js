// FormCode.js

import React from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} className="control" />
      {touched &&
        ((error && <span className="help is-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const renderFieldTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <textarea
        {...input}
        placeholder={label}
        type={type}
        className="textarea"
      />
      {touched &&
        ((error && <span className="help is-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
// App.js

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Minimum be 2 characters or more";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Minimum be 2 characters or more";
  }
  if (!values.textarea) {
    errors.textarea = "Required";
  } else if (values.textarea.length < 5) {
    errors.textarea = "Minimum be 5 characters or more";
  }
  return errors;
};

let FormCode = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">First Name</label>
        <Field name="firstName" component={renderField} />
      </div>
      <div className="field">
        <label className="label">Last Name</label>
        <Field name="lastName" component={renderField} />
      </div>
      <div className="field">
        <label className="label">Email</label>
        <Field name="email" component={renderField} />
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <Field
            name="textarea"
            className="textarea"
            component={renderFieldTextArea}
          />
        </div>
      </div>
      <div className="field">
        <button type="submit" className="button is-link">
          Submit
        </button>
      </div>
    </form>
  );
};
FormCode = reduxForm({
  form: "contact",
  validate
})(FormCode);

export default FormCode;
