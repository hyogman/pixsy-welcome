import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../actions';

class Signup extends Component {

  handleFormSubmit(data) {
    console.log(data);
    this.props.signupUser(data);
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

export default connect(null, { signupUser })(reduxForm({
  form: 'contact',
  fields: ['email', 'password', 'passwordConfirm']
})(Signup))
