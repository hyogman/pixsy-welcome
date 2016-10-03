import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {

  render() {
  return (
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand" href="#">Pixsy</a>
      <ul className="nav navbar-nav">
       <li className="nav-item">
         <Link className="nav-link" to="/signin">Signin</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="/signup">Signup</Link>
       </li>
     </ul>
    </nav>
  );
  }
}

export default NavBar;
