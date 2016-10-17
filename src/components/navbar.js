import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/index'

class NavBar extends Component {

logout() {
  this.props.logoutUser();
}

renderLinks() {

  if (this.props.isAuthenticated) {
    return (
      <li className="nav-item">
        <Link onClick={this.logout.bind(this)} className="nav-link" to="/">Logout</Link>
      </li>
    )
  } else {
    return [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Signin</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Signup</Link>
      </li>
    ]
  }
}

render() {
  return (
      <nav className="navbar navbar-light bg-faded">
        <Link className="navbar-brand" to="/">Pixsy</Link>
        <ul className="nav navbar-nav">
         {this.renderLinks()}
       </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.authenticated
})

export default connect(mapStateToProps, { logoutUser })(NavBar)
