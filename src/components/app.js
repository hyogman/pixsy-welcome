import React, { Component } from 'react';
import  NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <div className="jumbotron">
          <h1>Welcome to Pixsy</h1>
        </div>
      </div>
    );
  }
}
