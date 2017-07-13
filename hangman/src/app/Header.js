import React, { Component } from 'react';

import logo from './logo.svg';

class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <img src= { logo } />
        <h1>HANGMAN<h1>
      </div>
    );
  }
}

export default AppHeader;
