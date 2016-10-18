import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { signinUser } from '../actions/index'
import { connect } from 'react-redux'

class Signin extends Component {

  handleFormSubmit(data){
    this.props.signinUser(data)
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props
    return (
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <Field name="email" component="input" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <Field name="password" type="password" component="input" className="form-control" />
        </fieldset>
         <button action="submit" className="btn btn-primary">Sign in</button>
       </form>
     </div>
    );
  }
}

export default connect(null, { signinUser })(reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin))
