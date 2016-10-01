import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signup extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
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
  form: 'contact'
})(Signup);
