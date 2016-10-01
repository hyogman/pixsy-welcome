import React, { Component } from 'react';


const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand" href="#">Pixsy</a>
      <ul className="nav navbar-nav">
       <li className="nav-item">
         <a className="nav-link" href="#">SignIn</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="#">SignUp</a>
       </li>
     </ul>
    </nav>

  );
}
export default NavBar;
