import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Signup extends Component {

  handleFormSubmit(formProps) {
    console.log(formProps);
  }

  render() {
    const { handleSubmit, fields: { email, password, confirmPassword }} = this.props;
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
         <fieldset className="form-group">
           <label htmlFor="email">Email:</label>
           <Field name="email" component="input" className="form-control" />
         </fieldset>
         <fieldset className="form-group">
           <label htmlFor="password">Password:</label>
           <Field name="password" component="input" className="form-control" />
         </fieldset>
         <fieldset className="form-group">
           <label htmlFor="confirmPassword">Confirm Password:</label>
           <Field name="confirmPassword" component="input" className="form-control" />
         </fieldset>
         <button action="submit" className="btn btn-primary">Sign up</button>
       </form>
     </div>
    );
  }
}



export default Signup = reduxForm({
  form: 'contact',
  fields: ['email', 'password', 'passwordConfirm']
})(Signup);
