import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from '@aws-amplify/core';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

class App extends Component {
    // Add your code here
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Not an Authorized User
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
