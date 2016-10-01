import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
         <fieldset className="form-group">
           <label htmlFor="email">Email:</label>
           <Field name="email" component="input" className="form-control" />
         </fieldset>
         <fieldset className="form-group">
           <label htmlFor="password">Password:</label>
           <Field name="password" component="input" className="form-control" />
         </fieldset>
         <button action="submit" className="btn btn-primary">Sign in</button>
       </form>
     </div>
    );
  }
}

export default Signin = reduxForm({
  form: 'contact' 
})(Signin);
